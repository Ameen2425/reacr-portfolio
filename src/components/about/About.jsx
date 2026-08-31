import { styled } from '../../styles/stitches.config';
import SectionHeading from '../common/SectionHeading';
import { beyondCodingCards } from '../../data/skills';
import { Layers, Bot, Server, Smartphone, Award, Briefcase, Code, GraduationCap } from 'lucide-react';

const iconMap = {
  Layers,
  Bot,
  Server,
  Smartphone,
};

const AboutSection = styled('section', {
  py: '$16',
  px: '$4',
  backgroundColor: '$bgSecondary',
  position: 'relative',
  borderTop: '1px solid $border',
  borderBottom: '1px solid $border',

  '@mobile': {
    py: '$12',
    px: '$3',
  },
});

const AboutContainer = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
});

const BentoGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$4',

  '@mobile': {
    gridTemplateColumns: '1fr',
    gap: '$3',
  },
});

const BentoCard = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$xl',
  p: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',

  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: 'rgba(139, 92, 246, 0.4)',
    boxShadow: '0 16px 36px -8px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(139, 92, 246, 0.25)',
  },

  '@mobile': {
    p: '$4',
    borderRadius: '$lg',
  },
});

const CardIconWrapper = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '42px',
  borderRadius: '$md',
  backgroundColor: 'rgba(139, 92, 246, 0.1)',
  border: '1px solid rgba(139, 92, 246, 0.25)',
  color: '$primaryLight',
  transition: 'all 0.25s ease',

  [`${BentoCard}:hover &`]: {
    backgroundColor: '$primary',
    color: '$white',
    boxShadow: '0 0 16px rgba(139, 92, 246, 0.6)',
  },
});

const CardTitle = styled('h3', {
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.02em',
  margin: 0,
});

const CardDesc = styled('p', {
  fontSize: '$xs',
  color: '$textSecondary',
  lineHeight: 1.6,
  margin: 0,
});

const StatsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '$3',
  pt: '$4',

  '@tablet': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@smallMobile': {
    gridTemplateColumns: '1fr',
  },
});

const StatBox = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$lg',
  p: '$4',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  transition: 'all 0.2s ease',

  '&:hover': {
    borderColor: '$primary',
    backgroundColor: '$bgCardHover',
  },

  '@smallMobile': {
    p: '$3',
  },
});

const StatIcon = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '36px',
  minWidth: '36px',
  borderRadius: '$md',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid $border',
  color: '$secondary',
});

const StatNumber = styled('div', {
  fontFamily: '$mono',
  fontSize: '$xl',
  fontWeight: '$extrabold',
  color: '$textPrimary',
  lineHeight: 1.1,
});

const StatLabel = styled('div', {
  fontSize: '0.7rem',
  color: '$textMuted',
  fontFamily: '$mono',
});

const QuoteBanner = styled('div', {
  p: '$5',
  borderRadius: '$lg',
  backgroundColor: 'rgba(139, 92, 246, 0.05)',
  border: '1px dashed rgba(139, 92, 246, 0.3)',
  textAlign: 'center',
  maxWidth: '850px',
  margin: '0 auto',
  width: '100%',

  '@smallMobile': {
    p: '$3',
  },
});

const QuoteText = styled('p', {
  fontSize: 'clamp(0.85rem, 2vw, 1.15rem)',
  fontWeight: '$medium',
  color: '$textPrimary',
  lineHeight: 1.5,
  fontStyle: 'italic',
  margin: 0,
});

export default function About() {
  const stats = [
    { number: '5', label: 'Completed Projects', icon: Code },
    { number: '2', label: 'Industry Internships', icon: Briefcase },
    { number: '8.0', label: 'B.Tech CGPA', icon: GraduationCap },
    { number: '4+', label: 'Verified Certifications', icon: Award },
  ];

  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionHeading
          label="01 / ABOUT"
          title="Beyond Just Coding"
          subtitle="Computer Science graduate focused on Full-Stack Python development, modern frontend engineering, and AI-powered applications."
          align="center"
        />

        <BentoGrid>
          {beyondCodingCards.map((card) => {
            const Icon = iconMap[card.icon] || Layers;
            return (
              <BentoCard key={card.title}>
                <CardIconWrapper>
                  <Icon size={20} />
                </CardIconWrapper>
                <CardTitle>{card.title}</CardTitle>
                <CardDesc>{card.description}</CardDesc>
              </BentoCard>
            );
          })}
        </BentoGrid>

        <StatsContainer>
          {stats.map((st) => {
            const Icon = st.icon;
            return (
              <StatBox key={st.label}>
                <StatIcon>
                  <Icon size={18} />
                </StatIcon>
                <div>
                  <StatNumber>{st.number}</StatNumber>
                  <StatLabel>{st.label}</StatLabel>
                </div>
              </StatBox>
            );
          })}
        </StatsContainer>

        <QuoteBanner>
          <QuoteText>
            "I enjoy turning ideas into practical, scalable, and user-friendly applications using Python, Django, React, and AI."
          </QuoteText>
        </QuoteBanner>
      </AboutContainer>
    </AboutSection>
  );
}
