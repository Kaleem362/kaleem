import { CheckCircle, Code, Layers, Server, Shield, Sparkles, ExternalLink } from 'lucide-react';
import type { Project } from '../../../types/index.js';
import { Github } from '../../common/Icons.js';
import { Modal } from '../../common/Modal.js';
import { Button } from '../../common/Button.js';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ project, isOpen, onClose }: ProjectCaseStudyModalProps) {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={project.subtitle}
    >
      {project.metrics && (
        <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center font-mono">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-cyan-400 text-base sm:text-lg font-bold">{m.value}</div>
              <div className="text-[11px] text-zinc-400">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      <div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          The Problem & Motivation
        </h4>
        <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
          {project.problem}
        </p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2 mb-2">
          <Layers className="w-4 h-4 text-blue-400" />
          System Architecture
        </h4>
        <ul className="space-y-2 text-sm text-zinc-300">
          {project.architecture.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
          <h5 className="text-xs font-mono font-bold text-white flex items-center gap-1.5 uppercase">
            <Server className="w-3.5 h-3.5 text-emerald-400" /> Backend Endpoints
          </h5>
          <ul className="space-y-1 text-xs font-mono text-zinc-400">
            {project.backendDetails.endpoints.map((ep, i) => (
              <li key={i} className="truncate">• {ep}</li>
            ))}
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
          <h5 className="text-xs font-mono font-bold text-white flex items-center gap-1.5 uppercase">
            <Shield className="w-3.5 h-3.5 text-purple-400" /> Security & Defense
          </h5>
          <ul className="space-y-1 text-xs font-mono text-zinc-400">
            {project.backendDetails.security.map((sec, i) => (
              <li key={i}>• {sec}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
        <h5 className="text-xs font-mono font-bold text-white flex items-center gap-1.5 uppercase">
          <Code className="w-3.5 h-3.5 text-cyan-400" /> Frontend State & Styling
        </h5>
        <p className="text-xs text-zinc-300">
          <strong className="text-zinc-100">State:</strong> {project.frontendDetails.stateManagement}
        </p>
        <p className="text-xs text-zinc-300">
          <strong className="text-zinc-100">Styling:</strong> {project.frontendDetails.styling}
        </p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2 mb-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          Key Technical Challenges Solved
        </h4>
        <ul className="space-y-2 text-sm text-zinc-300">
          {project.challenges.map((c, i) => (
            <li key={i} className="flex items-start gap-2 bg-zinc-900/40 p-3 rounded-lg border border-zinc-800/80">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-zinc-800 flex items-center justify-end gap-3">
        {project.githubUrl && (
          <Button
            variant="secondary"
            size="sm"
            href={project.githubUrl}
            target="_blank"
            icon={<Github className="w-4 h-4" />}
          >
            Repository
          </Button>
        )}
        {project.liveUrl && (
          <Button
            variant="primary"
            size="sm"
            href={project.liveUrl}
            target="_blank"
            iconRight={<ExternalLink className="w-4 h-4" />}
          >
            Live Demo
          </Button>
        )}
      </div>
    </Modal>
  );
}
