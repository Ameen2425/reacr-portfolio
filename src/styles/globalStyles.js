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
    backgroundColor: '$bg',
    colorScheme: 'light',
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
    letterSpacing: '-0.01em',
  },
  '#root': {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    width: '100%',
    maxWidth: '100vw',
    position: 'relative',
  },
  'main': {
    width: '100%',
  },
  'section': {
    scrollMarginTop: '76px',
  },
  'a': {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease',
  },
  'button': {
    fontFamily: 'inherit',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    outline: 'none',
    transition: 'all 0.2s ease',
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
    backgroundColor: '$textPrimary',
    color: '$bg',
  },
  '::-webkit-scrollbar': {
    width: '8px',
  },
  '::-webkit-scrollbar-track': {
    background: '$bgSecondary',
  },
  '::-webkit-scrollbar-thumb': {
    background: '#D5D5CF',
    borderRadius: '4px',
    border: '2px solid $bgSecondary',
    '&:hover': {
      background: '#B5B5AE',
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
