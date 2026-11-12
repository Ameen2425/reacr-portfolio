import { styled } from '../../styles/stitches.config';

const StyledBadge = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '7px',
  borderRadius: '$xs',
  fontSize: '0.72rem',
  fontFamily: '$mono',
  fontWeight: '$medium',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  userSelect: 'none',
  lineHeight: 1,

  variants: {
    variant: {
      status: {
        backgroundColor: '$successLight',
        color: '$success',
        border: '1px solid $successBorder',
        py: '5px',
        px: '10px',
        borderRadius: '$full',
      },
      section: {
        backgroundColor: 'transparent',
        color: '$accent',
        border: 'none',
        py: '2px',
        px: '0',
        fontWeight: '$semibold',
        letterSpacing: '0.08em',
      },
      pill: {
        backgroundColor: '$bgCard',
        color: '$textSecondary',
        border: '1px solid $border',
        py: '4px',
        px: '8px',
        borderRadius: '$xs',
      },
      accent: {
        backgroundColor: '$accentLight',
        color: '$accent',
        border: '1px solid $accentBorder',
        py: '4px',
        px: '8px',
        borderRadius: '$xs',
      },
      dark: {
        backgroundColor: '$bgDark',
        color: '$white',
        border: '1px solid $borderDark',
        py: '4px',
        px: '8px',
        borderRadius: '$xs',
      },
    },
  },

  defaultVariants: {
    variant: 'pill',
  },
});

const StatusDot = styled('span', {
  width: '7px',
  height: '7px',
  borderRadius: '$full',
  backgroundColor: '$success',
  display: 'inline-block',
  position: 'relative',

  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    borderRadius: '$full',
    backgroundColor: 'rgba(21, 128, 61, 0.25)',
  },
});

export default function Badge({
  children,
  variant = 'pill',
  hasDot = false,
  ...props
}) {
  return (
    <StyledBadge variant={variant} {...props}>
      {hasDot && <StatusDot />}
      {children}
    </StyledBadge>
  );
}
