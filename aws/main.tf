provider "aws" {
  region = "eu-central-1"
}

resource "aws_instance" "example" {
  ami           = "ami-062f79c1d054dd995"
  instance_type = "t2.micro"
  key_name      = "Docker-aws"

  tags = {
    Name = "React-express-instance"
  }
}
