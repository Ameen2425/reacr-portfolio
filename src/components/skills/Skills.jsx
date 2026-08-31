import { styled } from '../../styles/stitches.config';
import { technicalFoundation, skillCategories } from '../../data/skills';
import SectionHeading from '../common/SectionHeading';
import SkillCard from './SkillCard';
import {
  Code,
  Server,
  Layers,
  FileCode,
  Database,
  Cpu,
  Globe,
  Palette,
  GitBranch,
  GitPullRequest,
  Terminal,
} from 'lucide-react';

const iconMap = {
  Code,
  Server,
  Layers,
  FileCode,
  Database,
  Cpu,
  Globe,
  Palette,
  GitBranch,
  GitPullRequest,
  Terminal,
};

const SkillsSection = styled('section', {
  py: '$16',
  px: '$4',
  backgroundColor: '$bg',
  position: 'relative',

  '@mobile': {
    py: '$12',
    px: '$3',
  },
});

const SkillsContainer = styled('div', {
  maxWidth: '1100px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$14',
});

const PillsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  maxWidth: '960px',
  margin: '0 auto',
  width: '100%',

  '@mobile': {
    gap: '8px',
  },
});

const TechPillCard = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  backgroundColor: 'rgba(14, 14, 21, 0.7)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '$full',
  py: '10px',
  px: '20px',
  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
  cursor: 'default',
  userSelect: 'none',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',

  '&:hover': {
    borderColor: '$primary',
    backgroundColor: 'rgba(20, 20, 31, 0.95)',
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 28px -4px rgba(139, 92, 246, 0.35), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
  },

  variants: {
    highlight: {
      true: {
        borderColor: 'rgba(139, 92, 246, 0.35)',
        backgroundColor: 'rgba(139, 92, 246, 0.06)',
      },
    },
  },

  '@mobile': {
    py: '8px',
    px: '14px',
    gap: '8px',
  },

  '@smallMobile': {
    py: '6px',
    px: '10px',
    gap: '6px',
  },
});

const IconWrapper = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '22px',
  color: '$primaryLight',
  transition: 'all 0.2s ease',

  [`${TechPillCard}:hover &`]: {
    color: '$white',
    transform: 'scale(1.15)',
  },
});

const PillText = styled('span', {
  fontFamily: '$sans',
  fontSize: '0.88rem',
  fontWeight: '$semibold',
  color: '$textPrimary',
  letterSpacing: '-0.01em',

  '@mobile': {
    fontSize: '0.8rem',
  },

  '@smallMobile': {
    fontSize: '0.74rem',
  },
});

const CategoryGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$4',

  '@tablet': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@mobile': {
    gridTemplateColumns: '1fr',
    gap: '$3',
  },
});

export default function Skills() {
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        {/* Technological Foundation - Sleek centered pills */}
        <div>
          <SectionHeading
            label="FOUNDATION"
            title="Technological Foundation"
            subtitle="The modern tools, languages, and frameworks I use to bring products to life."
            align="center"
          />

          <PillsContainer>
            {technicalFoundation.map((tool) => {
              const IconComp = iconMap[tool.icon] || Code;
              return (
                <TechPillCard key={tool.name} highlight={tool.highlight}>
                  <IconWrapper>
                    <IconComp size={17} />
                  </IconWrapper>
                  <PillText>{tool.name}</PillText>
                </TechPillCard>
              );
            })}
          </PillsContainer>
        </div>

        {/* Categorized Toolkit Cards */}
        <div>
          <SectionHeading
            title="Technical Toolkit"
            subtitle="Comprehensive domain breakdown across full-stack engineering, databases, and problem solving."
            align="center"
          />

          <CategoryGrid>
            {skillCategories.map((cat) => (
              <SkillCard
                key={cat.title}
                title={cat.title}
                description={cat.description}
                skills={cat.skills}
              />
            ))}
          </CategoryGrid>
        </div>
      </SkillsContainer>
    </SkillsSection>
  );
}
