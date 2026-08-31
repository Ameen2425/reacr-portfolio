import { styled } from '../../styles/stitches.config';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { BRAND } from '../../styles/theme';

const SocialContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  flexWrap: 'wrap',
});

const SocialIconLink = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '42px',
  borderRadius: '$md',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid $border',
  color: '$textSecondary',
  transition: 'all 0.2s ease',

  '&:hover': {
    color: '$primaryLight',
    borderColor: '$primary',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.25)',
  },

  '&:focus-visible': {
    boxShadow: '0 0 0 2px #8B5CF6',
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
  borderRadius: '$sm',
  border: '1px solid $border',
  backgroundColor: '$bgCard',
  transition: 'all 0.2s ease',

  '&:hover': {
    color: '$white',
    borderColor: '$primary',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
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
        <GithubIcon size={18} />
      </SocialIconLink>

      <SocialIconLink
        href={BRAND.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <LinkedinIcon size={18} />
      </SocialIconLink>

      <SocialIconLink
        href={`mailto:${BRAND.email}`}
        aria-label="Send Email"
      >
        <Mail size={18} />
      </SocialIconLink>
    </SocialContainer>
  );
}
