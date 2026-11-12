import { styled } from '../../styles/stitches.config';
import { skillCategories, technicalFoundation } from '../../data/skills';
import SectionHeading from '../common/SectionHeading';
import SkillCard from './SkillCard';
import TechTag from '../common/TechTag';
import { Terminal, Database, Server, Layout, GitBranch, Cpu } from 'lucide-react';

const SkillsSection = styled('section', {
  py: '$16',
  px: '$6',
  backgroundColor: '$bgSecondary',
  borderBottom: '1px solid $border',

  '@mobile': {
    py: '$12',
    px: '$4',
  },
});

const SkillsContainer = styled('div', {
  maxWidth: '1240px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
});

const CoreMatrix = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$sm',
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  '@mobile': {
    padding: '$5',
  },
});

const MatrixHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$3',
  flexWrap: 'wrap',
  borderBottom: '1px solid $borderLight',
  pb: '$4',
});

const MatrixTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontSize: '$base',
  fontWeight: '$bold',
  color: '$textPrimary',
});

const MatrixSub = styled('div', {
  fontFamily: '$mono',
  fontSize: '0.74rem',
  color: '$textMuted',
});

const PillsRow = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
});

const CategoriesGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$6',

  '@tablet': {
    gridTemplateColumns: '1fr',
  },
});

const IntegrationNote = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1.2fr 0.8fr',
  gap: '$6',
  padding: '$5 $6',
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$sm',
  alignItems: 'center',

  '@tablet': {
    gridTemplateColumns: '1fr',
    padding: '$4',
  },
});

const NoteHeading = styled('h4', {
  fontSize: '$sm',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.01em',
  mb: '4px',
});

const NoteText = styled('p', {
  fontSize: '$xs',
  color: '$textSecondary',
  lineHeight: 1.6,
  margin: 0,
});

const WorkflowSpec = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  fontFamily: '$mono',
  fontSize: '0.72rem',
  color: '$textMuted',
  backgroundColor: '$bgSecondary',
  padding: '$3',
  borderRadius: '$xs',
  border: '1px solid $borderLight',
});

export default function Skills() {
  const primaryHighlighted = technicalFoundation.filter((s) => s.highlight);

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionHeading
          label="// 03 · TECHNICAL DIRECTORY"
          title="Technologies, frameworks, and engineering tooling."
          subtitle="Organized by functional responsibility across the stack. No arbitrary percentage bars or fabricated metrics."
        />

        <CoreMatrix>
          <MatrixHeader>
            <MatrixTitle>
              <Terminal size={17} color="#C2410C" />
              Primary Stack & Frequent Tools
            </MatrixTitle>
            <MatrixSub>Daily active development stack</MatrixSub>
          </MatrixHeader>

          <PillsRow>
            {primaryHighlighted.map((skill) => (
              <TechTag key={skill.name} highlight>
                {skill.name}
              </TechTag>
            ))}
          </PillsRow>
        </CoreMatrix>

        <CategoriesGrid>
          {skillCategories.map((cat, idx) => (
            <SkillCard key={cat.title} category={cat} index={idx} />
          ))}
        </CategoriesGrid>

        <IntegrationNote>
          <div>
            <NoteHeading>Full-Stack Architectural Workflow</NoteHeading>
            <NoteText>
              How these tools connect in real projects: MySQL handles relational data structures and foreign keys. Django provides the ORM layer, authentication, and REST API endpoints. ReactJS manages client-side state with Redux or hooks, rendering responsive UI components with clean separation of concerns.
            </NoteText>
          </div>
          <WorkflowSpec>
            <div><strong>1. Schema:</strong> MySQL relational models</div>
            <div><strong>2. Server:</strong> Django REST Framework & token auth</div>
            <div><strong>3. Client:</strong> ReactJS modular components & Redux</div>
            <div><strong>4. Quality:</strong> Manual & automated validation with Git</div>
          </WorkflowSpec>
        </IntegrationNote>
      </SkillsContainer>
    </SkillsSection>
  );
}
