import { styled } from '../../styles/stitches.config';
import { experiences } from '../../data/experience';
import SectionHeading from '../common/SectionHeading';
import ExperienceCard from './ExperienceCard';

const ExperienceSection = styled('section', {
  py: '$20',
  px: '$4',
  backgroundColor: '$bgSecondary',
  position: 'relative',
  borderTop: '1px solid $border',
  borderBottom: '1px solid $border',
});

const ExperienceContainer = styled('div', {
  maxWidth: '1000px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
});

const CardsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

export default function Experience() {
  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionHeading
          label="03 / EXPERIENCE"
          title="Professional Experience"
          subtitle="Real-world engineering internships focused on enterprise software reliability, cross-platform layouts, and UI performance."
          align="center"
        />

        <CardsList>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </CardsList>
      </ExperienceContainer>
    </ExperienceSection>
  );
}
