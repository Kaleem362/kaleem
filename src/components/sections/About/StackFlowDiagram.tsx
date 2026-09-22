import { ArrowRight, Database, Server, Monitor, Cpu } from 'lucide-react';

export function StackFlowDiagram() {
  const steps = [
    {
      title: "Computer Science",
      subtitle: "Algorithms & OOP",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      color: "border-purple-500/30 bg-purple-500/5",
    },
    {
      title: "React.js Frontend",
      subtitle: "UI & State Logic",
      icon: <Monitor className="w-5 h-5 text-cyan-400" />,
      color: "border-cyan-500/30 bg-cyan-500/5",
    },
    {
      title: "Node & Express",
      subtitle: "REST API Gateway",
      icon: <Server className="w-5 h-5 text-blue-400" />,
      color: "border-blue-500/30 bg-blue-500/5",
    },
    {
      title: "MongoDB & Data",
      subtitle: "NoSQL Modeling",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      color: "border-emerald-500/30 bg-emerald-500/5",
    },
  ];

  return (
    <div className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 backdrop-blur-md">
      <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4 flex items-center justify-between">
        <span>Architectural Thought Process</span>
        <span className="text-cyan-400">Full-Stack Flow</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className={`p-4 rounded-xl border ${step.color} relative flex flex-col justify-between space-y-3 transition-transform hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                {step.icon}
              </div>
              <span className="text-[10px] font-mono text-zinc-500">0{idx + 1}</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-syne">{step.title}</h4>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">{step.subtitle}</p>
            </div>
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-zinc-600">
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
