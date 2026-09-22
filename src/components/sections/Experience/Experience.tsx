import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceItems } from '../../../data/experienceData.js';
import { Container } from '../../common/Container.js';
import { SectionHeader } from '../../common/SectionHeader.js';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0c0d11] relative">
      <Container>
        <SectionHeader
          badge="Professional Track Record"
          title="Work Experience & Client Delivery"
          subtitle="Delivering resilient web solutions, optimized API contracts, and high-standard UI systems."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceItems.map((exp) => (
            <div
              key={exp.role + exp.period}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-8 backdrop-blur-md hover:border-zinc-700 transition-all duration-300 space-y-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-syne">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1 text-sm font-mono text-cyan-400">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/50">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {exp.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-zinc-800/60">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Key Achievements & Impact:
                </span>
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
