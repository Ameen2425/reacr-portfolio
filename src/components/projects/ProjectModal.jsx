import { useEffect } from 'react';
import { styled } from '../../styles/stitches.config';
import TechTag from '../common/TechTag';
import Badge from '../common/Badge';
import { GithubIcon } from '../common/Icons';
import {
  X,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div, {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(21, 22, 24, 0.72)',
  backdropFilter: 'blur(4px)',
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

const ModalBox = styled(motion.div, {
  backgroundColor: '$bgCard',
  border: '1px solid $borderStrong',
  borderRadius: '$md',
  maxWidth: '780px',
  width: '100%',
  maxHeight: '90vh',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  boxShadow: '$xl',

  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#D1D5DB',
    borderRadius: '3px',
  },

  '@mobile': {
    maxHeight: '95vh',
    borderRadius: '$sm',
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
  backgroundColor: '$bgCard',
  zIndex: 10,

  '@mobile': {
    padding: '$3 $4',
  },
});

const HeaderMeta = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  fontFamily: '$mono',
  fontSize: '0.74rem',
  color: '$textMuted',

  '@mobile': {
    fontSize: '0.68rem',
  },
});

const CloseButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '32px',
  borderRadius: '$xs',
  border: '1px solid $border',
  backgroundColor: '$bgSecondary',
  color: '$textPrimary',
  cursor: 'pointer',
  transition: 'all 0.15s ease',

  '&:hover': {
    backgroundColor: '$textPrimary',
    color: '$white',
  },
});

const ImageSection = styled('div', {
  width: '100%',
  maxHeight: '340px',
  overflow: 'hidden',
  backgroundColor: '$bgSubtle',
  borderBottom: '1px solid $border',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
  },

  '@mobile': {
    maxHeight: '200px',
  },
});

const BodyContent = styled('div', {
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  '@mobile': {
    padding: '$4',
    gap: '$4',
  },
});

const TitleArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const ModalTitle = styled('h2', {
  fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.02em',
  margin: 0,
});

const ModalSubtitle = styled('p', {
  fontSize: '$xs',
  color: '$textSecondary',
  margin: 0,
});

const SpecGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$3',
  padding: '$4',
  backgroundColor: '$bgSecondary',
  border: '1px solid $border',
  borderRadius: '$xs',

  '@mobile': {
    gridTemplateColumns: '1fr',
    padding: '$3',
  },
});

const SpecUnit = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

const UnitLabel = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: '$textMuted',
});

const UnitValue = styled('span', {
  fontSize: '$xs',
  color: '$textPrimary',
  fontWeight: '$medium',
  wordBreak: 'break-word',
});

const SectionBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const SectionLabel = styled('h4', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '$accent',
  margin: 0,
});

const DescriptionText = styled('p', {
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.65,
  margin: 0,

  '@mobile': {
    fontSize: '0.85rem',
  },
});

const FeatureItems = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const FeaturePoint = styled('li', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.5,

  '& svg': {
    color: '$accent',
    flexShrink: 0,
    marginTop: '3px',
  },

  '@mobile': {
    fontSize: '0.82rem',
  },
});

const FooterActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$4 $6',
  borderTop: '1px solid $border',
  backgroundColor: '$bgSecondary',
  gap: '$3',
  flexWrap: 'wrap',

  '@mobile': {
    padding: '$3 $4',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});

const ActionLinks = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  flexWrap: 'wrap',

  '@mobile': {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});

const ActionLink = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '0.74rem',
  fontWeight: '$semibold',
  padding: '8px 16px',
  borderRadius: '$xs',
  border: '1px solid $borderStrong',
  backgroundColor: '$textPrimary',
  color: '$white',
  textDecoration: 'none',
  transition: 'all 0.15s ease',

  '&:hover': {
    backgroundColor: '#2A2C31',
  },

  '@mobile': {
    width: '100%',
    padding: '10px 16px',
  },
});

const SecondaryActionLink = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '0.74rem',
  fontWeight: '$medium',
  padding: '8px 16px',
  borderRadius: '$xs',
  border: '1px solid $border',
  backgroundColor: '$bgCard',
  color: '$textPrimary',
  textDecoration: 'none',
  transition: 'all 0.15s ease',

  '&:hover': {
    borderColor: '$borderStrong',
  },

  '@mobile': {
    width: '100%',
    padding: '10px 16px',
  },
});

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
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
        <ModalBox
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader>
            <HeaderMeta>
              <span>SPECIFICATION</span>
              <span>/</span>
              <span>{project.id}</span>
            </HeaderMeta>
            <CloseButton onClick={onClose} aria-label="Close modal">
              <X size={16} />
            </CloseButton>
          </ModalHeader>

          <ImageSection>
            <img src={project.image} alt={project.title} />
          </ImageSection>

          <BodyContent>
            <TitleArea>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Badge variant="pill">{project.category}</Badge>
                {project.badge && <Badge variant="accent">{project.badge}</Badge>}
              </div>
              <ModalTitle>{project.title}</ModalTitle>
              <ModalSubtitle>{project.subtitle}</ModalSubtitle>
            </TitleArea>

            <SpecGrid>
              <SpecUnit>
                <UnitLabel>Developer Role</UnitLabel>
                <UnitValue>{project.role}</UnitValue>
              </SpecUnit>

              <SpecUnit>
                <UnitLabel>System Architecture</UnitLabel>
                <UnitValue>{project.architecture}</UnitValue>
              </SpecUnit>
            </SpecGrid>

            <SectionBlock>
              <SectionLabel>Project Summary</SectionLabel>
              <DescriptionText>{project.description}</DescriptionText>
            </SectionBlock>

            <SectionBlock>
              <SectionLabel>Key Technical Features</SectionLabel>
              <FeatureItems>
                {project.features &&
                  project.features.map((feat, i) => (
                    <FeaturePoint key={i}>
                      <CheckCircle2 size={15} />
                      <span>{feat}</span>
                    </FeaturePoint>
                  ))}
              </FeatureItems>
            </SectionBlock>

            <SectionBlock>
              <SectionLabel>Technologies &amp; Libraries</SectionLabel>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            </SectionBlock>
          </BodyContent>

          <FooterActions>
            <ActionLinks>
              {project.githubUrl && (
                <SecondaryActionLink
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={14} />
                  View GitHub Repository
                  <ArrowUpRight size={12} />
                </SecondaryActionLink>
              )}

              {project.liveUrl && (
                <ActionLink
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={14} />
                  Open Live Demo
                  <ArrowUpRight size={12} />
                </ActionLink>
              )}
            </ActionLinks>

            <CloseButton onClick={onClose} style={{ width: 'auto', padding: '6px 14px' }}>
              Close
            </CloseButton>
          </FooterActions>
        </ModalBox>
      </Overlay>
    </AnimatePresence>
  );
}
