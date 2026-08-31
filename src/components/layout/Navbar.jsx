import { useState, useEffect } from 'react';
import { styled } from '../../styles/stitches.config';
import { BRAND, NAV_LINKS } from '../../styles/theme';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import Button from '../common/Button';

const NavHeader = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: '$nav',
  transition: 'all 0.3s ease',
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
  py: '10px',
  borderRadius: '$full',
  transition: 'all 0.3s ease',

  variants: {
    scrolled: {
      true: {
        backgroundColor: 'rgba(10, 10, 12, 0.92)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
      },
      false: {
        backgroundColor: 'rgba(13, 13, 13, 0.6)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.04)',
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
  gap: '8px',
  fontFamily: '$sans',
  fontSize: '$base',
  fontWeight: '$extrabold',
  color: '$textPrimary',
  textDecoration: 'none',
  letterSpacing: '-0.02em',

  '&:hover': {
    color: '$primaryLight',
  },

  '@smallMobile': {
    fontSize: '$sm',
    gap: '6px',
  },
});

const LogoBadge = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '26px',
  borderRadius: '$xs',
  backgroundColor: '$primary',
  color: '$white',
  fontFamily: '$mono',
  fontSize: '0.7rem',
  fontWeight: '$bold',
  boxShadow: '0 0 12px rgba(139, 92, 246, 0.5)',
});

const DesktopNavList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
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
  py: '$2',
  fontSize: '$sm',
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
        color: '$primaryLight',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        fontWeight: '$semibold',
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
  border: '1px solid $border',
  borderRadius: '$full',
  px: '$4',
  py: '8px',
  textDecoration: 'none',
  transition: 'all 0.2s ease',

  '&:hover': {
    backgroundColor: '$primary',
    borderColor: '$primary',
    color: '$white',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 14px rgba(139, 92, 246, 0.4)',
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

const MobileDrawer = styled('div', {
  display: 'none',
  position: 'fixed',
  top: '64px',
  left: '$2',
  right: '$2',
  backgroundColor: 'rgba(13, 13, 13, 0.98)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '$xl',
  p: '$4',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.9)',
  zIndex: '$modal',
  flexDirection: 'column',
  gap: '$2',
  maxHeight: 'calc(100vh - 80px)',
  overflowY: 'auto',

  variants: {
    open: {
      true: {
        display: 'flex',
      },
      false: {
        display: 'none',
      },
    },
  },

  '@tablet': {
    variants: {
      open: {
        true: {
          display: 'flex',
        },
      },
    },
  },
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
    backgroundColor: 'rgba(139, 92, 246, 0.12)',
    borderColor: 'rgba(139, 92, 246, 0.3)',
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
    <NavHeader scrolled={scrolled}>
      <NavContainer scrolled={scrolled}>
        <LogoLink href="#home" aria-label="Abdul Ameen Home">
          <LogoBadge>A</LogoBadge>
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

      {/* Mobile Drawer Navigation */}
      <MobileDrawer open={mobileMenuOpen}>
        {NAV_LINKS.map((link) => (
          <MobileNavLink
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
          >
            <span>{link.label}</span>
            <ArrowUpRight size={15} color="#71717A" />
          </MobileNavLink>
        ))}
        <Button
          as="a"
          href={BRAND.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="purple"
          size="md"
          fullWidth
          style={{ marginTop: '8px' }}
        >
          <FileText size={15} />
          Download Resume ↗
        </Button>
      </MobileDrawer>
    </NavHeader>
  );
}
