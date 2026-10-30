import { useEffect } from 'react';
import { styled } from '../../styles/stitches.config';
import TechTag from '../common/TechTag';
import Badge from '../common/Badge';
import { GithubIcon } from '../common/Icons';
import {
  X,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div, {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(4, 4, 7, 0.88)',
  backdropFilter: 'blur(16px)',
  zIndex: '$modal',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$4',
  overflowY: 'auto',

  '@mobile': {
    padding: '$2',
  },
});

const ModalContainer = styled(motion.div, {
  backgroundColor: '$bgCard',
  border: '1px solid rgba(139, 92, 246, 0.35)',
  borderRadius: '$2xl',
  maxWidth: '820px',
  width: '100%',
  maxHeight: '92vh',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  boxShadow: '0 30px 80px -15px rgba(0, 0, 0, 0.95), 0 0 50px -10px rgba(139, 92, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.12)',

  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(139, 92, 246, 0.4)',
    borderRadius: '4px',
  },

  '@mobile': {
    borderRadius: '$xl',
    maxHeight: '96vh',
  },
});

const ModalHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$4 $6',
  borderBottom: '1px solid $border',
  position: 'sticky',
  top: 0,
  backgroundColor: 'rgba(16, 16, 26, 0.95)',
  backdropFilter: 'blur(20px)',
  zIndex: 10,

  '@mobile': {
    padding: '$3 $4',
  },
});

const HeaderLeft = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  minWidth: 0,
});

const BackButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '$xs',
  fontWeight: '$semibold',
  color: '$primaryLight',
  backgroundColor: 'rgba(139, 92, 246, 0.08)',
  border: '1px solid rgba(139, 92, 246, 0.25)',
  cursor: 'pointer',
  padding: '6px 14px',
  borderRadius: '$full',
  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',

  '&:hover': {
    color: '$white',
    backgroundColor: 'rgba(139, 92, 246, 0.25)',
    borderColor: '$primary',
    transform: 'translateX(-2px)',
    boxShadow: '0 0 16px rgba(139, 92, 246, 0.4)',
  },
});

const CloseButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '36px',
  borderRadius: '$full',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid $border',
  color: '$textSecondary',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  '&:hover': {
    color: '$white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(139, 92, 246, 0.5)',
    transform: 'rotate(90deg)',
  },
});

const ModalBody = styled('div', {
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',

  '@mobile': {
    padding: '$4',
    gap: '$5',
  },
});

const HeroShowcase = styled('div', {
  position: 'relative',
  width: '100%',
  borderRadius: '$xl',
  overflow: 'hidden',
  backgroundColor: '#0a0a0f',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
});

const ImageWrapper = styled('div', {
  width: '100%',
  height: '320px',
  position: 'relative',
  overflow: 'hidden',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    transition: 'transform 0.6s ease',
  },

  '&:hover img': {
    transform: 'scale(1.03)',
  },

  '@tablet': {
    height: '240px',
  },

  '@mobile': {
    height: '190px',
  },
});

const HeroOverlay = styled('div', {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, rgba(16, 16, 26, 0.95) 0%, rgba(16, 16, 26, 0.3) 60%, transparent 100%)',
  pointerEvents: 'none',
});

const FloatingHeroBadges = styled('div', {
  position: 'absolute',
  top: '$3',
  left: '$3',
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
  zIndex: 2,
});

const HeroTitleArea = styled('div', {
  position: 'absolute',
  bottom: '$4',
  left: '$5',
  right: '$5',
  zIndex: 2,

  '@mobile': {
    bottom: '$3',
    left: '$3',
    right: '$3',
  },
});

const ModalProjectTitle = styled('h2', {
  fontSize: 'clamp(1.4rem, 3vw, 2.1rem)',
  fontWeight: '$extrabold',
  color: '$textPrimary',
  letterSpacing: '-0.03em',
  margin: 0,
  lineHeight: 1.15,
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
});

const ModalProjectSubtitle = styled('p', {
  fontFamily: '$mono',
  fontSize: '$xs',
  color: '$secondaryLight',
  margin: '4px 0 0 0',
  letterSpacing: '-0.01em',
});

const MetaGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$3',

  '@mobile': {
    gridTemplateColumns: '1fr',
    gap: '$2',
  },
});

const MetaCard = styled('div', {
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid $border',
  borderRadius: '$lg',
  padding: '$3 $4',
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '3px',
    height: '100%',
    backgroundColor: '$primary',
  },
});

const MetaCardLabel = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.68rem',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: '$textMuted',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

const MetaCardValue = styled('span', {
  fontSize: '$sm',
  fontWeight: '$semibold',
  color: '$textPrimary',
  lineHeight: 1.3,
});

const SectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const SectionHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const SectionTitle = styled('h3', {
  fontFamily: '$mono',
  fontSize: '0.8rem',
  fontWeight: '$bold',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '$primaryLight',
  margin: 0,
});

const OverviewCard = styled('div', {
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid $border',
  borderRadius: '$xl',
  padding: '$5',
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.7,
});

const FeaturesContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$2',
});

const FeatureCard = styled('div', {
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid $border',
  borderRadius: '$md',
  padding: '$3 $4',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$3',
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.55,
  transition: 'all 0.2s ease',

  '&:hover': {
    backgroundColor: 'rgba(139, 92, 246, 0.05)',
    borderColor: 'rgba(139, 92, 246, 0.3)',
    color: '$textPrimary',
    transform: 'translateX(2px)',
  },

  '& svg': {
    color: '#34D399',
    flexShrink: 0,
    marginTop: '3px',
  },
});

