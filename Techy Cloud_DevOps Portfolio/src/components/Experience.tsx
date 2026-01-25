import { Calendar, MapPin, Briefcase } from "lucide-react";
import { motion } from "motion/react";

export function Experience() {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior DevOps Engineer",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led the migration of legacy infrastructure to Kubernetes, reducing operational costs by 40%",
        "Implemented GitOps practices using ArgoCD, improving deployment reliability by 95%",
        "Mentored a team of 5 junior engineers on cloud architecture and DevOps best practices",
        "Designed and deployed multi-region disaster recovery solutions across AWS and Azure"
      ]
    },
    {
      company: "Cloud Innovations Ltd.",
      position: "DevOps Engineer",
      location: "New York, NY",
      period: "2020 - 2022",
      description: [
        "Automated infrastructure provisioning using Terraform, reducing setup time from days to hours",
        "Built CI/CD pipelines for 30+ microservices using Jenkins and GitLab CI",
        "Implemented comprehensive monitoring with Prometheus and Grafana, achieving 99.9% uptime",
        "Collaborated with development teams to optimize application performance and scalability"
      ]
    },
    {
      company: "Digital Systems Corp.",
      position: "Junior Cloud Engineer",
      location: "Austin, TX",
      period: "2019 - 2020",
      description: [
        "Managed AWS infrastructure including EC2, S3, RDS, and Lambda services",
        "Developed automation scripts in Python and Bash for routine operational tasks",
        "Assisted in the migration of on-premises applications to AWS cloud",
        "Participated in on-call rotation and incident response procedures"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 scroll-mt-4 px-6 bg-slate-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Professional journey building and scaling cloud infrastructure
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 pb-8 border-l-2 border-slate-700/50 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-slate-950/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-slate-300">
                      <span className="text-blue-400 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
