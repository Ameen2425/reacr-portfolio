import { useState, useMemo } from 'react';
import { styled } from '../../styles/stitches.config';
import { projects } from '../../data/projects';
import { BRAND } from '../../styles/theme';
import SectionHeading from '../common/SectionHeading';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import Button from '../common/Button';
import { GithubIcon } from '../common/Icons';
import { ArrowUpRight } from 'lucide-react';

const ProjectsSection = styled('section', {
  py: '$20',
  px: '$4',
  backgroundColor: '$bg',
  position: 'relative',
});

const ProjectsContainer = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
});

const ProjectsBentoGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$6',

  '@mobile': {
    gridTemplateColumns: '1fr',
    gap: '$4',
  },
});

const BottomActionWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  mt: '$12',
});

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter((project) =>
      project.categories.includes(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionHeading
          label="02 / PROJECTS"
          title="Featured Projects"
          subtitle="Selected full-stack web applications and AI-driven platforms built with modern technologies."
          align="center"
        />

        <ProjectFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <ProjectsBentoGrid>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFeatured={project.isFeatured && selectedCategory === 'All'}
            />
          ))}
        </ProjectsBentoGrid>

        <BottomActionWrapper>
          <Button
            as="a"
            href={BRAND.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            aria-label="View All Projects on GitHub Profile"
          >
            <GithubIcon size={18} />
            View All Projects on GitHub
            <ArrowUpRight size={18} />
          </Button>
        </BottomActionWrapper>
      </ProjectsContainer>
    </ProjectsSection>
  );
}
