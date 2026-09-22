import { GraduationCap, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { educationItems } from '../../../data/educationData.js';
import { Container } from '../../common/Container.js';
import { SectionHeader } from '../../common/SectionHeader.js';

export function Education() {
  return (
    <section id="education" className="py-24 bg-[#09090b] relative">
      <Container>
        <SectionHeader
          badge="Academic Background"
          title="Education & Computer Science Degree"
          subtitle="A formal 4-year degree in Computer Science establishing deep theoretical principles before writing production web apps."
        />

        <div className="max-w-4xl mx-auto">
          {educationItems.map((item) => (
            <div
              key={item.degree}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-8 backdrop-blur-md space-y-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-syne">{item.degree}</h3>
                    <p className="text-sm font-mono text-cyan-400 mt-1">{item.institution}</p>
                  </div>
                </div>

                <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-700/50">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {item.description}
              </p>

              <div className="space-y-2.5 pt-2 border-t border-zinc-800/60">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-cyan-400" /> Academic Pillars & Rigor
                </h4>
                {item.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-cyan-400" /> Core Computer Science Curriculum
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {item.coreSubjects.map((subject) => (
                    <div
                      key={subject}
                      className="p-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/40 text-xs font-mono text-zinc-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
