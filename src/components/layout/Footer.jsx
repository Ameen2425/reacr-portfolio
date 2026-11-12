import { styled } from '../../styles/stitches.config';
import { BRAND, NAV_LINKS } from '../../styles/theme';
import SocialLinks from '../common/SocialLinks';
import { ArrowUp, FileText, Mail, MapPin } from 'lucide-react';

const FooterWrapper = styled('footer', {
  backgroundColor: '$bg',
  borderTop: '1px solid $border',
  pt: '$12',
  pb: '$10',
  px: '$6',
  width: '100%',

  '@mobile': {
    pt: '$10',
    pb: '$8',
    px: '$4',
  },
});

const FooterContainer = styled('div', {
  maxWidth: '1240px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
});

const TopRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1.2fr 0.8fr',
  gap: '$8',
  alignItems: 'start',

  '@tablet': {
    gridTemplateColumns: '1fr',
    gap: '$6',
  },
});

const IdentityBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  maxWidth: '480px',
});

const NameTitle = styled('h3', {
  fontSize: '$lg',
  fontWeight: '$bold',
  letterSpacing: '-0.02em',
  color: '$textPrimary',
  margin: 0,
});

const RoleText = styled('p', {
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.6,
  margin: 0,
});

const NavBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const NavTitle = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '$textMuted',
});

const NavGrid = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$4',
});

const FooterLink = styled('a', {
  fontSize: '$sm',
  color: '$textSecondary',
  textDecoration: 'none',
  transition: 'color 0.15s ease',

  '&:hover': {
    color: '$textPrimary',
  },
});

const MiddleDivider = styled('hr', {
  border: 'none',
  height: '1px',
  backgroundColor: '$border',
  margin: 0,
});

const BottomRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$4',
  flexWrap: 'wrap',
  fontSize: '$xs',
  color: '$textMuted',
  fontFamily: '$mono',
});

const LocationColophon = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
});

const BackToTopButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '$xs',
  color: '$textSecondary',
  backgroundColor: 'transparent',
  border: '1px solid $border',
  borderRadius: '$xs',
  padding: '6px 12px',
  cursor: 'pointer',
  transition: 'all 0.15s ease',

  '&:hover': {
    color: '$textPrimary',
    borderColor: '$borderStrong',
    backgroundColor: '$bgCard',
  },
});

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <TopRow>
          <IdentityBlock>
            <NameTitle>{BRAND.name}</NameTitle>
            <RoleText>
              Full Stack Python Developer with hands-on project experience in Python, Django, REST APIs, MySQL, and ReactJS. Available for engineering roles.
            </RoleText>
            <SocialLinks variant="text" style={{ marginTop: '8px' }} />
          </IdentityBlock>

          <NavBlock>
            <NavTitle>Directory</NavTitle>
            <NavGrid>
              {NAV_LINKS.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
              <FooterLink
                href={BRAND.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Abdul_Ameen_Full_Stack_Python_Developer_Resume.pdf"
                style={{ fontWeight: 600, color: '#C2410C' }}
              >
                Download Resume ↗
              </FooterLink>
            </NavGrid>
          </NavBlock>
        </TopRow>

        <MiddleDivider />

        <BottomRow>
          <LocationColophon>
            <MapPin size={12} color="#C2410C" />
            Hyderabad, Telangana, India · Built with React & Stitches
          </LocationColophon>

          <div>
            © {new Date().getFullYear()} {BRAND.name}. Designed & Built Personally.
          </div>

          <BackToTopButton onClick={scrollToTop} aria-label="Back to top of page">
            Top of Page
            <ArrowUp size={13} />
          </BackToTopButton>
        </BottomRow>
      </FooterContainer>
    </FooterWrapper>
  );
}
