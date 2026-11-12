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
      // Primary background: clean, warm neutral off-white
      bg: '#FBFBF9',
      bgSecondary: '#F3F3EE',
      bgCard: '#FFFFFF',
      bgCardHover: '#FAFAF8',
      bgSubtle: '#EBEBE6',
      bgDark: '#171719',

      // Text hierarchy: deep charcoal / near-black
      textPrimary: '#151618',
      textSecondary: '#4A4C53',
      textMuted: '#71747D',
      textFaint: '#A0A3AB',

      // Borders: precise editorial greys
      border: '#E2E2DC',
      borderLight: '#EDEDEA',
      borderDark: '#262629',
      borderStrong: '#151618',

      // Single restrained accent: warm terracotta / burnt amber
      accent: '#C2410C',
      accentLight: '#FFF7ED',
      accentDark: '#9A3412',
      accentHover: '#EA580C',
      accentSubtle: 'rgba(194, 65, 12, 0.08)',
      accentBorder: 'rgba(194, 65, 12, 0.25)',

      // Secondary metals & status
      metallic: '#64748B',
      metallicLight: '#F1F5F9',
      success: '#15803D',
      successLight: '#F0FDF4',
      successBorder: 'rgba(21, 128, 61, 0.3)',

      white: '#FFFFFF',
      black: '#151618',

      // Compatibility tokens mapped cleanly to the monochrome design
      primary: '#151618',
      primaryLight: '#262629',
      primaryDark: '#0A0A0B',
      secondary: '#4A4C53',
      secondaryLight: '#71747D',
      badgeBg: 'rgba(21, 22, 24, 0.04)',
      badgeBorder: '#E2E2DC',
      glassBg: 'rgba(251, 251, 249, 0.88)',
      glassBorder: 'rgba(226, 226, 220, 0.8)',
    },
    fonts: {
      serif: "'Newsreader', Georgia, 'Times New Roman', serif",
      sans: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "'JetBrains Mono', 'SFMono-Regular', Consolas, monospace",
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
      none: '0px',
      xs: '3px',
      sm: '6px',
      md: '10px',
      lg: '14px',
      xl: '18px',
      '2xl': '22px',
      full: '9999px',
    },
    shadows: {
      subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
      sm: '0 1px 3px 0 rgba(21, 22, 24, 0.06), 0 1px 2px -1px rgba(21, 22, 24, 0.04)',
      md: '0 4px 14px -2px rgba(21, 22, 24, 0.07), 0 2px 6px -1px rgba(21, 22, 24, 0.04)',
      lg: '0 12px 28px -6px rgba(21, 22, 24, 0.09), 0 4px 10px -2px rgba(21, 22, 24, 0.04)',
      xl: '0 22px 40px -10px rgba(21, 22, 24, 0.12), 0 8px 18px -4px rgba(21, 22, 24, 0.05)',
      card: '0 2px 8px rgba(21, 22, 24, 0.04), 0 0 0 1px rgba(226, 226, 220, 0.7)',
      cardHover: '0 12px 30px -8px rgba(21, 22, 24, 0.09), 0 0 0 1px rgba(21, 22, 24, 0.2)',
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
