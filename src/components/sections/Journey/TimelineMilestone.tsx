import { CheckCircle2 } from 'lucide-react';
import type { JourneyMilestone } from '../../../types/index.js';

interface TimelineMilestoneProps {
  milestone: JourneyMilestone;
}

export function TimelineMilestone({ milestone }: TimelineMilestoneProps) {
  return (
    <div className="relative pl-8 sm:pl-10 pb-12 last:pb-0 group">
      <div className="absolute left-[11px] top-3 bottom-0 w-[2px] bg-zinc-800 group-last:hidden" />

      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-zinc-900 border-2 border-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
        <div className="w-2 h-2 rounded-full bg-cyan-400" />
      </div>

      <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 sm:p-7 backdrop-blur-md hover:border-zinc-700 transition-all">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
            {milestone.phase} • {milestone.period}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white font-syne">{milestone.title}</h3>
        <p className="text-xs font-mono text-zinc-400 mt-1">{milestone.subtitle}</p>

        <p className="text-sm text-zinc-300 mt-4 leading-relaxed font-sans">
          {milestone.description}
        </p>

        <div className="mt-4 space-y-1.5">
          <span className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            Key Competencies Acquired:
          </span>
          {milestone.keyLearnings.map((learning, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
              <span>{learning}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-zinc-800/60">
          {milestone.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
