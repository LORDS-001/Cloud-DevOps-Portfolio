resource "aws_cloudfront_origin_access_control" "oac" {
    name                              = "portfolio-oac"
    origin_access_control_origin_type = "s3"
    signing_behavior                  = "always"
    signing_protocol                  = "sigv4"
}

resource "aws_acm_certificate_validation" "cert_validation" {
    provider                = aws.virginia
    certificate_arn         = aws_acm_certificate.cert.arn
}

resource "aws_cloudfront_distribution" "cdn" {
    origin {
        domain_name              = aws_s3_bucket.portfolio_bucket.bucket_regional_domain_name
        origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
        origin_id                = "S3Origin"
    }

    enabled             = true
    is_ipv6_enabled     = true
    default_root_object = "index.html"

    aliases = ["adedokundaniel.bigdev.uk"]

    viewer_certificate {
        acm_certificate_arn      = aws_acm_certificate_validation.cert_validation.certificate_arn
        ssl_support_method       = "sni-only"
        minimum_protocol_version = "TLSv1.2_2021"
    }

    default_cache_behavior {
        allowed_methods  = ["GET", "HEAD"]
        cached_methods   = ["GET", "HEAD"]
        target_origin_id = "S3Origin"

        viewer_protocol_policy = "redirect-to-https"
    
        forwarded_values {
            query_string = false
            cookies { forward = "none" }
        }
    }

    restrictions {
        geo_restriction {
        restriction_type = "none"
        }
    }
}

resource "aws_s3_bucket_policy" "allow_cloudfront" {
    bucket = aws_s3_bucket.portfolio_bucket.id
    policy = jsonencode({
        Version = "2012-10-17"
        Statement = {
            Sid       = "AllowCloudFrontServicePrincipalReadOnly"
            Effect    = "Allow"
            Principal = { Service = "cloudfront.amazonaws.com" }
            Action    = "s3:GetObject"
            Resource  = "${aws_s3_bucket.portfolio_bucket.arn}/*"
            Condition = {
                StringEquals = {
                "AWS:SourceArn" = aws_cloudfront_distribution.cdn.arn
                }
            }
        }
    })
}