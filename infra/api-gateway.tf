resource "aws_api_gateway_rest_api" "example_api" {
  name        = "example_api"
  description = "Api gateway for cloud challenge"
}
resource "aws_api_gateway_resource" "example_resource" {
  rest_api_id = "${aws_api_gateway_rest_api.example_api.id}"
  parent_id   = "${aws_api_gateway_rest_api.example_api.root_resource_id}"
  path_part   = var.endpoint_path
}

resource "aws_api_gateway_method" "example_method" {
  rest_api_id   = "${aws_api_gateway_rest_api.example_api.id}"
  resource_id   = "${aws_api_gateway_resource.example_resource.id}"
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "integration" {
    rest_api_id = aws_api_gateway_rest_api.example_api.id
    resource_id = aws_api_gateway_resource.example_resource.id
    http_method = aws_api_gateway_method.example_method.http_method
    integration_http_method = "POST"
    type = "AWS_PROXY"
    uri = aws_lambda_function.myfunc.arn

}

resource "aws_lambda_permission" "apigw_lambda" {
    statement_id = "AllowExecutionFromAPIGateway"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.myfunc.function_name
    principal = "apigateway.amazonaws.com"
    source_arn = "arn:aws:execute-api:us-east-1:${var.accountId}:${aws_api_gateway_rest_api.example_api.id}/*/${aws_api_gateway_method.example_method.http_method}${aws_api_gateway_resource.example_resource.path}"
   
}

resource "aws_api_gateway_deployment" "example" {
    rest_api_id = aws_api_gateway_rest_api.example_api.id


triggers = {
    redeployment = sha1(jsonencode(aws_api_gateway_rest_api.example_api.body))
}

lifecycle { 
    create_before_destroy = true
    }

    depends_on = [aws_api_gateway_method.example_method, aws_api_gateway_integration.integration]
}

resource "aws_api_gateway_stage" "example" {
    deployment_id = aws_api_gateway_deployment.example.id
    rest_api_id = aws_api_gateway_rest_api.example_api.id
    stage_name = "dev"

}