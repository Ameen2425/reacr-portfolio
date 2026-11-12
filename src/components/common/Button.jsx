import { styled } from '../../styles/stitches.config';

export const StyledButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  fontWeight: '$semibold',
  fontSize: '$sm',
  fontFamily: '$sans',
  borderRadius: '$sm',
  cursor: 'pointer',
  transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  outline: 'none',
  position: 'relative',
  border: '1px solid transparent',

  '&:focus-visible': {
    outline: '2px solid $textPrimary',
    outlineOffset: '2px',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$textPrimary',
        color: '$white',
        borderColor: '$textPrimary',
        boxShadow: '$sm',
        '&:hover': {
          backgroundColor: '#2A2C31',
          borderColor: '#2A2C31',
          transform: 'translateY(-1px)',
          boxShadow: '$md',
        },
        '&:active': {
          transform: 'translateY(0)',
          boxShadow: '$sm',
        },
      },
      secondary: {
        backgroundColor: '$bgCard',
        color: '$textPrimary',
        borderColor: '$border',
        boxShadow: '$subtle',
        '&:hover': {
          borderColor: '$textPrimary',
          backgroundColor: '$bgCardHover',
          transform: 'translateY(-1px)',
          boxShadow: '$sm',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      },
      accent: {
        backgroundColor: '$accent',
        color: '$white',
        borderColor: '$accentDark',
        boxShadow: '$sm',
        '&:hover': {
          backgroundColor: '$accentHover',
          transform: 'translateY(-1px)',
          boxShadow: '$md',
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
          backgroundColor: '$bgSubtle',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: '$textPrimary',
        borderColor: '$borderStrong',
        '&:hover': {
          backgroundColor: '$textPrimary',
          color: '$white',
        },
      },
    },
    size: {
      sm: {
        height: '34px',
        px: '$3',
        fontSize: '$xs',
      },
      md: {
        height: '42px',
        px: '$5',
        fontSize: '$sm',
      },
      lg: {
        height: '48px',
        px: '$7',
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
    variant: 'secondary',
    size: 'md',
  },
});

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
