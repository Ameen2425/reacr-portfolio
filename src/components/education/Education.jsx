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
  gap: '$5',

  '@tablet': {
    gridTemplateColumns: '1fr',
  },
});

const EduCard = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$2xl',
  p: '$6',
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
    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.12) 50%, transparent 100%)',
  },

  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: 'rgba(139, 92, 246, 0.45)',
    boxShadow: '0 16px 36px -8px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(139, 92, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  },

  '@mobile': {
    p: '$5',
    borderRadius: '$lg',
  },

  '@smallMobile': {
    p: '$4',
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
  size: '42px',
  borderRadius: '$md',
  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  color: '$primaryLight',
});

const DegreeTitle = styled('h3', {
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.02em',
  lineHeight: 1.3,
  margin: 0,
  wordBreak: 'break-word',
});

const Institution = styled('p', {
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$primaryLight',
  margin: '4px 0 0 0',
  wordBreak: 'break-word',
});

const ScoreBadge = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '0.74rem',
  fontWeight: '$bold',
  color: '#34D399',
  backgroundColor: 'rgba(16, 185, 129, 0.08)',
  border: '1px solid rgba(16, 185, 129, 0.25)',
  borderRadius: '$full',
  px: '$3',
  py: '4px',
  width: 'fit-content',
  boxShadow: '0 0 12px -2px rgba(16, 185, 129, 0.2)',
});

const Description = styled('p', {
  fontSize: '$xs',
  color: '$textSecondary',
  lineHeight: 1.6,
  margin: 0,
});

const PeriodRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '0.72rem',
  color: '$textMuted',
  mt: 'auto',
  pt: '$3',
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
                  <GraduationCap size={22} />
                </IconBadge>
                <Badge variant="pill">{item.badge}</Badge>
              </EduHeader>

              <div>
                <DegreeTitle>{item.degree}</DegreeTitle>
                <Institution>{item.institution}</Institution>
              </div>

              <ScoreBadge>
                <Award size={13} />
                {item.score}
              </ScoreBadge>

              <Description>{item.description}</Description>

              <PeriodRow>
                <Calendar size={13} />
                <span>{item.period}</span>
              </PeriodRow>
            </EduCard>
          ))}
        </EducationGrid>
      </EducationContainer>
    </EducationSection>
  );
}
