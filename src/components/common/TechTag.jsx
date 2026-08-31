import { styled } from '../../styles/stitches.config';

const StyledTag = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '0.75rem',
  fontWeight: '$medium',
  color: '$textSecondary',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid $border',
  borderRadius: '$sm',
  py: '4px',
  px: '10px',
  whiteSpace: 'nowrap',
  transition: 'all 0.2s ease',

  '&:hover': {
    color: '$primaryLight',
    borderColor: 'rgba(139, 92, 246, 0.4)',
    backgroundColor: 'rgba(139, 92, 246, 0.06)',
  },

  variants: {
    highlight: {
      true: {
        color: '$primaryLight',
        borderColor: 'rgba(139, 92, 246, 0.3)',
        backgroundColor: 'rgba(139, 92, 246, 0.08)',
      },
    },
    cyan: {
      true: {
        color: '$secondary',
        borderColor: 'rgba(6, 182, 212, 0.3)',
        backgroundColor: 'rgba(6, 182, 212, 0.08)',
      },
    },
  },
});

export default function TechTag({ children, ...props }) {
  return <StyledTag {...props}>{children}</StyledTag>;
}
