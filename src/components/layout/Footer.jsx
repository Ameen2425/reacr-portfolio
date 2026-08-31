import { styled } from '../../styles/stitches.config';
import { BRAND, NAV_LINKS } from '../../styles/theme';
import SocialLinks from '../common/SocialLinks';
import { ArrowUp } from 'lucide-react';

const FooterWrapper = styled('footer', {
  backgroundColor: '$bgSecondary',
  borderTop: '1px solid $border',
  pt: '$12',
  pb: '$8',
  px: '$4',
  mt: 'auto',

  '@mobile': {
    pt: '$10',
    pb: '$6',
    px: '$3',
  },
});

const FooterContainer = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
});

const TopSection = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '$6',

  '@mobile': {
    flexDirection: 'column',
    gap: '$5',
  },
});

const BrandBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  maxWidth: '380px',
  width: '100%',
});

const Logo = styled('a', {
  fontSize: '$xl',
  fontWeight: '$extrabold',
  color: '$textPrimary',
  letterSpacing: '-0.03em',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',

  '&:hover': {
    color: '$primaryLight',
  },
});

const Subtitle = styled('p', {
  color: '$textSecondary',
  fontSize: '$xs',
  lineHeight: 1.6,
  margin: 0,
});

const TechPill = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.7rem',
  color: '$primaryLight',
  backgroundColor: 'rgba(139, 92, 246, 0.1)',
  border: '1px solid rgba(139, 92, 246, 0.2)',
  borderRadius: '$full',
  px: '$3',
  py: '2px',
  display: 'inline-block',
  width: 'fit-content',
  mt: '4px',
});

const QuickLinks = styled('div', {
  display: 'flex',
  gap: '$8',
  flexWrap: 'wrap',

  '@mobile': {
    gap: '$5',
    width: '100%',
  },
});

const LinkGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  minWidth: '100px',
});

const GroupTitle = styled('h4', {
  fontFamily: '$mono',
  fontSize: '0.68rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: '$textMuted',
  mb: '2px',
});

const FooterLink = styled('a', {
  color: '$textSecondary',
  fontSize: '$xs',
  textDecoration: 'none',
  transition: 'all 0.2s ease',

  '&:hover': {
    color: '$primaryLight',
    transform: 'translateX(2px)',
  },
});

const BottomSection = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  pt: '$6',
  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  color: '$textMuted',
  fontSize: '0.7rem',
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
  gap: '5px',
  color: '$textSecondary',
  fontSize: '0.7rem',
  fontFamily: '$mono',
  padding: '5px 10px',
  borderRadius: '$full',
  border: '1px solid $border',
  backgroundColor: '$bgCard',
  transition: 'all 0.2s ease',

  '&:hover': {
    color: '$white',
    borderColor: '$primary',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
  },
});

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <TopSection>
          <BrandBlock>
            <Logo href="#home">
              <span>{BRAND.logo}</span>
            </Logo>
            <Subtitle>
              Full-Stack Python Developer specializing in building scalable web applications and AI-driven solutions.
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
            <ArrowUp size={12} />
            Back to Top
          </BackToTopBtn>
        </BottomSection>
      </FooterContainer>
    </FooterWrapper>
  );
}
