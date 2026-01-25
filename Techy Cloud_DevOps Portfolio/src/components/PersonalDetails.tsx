import { GraduationCap, Globe, Award, User, Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function PersonalDetails() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science with Engineering",
      institution: "Obafemi Awolowo University, Ile-Ife",
      location: "Ife, Osun",
      year: "2022 - Now",
      description: "Focus on DSA and Network Architecture"
    }
  ];

  const languages = [
    { name: "English", level: "Native" },
    { name: "German", level: "Professional" },
    { name: "French", level: "Conversational" }
  ];

  const interests = [
    "Open Source Contribution",
    "Cloud Architecture Patterns",
    "System Design",
    "Tech Blogging",
    "Mentoring Junior Engineers",
    "Automation & Scripting"
  ];

  const personalInfo = [
    { icon: User, label: "Name", value: "Adedokun Daniel Adewole" },
    { icon: MapPin, label: "Location", value: "Lagos, Nigeria" },
    { icon: Calendar, label: "Availability", value: "Open to opportunities" },
    { icon: Globe, label: "Work Authorization", value: "EAD holder" }
  ];

  return (
    <section id="personal" className="py-20 scroll-mt-4 px-6 bg-slate-950 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Personal Details</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Education, languages, and personal information
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Personal Info</h3>
            </div>
            <div className="space-y-4">
              {personalInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4 p-3 bg-slate-950 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="p-3 bg-slate-950 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-medium">{lang.name}</p>
                    <span className="text-sm text-blue-400 font-medium">{lang.level}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                      style={{ 
                        width: lang.level === "Native" ? "100%" : 
                               lang.level === "Professional" ? "75%" : "50%" 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 mb-8 hover:border-blue-500/50 transition-all"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="p-4 bg-slate-950 rounded-lg border-l-4 border-blue-500">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-blue-400 font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm">{edu.year}</p>
                    <p className="text-slate-400 text-sm flex items-center gap-1 justify-end">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Interests & Hobbies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-slate-950 border border-slate-700 rounded-full text-slate-300 hover:border-blue-500/50 hover:text-white transition-colors"
              >
                {interest}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}