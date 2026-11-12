import { styled } from '../../styles/stitches.config';
import TechTag from '../common/TechTag';
import Badge from '../common/Badge';
import { GithubIcon } from '../common/Icons';
import { ArrowUpRight, ExternalLink, CheckCircle2, ChevronRight } from 'lucide-react';

const CardContainer = styled('article', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$md',
  overflow: 'hidden',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  '&:hover': {
    borderColor: '$borderStrong',
    boxShadow: '$md',
  },

  variants: {
    layoutType: {
      flagship: {
        gridColumn: '1 / -1',
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        alignItems: 'stretch',

        '@tablet': {
          gridTemplateColumns: '1fr',
        },
      },
      splitReverse: {
        gridColumn: '1 / -1',
        display: 'grid',
        gridTemplateColumns: '0.8fr 1.2fr',
        alignItems: 'stretch',

        '@tablet': {
          gridTemplateColumns: '1fr',
          '& .project-image-box': {
            order: -1,
          },
        },
      },
      standard: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },

  defaultVariants: {
    layoutType: 'standard',
  },
});

const ImageBox = styled('div', {
  position: 'relative',
  backgroundColor: '$bgSubtle',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  variants: {
    layoutType: {
      flagship: {
        minHeight: '380px',
        borderRight: '1px solid $border',
        '@tablet': {
          borderRight: 'none',
          borderBottom: '1px solid $border',
          minHeight: 'auto',
          aspectRatio: '16 / 10',
        },
        '@mobile': {
          aspectRatio: '16 / 10',
        },
      },
      splitReverse: {
        minHeight: '380px',
        borderLeft: '1px solid $border',
        borderRight: 'none',
        '@tablet': {
          borderLeft: 'none',
          borderBottom: '1px solid $border',
          minHeight: 'auto',
          aspectRatio: '16 / 10',
        },
        '@mobile': {
          aspectRatio: '16 / 10',
        },
      },
      standard: {
        height: '240px',
        borderRight: 'none',
        borderBottom: '1px solid $border',
        '@tablet': {
          height: '220px',
        },
        '@mobile': {
          height: 'auto',
          aspectRatio: '16 / 10',
        },
      },
    },
  },
});

const WindowBar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 14px',
  backgroundColor: '$bgSecondary',
  borderBottom: '1px solid $border',
  fontFamily: '$mono',
  fontSize: '0.7rem',
  color: '$textMuted',
  flexShrink: 0,
});

const WindowDots = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',

  '& span': {
    width: '8px',
    height: '8px',
    borderRadius: '$full',
    backgroundColor: '#D1D5DB',
  },
});

const ImgWrapper = styled('div', {
  flex: 1,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$bgSubtle',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    transition: 'transform 0.4s ease',
  },

  [`${CardContainer}:hover & img`]: {
    transform: 'scale(1.015)',
  },
});

const ContentBox = styled('div', {
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$5',

  '@mobile': {
    padding: '$4',
    gap: '$4',
  },
});

const HeaderBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const BadgeRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',
  flexWrap: 'wrap',
});

const Title = styled('h3', {
  fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.02em',
  margin: 0,
});

const Subtitle = styled('p', {
  fontSize: '$xs',
  color: '$textSecondary',
  fontWeight: '$medium',
  margin: 0,
});

const RoleAndArch = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  padding: '$3',
  borderRadius: '$xs',
  backgroundColor: '$bgSecondary',
  border: '1px solid $borderLight',
  fontSize: '0.74rem',
  fontFamily: '$mono',
  color: '$textSecondary',
  wordBreak: 'break-word',
});

const Description = styled('p', {
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.6,
  margin: 0,

  '@mobile': {
    fontSize: '0.84rem',
  },
});

const FeatureList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const FeatureItem = styled('li', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  fontSize: '$xs',
  color: '$textSecondary',
  lineHeight: 1.5,

  '& svg': {
    color: '$accent',
    flexShrink: 0,
    marginTop: '2px',
  },
});

