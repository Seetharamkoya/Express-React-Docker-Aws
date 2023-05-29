provider "aws" {
  region = "eu-central-1"
}

terraform {
  backend "s3" {
    bucket = "reactexpressec2"
    key    = "myapp/dev/terraform.tfstate"
    region = "eu-central-1"
  }
}

resource "aws_instance" "example" {
  ami           = "ami-04e601abe3e1a910f"
  instance_type = "t2.micro"
  key_name      = "Docker-aws"
  vpc_security_group_ids = [
    aws_security_group.re-ex.id
  ]

  tags = {
    Name = "React-express-instance"
  }
}

# Create a security group 
resource "aws_security_group" "re-ex" {
  name = "re-ex"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}


