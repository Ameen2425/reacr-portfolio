import { styled } from '../../styles/stitches.config';
import TechTag from '../common/TechTag';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Card = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$xl',
  p: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  position: 'relative',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  width: '100%',

  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: 'rgba(139, 92, 246, 0.4)',
    boxShadow: '0 16px 36px -8px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(139, 92, 246, 0.2)',
  },

  '@mobile': {
    p: '$4',
    borderRadius: '$lg',
    gap: '$3',
  },

  '@smallMobile': {
    p: '$3',
  },
});

const CardTop = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '$2',
});

const RoleBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  maxWidth: '100%',
});

const RoleTitle = styled('h3', {
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.02em',
  margin: 0,
  wordBreak: 'break-word',
});

const CompanyName = styled('h4', {
  fontSize: '$sm',
  fontWeight: '$semibold',
  color: '$primaryLight',
  margin: 0,
  wordBreak: 'break-word',
});

const Subtitle = styled('span', {
  fontSize: '0.72rem',
  color: '$textMuted',
  fontFamily: '$mono',
});

const MetaRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  flexWrap: 'wrap',
  mt: '4px',
});

const MetaItem = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  fontFamily: '$mono',
  fontSize: '0.7rem',
  color: '$textSecondary',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid $border',
  borderRadius: '$full',
  px: '$2',
  py: '3px',
});

const AchievementsList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  pt: '$1',
});

const AchievementItem = styled('li', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$2',
  fontSize: '0.78rem',
  color: '$textSecondary',
  lineHeight: 1.5,

  '& svg': {
    color: '$primaryLight',
    flexShrink: 0,
    marginTop: '2px',
  },
});

const TechWrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$1',
  pt: '$3',
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
            <Calendar size={12} />
            {exp.dateRange || exp.period}
          </MetaItem>
          <MetaItem>
            <MapPin size={12} />
            {exp.location}
          </MetaItem>
        </MetaRow>
      </CardTop>

      <AchievementsList>
        {exp.achievements.map((item, idx) => (
          <AchievementItem key={idx}>
            <CheckCircle2 size={15} />
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
