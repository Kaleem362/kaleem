import { BookOpen, CheckCircle2, Code2, Layers, ShieldCheck } from 'lucide-react';
import { Container } from '../../common/Container.js';
import { SectionHeader } from '../../common/SectionHeader.js';
import { StackFlowDiagram } from './StackFlowDiagram.js';

export function About() {
  const highlights = [
    {
      icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
      title: "BS Computer Science Background",
      desc: "Deep theoretical grounding in Data Structures, Algorithms, Relational DBs, and Software Engineering methodologies."
    },
    {
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      title: "Strong Frontend Foundation",
      desc: "Began with high-standard React.js architectures, master of hooks, component lifecycle, and modern UI engineering."
    },
    {
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      title: "Full-Stack MERN Integration",
      desc: "Unified React with Node.js, Express REST routing, and MongoDB aggregations for complete end-to-end product delivery."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Production Engineering Mindset",
      desc: "Focus on clean architecture, defensive security, error boundaries, rate limiting, and scalable code organization."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#09090b] relative">
      <Container>
        <SectionHeader
          badge="Executive Narrative"
          title="Bridging Computer Science & Full-Stack Mastery"
          subtitle="Not just writing syntax — engineering scalable, maintainable web systems from first computational principles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-cyan-400 first-letter:mr-2 first-letter:float-left">
              My engineering journey began with a formal <span className="text-white font-medium">Bachelor of Science in Computer Science</span>. Unlike developers who jump into frameworks without understanding the foundation, I was rigorously trained in algorithm analysis, computational complexity, relational databases, and object-oriented principles.
            </p>
            <p>
              When I transitioned into web engineering, I started where user impact is most immediate: <span className="text-cyan-400 font-semibold">React.js and modern frontend architecture</span>. I mastered state synchronization, custom hooks, reusable design tokens with Tailwind CSS, and performance profiling.
            </p>
            <p>
              To build full, self-contained digital products, I advanced across the server boundary to <span className="text-white font-medium">Node.js, Express.js, and MongoDB</span>. Today, I build complete MERN stack platforms where data flows seamlessly from optimized database collections through defensive REST APIs into fluid, reactive user interfaces.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Clean Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> RESTful Standards
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Optimized Aggregations
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Type Safety
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/60 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-syne">{item.title}</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <StackFlowDiagram />
      </Container>
    </section>
  );
}
