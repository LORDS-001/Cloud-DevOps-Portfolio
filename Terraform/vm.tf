resource "tls_private_key" "portfolio_key" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "aws_key_pair" "my_keypair" {
  key_name   = "lords-key"
  public_key = tls_private_key.portfolio_key.public_key_openssh
}

resource "local_file" "ssh_key" {
  filename        = "${path.module}/lords-key.pem"
  content         = tls_private_key.portfolio_key.private_key_pem
  file_permission = "0400"
}

resource "aws_security_group" "allow_ssh_http_https" {
  vpc_id = aws_vpc.portfolio_vpc.id

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
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = { 
    Name = "Daniel-SG-Allow-SSH-HTTP-HTTPS" 
  }
}

resource "aws_instance" "portfolio_instance" {
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t3.micro"
  subnet_id     = aws_subnet.public_subnet.id
  key_name      = aws_key_pair.my_keypair.key_name
  vpc_security_group_ids = [aws_security_group.allow_ssh_http_https.id]

  tags = {
    Name = "lords-ec2"
  }
}