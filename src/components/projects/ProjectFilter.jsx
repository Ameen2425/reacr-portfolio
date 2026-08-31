import { styled } from '../../styles/stitches.config';
import { PROJECT_CATEGORIES } from '../../data/projects';

const FilterWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  flexWrap: 'wrap',
  mb: '$8',
  width: '100%',

  '@mobile': {
    justifyContent: 'flex-start',
    overflowX: 'auto',
    pb: '$2',
    gap: '6px',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

const FilterButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  fontFamily: '$mono',
  fontSize: '0.72rem',
  fontWeight: '$medium',
  padding: '6px 14px',
  borderRadius: '$full',
  border: '1px solid $border',
  backgroundColor: '$bgCard',
  color: '$textSecondary',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'all 0.2s ease',

  '&:hover': {
    color: '$textPrimary',
    borderColor: '$borderHover',
    backgroundColor: '$bgCardHover',
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$primary',
        borderColor: '$primary',
        color: '$white',
        fontWeight: '$semibold',
        boxShadow: '0 0 14px rgba(139, 92, 246, 0.4)',
      },
    },
  },

  '@smallMobile': {
    padding: '5px 10px',
    fontSize: '0.68rem',
  },
});

export default function ProjectFilter({ selectedCategory, onSelectCategory }) {
  return (
    <FilterWrapper>
      {PROJECT_CATEGORIES.map((cat) => (
        <FilterButton
          key={cat}
          active={selectedCategory === cat}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </FilterButton>
      ))}
    </FilterWrapper>
  );
}
