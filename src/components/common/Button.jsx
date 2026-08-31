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
        color: '#050508',
        borderColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 4px 14px 0 rgba(255, 255, 255, 0.15)',
        '&:hover': {
          backgroundColor: '$white',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 24px -2px rgba(255, 255, 255, 0.35)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      },
      purple: {
        background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 50%, #7C3AED 100%)',
        color: '$white',
        borderColor: 'rgba(167, 139, 250, 0.5)',
        boxShadow: '0 6px 20px -2px rgba(139, 92, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        '&:hover': {
          background: 'linear-gradient(135deg, #C4B5FD 0%, #9333EA 100%)',
          borderColor: 'rgba(196, 181, 253, 0.8)',
          transform: 'translateY(-2px)',
          boxShadow: '0 10px 30px -2px rgba(139, 92, 246, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      },
      secondary: {
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        color: '$textPrimary',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        '&:hover': {
          borderColor: '$primary',
          backgroundColor: 'rgba(139, 92, 246, 0.08)',
          color: '$white',
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 20px -2px rgba(0, 0, 0, 0.6), 0 0 20px -4px rgba(139, 92, 246, 0.3)',
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
        height: '50px',
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
