import { styled } from '../../styles/stitches.config';
import { BRAND } from '../../styles/theme';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { ArrowDown, Mail, FileText } from 'lucide-react';

const HeroSection = styled('section', {
  pt: 'calc(64px + $10)',
  pb: '$16',
  px: '$6',
  backgroundColor: '$bg',
  position: 'relative',
  borderBottom: '1px solid $border',
  width: '100%',

  '@tablet': {
    pt: 'calc(64px + $8)',
    pb: '$14',
    px: '$5',
  },

  '@mobile': {
    pt: 'calc(58px + $6)',
    pb: '$10',
    px: '$4',
  },
});

const HeroContainer = styled('div', {
  maxWidth: '1240px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1.25fr 0.85fr',
  gap: '$12',
  alignItems: 'start',

  '@tablet': {
    gridTemplateColumns: '1fr',
    gap: '$8',
  },
});

const ContentCol = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  width: '100%',

  '@mobile': {
    gap: '$4',
  },
});

const MetaHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  flexWrap: 'wrap',
});

const MetaTag = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.74rem',
  color: '$textMuted',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',

  '@mobile': {
    fontSize: '0.68rem',
  },
});

const Heading = styled('h1', {
  fontSize: 'clamp(2rem, 5.2vw, 3.8rem)',
  fontWeight: '$bold',
  letterSpacing: '-0.04em',
  lineHeight: 1.08,
  color: '$textPrimary',
  margin: 0,
});

const RoleHighlight = styled('span', {
  display: 'block',
  fontFamily: '$serif',
  fontStyle: 'italic',
  fontWeight: '$regular',
  color: '$textSecondary',
  fontSize: 'clamp(1.6rem, 4.2vw, 3rem)',
  letterSpacing: '-0.02em',
  mt: '4px',
});

const BioText = styled('p', {
  fontSize: 'clamp(0.94rem, 1.3vw, 1.08rem)',
  color: '$textSecondary',
  lineHeight: 1.65,
  maxWidth: '620px',
  margin: 0,
});

const ActionRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  flexWrap: 'wrap',
  pt: '$2',

  '@mobile': {
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '100%',
    gap: '$2',
  },
});

const SpecStrip = styled('div', {
  mt: '$6',
  pt: '$6',
  borderTop: '1px solid $border',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$4',

  '@tablet': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@mobile': {
    gridTemplateColumns: '1fr',
    gap: '$3',
    mt: '$4',
    pt: '$4',
  },
});

const SpecItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
});

const SpecLabel = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: '$textMuted',
});

const SpecValue = styled('span', {
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$textPrimary',
  lineHeight: 1.4,

  '@mobile': {
    fontSize: '0.84rem',
  },
});

const ImageCol = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',

  '@tablet': {
    order: -1,
  },
});

const PhotoCard = styled('div', {
  width: '100%',
  maxWidth: '380px',
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$md',
  padding: '$3',
  boxShadow: '$card',
  transition: 'box-shadow 0.25s ease, border-color 0.25s ease',

  '&:hover': {
    boxShadow: '$cardHover',
    borderColor: '$borderStrong',
  },

  '@tablet': {
    maxWidth: '300px',
    margin: '0 auto',
  },

  '@mobile': {
    maxWidth: '240px',
    padding: '$2',
  },
});

const PhotoWrapper = styled('div', {
  width: '100%',
  aspectRatio: '4 / 4.6',
  borderRadius: '$xs',
  overflow: 'hidden',
  backgroundColor: '$bgSubtle',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    filter: 'grayscale(15%) contrast(102%)',
    transition: 'filter 0.3s ease, transform 0.4s ease',
  },

  [`${PhotoCard}:hover & img`]: {
    filter: 'grayscale(0%) contrast(100%)',
    transform: 'scale(1.02)',
  },
});

const PhotoCaption = styled('div', {
  pt: '$3',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',

  '@mobile': {
    pt: '$2',
  },
});

const CaptionName = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$sm',
  fontWeight: '$bold',
  color: '$textPrimary',
});

const CaptionRole = styled('div', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  color: '$textMuted',
});

export default function Hero() {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <ContentCol>
          <MetaHeader>
            <Badge variant="status" hasDot>
              Available for Full-Stack Roles
            </Badge>
            <MetaTag>Hyderabad, India · IST (UTC+5:30)</MetaTag>
          </MetaHeader>

          <div>
            <Heading>
              {BRAND.name}
              <RoleHighlight>{BRAND.title}</RoleHighlight>
            </Heading>
          </div>

          <BioText>
            Computer Science graduate specializing in Python, Django, REST APIs, and ReactJS.
            I focus on building data-driven applications with clean relational schemas in MySQL,
            modular server architecture, and responsive, accessible user interfaces.
          </BioText>

          <ActionRow>
            <Button
              as="a"
              href="#projects"
              variant="primary"
              size="md"
            >
              View Selected Projects
              <ArrowDown size={15} />
            </Button>

            <Button
              as="a"
              href="#contact"
              variant="secondary"
              size="md"
            >
              <Mail size={15} />
              Get in Touch
            </Button>

            <Button
              as="a"
              href={BRAND.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Abdul_Ameen_Full_Stack_Python_Developer_Resume.pdf"
              variant="ghost"
              size="md"
            >
              <FileText size={15} />
              Resume PDF ↗
            </Button>
          </ActionRow>

          <SpecStrip>
            <SpecItem>
              <SpecLabel>Core Backend</SpecLabel>
              <SpecValue>Python · Django · REST APIs · MySQL</SpecValue>
            </SpecItem>

            <SpecItem>
              <SpecLabel>Core Frontend</SpecLabel>
              <SpecValue>ReactJS · JavaScript (ES6) · Redux</SpecValue>
            </SpecItem>

            <SpecItem>
              <SpecLabel>Academic Foundation</SpecLabel>
              <SpecValue>B.Tech CSE (8.0 CGPA) · Krishna Univ.</SpecValue>
            </SpecItem>
          </SpecStrip>
        </ContentCol>

        <ImageCol>
          <PhotoCard>
            <PhotoWrapper>
              <img
                src={BRAND.profileImage}
                alt={`${BRAND.name} - ${BRAND.title}`}
                loading="eager"
              />
            </PhotoWrapper>
            <PhotoCaption>
              <CaptionName>
                <span>{BRAND.name}</span>
                <Badge variant="accent">Portfolio 2026</Badge>
              </CaptionName>
              <CaptionRole>Full Stack Python Developer · B.Tech CSE</CaptionRole>
            </PhotoCaption>
          </PhotoCard>
        </ImageCol>
      </HeroContainer>
    </HeroSection>
  );
}
