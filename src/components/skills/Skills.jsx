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

// Sleek centered pill wrapper matching reference design
const PillsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  maxWidth: '920px',
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
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$full',
  py: '10px',
  px: '18px',
  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
  cursor: 'default',
  userSelect: 'none',

  '&:hover': {
    borderColor: '$primary',
    backgroundColor: '$bgCardHover',
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 24px -4px rgba(139, 92, 246, 0.25), inset 0 1px 0 0 rgba(139, 92, 246, 0.2)',
  },

  variants: {
    highlight: {
      true: {
        borderColor: 'rgba(139, 92, 246, 0.35)',
        backgroundColor: 'rgba(139, 92, 246, 0.05)',
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
  size: '24px',
  color: '$primaryLight',
  transition: 'all 0.2s ease',

  [`${TechPillCard}:hover &`]: {
    color: '$white',
    transform: 'scale(1.1)',
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
    fontSize: '0.75rem',
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
                    <IconComp size={18} />
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
