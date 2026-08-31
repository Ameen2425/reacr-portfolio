import { styled } from '../../styles/stitches.config';
import TechTag from '../common/TechTag';
import { motion } from 'framer-motion';

const Card = styled(motion.div, {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$xl',
  p: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
  position: 'relative',
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
    borderColor: 'rgba(139, 92, 246, 0.45)',
    boxShadow: '0 16px 36px -8px rgba(0, 0, 0, 0.7), 0 0 30px -5px rgba(139, 92, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  },

  '@mobile': {
    p: '$4',
  },
});

const CardHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',
});

const CategoryTitle = styled('h3', {
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.02em',
  margin: 0,
});

const CategoryDesc = styled('p', {
  fontSize: '$xs',
  color: '$textSecondary',
  lineHeight: 1.6,
  margin: 0,
});

const TagsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
  pt: '$1',
});

export default function SkillCard({ title, description, skills }) {
  return (
    <Card
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <CardHeader>
        <CategoryTitle>{title}</CategoryTitle>
      </CardHeader>
      <CategoryDesc>{description}</CategoryDesc>
      <TagsContainer>
        {skills.map((skill) => (
          <TechTag key={skill}>{skill}</TechTag>
        ))}
      </TagsContainer>
    </Card>
  );
}
