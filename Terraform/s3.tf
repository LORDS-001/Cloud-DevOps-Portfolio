resource "aws_s3_bucket" "portfolio_bucket" {
    bucket = "cloud-devops-portfolio-bucket"
}

resource "aws_s3_bucket_public_access_block" "bucket_access" {
    bucket = aws_s3_bucket.portfolio_bucket.id

    block_public_acls       = true
    block_public_policy     = true
    ignore_public_acls      = true
    restrict_public_buckets = true
}