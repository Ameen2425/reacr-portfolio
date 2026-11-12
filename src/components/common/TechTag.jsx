import { styled } from '../../styles/stitches.config';

const StyledTag = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  fontFamily: '$mono',
  fontSize: '0.74rem',
  fontWeight: '$medium',
  color: '$textSecondary',
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$xs',
  py: '3px',
  px: '8px',
  whiteSpace: 'nowrap',
  transition: 'border-color 0.15s ease, color 0.15s ease',

  '&:hover': {
    color: '$textPrimary',
    borderColor: '$borderStrong',
  },

  variants: {
    highlight: {
      true: {
        color: '$textPrimary',
        backgroundColor: '$bgSecondary',
        borderColor: '$border',
        fontWeight: '$semibold',
      },
    },
    accent: {
      true: {
        color: '$accent',
        backgroundColor: '$accentLight',
        borderColor: '$accentBorder',
      },
    },
    dark: {
      true: {
        color: '$white',
        backgroundColor: '$bgDark',
        borderColor: '$borderDark',
      },
    },
  },
});

export default function TechTag({ children, ...props }) {
  return <StyledTag {...props}>{children}</StyledTag>;
}
