import { styled } from '../../styles/stitches.config';
import TechTag from '../common/TechTag';

const Card = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$sm',
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
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

const CardHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const CardCategory = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '$accent',
});

const CardTitle = styled('h3', {
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.01em',
  margin: 0,
});

const CardDesc = styled('p', {
  fontSize: '$xs',
  color: '$textSecondary',
  lineHeight: 1.5,
  margin: 0,
});

const SkillsWrap = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
});

export default function SkillCard({ category, index }) {
  return (
    <Card>
      <CardHeader>
        <CardCategory>0{index + 1} // DOMAIN</CardCategory>
        <CardTitle>{category.title}</CardTitle>
        <CardDesc>{category.description}</CardDesc>
      </CardHeader>

      <SkillsWrap>
        {category.skills.map((skill) => (
          <TechTag key={skill} highlight>
            {skill}
          </TechTag>
        ))}
      </SkillsWrap>
    </Card>
  );
}