const TechGroup = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
});

const ActionRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$3',
  pt: '$3',
  borderTop: '1px solid $borderLight',
  flexWrap: 'wrap',

  '@mobile': {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '$2',
  },
});

const LinkGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  flexWrap: 'wrap',

  '@mobile': {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
  },
});

const ActionButton = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px',
  fontFamily: '$mono',
  fontSize: '0.74rem',
  fontWeight: '$medium',
  padding: '7px 12px',
  borderRadius: '$xs',
  border: '1px solid $border',
  backgroundColor: '$bgCard',
  color: '$textPrimary',
  textDecoration: 'none',
  transition: 'all 0.15s ease',
  minHeight: '34px',

  '&:hover': {
    borderColor: '$borderStrong',
    backgroundColor: '$bgSecondary',
  },
});

const CaseStudyButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  fontFamily: '$mono',
  fontSize: '0.74rem',
  fontWeight: '$semibold',
  color: '$accent',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '6px 0',

  '&:hover': {
    textDecoration: 'underline',
  },

  '@mobile': {
    padding: '8px 0',
    width: '100%',
  },
});

export default function ProjectCard({
  project,
  index = 0,
  onSelect,
}) {
  let layoutType = 'standard';
  if (project.id === 'eco-track-ai') {
    layoutType = 'flagship';
  } else if (project.id === 'online-job-portal') {
    layoutType = 'splitReverse';
  }

  const imageBoxElement = (
    <ImageBox layoutType={layoutType} className="project-image-box">
      <WindowBar>
        <WindowDots>
          <span />
          <span />
          <span />
        </WindowDots>
        <span>{project.id}.app</span>
      </WindowBar>
      <ImgWrapper>
        <img
          src={project.image}
          alt={`${project.title} - Interface Preview`}
          loading="lazy"
        />
      </ImgWrapper>
    </ImageBox>
  );

  const contentBoxElement = (
    <ContentBox>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <HeaderBlock>
          <BadgeRow>
            <Badge variant="pill">{project.category}</Badge>
            {project.badge && <Badge variant="accent">{project.badge}</Badge>}
          </BadgeRow>
          <Title>{project.title}</Title>
          <Subtitle>{project.subtitle}</Subtitle>
        </HeaderBlock>

        <RoleAndArch>
          <div>
            <strong style={{ color: '#151618' }}>Role:</strong> {project.role}
          </div>
          <div>
            <strong style={{ color: '#151618' }}>Arch:</strong> {project.architecture}
          </div>
        </RoleAndArch>

        <Description>{project.description}</Description>

        {project.features && (
          <FeatureList>
            {project.features.slice(0, layoutType === 'standard' ? 2 : 3).map((feat, i) => (
              <FeatureItem key={i}>
                <CheckCircle2 size={13} />
                <span>{feat}</span>
              </FeatureItem>
            ))}
          </FeatureList>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <TechGroup>
          {project.technologies.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </TechGroup>

        <ActionRow>
          <LinkGroup>
            {project.githubUrl && (
              <ActionButton
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon size={14} />
                Source Code
              </ActionButton>
            )}

            {project.liveUrl && (
              <ActionButton
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                style={{
                  backgroundColor: '#151618',
                  color: '#FFFFFF',
                  borderColor: '#151618',
                }}
              >
                <ExternalLink size={13} />
                Live Demo
                <ArrowUpRight size={12} />
              </ActionButton>
            )}
          </LinkGroup>

          <CaseStudyButton onClick={() => onSelect && onSelect(project)}>
            Detailed Specs
            <ChevronRight size={14} />
          </CaseStudyButton>
        </ActionRow>
      </div>
    </ContentBox>
  );

  return (
    <CardContainer layoutType={layoutType}>
      {layoutType === 'splitReverse' ? (
        <>
          {contentBoxElement}
          {imageBoxElement}
        </>
      ) : (
        <>
          {imageBoxElement}
          {contentBoxElement}
        </>
      )}
    </CardContainer>
  );
}
