import { styled } from '../../styles/stitches.config';
import { experiences } from '../../data/experience';
import SectionHeading from '../common/SectionHeading';
import ExperienceCard from './ExperienceCard';

const ExperienceSection = styled('section', {
  py: '$16',
  px: '$6',
  backgroundColor: '$bg',
  borderBottom: '1px solid $border',

  '@mobile': {
    py: '$12',
    px: '$4',
  },
});

const ExpContainer = styled('div', {
  maxWidth: '1240px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
});

const ExpList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

export default function Experience() {
  return (
    <ExperienceSection id="experience">
      <ExpContainer>
        <SectionHeading
          label="// 04 · CAREER & INTERNSHIPS"
          title="Hands-on industry internships and applied engineering."
          subtitle="Enterprise application testing, functional validation, UI component development, and cross-device optimization."
        />

        <ExpList>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </ExpList>
      </ExpContainer>
    </ExperienceSection>
  );
}
