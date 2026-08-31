import { styled } from '../../styles/stitches.config';
import TechTag from '../common/TechTag';

const Card = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$xl',
  p: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  position: 'relative',
  overflow: 'hidden',

  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: 'rgba(139, 92, 246, 0.4)',
    boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.6), 0 0 25px -5px rgba(139, 92, 246, 0.2)',
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
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.5,
  margin: 0,
});

const TagsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
  pt: '$2',
});

export default function SkillCard({ title, description, skills }) {
  return (
    <Card>
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
