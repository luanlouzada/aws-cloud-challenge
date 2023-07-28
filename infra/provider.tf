resource "aws_lambda_function" "myfunc" {
    filename = data.archive_file.zip.output_path
    source_code_hash = data.archive_file.zip.output_base64sha256
    function_name = "myfunc"
    role = aws_iam_role.iam_for_lambda.arn
    handler = "func.handler"
    runtime = "python3.9"  
}

resource "aws_iam_role" "iam_for_lambda" {
    name = "iam_for_lambda"

    assume_role_policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": "sts:AssumeRole",
            "Principal": {
            "Service": "lambda.amazonaws.com"
            },
            "Effect": "Allow",
            "Sid":""
        }
    ]
}
EOF
}

resource "aws_iam_policy" "iam_policy_for_cloud_challenge" {

    name = "aws_iam_policy_for_terraform_cloudchallenge"
    path = "/"
    description = "Aws Iam Policy for dynamodb+lambda"
    policy = jsonencode({
	"Version": "2012-10-17",
	"Statement": [
		{
			"Action": [
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:PutLogEvents"
            ]
		},
        {
            "Effect" : "Allow",
            "Action" : [
            "dynamodb:UpdateItem",
            "dynamodb:GetItem"
            ],
            "Resource" : "arn:aws:dynamodb:*:*:table/ContadorVisitas"
        }

	]
})
}

    resource "aws_iam_policy_attachment" "aws_iam_policy_to_iam_role" {
        name = "my_policy_attachment"
        roles = [aws_iam_role.iam_for_lambda.name]
        policy_arn = aws_iam_policy.iam_policy_for_cloud_challenge.arn
      
    }

data "archive_file" "zip" {
    type = "zip"
    source_dir = "${path.module}/lambda-function/"
    output_path = "${path.module}/packedlambda.zip"
}