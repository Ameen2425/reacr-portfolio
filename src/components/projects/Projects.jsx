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
import { ArrowUpRight } from 'lucide-react';

const ProjectsSection = styled('section', {
  py: '$16',
  px: '$6',
  backgroundColor: '$bg',
  borderBottom: '1px solid $border',

  '@mobile': {
    py: '$12',
    px: '$4',
  },
});

const ProjectsContainer = styled('div', {
  maxWidth: '1240px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
});

const ProjectsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$8',
  width: '100%',
  mb: '$10',

  '@mobile': {
    gridTemplateColumns: '1fr',
    gap: '$6',
  },
});

const BottomBar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$5 $6',
  backgroundColor: '$bgSecondary',
  border: '1px solid $border',
  borderRadius: '$sm',
  gap: '$4',
  flexWrap: 'wrap',

  '@mobile': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '$4',
  },
});

const BottomText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

const BottomTitle = styled('div', {
  fontSize: '$sm',
  fontWeight: '$bold',
  color: '$textPrimary',
});

const BottomDesc = styled('div', {
  fontSize: '$xs',
  color: '$textMuted',
  fontFamily: '$mono',
});

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return (
      project.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (project.categories &&
        project.categories.some((c) =>
          c.toLowerCase().includes(selectedCategory.toLowerCase())
        )) ||
      (project.technologies &&
        project.technologies.some((t) =>
          t.toLowerCase().includes(selectedCategory.toLowerCase())
        ))
    );
  });

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionHeading
          label="// 02 · SELECTED WORK"
          title="Practical full-stack web applications and user interfaces."
          subtitle="Real projects featuring Django REST APIs, relational MySQL schemas, React state architecture, and machine learning calculations."
        />

        <ProjectFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setActiveProject}
            />
          ))}
        </ProjectsGrid>

        <BottomBar>
          <BottomText>
            <BottomTitle>More code repositories on GitHub</BottomTitle>
            <BottomDesc>Explore experiment scripts, full-stack backends, and frontend utilities</BottomDesc>
          </BottomText>

          <Button
            as="a"
            href={BRAND.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
          >
            <GithubIcon size={14} />
            Visit GitHub Profile
            <ArrowUpRight size={13} />
          </Button>
        </BottomBar>
      </ProjectsContainer>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </ProjectsSection>
  );
}
