import { useState } from 'react';
import { projectsData } from '../../../data/projectsData.js';
import { Container } from '../../common/Container.js';
import { SectionHeader } from '../../common/SectionHeader.js';
import { ProjectCard } from './ProjectCard.js';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal.js';
import type { Project } from '../../../types/index.js';

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 bg-[#09090b] relative">
      <Container>
        <SectionHeader
          badge="Featured Portfolio"
          title="Flagship Production Case Studies"
          subtitle="Detailed architectures demonstrating full-stack MERN proficiency, security principles, and scalable system design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={handleOpenCaseStudy}
            />
          ))}
        </div>

        <ProjectCaseStudyModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </Container>
    </section>
  );
}
