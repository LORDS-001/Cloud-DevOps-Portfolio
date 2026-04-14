data "aws_vpc" "default" {
  default = true
}

data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}
resource "aws_security_group" "allow_ssh" {
  name        = "allow_ssh_access"
  description = "Allow SSH inbound traffic"
  vpc_id      = data.aws_vpc.default.id

  ingress {
    from_port   = 22
    to_port     = 22
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
resource "aws_instance" "portfolio_vm" {
  ami           = "ami-0c7217cdde317cfec"
  instance_type = "t2.micro"
  
  subnet_id = data.aws_subnets.default.ids[0]

  vpc_security_group_ids = [aws_security_group.allow_ssh.id]

  tags = {
    Name = "DevOps-Portfolio-VM"
  }
}

terraform {
  backend "s3" {
    bucket = "your-unique-terraform-state-bucket"
    key    = "state/terraform.tfstate"
    region = "us-east-1"
  }
}