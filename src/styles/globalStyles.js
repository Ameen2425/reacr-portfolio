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
    backgroundColor: '#050508',
  },
  'body': {
    backgroundColor: '$bg',
    color: '$textPrimary',
    fontFamily: '$sans',
    fontSize: '16px',
    lineHeight: 1.65,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    overflowX: 'hidden',
    width: '100%',
    maxWidth: '100vw',
    position: 'relative',
    backgroundImage: `
      radial-gradient(circle at 20% 15%, rgba(139, 92, 246, 0.09) 0%, transparent 45%),
      radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.07) 0%, transparent 50%),
      radial-gradient(circle at 50% 85%, rgba(99, 102, 241, 0.08) 0%, transparent 45%),
      linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
    `,
    backgroundSize: '100% 100%, 100% 100%, 100% 100%, 60px 60px, 60px 60px',
    backgroundAttachment: 'fixed',
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
  'a': {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  'button': {
    fontFamily: 'inherit',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    outline: 'none',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
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
    width: '7px',
  },
  '::-webkit-scrollbar-track': {
    background: '#050508',
  },
  '::-webkit-scrollbar-thumb': {
    background: '#1E1E2D',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
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
