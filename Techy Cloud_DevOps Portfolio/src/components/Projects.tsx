import { ExternalLink, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";

export function Projects() {
  const projects = [
    {
      title: "Regional Kubernetes Deployment",
      description: "Designed and implemented a highly available Kubernetes cluster across multiple AWS regions with automated failover, reducing downtime by 99.9%.",
      tags: ["Kubernetes", "AWS", "Terraform", "Helm"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built an end-to-end CI/CD pipeline using Jenkins and GitLab CI that reduced deployment time from 2 hours 15 minutes 5 seconds, serving 50+ microservices.",
      tags: ["Jenkins", "GitLab CI", "Docker", "Python"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Infrastructure as Code Framework",
      description: "Created a reusable Terraform module library for provisioning AWS infrastructure, enabling teams to deploy production-ready environments in under 30 minutes.",
      tags: ["Terraform", "AWS", "Python", "Git"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Monitoring & Observability Stack",
      description: "Implemented comprehensive monitoring solution using Prometheus, Grafana, and ELK stack, providing real-time insights into system performance and reducing MTTR by 60%.",
      tags: ["Prometheus", "Grafana", "ELK", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Serverless Data Pipeline",
      description: "Architected a serverless data processing pipeline on AWS using Lambda, S3, and DynamoDB, processing 10M+ events daily with 99.99% reliability.",
      tags: ["AWS Lambda", "S3", "DynamoDB", "Python"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Container Security Automation",
      description: "Developed automated security scanning pipeline for container images, integrating Trivy and Falco to identify vulnerabilities before production deployment.",
      tags: ["Docker", "Kubernetes", "Trivy", "Security"],
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 scroll-mt-4 px-6 bg-slate-950 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              A showcase of cloud infrastructure and DevOps projects that demonstrate expertise in building scalable, reliable systems
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 bg-white border-slate-300 text-black hover:bg-slate-100"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
