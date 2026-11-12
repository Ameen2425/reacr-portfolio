import { styled } from '../../styles/stitches.config';

const FilterBar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  flexWrap: 'wrap',
  mb: '$8',
  width: '100%',
});

const FilterPill = styled('button', {
  fontFamily: '$mono',
  fontSize: '0.74rem',
  fontWeight: '$medium',
  padding: '6px 14px',
  borderRadius: '$xs',
  border: '1px solid $border',
  backgroundColor: '$bgCard',
  color: '$textSecondary',
  cursor: 'pointer',
  transition: 'all 0.15s ease',

  '&:hover': {
    color: '$textPrimary',
    borderColor: '$borderStrong',
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$textPrimary',
        color: '$white',
        borderColor: '$textPrimary',
      },
    },
  },
});

export default function ProjectFilter({
  selectedCategory,
  onSelectCategory,
}) {
  const categories = ['All', 'Full Stack', 'React', 'AI', 'Frontend'];

  return (
    <FilterBar>
      {categories.map((cat) => (
        <FilterPill
          key={cat}
          active={selectedCategory === cat}
          onClick={() => onSelectCategory(cat)}
        >
          {cat === 'All' ? 'All Projects' : cat}
        </FilterPill>
      ))}
    </FilterBar>
  );
}
