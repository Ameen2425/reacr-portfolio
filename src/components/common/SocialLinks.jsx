import { styled } from '../../styles/stitches.config';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { BRAND } from '../../styles/theme';

const SocialContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  flexWrap: 'wrap',
});

const SocialIconLink = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '38px',
  borderRadius: '$sm',
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  color: '$textSecondary',
  transition: 'all 0.18s ease',

  '&:hover': {
    color: '$textPrimary',
    borderColor: '$textPrimary',
    backgroundColor: '$bgCardHover',
    transform: 'translateY(-1px)',
    boxShadow: '$subtle',
  },

  '&:focus-visible': {
    outline: '2px solid $textPrimary',
  },
});

const SocialTextLink = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '$xs',
  color: '$textSecondary',
  textDecoration: 'none',
  padding: '6px 12px',
  borderRadius: '$xs',
  border: '1px solid $border',
  backgroundColor: '$bgCard',
  transition: 'all 0.18s ease',

  '&:hover': {
    color: '$textPrimary',
    borderColor: '$textPrimary',
    backgroundColor: '$bgCardHover',
    transform: 'translateY(-1px)',
  },
});

export default function SocialLinks({ variant = 'icons', ...props }) {
  if (variant === 'text') {
    return (
      <SocialContainer {...props}>
        <SocialTextLink
          href={BRAND.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <GithubIcon size={14} />
          GitHub
          <ArrowUpRight size={12} />
        </SocialTextLink>

        <SocialTextLink
          href={BRAND.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon size={14} />
          LinkedIn
          <ArrowUpRight size={12} />
        </SocialTextLink>

        <SocialTextLink
          href={`mailto:${BRAND.email}`}
          aria-label="Send Email"
        >
          <Mail size={14} />
          Email
        </SocialTextLink>
      </SocialContainer>
    );
  }

  return (
    <SocialContainer {...props}>
      <SocialIconLink
        href={BRAND.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
      >
        <GithubIcon size={17} />
      </SocialIconLink>

      <SocialIconLink
        href={BRAND.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <LinkedinIcon size={17} />
      </SocialIconLink>

      <SocialIconLink
        href={`mailto:${BRAND.email}`}
        aria-label="Send Email"
      >
        <Mail size={17} />
      </SocialIconLink>
    </SocialContainer>
  );
}
