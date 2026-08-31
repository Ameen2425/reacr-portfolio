import { styled } from '../../styles/stitches.config';

export const StyledButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  fontWeight: '$semibold',
  fontSize: '$sm',
  fontFamily: '$sans',
  borderRadius: '$full',
  cursor: 'pointer',
  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  outline: 'none',
  position: 'relative',
  border: '1px solid transparent',

  '&:focus-visible': {
    boxShadow: '0 0 0 2px #8B5CF6, 0 0 0 4px rgba(139, 92, 246, 0.4)',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$textPrimary',
        color: '$bg',
        borderColor: '$textPrimary',
        '&:hover': {
          backgroundColor: '$white',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 20px -4px rgba(255, 255, 255, 0.25)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      },
      purple: {
        backgroundColor: '$primary',
        color: '$white',
        borderColor: '$primary',
        boxShadow: '$glowPurple',
        '&:hover': {
          backgroundColor: '$primaryLight',
          borderColor: '$primaryLight',
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 25px -4px rgba(139, 92, 246, 0.5)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      },
      secondary: {
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        color: '$textPrimary',
        borderColor: '$border',
        backdropFilter: 'blur(8px)',
        '&:hover': {
          borderColor: '$primary',
          backgroundColor: 'rgba(139, 92, 246, 0.08)',
          color: '$white',
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 18px -2px rgba(0, 0, 0, 0.5)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$textSecondary',
        borderColor: 'transparent',
        '&:hover': {
          color: '$textPrimary',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        },
      },
    },
    size: {
      sm: {
        height: '36px',
        px: '$4',
        fontSize: '$xs',
      },
      md: {
        height: '44px',
        px: '$6',
        fontSize: '$sm',
      },
      lg: {
        height: '52px',
        px: '$8',
        fontSize: '$base',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
