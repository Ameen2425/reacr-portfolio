import { styled } from '../../styles/stitches.config';
import TechTag from '../common/TechTag';
import Badge from '../common/Badge';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const Card = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$sm',
  padding: '$6',
  display: 'grid',
  gridTemplateColumns: '220px 1fr',
  gap: '$8',
  alignItems: 'start',
  transition: 'border-color 0.2s ease, transform 0.2s ease',

  '&:hover': {
    borderColor: '$borderStrong',
    transform: 'translateY(-1px)',
  },

  '@tablet': {
    gridTemplateColumns: '1fr',
    gap: '$4',
  },

  '@mobile': {
    padding: '$5',
  },
});

const MetaCol = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const PeriodTag = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '0.74rem',
  fontWeight: '$semibold',
  color: '$textPrimary',
});

const LocationText = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  fontSize: '$xs',
  color: '$textMuted',
});

const DetailsCol = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const RoleHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
});

const RoleTitle = styled('h3', {
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.01em',
  margin: 0,
});

const CompanyName = styled('div', {
  fontSize: '$sm',
  fontWeight: '$semibold',
  color: '$textSecondary',
});

const CompanySub = styled('div', {
  fontSize: '$xs',
  color: '$textMuted',
});

const SummaryText = styled('p', {
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.6,
  margin: 0,
});

const AccomplishmentsList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const AccomplishmentItem = styled('li', {
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

const TechList = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
  pt: '$2',
  borderTop: '1px solid $borderLight',
});

export default function ExperienceCard({ exp }) {
  return (
    <Card>
      <MetaCol>
        <PeriodTag>
          <Calendar size={13} color="#C2410C" />
          {exp.period}
        </PeriodTag>
        <LocationText>
          <MapPin size={13} />
          {exp.location}
        </LocationText>
        <div>
          <Badge variant="accent">{exp.type}</Badge>
        </div>
      </MetaCol>

      <DetailsCol>
        <RoleHeader>
          <RoleTitle>{exp.role}</RoleTitle>
          <CompanyName>{exp.company}</CompanyName>
          {exp.subtitle && <CompanySub>{exp.subtitle}</CompanySub>}
        </RoleHeader>

        <SummaryText>{exp.description}</SummaryText>

        {exp.achievements && (
          <AccomplishmentsList>
            {exp.achievements.map((ach, idx) => (
              <AccomplishmentItem key={idx}>
                <CheckCircle2 size={14} />
                <span>{ach}</span>
              </AccomplishmentItem>
            ))}
          </AccomplishmentsList>
        )}

        {exp.technologies && (
          <TechList>
            {exp.technologies.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </TechList>
        )}
      </DetailsCol>
    </Card>
  );
}
