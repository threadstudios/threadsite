variable "point_in_time_recovery" {
  type    = bool
  default = true
}

resource "aws_dynamodb_table" "thread-website" {

  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "pk"
  range_key    = "sk"
  name         = "thread-website"

  attribute {
    name = "pk"
    type = "S"
  }

  attribute {
    name = "sk"
    type = "S"
  }

  attribute {
    name = "gsi1pk"
    type = "S"
  }

  attribute {
    name = "gsi1sk"
    type = "S"
  }

  attribute {
    name = "gsi2pk"
    type = "S"
  }

  attribute {
    name = "gsi2sk"
    type = "S"
  }

  attribute {
    name = "gsi3pk"
    type = "S"
  }

  attribute {
    name = "gsi3sk"
    type = "S"
  }

  global_secondary_index {
    name            = "gsi1"
    hash_key        = "gsi1pk"
    range_key       = "gsi1sk"
    write_capacity  = 10
    read_capacity   = 10
    projection_type = "ALL"
  }

  global_secondary_index {
    name            = "gsi2"
    hash_key        = "gsi2pk"
    range_key       = "gsi2sk"
    write_capacity  = 10
    read_capacity   = 10
    projection_type = "ALL"
  }

  global_secondary_index {
    name            = "gsi3"
    hash_key        = "gsi3pk"
    range_key       = "gsi3sk"
    write_capacity  = 10
    read_capacity   = 10
    projection_type = "ALL"
  }

  ttl {
    attribute_name = "expiration"
    enabled        = true
  }

  point_in_time_recovery {
    enabled = var.point_in_time_recovery
  }
}