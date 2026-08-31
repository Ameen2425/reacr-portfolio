import { styled } from '../../styles/stitches.config';
import { education } from '../../data/education';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = styled('section', {
  py: '$16',
  px: '$4',
  backgroundColor: '$bg',
  position: 'relative',

  '@mobile': {
    py: '$12',
    px: '$3',
  },
});

const EducationContainer = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
});

const EducationGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$4',

  '@tablet': {
    gridTemplateColumns: '1fr',
  },
});

const EduCard = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$xl',
  p: '$5',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  position: 'relative',
  transition: 'all 0.3s ease',
  width: '100%',

  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: 'rgba(139, 92, 246, 0.4)',
    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.6), 0 0 20px rgba(139, 92, 246, 0.15)',
  },

  '@mobile': {
    p: '$4',
    borderRadius: '$lg',
  },

  '@smallMobile': {
    p: '$3',
  },
});

const EduHeader = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '$2',
  flexWrap: 'wrap',
});

const IconBadge = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '38px',
  borderRadius: '$md',
  backgroundColor: 'rgba(139, 92, 246, 0.1)',
  border: '1px solid rgba(139, 92, 246, 0.25)',
  color: '$primaryLight',
});

const DegreeTitle = styled('h3', {
  fontSize: '$base',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.02em',
  lineHeight: 1.3,
  margin: 0,
  wordBreak: 'break-word',
});

const Institution = styled('p', {
  fontSize: '$xs',
  fontWeight: '$medium',
  color: '$primaryLight',
  margin: '2px 0 0 0',
  wordBreak: 'break-word',
});

const ScoreBadge = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  fontFamily: '$mono',
  fontSize: '0.72rem',
  fontWeight: '$bold',
  color: '$success',
  backgroundColor: 'rgba(34, 197, 94, 0.08)',
  border: '1px solid rgba(34, 197, 94, 0.25)',
  borderRadius: '$full',
  px: '$3',
  py: '3px',
  width: 'fit-content',
});

const Description = styled('p', {
  fontSize: '0.75rem',
  color: '$textSecondary',
  lineHeight: 1.5,
  margin: 0,
});

const PeriodRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontFamily: '$mono',
  fontSize: '0.7rem',
  color: '$textMuted',
  mt: 'auto',
  pt: '$2',
  borderTop: '1px solid $border',
});

export default function Education() {
  return (
    <EducationSection id="education">
      <EducationContainer>
        <SectionHeading
          label="04 / ACADEMICS"
          title="Education"
          subtitle="Academic milestones, core computer science engineering background, and scholastic achievements."
          align="center"
        />

        <EducationGrid>
          {education.map((item) => (
            <EduCard key={item.id}>
              <EduHeader>
                <IconBadge>
                  <GraduationCap size={20} />
                </IconBadge>
                <Badge variant="pill">{item.badge}</Badge>
              </EduHeader>

              <div>
                <DegreeTitle>{item.degree}</DegreeTitle>
                <Institution>{item.institution}</Institution>
              </div>

              <ScoreBadge>
                <Award size={12} />
                {item.score}
              </ScoreBadge>

              <Description>{item.description}</Description>

              <PeriodRow>
                <Calendar size={12} />
                <span>{item.period}</span>
              </PeriodRow>
            </EduCard>
          ))}
        </EducationGrid>
      </EducationContainer>
    </EducationSection>
  );
}
