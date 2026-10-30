import { useState, useEffect } from 'react';
import { styled } from '../../styles/stitches.config';
import { BRAND, NAV_LINKS } from '../../styles/theme';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import Button from '../common/Button';
import { motion, AnimatePresence } from 'framer-motion';

const NavHeader = styled(motion.header, {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: '$nav',
  transition: 'padding 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  px: '$4',
  py: '$3',
  display: 'flex',
  justifyContent: 'center',

  '@mobile': {
    px: '$2',
    py: '$2',
  },

  variants: {
    scrolled: {
      true: {
        py: '$2',
      },
    },
  },
});

const NavContainer = styled('nav', {
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: '$5',
  py: '9px',
  borderRadius: '$full',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.45)',

  variants: {
    scrolled: {
      true: {
        backgroundColor: 'rgba(9, 9, 14, 0.88)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 12px 36px 0 rgba(0, 0, 0, 0.7), 0 0 20px -5px rgba(139, 92, 246, 0.15)',
      },
      false: {
        backgroundColor: 'rgba(14, 14, 21, 0.65)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
      },
    },
  },

  '@mobile': {
    borderRadius: '$lg',
    px: '$3',
    py: '8px',
  },
});

const LogoLink = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  fontFamily: '$sans',
  fontSize: '$base',
  fontWeight: '$extrabold',
  color: '$textPrimary',
  textDecoration: 'none',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',

  '&:hover': {
    color: '$primaryLight',
  },

  '@smallMobile': {
    fontSize: '$sm',
    gap: '6px',
  },
});

const LogoImg = styled('img', {
  size: '30px',
  minWidth: '30px',
  borderRadius: '8px',
  objectFit: 'cover',
  border: '1px solid rgba(139, 92, 246, 0.4)',
  boxShadow: '0 0 16px rgba(139, 92, 246, 0.5)',
  transition: 'all 0.25s ease',

  [`${LogoLink}:hover &`]: {
    transform: 'scale(1.08)',
    boxShadow: '0 0 22px rgba(139, 92, 246, 0.8)',
    borderColor: '$primaryLight',
  },
});

const DesktopNavList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  listStyle: 'none',
  margin: 0,
  padding: 0,

  '@tablet': {
    display: 'none',
  },
});

const NavItem = styled('li', {
  position: 'relative',
});

const NavLink = styled('a', {
  display: 'inline-block',
  px: '$3',
  py: '7px',
  fontSize: '0.84rem',
  fontWeight: '$medium',
  color: '$textSecondary',
  borderRadius: '$full',
  transition: 'all 0.2s ease',

  '&:hover': {
    color: '$textPrimary',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },

  variants: {
    active: {
      true: {
        color: '$white',
        backgroundColor: 'rgba(139, 92, 246, 0.16)',
        fontWeight: '$semibold',
        border: '1px solid rgba(139, 92, 246, 0.3)',
      },
    },
  },
});

const ActionsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
});

const ResumeBtn = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '$xs',
  fontFamily: '$mono',
  fontWeight: '$semibold',
  color: '$textPrimary',
  backgroundColor: 'rgba(255, 255, 255, 0.06)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '$full',
  px: '$4',
  py: '8px',
  textDecoration: 'none',
  transition: 'all 0.25s ease',

  '&:hover': {
    background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
    borderColor: 'rgba(196, 181, 253, 0.6)',
    color: '$white',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 18px rgba(139, 92, 246, 0.5)',
  },

  '@mobile': {
    display: 'none',
  },
});

const MobileMenuButton = styled('button', {
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  size: '38px',
  borderRadius: '$md',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid $border',
  color: '$textPrimary',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: '$borderHover',
  },

  '@tablet': {
    display: 'inline-flex',
  },
});

const MobileDrawer = styled(motion.div, {
  position: 'fixed',
  top: '64px',
  left: '$2',
  right: '$2',
  backgroundColor: 'rgba(10, 10, 15, 0.98)',
  backdropFilter: 'blur(24px)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '$xl',
  p: '$4',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.95), 0 0 30px -10px rgba(139, 92, 246, 0.3)',
  zIndex: '$modal',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  maxHeight: 'calc(100vh - 80px)',
  overflowY: 'auto',
});

const MobileNavLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  py: '$2',
  px: '$3',
  borderRadius: '$md',
  color: '$textPrimary',
  fontSize: '$sm',
  fontWeight: '$medium',
  textDecoration: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid transparent',
  minHeight: '44px',

  '&:hover, &:focus': {
    backgroundColor: 'rgba(139, 92, 246, 0.14)',
    borderColor: 'rgba(139, 92, 246, 0.35)',
    color: '$primaryLight',
  },
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <NavHeader
      scrolled={scrolled}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <NavContainer scrolled={scrolled}>
        <LogoLink href="#home" aria-label="Abdul Ameen Home">
          <LogoImg src={BRAND.logoImage} alt={`${BRAND.name} Logo`} />
          <span>{BRAND.logo}</span>
        </LogoLink>

        {/* Desktop Navigation */}
        <DesktopNavList>
          {NAV_LINKS.map((link) => (
            <NavItem key={link.href}>
              <NavLink
                href={link.href}
                active={activeSection === link.href.substring(1)}
              >
                {link.label}
              </NavLink>
            </NavItem>
          ))}
        </DesktopNavList>

        <ActionsContainer>
          <ResumeBtn
            href={BRAND.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Abdul_Ameen_Full_Stack_Python_Developer_Resume.pdf"
            aria-label="Download Resume PDF"
          >
            <FileText size={13} />
            Resume
            <ArrowUpRight size={13} />
          </ResumeBtn>

          <MobileMenuButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </MobileMenuButton>
        </ActionsContainer>
      </NavContainer>

      {/* Animated Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileDrawer
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {NAV_LINKS.map((link) => (
              <MobileNavLink
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={15} color="#94A3B8" />
              </MobileNavLink>
            ))}
            <Button
              as="a"
              href={BRAND.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Abdul_Ameen_Full_Stack_Python_Developer_Resume.pdf"
              variant="purple"
              size="md"
              fullWidth
              style={{ marginTop: '8px' }}
            >
              <FileText size={15} />
              Download Resume ↗
            </Button>
          </MobileDrawer>
        )}
      </AnimatePresence>
    </NavHeader>
  );
}
