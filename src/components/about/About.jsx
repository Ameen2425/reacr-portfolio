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
  py: '$20',
  px: '$4',
  backgroundColor: '$bgSecondary',
  position: 'relative',
  borderTop: '1px solid $border',
  borderBottom: '1px solid $border',

  '@mobile': {
    py: '$14',
    px: '$3',
  },
});

const AboutContainer = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$12',
});

const BentoGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$5',

  '@mobile': {
    gridTemplateColumns: '1fr',
    gap: '$3',
  },
});

const BentoCard = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$2xl',
  p: '$8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.35) 50%, transparent 100%)',
  },

  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: 'rgba(139, 92, 246, 0.45)',
    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 30px -5px rgba(139, 92, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  },

  '@mobile': {
    p: '$5',
    borderRadius: '$lg',
  },
});

const CardIconWrapper = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '48px',
  borderRadius: '$md',
  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  color: '$primaryLight',
  transition: 'all 0.25s ease',

  [`${BentoCard}:hover &`]: {
    background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
    color: '$white',
    boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
    borderColor: '$primaryLight',
  },
});

const CardTitle = styled('h3', {
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.02em',
  margin: 0,
});

const CardDesc = styled('p', {
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.65,
  margin: 0,
});

const StatsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '$4',
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
  borderRadius: '$xl',
  p: '$5',
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  transition: 'all 0.25s ease',
  position: 'relative',
  overflow: 'hidden',

  '&:hover': {
    borderColor: '$primary',
    backgroundColor: '$bgCardHover',
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 24px -4px rgba(0, 0, 0, 0.6), 0 0 20px -5px rgba(139, 92, 246, 0.2)',
  },

  '@smallMobile': {
    p: '$3',
  },
});

const StatIcon = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '42px',
  minWidth: '42px',
  borderRadius: '$md',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid $border',
  color: '$secondaryLight',
});

const StatNumber = styled('div', {
  fontFamily: '$mono',
  fontSize: '$2xl',
  fontWeight: '$black',
  background: 'linear-gradient(135deg, #F8FAFC 0%, #C4B5FD 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  lineHeight: 1.1,
});

const StatLabel = styled('div', {
  fontSize: '0.72rem',
  color: '$textMuted',
  fontFamily: '$mono',
  mt: '2px',
});

const QuoteBanner = styled('div', {
  p: '$6',
  borderRadius: '$xl',
  backgroundColor: 'rgba(139, 92, 246, 0.04)',
  border: '1px dashed rgba(139, 92, 246, 0.3)',
  backdropFilter: 'blur(10px)',
  textAlign: 'center',
  maxWidth: '850px',
  margin: '0 auto',
  width: '100%',
  position: 'relative',

  '@smallMobile': {
    p: '$4',
  },
});

const QuoteText = styled('p', {
  fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
  fontWeight: '$medium',
  color: '$textPrimary',
  lineHeight: 1.6,
  fontStyle: 'italic',
  margin: 0,
});

export default function About() {
  const stats = [
    { number: '5', label: 'Completed Projects', icon: Code },
    { number: '2', label: 'Industry Internships', icon: Briefcase },
    { number: '8.0', label: 'B.Tech CGPA', icon: GraduationCap },
    { number: '4+', label: 'Verified Credentials', icon: Award },
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
                  <Icon size={22} />
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
                  <Icon size={20} />
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
