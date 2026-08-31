import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  'html': {
    overflowX: 'hidden',
    width: '100%',
    maxWidth: '100vw',
    scrollBehavior: 'smooth',
  },
  'body': {
    backgroundColor: '$bg',
    color: '$textPrimary',
    fontFamily: '$sans',
    fontSize: '16px',
    lineHeight: 1.6,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    overflowX: 'hidden',
    width: '100%',
    maxWidth: '100vw',
    position: 'relative',
  },
  '#root': {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    width: '100%',
    maxWidth: '100vw',
  },
  'a': {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  },
  'button': {
    fontFamily: 'inherit',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    outline: 'none',
  },
  'input, textarea, select': {
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  },
  'img, svg, video': {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  '::selection': {
    backgroundColor: '$primary',
    color: '$white',
  },
  '::-webkit-scrollbar': {
    width: '6px',
  },
  '::-webkit-scrollbar-track': {
    background: '#070707',
  },
  '::-webkit-scrollbar-thumb': {
    background: '#27272A',
    borderRadius: '3px',
    '&:hover': {
      background: '#8B5CF6',
    },
  },
  '@media (prefers-reduced-motion: reduce)': {
    'html': {
      scrollBehavior: 'auto',
    },
    '*, *::before, *::after': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto !important',
    },
  },
});
