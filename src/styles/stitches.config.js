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
      bg: '#070707',
      bgSecondary: '#0D0D0D',
      bgCard: '#111111',
      bgCardHover: '#161618',
      bgCardActive: '#1A1A1E',
      textPrimary: '#F5F5F5',
      textSecondary: '#A1A1AA',
      textMuted: '#71717A',
      border: '#27272A',
      borderLight: '#3F3F46',
      borderHover: '#52525B',
      primary: '#8B5CF6',
      primaryLight: '#A78BFA',
      primaryDark: '#7C3AED',
      primaryGlow: 'rgba(139, 92, 246, 0.2)',
      primaryGlowStrong: 'rgba(139, 92, 246, 0.45)',
      secondary: '#06B6D4',
      secondaryGlow: 'rgba(6, 182, 212, 0.2)',
      success: '#22C55E',
      successGlow: 'rgba(34, 197, 94, 0.2)',
      white: '#FFFFFF',
      black: '#000000',
      badgeBg: 'rgba(139, 92, 246, 0.08)',
      badgeBorder: 'rgba(139, 92, 246, 0.25)',
      glassBg: 'rgba(13, 13, 13, 0.85)',
      glassBorder: 'rgba(255, 255, 255, 0.08)',
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
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '20px',
      '2xl': '24px',
      full: '9999px',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.6), 0 2px 4px -1px rgba(0, 0, 0, 0.4)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.5)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.8), 0 10px 10px -5px rgba(0, 0, 0, 0.6)',
      glowPurple: '0 0 35px -5px rgba(139, 92, 246, 0.3)',
      glowCard: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      glowCardHover: '0 12px 40px 0 rgba(139, 92, 246, 0.15), inset 0 1px 0 0 rgba(139, 92, 246, 0.3)',
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
