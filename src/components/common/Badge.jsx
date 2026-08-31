import { styled, keyframes } from '../../styles/stitches.config';

const pulseGlow = keyframes({
  '0%': { transform: 'scale(0.95)', opacity: 0.7, boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)' },
  '70%': { transform: 'scale(1)', opacity: 1, boxShadow: '0 0 0 6px rgba(34, 197, 94, 0)' },
  '100%': { transform: 'scale(0.95)', opacity: 0.7, boxShadow: '0 0 0 0 rgba(34, 197, 94, 0)' },
});

const StyledBadge = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  borderRadius: '$full',
  fontSize: '$xs',
  fontFamily: '$mono',
  fontWeight: '$medium',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  transition: 'all 0.2s ease',

  variants: {
    variant: {
      status: {
        backgroundColor: 'rgba(34, 197, 94, 0.08)',
        color: '$textPrimary',
        border: '1px solid rgba(34, 197, 94, 0.25)',
        py: '6px',
        px: '$3',
        fontSize: '0.7rem',
        textTransform: 'uppercase',
      },
      section: {
        backgroundColor: 'rgba(139, 92, 246, 0.08)',
        color: '$primaryLight',
        border: '1px solid rgba(139, 92, 246, 0.25)',
        py: '4px',
        px: '$3',
        fontSize: '$xs',
      },
      pill: {
        backgroundColor: '$bgCard',
        color: '$textSecondary',
        border: '1px solid $border',
        py: '4px',
        px: '$3',
      },
      primary: {
        backgroundColor: 'rgba(139, 92, 246, 0.15)',
        color: '$primaryLight',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        py: '4px',
        px: '$3',
      },
      cyan: {
        backgroundColor: 'rgba(6, 182, 212, 0.12)',
        color: '$secondary',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        py: '4px',
        px: '$3',
      },
    },
  },

  defaultVariants: {
    variant: 'section',
  },
});

const StatusDot = styled('span', {
  width: '7px',
  height: '7px',
  borderRadius: '$full',
  backgroundColor: '$success',
  boxShadow: '0 0 8px $colors$success',
  animation: `${pulseGlow} 2s infinite ease-in-out`,
});

export default function Badge({ children, variant, hasDot = false, ...props }) {
  return (
    <StyledBadge variant={variant} {...props}>
      {hasDot && <StatusDot />}
      {children}
    </StyledBadge>
  );
}
