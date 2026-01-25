import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      category: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Heroku"]
    },
    {
      category: "Container & Orchestration",
      skills: ["Docker", "Kubernetes", "Helm", "Docker Compose", "K3s"]
    },
    {
      category: "CI/CD Tools",
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "ArgoCD"]
    },
    {
      category: "Infrastructure as Code",
      skills: ["Terraform", "CloudFormation", "Ansible", "Pulumi", "CDK"]
    },
    {
      category: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"]
    },
    {
      category: "Version Control & Collaboration",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira"]
    },
    {
      category: "Scripting & Programming",
      skills: ["Python", "Bash", "Go", "JavaScript", "YAML"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB"]
    }
  ];

  return (
    <section id="skills" className="py-20 scroll-mt-4 px-6 bg-slate-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              A comprehensive toolkit for building, deploying, and maintaining modern cloud infrastructure
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-950/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}