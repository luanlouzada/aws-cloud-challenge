variable "aws_acess_key" {
    type = string
    sensitive = true    
}

variable "aws_secret_key" {
    type = string
    sensitive = true    
}

variable "endpoint_path" {
    description = "The GET endpoint path"
    type = string
    default = "conversion"
}

variable "accountId" {
  default = "198882899432"
  description = "AWS Account ID"
  type = string
}