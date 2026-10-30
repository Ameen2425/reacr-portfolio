import { styled } from '../../styles/stitches.config';
import TechTag from '../common/TechTag';
import Badge from '../common/Badge';
import { GithubIcon } from '../common/Icons';
import { ArrowUpRight, CheckCircle2, Eye, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Card = styled(motion.div, {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$2xl',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
  position: 'relative',
  width: '100%',
  cursor: 'pointer',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.4) 50%, transparent 100%)',
    zIndex: 3,
  },

  '&:hover': {
    borderColor: 'rgba(139, 92, 246, 0.55)',
    boxShadow: '0 24px 50px -12px rgba(0, 0, 0, 0.9), 0 0 35px -5px rgba(139, 92, 246, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
  },

  variants: {
    featured: {
      true: {
        gridColumn: '1 / -1',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        backgroundColor: 'rgba(14, 14, 24, 0.96)',
        borderColor: 'rgba(139, 92, 246, 0.4)',

        '&::before': {
          background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.6) 30%, rgba(6, 182, 212, 0.6) 70%, transparent 100%)',
        },

        '@tablet': {
          gridTemplateColumns: '1fr',
        },
      },
    },
  },

  '@mobile': {
    borderRadius: '$xl',
  },
});

const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '240px',
  overflow: 'hidden',
  backgroundColor: '#0a0a0f',

  '@mobile': {
    height: '190px',
  },

  '@smallMobile': {
    height: '165px',
  },

  variants: {
    featured: {
      true: {
        height: '100%',
        minHeight: '380px',
        '@tablet': {
          minHeight: '250px',
          height: '250px',
        },
        '@mobile': {
          height: '190px',
          minHeight: '190px',
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
    transform: 'scale(1.05)',
  },
});

const ImageOverlay = styled('div', {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, rgba(14, 14, 24, 0.92) 0%, rgba(14, 14, 24, 0.15) 60%)',
});

const TopBadgeWrapper = styled('div', {
  position: 'absolute',
  top: '$3',
  left: '$3',
  zIndex: 2,
  display: 'flex',
  gap: '6px',
  flexWrap: 'wrap',
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

const HeaderRow = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const CategoryText = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  fontWeight: '$semibold',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: '$secondaryLight',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});

const ProjectTitle = styled('h3', {
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.025em',
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
  lineHeight: 1.65,
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
  gap: '8px',
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
  justifyContent: 'flex-start',
  gap: '$2',
  flexWrap: 'wrap',
  pt: '$4',
  borderTop: '1px solid $border',
  mt: '$2',
  width: '100%',
});

const DetailsButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '$xs',
  fontWeight: '$semibold',
  color: '$white',
  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(6, 182, 212, 0.15) 100%)',
  border: '1px solid rgba(139, 92, 246, 0.35)',
  borderRadius: '$full',
  px: '$4',
  py: '9px',
  cursor: 'pointer',
  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
  minHeight: '40px',

  '&:hover': {
    background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
    borderColor: 'rgba(196, 181, 253, 0.7)',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 18px rgba(139, 92, 246, 0.5)',
  },

  '@mobile': {
    width: '100%',
  },
});

const ActionLink = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '$xs',
  fontWeight: '$semibold',
  color: '$textPrimary',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '$full',
  px: '$4',
  py: '9px',
  textDecoration: 'none',
  transition: 'all 0.25s ease',
  minHeight: '40px',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '$primaryLight',
    color: '$white',
    transform: 'translateY(-1px)',
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

export default function ProjectCard({ project, isFeatured = false, onSelect }) {
  const displayFeatures = project.features || project.highlights || [];

  return (
    <Card
      featured={isFeatured}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={() => onSelect && onSelect(project)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect && onSelect(project);
        }
      }}
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
            {project.badge || project.category}
          </Badge>
        </TopBadgeWrapper>
      </ImageContainer>

      <ContentWrapper featured={isFeatured}>
        <HeaderRow>
          <CategoryText>
            <Sparkles size={11} color="#67E8F9" />
            {project.category}
          </CategoryText>
          <ProjectTitle featured={isFeatured}>{project.title}</ProjectTitle>
        </HeaderRow>

        <ProjectDesc>{project.description}</ProjectDesc>

        {displayFeatures.length > 0 && (
          <HighlightsList>
            {(isFeatured ? displayFeatures : displayFeatures.slice(0, 3)).map((point, index) => (
              <HighlightItem key={index}>
                <CheckCircle2 size={15} />
                <span>{point}</span>
              </HighlightItem>
            ))}
          </HighlightsList>
        )}

        <TechTagsList>
          {project.technologies.map((tech) => (
            <TechTag
              key={tech}
              highlight={tech === 'Python' || tech === 'Django' || tech === 'ReactJS' || tech === 'Redux'}
            >
              {tech}
            </TechTag>
          ))}
        </TechTagsList>

        <CardActions onClick={(e) => e.stopPropagation()}>
          <DetailsButton
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect && onSelect(project);
            }}
            aria-label={`View details for ${project.title}`}
          >
            <Eye size={14} />
            View Details
          </DetailsButton>

          <ActionLink
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon size={14} />
            GitHub
            <ArrowUpRight size={14} className="arrow" />
          </ActionLink>

          {project.liveUrl && (
            <ActionLink
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
            >
              Live Demo
              <ArrowUpRight size={14} className="arrow" />
            </ActionLink>
          )}
        </CardActions>
      </ContentWrapper>
    </Card>
  );
}
