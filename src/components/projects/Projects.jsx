import { useState } from 'react';
import { styled } from '../../styles/stitches.config';
import { projects } from '../../data/projects';
import { BRAND } from '../../styles/theme';
import SectionHeading from '../common/SectionHeading';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import ProjectModal from './ProjectModal';
import Button from '../common/Button';
import { GithubIcon } from '../common/Icons';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = styled('section', {
  py: '$20',
  px: '$4',
  backgroundColor: '$bg',
  position: 'relative',

  '@mobile': {
    py: '$14',
    px: '$3',
  },
});

const ProjectsContainer = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ProjectsGrid = styled(motion.div, {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$6',
  width: '100%',
  mb: '$12',

  '@mobile': {
    gridTemplateColumns: '1fr',
    gap: '$4',
  },
});

const BottomAction = styled(motion.div, {
  display: 'flex',
  justifyContent: 'center',
  pt: '$4',
  width: '100%',
});

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return (
      project.category === selectedCategory ||
      (project.categories && project.categories.includes(selectedCategory)) ||
      (project.technologies &&
        project.technologies.some(
          (tech) => tech.toLowerCase() === selectedCategory.toLowerCase()
        ))
    );
  });

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%' }}
        >
          <SectionHeading
            label="02 / PROJECTS"
            title="Featured Projects"
            subtitle="Full-stack web applications, AI-driven platforms, and responsive interfaces built with Python, Django, ReactJS, and modern databases."
            align="center"
          />
        </motion.div>

        <ProjectFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <ProjectsGrid layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFeatured={Boolean(project.isFeatured && selectedCategory === 'All')}
                onSelect={setActiveProject}
              />
            ))}
          </AnimatePresence>
        </ProjectsGrid>

        <BottomAction
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            as="a"
            href={BRAND.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            aria-label="View more projects on GitHub"
          >
            <GithubIcon size={18} />
            Explore More on GitHub
          </Button>
        </BottomAction>
      </ProjectsContainer>

      {/* Interactive Project Details View */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </ProjectsSection>
  );
}
