import { useState, useEffect } from 'react';
import { styled } from '../../styles/stitches.config';
import { BRAND, NAV_LINKS } from '../../styles/theme';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: '$nav',
  backgroundColor: 'rgba(251, 251, 249, 0.94)',
  backdropFilter: 'blur(16px)',
  borderBottom: '1px solid $border',
  transition: 'box-shadow 0.2s ease',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
});

const NavInner = styled('nav', {
  maxWidth: '1240px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: '$6',
  height: '64px',

  '@mobile': {
    px: '$4',
    height: '58px',
  },
});

const BrandArea = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  textDecoration: 'none',
  color: '$textPrimary',
});

const BrandName = styled('span', {
  fontSize: '$base',
  fontWeight: '$bold',
  letterSpacing: '-0.02em',
  color: '$textPrimary',
});

const BrandRole = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  color: '$textMuted',
  paddingLeft: '$2',
  borderLeft: '1px solid $border',

  '@mobile': {
    display: 'none',
  },
});

const NavLinksGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$6',

  '@tablet': {
    display: 'none',
  },
});

const NavLink = styled('a', {
  fontSize: '$sm',
  color: '$textSecondary',
  fontWeight: '$medium',
  textDecoration: 'none',
  position: 'relative',
  transition: 'color 0.15s ease',

  '&:hover': {
    color: '$textPrimary',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: '-4px',
    width: 0,
    height: '1.5px',
    backgroundColor: '$accent',
    transition: 'width 0.2s ease',
  },

  '&:hover::after': {
    width: '100%',
  },
});

const NavRight = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

const ResumeLink = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  fontFamily: '$mono',
  fontSize: '$xs',
  fontWeight: '$semibold',
  color: '$textPrimary',
  textDecoration: 'none',
  padding: '6px 14px',
  borderRadius: '$xs',
  border: '1px solid $borderStrong',
  backgroundColor: 'transparent',
  transition: 'all 0.18s ease',

  '&:hover': {
    backgroundColor: '$textPrimary',
    color: '$white',
  },

  '@mobile': {
    display: 'none',
  },
});

const MobileToggle = styled('button', {
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  size: '36px',
  borderRadius: '$xs',
  border: '1px solid $border',
  backgroundColor: '$bgCard',
  color: '$textPrimary',
  cursor: 'pointer',

  '@tablet': {
    display: 'inline-flex',
  },
});

const MobileDrawer = styled(motion.div, {
  position: 'fixed',
  top: '64px',
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '$bg',
  zIndex: 999,
  padding: '$6 $5',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderTop: '1px solid $border',
  overflowY: 'auto',

  '@mobile': {
    top: '58px',
    padding: '$5 $4',
  },
});

const MobileNavLinks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const MobileNavLink = styled('a', {
  fontSize: '$xl',
  fontWeight: '$semibold',
  color: '$textPrimary',
  textDecoration: 'none',
  padding: '$2 0',
  borderBottom: '1px solid $borderLight',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const MobileDrawerFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  pt: '$6',
  borderTop: '1px solid $border',
});

const StatusPill = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '7px',
  fontSize: '0.74rem',
  fontFamily: '$mono',
  color: '$success',
});

const Dot = styled('span', {
  width: '6px',
  height: '6px',
  borderRadius: '$full',
  backgroundColor: '$success',
});

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <Header>
      <NavInner>
        <BrandArea href="#home" onClick={() => setMobileOpen(false)}>
          <BrandName>{BRAND.name}</BrandName>
          <BrandRole>{BRAND.title}</BrandRole>
        </BrandArea>

        <NavLinksGroup>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </NavLinksGroup>

        <NavRight>
          <ResumeLink
            href={BRAND.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Abdul_Ameen_Full_Stack_Python_Developer_Resume.pdf"
          >
            <FileText size={13} />
            Resume
            <ArrowUpRight size={13} />
          </ResumeLink>

          <MobileToggle
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </MobileToggle>
        </NavRight>
      </NavInner>

      <AnimatePresence>
        {mobileOpen && (
          <MobileDrawer
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <MobileNavLinks>
              {NAV_LINKS.map((link) => (
                <MobileNavLink
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  <ArrowUpRight size={18} color="#71747D" />
                </MobileNavLink>
              ))}
            </MobileNavLinks>

            <MobileDrawerFooter>
              <StatusPill>
                <Dot />
                Available for Full Stack roles
              </StatusPill>

              <a
                href={BRAND.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Abdul_Ameen_Full_Stack_Python_Developer_Resume.pdf"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  backgroundColor: '#151618',
                  color: '#FFFFFF',
                  padding: '12px 20px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                }}
              >
                <FileText size={15} />
                Download Resume PDF
              </a>
            </MobileDrawerFooter>
          </MobileDrawer>
        )}
      </AnimatePresence>
    </Header>
  );
}
