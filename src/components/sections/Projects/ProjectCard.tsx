import { ExternalLink, Layers } from 'lucide-react';
import type { Project } from '../../../types/index.js';
import { Github } from '../../common/Icons.js';
import { Badge } from '../../common/Badge.js';
import { Button } from '../../common/Button.js';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-2xl hover:shadow-cyan-950/20">
      <div className="p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <Badge variant="cyan" size="sm">
            {project.tags[0]}
          </Badge>
          {project.metrics && project.metrics.length > 0 && (
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              {project.metrics[0].label}: {project.metrics[0].value}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-xl font-bold text-white font-syne group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-cyan-400/90 mt-1">{project.subtitle}</p>
        </div>

        <p className="text-sm text-zinc-300 leading-relaxed font-sans">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/40 text-zinc-500">
              +{project.tags.length - 5}
            </span>
          )}
        </div>
      </div>

      <div className="p-6 pt-0 border-t border-zinc-800/60 mt-4 flex items-center justify-between gap-3 bg-zinc-950/40 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onOpenCaseStudy(project)}
          icon={<Layers className="w-3.5 h-3.5" />}
        >
          Case Study
        </Button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              title="View Source Code"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
