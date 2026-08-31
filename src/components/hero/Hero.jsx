import { styled, keyframes } from '../../styles/stitches.config';
import { BRAND } from '../../styles/theme';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { ArrowRight, Mail, FileText, Sparkles, Terminal } from 'lucide-react';

const floatAnim = keyframes({
  '0%, 100%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
});

const HeroSection = styled('section', {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pt: '90px',
  pb: '$12',
  px: '$4',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '$bg',

  '@mobile': {
    pt: '75px',
    pb: '$10',
    px: '$3',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-10%',
    left: '-5%',
    width: '350px',
    height: '350px',
    borderRadius: '$full',
    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(7, 7, 7, 0) 70%)',
    filter: 'blur(60px)',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '15%',
    right: '-5%',
    width: '400px',
    height: '400px',
    borderRadius: '$full',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(7, 7, 7, 0) 70%)',
    filter: 'blur(70px)',
    pointerEvents: 'none',
  },
});

const HeroContainer = styled('div', {
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1.15fr 0.85fr',
  gap: '$12',
  alignItems: 'center',
  position: 'relative',
  zIndex: 1,

  '@tablet': {
    gridTemplateColumns: '1fr',
    gap: '$8',
    textAlign: 'left',
  },
});

const ContentCol = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  width: '100%',
});

const StatusWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  flexWrap: 'wrap',
});

const Heading = styled('h1', {
  fontSize: 'clamp(1.75rem, 6.5vw, 4.25rem)',
  fontWeight: '$extrabold',
  letterSpacing: '-0.03em',
  lineHeight: 1.1,
  color: '$textPrimary',
  margin: 0,
  wordBreak: 'break-word',
});

const HighlightSpan = styled('span', {
  display: 'block',
  background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 50%, #06B6D4 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  mt: '4px',
});

const Description = styled('p', {
  fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)',
  color: '$textSecondary',
  lineHeight: 1.6,
  maxWidth: '560px',
  margin: 0,
});

const ButtonGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  flexWrap: 'wrap',
  pt: '$2',

  '@mobile': {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '$3',
    width: '100%',
  },
});

const SecondaryAction = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '$xs',
  color: '$textMuted',
  textDecoration: 'none',
  padding: '8px 14px',
  borderRadius: '$full',
  border: '1px dashed $border',
  transition: 'all 0.2s ease',

  '&:hover': {
    color: '$primaryLight',
    borderColor: '$primary',
    backgroundColor: 'rgba(139, 92, 246, 0.06)',
  },

  '@mobile': {
    width: '100%',
  },
});

const TechIdentityBar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  pt: '$3',
  borderTop: '1px solid $border',
  flexWrap: 'wrap',
});

const TechIdentityLabel = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: '$textMuted',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
});

const TechPillsGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  flexWrap: 'wrap',
});

const TechPill = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  fontWeight: '$semibold',
  color: '$textPrimary',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid $border',
  borderRadius: '$xs',
  px: '7px',
  py: '3px',
  transition: 'all 0.2s ease',

  '&:hover': {
    borderColor: '$primary',
    color: '$primaryLight',
    backgroundColor: 'rgba(139, 92, 246, 0.08)',
  },
});

const ImageCol = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  '@tablet': {
    order: 2,
  },
});

const ImageCardContainer = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: '420px',
  borderRadius: '$2xl',
  padding: '8px',
  backgroundColor: 'rgba(17, 17, 17, 0.7)',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px -10px rgba(139, 92, 246, 0.3)',
  backdropFilter: 'blur(12px)',
  animation: `${floatAnim} 6s ease-in-out infinite`,
  transition: 'all 0.3s ease',

  '&:hover': {
    borderColor: 'rgba(139, 92, 246, 0.6)',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 50px -5px rgba(139, 92, 246, 0.45)',
  },

  '@mobile': {
    maxWidth: '280px',
  },

  '@smallMobile': {
    maxWidth: '240px',
  },
});

const ProfileImgWrapper = styled('div', {
  width: '100%',
  aspectRatio: '1 / 1',
  borderRadius: '16px',
  overflow: 'hidden',
  backgroundColor: '#0a0a0c',
  position: 'relative',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    transition: 'transform 0.5s ease',
  },

  '&:hover img': {
    transform: 'scale(1.03)',
  },
});

const FloatingCardBadge = styled('div', {
  position: 'absolute',
  bottom: '-10px',
  right: '10px',
  backgroundColor: 'rgba(13, 13, 13, 0.95)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(139, 92, 246, 0.4)',
  borderRadius: '$full',
  px: '$3',
  py: '6px',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
  zIndex: 2,

  '@smallMobile': {
    right: '5px',
    px: '8px',
    py: '4px',
  },
});

const BadgeText = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.68rem',
  fontWeight: '$semibold',
  color: '$textPrimary',
});

export default function Hero() {
  const coreTech = ['Python', 'Django', 'React', 'AI', 'MySQL'];

  return (
    <HeroSection id="home">
      <HeroContainer>
        <ContentCol>
          <StatusWrapper>
            <Badge variant="status" hasDot>
              Available for Opportunities
            </Badge>
          </StatusWrapper>

          <div>
            <Heading>
              Hi, I'm Abdul Ameen.
              <HighlightSpan>Full-Stack Python Developer.</HighlightSpan>
            </Heading>
          </div>

          <Description>
            Computer Science graduate with a strong foundation in Python, JavaScript, HTML, CSS, React, and MySQL. Passionate about building scalable web applications and AI-powered solutions.
          </Description>

          <ButtonGroup>
            <Button
              as="a"
              href="#projects"
              variant="primary"
              size="md"
            >
              View My Work
              <ArrowRight size={16} />
            </Button>

            <Button
              as="a"
              href="#contact"
              variant="secondary"
              size="md"
            >
              <Mail size={16} />
              Let's Connect
            </Button>

            <SecondaryAction
              href={BRAND.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Full Resume"
            >
              <FileText size={13} />
              Download Resume ↗
            </SecondaryAction>
          </ButtonGroup>

          <TechIdentityBar>
            <TechIdentityLabel>
              <Terminal size={12} />
              Stack:
            </TechIdentityLabel>
            <TechPillsGroup>
              {coreTech.map((tech) => (
                <TechPill key={tech}>{tech}</TechPill>
              ))}
            </TechPillsGroup>
          </TechIdentityBar>
        </ContentCol>

        <ImageCol>
          <ImageCardContainer>
            <ProfileImgWrapper>
              <img
                src={BRAND.profileImage}
                alt={`${BRAND.name} - ${BRAND.title}`}
                loading="eager"
              />
            </ProfileImgWrapper>

            <FloatingCardBadge>
              <Sparkles size={12} color="#8B5CF6" />
              <BadgeText>Full-Stack + AI Specialist</BadgeText>
            </FloatingCardBadge>
          </ImageCardContainer>
        </ImageCol>
      </HeroContainer>
    </HeroSection>
  );
}
