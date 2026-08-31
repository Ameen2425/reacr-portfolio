import { styled } from '../../styles/stitches.config';
import { experiences } from '../../data/experience';
import SectionHeading from '../common/SectionHeading';
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';

const ExperienceSection = styled('section', {
  py: '$20',
  px: '$4',
  backgroundColor: '$bgSecondary',
  position: 'relative',
  borderTop: '1px solid $border',
  borderBottom: '1px solid $border',

  '@mobile': {
    py: '$14',
    px: '$3',
  },
});

const ExpContainer = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
});

const ExpList = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

export default function Experience() {
  return (
    <ExperienceSection id="experience">
      <ExpContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="03 / CAREER"
            title="Professional Experience"
            subtitle="Hands-on industry internships in Python development, enterprise network systems, and full-stack software engineering."
            align="center"
          />
        </motion.div>

        <ExpList
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          transition={{ staggerChildren: 0.15 }}
        >
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </ExpList>
      </ExpContainer>
    </ExperienceSection>
  );
}