const TechTagsList = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
});

const ModalFooter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$3',
  padding: '$4 $6',
  borderTop: '1px solid $border',
  backgroundColor: 'rgba(16, 16, 26, 0.95)',
  backdropFilter: 'blur(16px)',
  flexWrap: 'wrap',

  '@mobile': {
    padding: '$3 $4',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});

const ActionGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  flexWrap: 'wrap',

  '@mobile': {
    width: '100%',
    flexDirection: 'column',
  },
});

const PrimaryAction = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontFamily: '$mono',
  fontSize: '$xs',
  fontWeight: '$semibold',
  borderRadius: '$full',
  px: '$5',
  py: '10px',
  textDecoration: 'none',
  background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
  color: '$white',
  border: '1px solid rgba(196, 181, 253, 0.6)',
  boxShadow: '0 4px 16px rgba(139, 92, 246, 0.45)',
  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
  minHeight: '42px',

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 24px rgba(139, 92, 246, 0.6)',
  },

  '@mobile': {
    width: '100%',
  },
});

const SecondaryAction = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontFamily: '$mono',
  fontSize: '$xs',
  fontWeight: '$semibold',
  borderRadius: '$full',
  px: '$5',
  py: '10px',
  textDecoration: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  color: '$textPrimary',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
  minHeight: '42px',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderColor: '$primaryLight',
    color: '$white',
    transform: 'translateY(-2px)',
  },

  '@mobile': {
    width: '100%',
  },
});

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalContainer
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky Header with Back Button */}
          <ModalHeader>
            <HeaderLeft>
              <BackButton onClick={onClose} aria-label="Back to projects list">
                <ArrowLeft size={15} />
                Back to Projects
              </BackButton>
            </HeaderLeft>

            <CloseButton onClick={onClose} aria-label="Close project details">
              <X size={17} />
            </CloseButton>
          </ModalHeader>

          <ModalBody>
            {/* Visual Showcase Banner */}
            <HeroShowcase>
              <ImageWrapper>
                <img src={project.image} alt={project.title} />
              </ImageWrapper>
              <HeroOverlay />

              <FloatingHeroBadges>
                <Badge variant="pill">{project.category}</Badge>
                {project.badge && <Badge variant="primary">{project.badge}</Badge>}
              </FloatingHeroBadges>

              <HeroTitleArea>
                <ModalProjectTitle>{project.title}</ModalProjectTitle>
                {project.subtitle && (
                  <ModalProjectSubtitle>{project.subtitle}</ModalProjectSubtitle>
                )}
              </HeroTitleArea>
            </HeroShowcase>

            {/* Quick Metadata Strip */}
            <MetaGrid>
              <MetaCard>
                <MetaCardLabel>
                  <Terminal size={12} />
                  Role
                </MetaCardLabel>
                <MetaCardValue>{project.role || 'Full Stack Developer'}</MetaCardValue>
              </MetaCard>

              <MetaCard>
                <MetaCardLabel>
                  <Cpu size={12} />
                  Architecture
                </MetaCardLabel>
                <MetaCardValue>{project.architecture || 'Full-Stack Architecture'}</MetaCardValue>
              </MetaCard>

              <MetaCard>
                <MetaCardLabel>
                  <Layers size={12} />
                  Domain
                </MetaCardLabel>
                <MetaCardValue>{project.category}</MetaCardValue>
              </MetaCard>
            </MetaGrid>

            {/* Project Overview */}
            <SectionContainer>
              <SectionHeader>
                <Sparkles size={14} color="#A78BFA" />
                <SectionTitle>Project Overview</SectionTitle>
              </SectionHeader>
              <OverviewCard>
                {project.description}
              </OverviewCard>
            </SectionContainer>

            {/* Key Deliverables & Resume Highlights */}
            {project.features && project.features.length > 0 && (
              <SectionContainer>
                <SectionHeader>
                  <ShieldCheck size={15} color="#34D399" />
                  <SectionTitle>Key Features & Technical Implementation</SectionTitle>
                </SectionHeader>
                <FeaturesContainer>
                  {project.features.map((feature, idx) => (
                    <FeatureCard key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
                    </FeatureCard>
                  ))}
                </FeaturesContainer>
              </SectionContainer>
            )}

            {/* Technologies Used */}
            <SectionContainer>
              <SectionHeader>
                <Terminal size={14} color="#67E8F9" />
                <SectionTitle>Technologies & Libraries</SectionTitle>
              </SectionHeader>
              <TechTagsList>
                {project.technologies.map((tech) => (
                  <TechTag
                    key={tech}
                    highlight={
                      tech === 'Python' ||
                      tech === 'Django' ||
                      tech === 'ReactJS' ||
                      tech === 'Redux' ||
                      tech === 'scikit-learn'
                    }
                  >
                    {tech}
                  </TechTag>
                ))}
              </TechTagsList>
            </SectionContainer>
          </ModalBody>

          {/* Action Footer */}
          <ModalFooter>
            <BackButton onClick={onClose} aria-label="Back to projects list">
              <ArrowLeft size={15} />
              Back to Projects
            </BackButton>

            <ActionGroup>
              <SecondaryAction
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon size={15} />
                View Repository
                <ArrowUpRight size={14} />
              </SecondaryAction>

              {project.liveUrl && (
                <PrimaryAction
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live application`}
                >
                  <ExternalLink size={15} />
                  Live Application
                  <ArrowUpRight size={14} />
                </PrimaryAction>
              )}
            </ActionGroup>
          </ModalFooter>
        </ModalContainer>
      </Overlay>
    </AnimatePresence>
  );
}
