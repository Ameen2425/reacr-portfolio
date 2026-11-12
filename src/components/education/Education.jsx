import { styled } from '../../styles/stitches.config';
import { education } from '../../data/education';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const EducationSection = styled('section', {
  py: '$16',
  px: '$6',
  backgroundColor: '$bgSecondary',
  borderBottom: '1px solid $border',

  '@mobile': {
    py: '$12',
    px: '$4',
  },
});

const EducationContainer = styled('div', {
  maxWidth: '1240px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
});

const EducationGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$6',

  '@tablet': {
    gridTemplateColumns: '1fr',
  },
});

const EduCard = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$sm',
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$4',
  transition: 'border-color 0.2s ease, transform 0.2s ease',

  '&:hover': {
    borderColor: '$borderStrong',
    transform: 'translateY(-1px)',
  },

  '@mobile': {
    padding: '$5',
  },
});

const CardTop = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const HeaderMeta = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',
});

const Period = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  fontFamily: '$mono',
  fontSize: '0.72rem',
  color: '$textMuted',
});

const DegreeTitle = styled('h3', {
  fontSize: '$base',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.01em',
  lineHeight: 1.35,
  margin: 0,
});

const Institution = styled('div', {
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.4,
});

const Description = styled('p', {
  fontSize: '$xs',
  color: '$textMuted',
  lineHeight: 1.6,
  margin: 0,
});

const ScoreStrip = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  pt: '$3',
  borderTop: '1px solid $borderLight',
});

const ScoreLabel = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  color: '$textMuted',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
});

const ScoreValue = styled('span', {
  fontFamily: '$mono',
  fontSize: '$sm',
  fontWeight: '$bold',
  color: '$accent',
});

export default function Education() {
  return (
    <EducationSection id="education">
      <EducationContainer>
        <SectionHeading
          label="// 05 · ACADEMIC CREDENTIALS"
          title="Formal education and computer science background."
          subtitle="Undergraduate engineering degree in Computer Science, higher secondary coursework, and foundational schooling."
        />

        <EducationGrid>
          {education.map((edu) => (
            <EduCard key={edu.id}>
              <CardTop>
                <HeaderMeta>
                  <Period>
                    <Calendar size={12} />
                    {edu.period}
                  </Period>
                  <Badge variant="accent">{edu.badge}</Badge>
                </HeaderMeta>

                <DegreeTitle>{edu.degree}</DegreeTitle>
                <Institution>{edu.institution}</Institution>
                <Description>{edu.description}</Description>
              </CardTop>

              <ScoreStrip>
                <ScoreLabel>Performance</ScoreLabel>
                <ScoreValue>{edu.score}</ScoreValue>
              </ScoreStrip>
            </EduCard>
          ))}
        </EducationGrid>
      </EducationContainer>
    </EducationSection>
  );
}
