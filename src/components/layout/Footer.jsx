import { styled } from '../../styles/stitches.config';
import { BRAND, NAV_LINKS } from '../../styles/theme';
import SocialLinks from '../common/SocialLinks';
import { ArrowUp } from 'lucide-react';

const FooterWrapper = styled('footer', {
  backgroundColor: '$bgSecondary',
  borderTop: '1px solid $border',
  pt: '$24',
  pb: '$10',
  px: '$4',
  mt: 'auto',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '10%',
    right: '10%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.4) 50%, transparent 100%)',
  },

  '@mobile': {
    pt: '$16',
    pb: '$6',
    px: '$3',
  },
});

const FooterContainer = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
});

const TopSection = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '$8',

  '@mobile': {
    flexDirection: 'column',
    gap: '$6',
  },
});

const BrandBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  maxWidth: '380px',
  width: '100%',
});

const Logo = styled('a', {
  fontSize: '$2xl',
  fontWeight: '$black',
  color: '$textPrimary',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$3',

  '&:hover': {
    color: '$primaryLight',
  },
});

const LogoImg = styled('img', {
  size: '34px',
  minWidth: '34px',
  borderRadius: '8px',
  objectFit: 'cover',
  border: '1px solid rgba(139, 92, 246, 0.4)',
  boxShadow: '0 0 16px rgba(139, 92, 246, 0.45)',
  transition: 'transform 0.25s ease',

  [`${Logo}:hover &`]: {
    transform: 'scale(1.08)',
  },
});

const Subtitle = styled('p', {
  color: '$textSecondary',
  fontSize: '$sm',
  lineHeight: 1.65,
  margin: 0,
});

const TechPill = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.74rem',
  color: '$primaryLight',
  backgroundColor: 'rgba(139, 92, 246, 0.1)',
  border: '1px solid rgba(139, 92, 246, 0.25)',
  borderRadius: '$full',
  px: '$3',
  py: '3px',
  display: 'inline-block',
  width: 'fit-content',
  mt: '6px',
});

const QuickLinks = styled('div', {
  display: 'flex',
  gap: '$10',
  flexWrap: 'wrap',

  '@mobile': {
    gap: '$6',
    width: '100%',
  },
});

const LinkGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  minWidth: '100px',
});

const GroupTitle = styled('h4', {
  fontFamily: '$mono',
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: '$textMuted',
  mb: '4px',
});

const FooterLink = styled('a', {
  color: '$textSecondary',
  fontSize: '$sm',
  textDecoration: 'none',
  transition: 'all 0.2s ease',

  '&:hover': {
    color: '$primaryLight',
    transform: 'translateX(3px)',
  },
});

const BottomSection = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  pt: '$6',
  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  color: '$textMuted',
  fontSize: '$xs',
  flexWrap: 'wrap',
  gap: '$3',

  '@mobile': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const BackToTopBtn = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  color: '$textSecondary',
  fontSize: '$xs',
  fontFamily: '$mono',
  padding: '6px 14px',
  borderRadius: '$full',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backgroundColor: '$bgCard',
  transition: 'all 0.25s ease',

  '&:hover': {
    color: '$white',
    borderColor: '$primary',
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
    transform: 'translateY(-2px)',
  },
});

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <TopSection>
          <BrandBlock>
            <Logo href="#home">
              <LogoImg src={BRAND.logoImage} alt={`${BRAND.name} Logo`} />
              <span>{BRAND.logo}</span>
            </Logo>
            <Subtitle>
              Full Stack Python Developer building scalable web applications with Django REST APIs and ReactJS frontends.
            </Subtitle>
            <TechPill>{BRAND.tagline}</TechPill>
          </BrandBlock>

          <QuickLinks>
            <LinkGroup>
              <GroupTitle>Navigation</GroupTitle>
              {NAV_LINKS.slice(0, 4).map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </LinkGroup>

            <LinkGroup>
              <GroupTitle>Career</GroupTitle>
              {NAV_LINKS.slice(4).map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
              <FooterLink
                href={BRAND.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Abdul_Ameen_Full_Stack_Python_Developer_Resume.pdf"
              >
                Download Resume ↗
              </FooterLink>
            </LinkGroup>

            <LinkGroup>
              <GroupTitle>Connect</GroupTitle>
              <SocialLinks variant="text" />
            </LinkGroup>
          </QuickLinks>
        </TopSection>

        <BottomSection>
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. • Built with React & Stitches
          </div>
          <BackToTopBtn href="#home" aria-label="Back to top of page">
            <ArrowUp size={13} />
            Back to Top
          </BackToTopBtn>
        </BottomSection>
      </FooterContainer>
    </FooterWrapper>
  );
}
