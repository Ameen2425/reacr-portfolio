import { styled } from '../../styles/stitches.config';
import TechTag from '../common/TechTag';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Card = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$2xl',
  p: '$8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  position: 'relative',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  width: '100%',
  overflow: 'hidden',

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
    gap: '$3',
  },

  '@smallMobile': {
    p: '$4',
  },
});

const CardTop = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '$3',
});

const RoleBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  maxWidth: '100%',
});

const RoleTitle = styled('h3', {
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.02em',
  margin: 0,
  wordBreak: 'break-word',
});

const CompanyName = styled('h4', {
  fontSize: '$base',
  fontWeight: '$semibold',
  color: '$primaryLight',
  margin: 0,
  wordBreak: 'break-word',
});

const Subtitle = styled('span', {
  fontSize: '0.74rem',
  color: '$textMuted',
  fontFamily: '$mono',
});

const MetaRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flexWrap: 'wrap',
  mt: '4px',
});

const MetaItem = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  fontFamily: '$mono',
  fontSize: '0.72rem',
  color: '$textSecondary',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid $border',
  borderRadius: '$full',
  px: '$3',
  py: '4px',
});

const AchievementsList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  pt: '$2',
});

const AchievementItem = styled('li', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.6,

  '& svg': {
    color: '#34D399',
    flexShrink: 0,
    marginTop: '3px',
  },
});

const TechWrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
  pt: '$4',
  borderTop: '1px solid $border',
});

export default function ExperienceCard({ exp }) {
  return (
    <Card>
      <CardTop>
        <RoleBlock>
          <RoleTitle>{exp.role}</RoleTitle>
          <CompanyName>{exp.company}</CompanyName>
          {exp.subtitle && <Subtitle>{exp.subtitle}</Subtitle>}
        </RoleBlock>

        <MetaRow>
          <MetaItem>
            <Calendar size={13} />
            {exp.dateRange || exp.period}
          </MetaItem>
          <MetaItem>
            <MapPin size={13} />
            {exp.location}
          </MetaItem>
        </MetaRow>
      </CardTop>

      <AchievementsList>
        {exp.achievements.map((item, idx) => (
          <AchievementItem key={idx}>
            <CheckCircle2 size={16} />
            <span>{item}</span>
          </AchievementItem>
        ))}
      </AchievementsList>

      <TechWrapper>
        {exp.technologies.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </TechWrapper>
    </Card>
  );
}
