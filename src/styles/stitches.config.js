import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      bg: '#050508',
      bgSecondary: '#09090E',
      bgCard: '#0E0E15',
      bgCardHover: '#14141F',
      bgCardActive: '#1A1A28',
      textPrimary: '#F8FAFC',
      textSecondary: '#94A3B8',
      textMuted: '#64748B',
      border: 'rgba(255, 255, 255, 0.08)',
      borderLight: 'rgba(255, 255, 255, 0.14)',
      borderHover: 'rgba(139, 92, 246, 0.5)',
      primary: '#8B5CF6',
      primaryLight: '#C4B5FD',
      primaryDark: '#6D28D9',
      primaryGlow: 'rgba(139, 92, 246, 0.25)',
      primaryGlowStrong: 'rgba(139, 92, 246, 0.55)',
      secondary: '#06B6D4',
      secondaryLight: '#67E8F9',
      secondaryGlow: 'rgba(6, 182, 212, 0.25)',
      success: '#10B981',
      successGlow: 'rgba(16, 185, 129, 0.25)',
      white: '#FFFFFF',
      black: '#000000',
      badgeBg: 'rgba(139, 92, 246, 0.08)',
      badgeBorder: 'rgba(139, 92, 246, 0.25)',
      glassBg: 'rgba(14, 14, 21, 0.75)',
      glassBorder: 'rgba(255, 255, 255, 0.09)',
    },
    fonts: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', monospace",
    },
    fontSizes: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
      '7xl': '4.5rem',   // 72px
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    space: {
      1: '0.25rem',  // 4px
      2: '0.5rem',   // 8px
      3: '0.75rem',  // 12px
      4: '1rem',     // 16px
      5: '1.25rem',  // 20px
      6: '1.5rem',   // 24px
      8: '2rem',     // 32px
      10: '2.5rem',  // 40px
      12: '3rem',    // 48px
      16: '4rem',    // 64px
      20: '5rem',    // 80px
      24: '6rem',    // 96px
      32: '8rem',    // 128px
    },
    radii: {
      xs: '6px',
      sm: '10px',
      md: '14px',
      lg: '18px',
      xl: '22px',
      '2xl': '28px',
      full: '9999px',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
      md: '0 4px 12px -2px rgba(0, 0, 0, 0.6), 0 2px 6px -1px rgba(0, 0, 0, 0.4)',
      lg: '0 12px 24px -4px rgba(0, 0, 0, 0.7), 0 4px 10px -2px rgba(0, 0, 0, 0.5)',
      xl: '0 24px 48px -12px rgba(0, 0, 0, 0.85), 0 12px 20px -6px rgba(0, 0, 0, 0.6)',
      glowPurple: '0 0 40px -5px rgba(139, 92, 246, 0.35)',
      glowCyan: '0 0 40px -5px rgba(6, 182, 212, 0.35)',
      glowCard: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      glowCardHover: '0 16px 48px 0 rgba(139, 92, 246, 0.2), inset 0 1px 0 0 rgba(139, 92, 246, 0.4)',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      nav: '1000',
      modal: '2000',
    },
  },
  media: {
    smallMobile: '(max-width: 380px)',
    mobile: '(max-width: 640px)',
    tablet: '(max-width: 900px)',
    desktop: '(min-width: 901px)',
    largeDesktop: '(min-width: 1440px)',
    motionReduced: '(prefers-reduced-motion: reduce)',
  },
  utils: {
    p: (value) => ({ padding: value }),
    pt: (value) => ({ paddingTop: value }),
    pr: (value) => ({ paddingRight: value }),
    pb: (value) => ({ paddingBottom: value }),
    pl: (value) => ({ paddingLeft: value }),
    px: (value) => ({ paddingLeft: value, paddingRight: value }),
    py: (value) => ({ paddingTop: value, paddingBottom: value }),
    m: (value) => ({ margin: value }),
    mt: (value) => ({ marginTop: value }),
    mr: (value) => ({ marginRight: value }),
    mb: (value) => ({ marginBottom: value }),
    ml: (value) => ({ marginLeft: value }),
    mx: (value) => ({ marginLeft: value, marginRight: value }),
    my: (value) => ({ marginTop: value, marginBottom: value }),
    size: (value) => ({ width: value, height: value }),
  },
});
