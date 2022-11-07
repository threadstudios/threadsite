variable "aws_region" {
  description = "The AWS region to create things in."
  default     = "eu-west-2"
}

variable "profile" {
  default     = "taka"
  description = "Profile terraform runs under (AWS)"
}
