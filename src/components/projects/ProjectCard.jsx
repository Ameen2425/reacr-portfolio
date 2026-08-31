import { styled } from '../../styles/stitches.config';
import TechTag from '../common/TechTag';
import Badge from '../common/Badge';
import { GithubIcon } from '../common/Icons';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Card = styled(motion.div, {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$2xl',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  position: 'relative',
  width: '100%',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.12) 50%, transparent 100%)',
    zIndex: 3,
  },

  '&:hover': {
    borderColor: 'rgba(139, 92, 246, 0.5)',
    boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.85), 0 0 35px -5px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  },

  variants: {
    featured: {
      true: {
        gridColumn: '1 / -1',
        display: 'grid',
        gridTemplateColumns: '1.25fr 1fr',
        backgroundColor: 'rgba(14, 14, 21, 0.95)',
        borderColor: 'rgba(139, 92, 246, 0.35)',

        '&::before': {
          background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.5) 50%, transparent 100%)',
        },

        '@tablet': {
          gridTemplateColumns: '1fr',
        },
      },
    },
  },

  '@mobile': {
    borderRadius: '$lg',
  },
});

const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '240px',
  overflow: 'hidden',
  backgroundColor: '#0a0a0c',

  '@mobile': {
    height: '180px',
  },

  '@smallMobile': {
    height: '160px',
  },

  variants: {
    featured: {
      true: {
        height: '100%',
        minHeight: '360px',
        '@tablet': {
          minHeight: '240px',
          height: '240px',
        },
        '@mobile': {
          height: '180px',
          minHeight: '180px',
        },
      },
    },
  },
});

const ProjectImg = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center top',
  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',

  [`${Card}:hover &`]: {
    transform: 'scale(1.06)',
  },
});

const ImageOverlay = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to top, rgba(14, 14, 21, 0.9) 0%, rgba(14, 14, 21, 0.1) 60%)',
});

const TopBadgeWrapper = styled('div', {
  position: 'absolute',
  top: '$3',
  left: '$3',
  zIndex: 2,
});

const ContentWrapper = styled('div', {
  p: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  flex: 1,

  '@mobile': {
    p: '$4',
  },

  '@smallMobile': {
    p: '$3',
  },

  variants: {
    featured: {
      true: {
        p: '$8',
        justifyContent: 'center',
        '@mobile': {
          p: '$5',
        },
      },
    },
  },
});

const ProjectTitle = styled('h3', {
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.02em',
  lineHeight: 1.25,
  margin: 0,
  wordBreak: 'break-word',

  variants: {
    featured: {
      true: {
        fontSize: 'clamp(1.4rem, 2.8vw, 2.1rem)',
      },
    },
  },
});

const ProjectDesc = styled('p', {
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.6,
  margin: 0,
});

const HighlightsList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const HighlightItem = styled('li', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$2',
  fontSize: '0.78rem',
  color: '$textSecondary',
  lineHeight: 1.5,

  '& svg': {
    color: '#34D399',
    flexShrink: 0,
    marginTop: '2px',
  },
});

const TechTagsList = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
  mt: 'auto',
  pt: '$2',
});

const CardActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  pt: '$4',
  borderTop: '1px solid $border',
  mt: '$2',
  width: '100%',
});

const GitHubLink = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '$xs',
  fontWeight: '$semibold',
  color: '$textPrimary',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '$full',
  px: '$4',
  py: '9px',
  textDecoration: 'none',
  transition: 'all 0.25s ease',
  minHeight: '40px',

  '&:hover': {
    background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
    borderColor: 'rgba(196, 181, 253, 0.6)',
    color: '$white',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 16px rgba(139, 92, 246, 0.45)',
  },

  '& svg.arrow': {
    transition: 'transform 0.2s ease',
  },

  '&:hover svg.arrow': {
    transform: 'translate(2px, -2px)',
  },

  '@mobile': {
    width: '100%',
  },
});

export default function ProjectCard({ project, isFeatured = false }) {
  return (
    <Card
      featured={isFeatured}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <ImageContainer featured={isFeatured}>
        <ProjectImg
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
        <ImageOverlay />
        <TopBadgeWrapper>
          <Badge variant={isFeatured ? 'primary' : 'pill'}>
            {project.badge}
          </Badge>
        </TopBadgeWrapper>
      </ImageContainer>

      <ContentWrapper featured={isFeatured}>
        <ProjectTitle featured={isFeatured}>{project.title}</ProjectTitle>
        <ProjectDesc>{project.description}</ProjectDesc>

        {isFeatured && project.highlights && (
          <HighlightsList>
            {project.highlights.map((point, index) => (
              <HighlightItem key={index}>
                <CheckCircle2 size={15} />
                <span>{point}</span>
              </HighlightItem>
            ))}
          </HighlightsList>
        )}

        <TechTagsList>
          {project.technologies.map((tech) => (
            <TechTag key={tech} highlight={tech === 'Python' || tech === 'AI' || tech === 'Django'}>
              {tech}
            </TechTag>
          ))}
        </TechTagsList>

        <CardActions>
          <GitHubLink
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon size={14} />
            View on GitHub
            <ArrowUpRight size={14} className="arrow" />
          </GitHubLink>
        </CardActions>
      </ContentWrapper>
    </Card>
  );
}
