import { Code, Cloud, GitBranch, Server, Database, Shield } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Designing and implementing scalable cloud solutions on AWS, Azure, and GCP"
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Building automated deployment pipelines with Jenkins, GitLab CI, and GitHub Actions"
    },
    {
      icon: Server,
      title: "Container Orchestration",
      description: "Managing containerized applications with Docker, Kubernetes, and Helm"
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      description: "Automating infrastructure with Terraform, CloudFormation, and Ansible"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Managing both SQL and NoSQL databases with high availability and disaster recovery"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implementing security best practices and ensuring compliance standards"
    }
  ];

  return (
    <section id="about" className="py-20 scroll-mt-4 px-6 bg-slate-950 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              A passionate Cloud and DevOps engineer with 3+ years of experience in designing, 
              implementing, and maintaining cloud infrastructure. I thrive on solving complex problems 
              and optimizing systems for performance, reliability, and cost-efficiency.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}