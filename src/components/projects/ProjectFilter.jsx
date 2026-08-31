import { styled } from '../../styles/stitches.config';
import { PROJECT_CATEGORIES } from '../../data/projects';

const FilterWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  flexWrap: 'wrap',
  mb: '$10',
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
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '0.76rem',
  fontWeight: '$medium',
  padding: '8px 18px',
  borderRadius: '$full',
  border: '1px solid $border',
  backgroundColor: '$bgCard',
  color: '$textSecondary',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
  userSelect: 'none',

  '&:hover': {
    color: '$textPrimary',
    borderColor: 'rgba(139, 92, 246, 0.4)',
    backgroundColor: '$bgCardHover',
    transform: 'translateY(-1px)',
  },

  variants: {
    active: {
      true: {
        background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
        borderColor: 'rgba(196, 181, 253, 0.6)',
        color: '$white',
        fontWeight: '$semibold',
        boxShadow: '0 4px 20px rgba(139, 92, 246, 0.45)',
        transform: 'translateY(-1px)',
      },
    },
  },

  '@smallMobile': {
    padding: '6px 12px',
    fontSize: '0.7rem',
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
