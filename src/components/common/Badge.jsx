import { styled, keyframes } from '../../styles/stitches.config';

const pulseRing = keyframes({
  '0%': { transform: 'scale(0.8)', opacity: 0.8 },
  '50%': { transform: 'scale(1.4)', opacity: 0 },
  '100%': { transform: 'scale(0.8)', opacity: 0 },
});

const StyledBadge = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '$full',
  fontSize: '$xs',
  fontFamily: '$mono',
  fontWeight: '$semibold',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  transition: 'all 0.25s ease',
  userSelect: 'none',

  variants: {
    variant: {
      status: {
        backgroundColor: 'rgba(16, 185, 129, 0.08)',
        color: '#34D399',
        border: '1px solid rgba(16, 185, 129, 0.28)',
        backdropFilter: 'blur(10px)',
        py: '6px',
        px: '14px',
        fontSize: '0.72rem',
        boxShadow: '0 0 20px -5px rgba(16, 185, 129, 0.2)',
      },
      section: {
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        color: '$primaryLight',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        backdropFilter: 'blur(10px)',
        py: '5px',
        px: '14px',
        fontSize: '0.72rem',
        boxShadow: '0 0 20px -5px rgba(139, 92, 246, 0.25)',
      },
      pill: {
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        color: '$textSecondary',
        border: '1px solid $border',
        backdropFilter: 'blur(8px)',
        py: '4px',
        px: '12px',
        fontSize: '0.7rem',
      },
      primary: {
        backgroundColor: 'rgba(139, 92, 246, 0.18)',
        color: '$primaryLight',
        border: '1px solid rgba(139, 92, 246, 0.4)',
        backdropFilter: 'blur(10px)',
        py: '4px',
        px: '12px',
        fontSize: '0.7rem',
        boxShadow: '0 0 16px -4px rgba(139, 92, 246, 0.3)',
      },
      cyan: {
        backgroundColor: 'rgba(6, 182, 212, 0.12)',
        color: '$secondaryLight',
        border: '1px solid rgba(6, 182, 212, 0.35)',
        backdropFilter: 'blur(10px)',
        py: '4px',
        px: '12px',
        fontSize: '0.7rem',
      },
    },
  },

  defaultVariants: {
    variant: 'section',
  },
});

const DotContainer = styled('span', {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '8px',
});

const StatusDot = styled('span', {
  width: '6px',
  height: '6px',
  borderRadius: '$full',
  backgroundColor: '$success',
  boxShadow: '0 0 10px #10B981',
});

const PulseRing = styled('span', {
  position: 'absolute',
  width: '14px',
  height: '14px',
  borderRadius: '$full',
  border: '1.5px solid #10B981',
  animation: `${pulseRing} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});

export default function Badge({ children, variant, hasDot = false, ...props }) {
  return (
    <StyledBadge variant={variant} {...props}>
      {hasDot && (
        <DotContainer>
          <StatusDot />
          <PulseRing />
        </DotContainer>
      )}
      {children}
    </StyledBadge>
  );
}
