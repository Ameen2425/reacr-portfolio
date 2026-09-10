import { styled, keyframes } from '../../styles/stitches.config';
import { BRAND } from '../../styles/theme';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { ArrowRight, Mail, FileText, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const floatAnim = keyframes({
  '0%, 100%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-6px)' },
});

const HeroSection = styled('section', {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pt: '100px',
  pb: '$16',
  px: '$4',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '$bg',

  '@mobile': {
    pt: '80px',
    pb: '$12',
    px: '$3',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-15%',
    left: '-10%',
    width: '550px',
    height: '550px',
    borderRadius: '$full',
    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(5, 5, 8, 0) 70%)',
    filter: 'blur(80px)',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '10%',
    right: '-10%',
    width: '650px',
    height: '650px',
    borderRadius: '$full',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.16) 0%, rgba(5, 5, 8, 0) 70%)',
    filter: 'blur(90px)',
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

const ContentCol = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  width: '100%',
});

const StatusWrapper = styled(motion.div, {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  flexWrap: 'wrap',
});

const Heading = styled('h1', {
  fontSize: 'clamp(2rem, 6.5vw, 4.25rem)',
  fontWeight: '$extrabold',
  letterSpacing: '-0.04em',
  lineHeight: 1.08,
  color: '$textPrimary',
  margin: 0,
  wordBreak: 'break-word',
});

const HighlightSpan = styled('span', {
  display: 'block',
  background: 'linear-gradient(135deg, #DDD6FE 0%, #A78BFA 30%, #8B5CF6 60%, #06B6D4 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  mt: '6px',
  textShadow: '0 0 30px rgba(139, 92, 246, 0.25)',
});

const Description = styled('p', {
  fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
  color: '$textSecondary',
  lineHeight: 1.65,
  maxWidth: '560px',
  margin: 0,
});

const ButtonGroup = styled(motion.div, {
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
  padding: '8px 16px',
  borderRadius: '$full',
  border: '1px dashed rgba(255, 255, 255, 0.15)',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  transition: 'all 0.25s ease',

  '&:hover': {
    color: '$primaryLight',
    borderColor: '$primary',
    backgroundColor: 'rgba(139, 92, 246, 0.08)',
    transform: 'translateY(-1px)',
  },

  '@mobile': {
    width: '100%',
  },
});

const TechIdentityBar = styled(motion.div, {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  pt: '$4',
  borderTop: '1px solid $border',
  flexWrap: 'wrap',
});

const TechIdentityLabel = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: '$textMuted',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
});

const TechPillsGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  flexWrap: 'wrap',
});

const TechPill = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.74rem',
  fontWeight: '$semibold',
  color: '$textPrimary',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid $border',
  borderRadius: '$xs',
  px: '8px',
  py: '4px',
  transition: 'all 0.2s ease',

  '&:hover': {
    borderColor: '$primary',
    color: '$primaryLight',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
  },
});

const ImageCol = styled(motion.div, {
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
  maxWidth: '430px',
  borderRadius: '$2xl',
  padding: '10px',
  backgroundColor: 'rgba(14, 14, 21, 0.8)',
  border: '1px solid rgba(139, 92, 246, 0.35)',
  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85), 0 0 50px -10px rgba(139, 92, 246, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(16px)',
  animation: `${floatAnim} 6s ease-in-out infinite`,
  transition: 'all 0.3s ease',

  '&:hover': {
    borderColor: 'rgba(139, 92, 246, 0.7)',
    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.95), 0 0 60px -5px rgba(139, 92, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
  },

  '@mobile': {
    maxWidth: '290px',
  },

  '@smallMobile': {
    maxWidth: '240px',
  },
});

const ProfileImgWrapper = styled('div', {
  width: '100%',
  aspectRatio: '1 / 1',
  borderRadius: '20px',
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

const FloatingCardBadge = styled(motion.div, {
  position: 'absolute',
  bottom: '-12px',
  right: '16px',
  backgroundColor: 'rgba(10, 10, 16, 0.95)',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(139, 92, 246, 0.5)',
  borderRadius: '$full',
  px: '$4',
  py: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px -5px rgba(139, 92, 246, 0.4)',
  zIndex: 2,

  '@smallMobile': {
    right: '6px',
    px: '10px',
    py: '5px',
  },
});

const BadgeText = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  fontWeight: '$semibold',
  color: '$textPrimary',
});

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const coreTech = ['Python', 'Django', 'React', 'Redux', 'MySQL'];

  return (
    <HeroSection id="home">
      <HeroContainer>
        <ContentCol
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <StatusWrapper variants={itemVariants}>
            <Badge variant="status" hasDot>
              Available for Opportunities
            </Badge>
          </StatusWrapper>

          <motion.div variants={itemVariants}>
            <Heading>
              Hi, I'm Abdul Ameen.
              <HighlightSpan>Full-Stack Python Developer.</HighlightSpan>
            </Heading>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Description>
              Computer Science graduate seeking a Full-Stack Python Developer role. Skilled in backend development, REST API development, database management, authentication, and frontend integration using Django and React.
            </Description>
          </motion.div>

          <ButtonGroup variants={itemVariants}>
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

          <TechIdentityBar variants={itemVariants}>
            <TechIdentityLabel>
              <Terminal size={12} />
              Core Stack:
            </TechIdentityLabel>
            <TechPillsGroup>
              {coreTech.map((tech) => (
                <TechPill key={tech}>{tech}</TechPill>
              ))}
            </TechPillsGroup>
          </TechIdentityBar>
        </ContentCol>

        <ImageCol
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <ImageCardContainer>
            <ProfileImgWrapper>
              <img
                src={BRAND.profileImage}
                alt={`${BRAND.name} - ${BRAND.title}`}
                loading="eager"
              />
            </ProfileImgWrapper>

            <FloatingCardBadge
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Sparkles size={13} color="#A78BFA" />
              <BadgeText>Full-Stack Python Developer</BadgeText>
            </FloatingCardBadge>
          </ImageCardContainer>
        </ImageCol>
      </HeroContainer>
    </HeroSection>
  );
}
