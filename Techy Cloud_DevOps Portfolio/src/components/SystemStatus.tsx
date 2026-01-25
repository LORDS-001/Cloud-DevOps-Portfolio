import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Activity, 
  Zap, 
  Package, 
  Server, 
  Database, 
  GitBranch,
  Clock,
  TrendingUp
} from "lucide-react";

interface Metric {
  icon: typeof Activity;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  color: string;
  bgColor: string;
}

export function SystemStatus() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});

  const metrics: Metric[] = [
    {
      icon: Activity,
      label: "System Uptime",
      value: 99.9,
      suffix: "%",
      decimals: 1,
      color: "text-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Zap,
      label: "Total Deployments",
      value: 547,
      suffix: "+",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Package,
      label: "Active Containers",
      value: 128,
      suffix: "",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Server,
      label: "Kubernetes Pods",
      value: 256,
      suffix: "",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10"
    },
    {
      icon: Database,
      label: "Database Queries",
      value: 2.5,
      suffix: "M",
      decimals: 1,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: GitBranch,
      label: "CI/CD Pipelines",
      value: 89,
      suffix: "",
      color: "text-pink-400",
      bgColor: "bg-pink-500/10"
    },
    {
      icon: Clock,
      label: "Avg Response Time",
      value: 42,
      suffix: "ms",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: TrendingUp,
      label: "API Requests",
      value: 1.2,
      suffix: "M/day",
      decimals: 1,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10"
    }
  ];

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const steps = 60; // Number of steps in the animation
    const interval = duration / steps;

    metrics.forEach((metric, index) => {
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        const currentValue = metric.value * easedProgress;

        setCounts(prev => ({
          ...prev,
          [index]: currentValue
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
    });
  }, []);

  const formatValue = (value: number, decimals?: number) => {
    if (decimals !== undefined) {
      return value.toFixed(decimals);
    }
    return Math.floor(value).toString();
  };

  return (
    <section id="system-status" className="py-20 px-6 bg-slate-950 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">All Systems Operational</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Live System Metrics</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Real-time performance indicators across infrastructure and deployment pipelines
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const currentValue = counts[index] || 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-slate-400">Live</span>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="flex items-baseline gap-1">
                    {metric.prefix && (
                      <span className={`text-2xl font-bold ${metric.color}`}>
                        {metric.prefix}
                      </span>
                    )}
                    <span className={`text-3xl font-bold ${metric.color}`}>
                      {formatValue(currentValue, metric.decimals)}
                    </span>
                    <span className={`text-lg font-semibold ${metric.color}`}>
                      {metric.suffix}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-400">{metric.label}</p>

                {/* Progress bar animation */}
                <div className="mt-4 w-full bg-slate-800 rounded-full h-1 overflow-hidden">
                  <motion.div
                    className={`h-full ${metric.bgColor.replace('/10', '')}`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional status indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-green-400 text-2xl font-bold mb-2">24/7</div>
            <p className="text-slate-400 text-sm">Continuous Monitoring</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-blue-400 text-2xl font-bold mb-2">99.99%</div>
            <p className="text-slate-400 text-sm">Service Reliability</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
            <div className="text-purple-400 text-2xl font-bold mb-2">&lt;1min</div>
            <p className="text-slate-400 text-sm">Incident Response Time</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
