import { useState } from 'react';
import { styled } from '../../styles/stitches.config';
import { BRAND } from '../../styles/theme';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { Mail, Phone, Send, Copy, Check, Sparkles } from 'lucide-react';

const ContactSection = styled('section', {
  py: '$16',
  px: '$4',
  backgroundColor: '$bg',
  position: 'relative',

  '@mobile': {
    py: '$12',
    px: '$3',
  },
});

const ContactContainer = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
});

const TwoColGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1.2fr',
  gap: '$6',
  alignItems: 'start',

  '@tablet': {
    gridTemplateColumns: '1fr',
  },
});

const InfoCard = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$xl',
  p: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  width: '100%',

  '@mobile': {
    p: '$4',
    borderRadius: '$lg',
  },

  '@smallMobile': {
    p: '$3',
  },
});

const InfoHeading = styled('h3', {
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.02em',
  margin: 0,
});

const InfoText = styled('p', {
  fontSize: '$xs',
  color: '$textSecondary',
  lineHeight: 1.6,
  margin: '6px 0 0 0',
});

const ChannelsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const ChannelItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$3',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid $border',
  borderRadius: '$md',
  transition: 'all 0.2s ease',
  gap: '$2',
  flexWrap: 'wrap',

  '&:hover': {
    borderColor: '$primary',
    backgroundColor: 'rgba(139, 92, 246, 0.05)',
  },
});

const ChannelLeft = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  minWidth: 0,
  flex: 1,
});

const ChannelIcon = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '34px',
  minWidth: '34px',
  borderRadius: '$sm',
  backgroundColor: 'rgba(139, 92, 246, 0.1)',
  color: '$primaryLight',
});

const ChannelLabel = styled('span', {
  fontSize: '0.68rem',
  fontFamily: '$mono',
  color: '$textMuted',
  display: 'block',
});

const ChannelValue = styled('a', {
  fontSize: '$xs',
  fontWeight: '$semibold',
  color: '$textPrimary',
  textDecoration: 'none',
  wordBreak: 'break-all',
  display: 'block',

  '&:hover': {
    color: '$primaryLight',
  },
});

const CopyButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  fontFamily: '$mono',
  fontSize: '0.68rem',
  color: '$textSecondary',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid $border',
  borderRadius: '$xs',
  px: '$2',
  py: '5px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  flexShrink: 0,

  '&:hover': {
    color: '$white',
    borderColor: '$primary',
    backgroundColor: 'rgba(139, 92, 246, 0.15)',
  },
});

const AvailabilityNotice = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$2',
  p: '$3',
  borderRadius: '$md',
  backgroundColor: 'rgba(34, 197, 94, 0.05)',
  border: '1px dashed rgba(34, 197, 94, 0.3)',
  fontSize: '0.75rem',
  color: '$textSecondary',
  lineHeight: 1.45,

  '& svg': {
    color: '$success',
    flexShrink: 0,
    marginTop: '2px',
  },
});

const FormCard = styled('form', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$xl',
  p: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  width: '100%',

  '@mobile': {
    p: '$4',
    borderRadius: '$lg',
  },

  '@smallMobile': {
    p: '$3',
  },
});

const FormGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const FormLabel = styled('label', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  fontWeight: '$medium',
  color: '$textSecondary',
});

const Input = styled('input', {
  width: '100%',
  minHeight: '44px',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid $border',
  borderRadius: '$md',
  px: '$3',
  color: '$textPrimary',
  fontSize: '$sm',
  outline: 'none',
  transition: 'all 0.2s ease',
  boxSizing: 'border-box',

  '&:focus': {
    borderColor: '$primary',
    backgroundColor: 'rgba(139, 92, 246, 0.05)',
    boxShadow: '0 0 0 1px #8B5CF6',
  },

  '&::placeholder': {
    color: '$textMuted',
  },
});

const TextArea = styled('textarea', {
  width: '100%',
  minHeight: '110px',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid $border',
  borderRadius: '$md',
  p: '$3',
  color: '$textPrimary',
  fontSize: '$sm',
  outline: 'none',
  resize: 'vertical',
  transition: 'all 0.2s ease',
  boxSizing: 'border-box',

  '&:focus': {
    borderColor: '$primary',
    backgroundColor: 'rgba(139, 92, 246, 0.05)',
    boxShadow: '0 0 0 1px #8B5CF6',
  },

  '&::placeholder': {
    color: '$textMuted',
  },
});

const SuccessAlert = styled('div', {
  p: '$3',
  borderRadius: '$md',
  backgroundColor: 'rgba(34, 197, 94, 0.1)',
  border: '1px solid rgba(34, 197, 94, 0.3)',
  color: '$textPrimary',
  fontSize: '$xs',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
});

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${BRAND.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionHeading
          label="06 / CONTACT"
          title="Let's Work Together"
          subtitle="Have an opportunity, project, or idea? Send me a message and let's connect."
          align="center"
        />

        <TwoColGrid>
          {/* Left Column: Direct Contact Info */}
          <InfoCard>
            <div>
              <InfoHeading>Get in Touch</InfoHeading>
              <InfoText>
                I am actively looking for Full-Stack Python Developer, Backend Developer, and React Developer opportunities. Feel free to reach out directly.
              </InfoText>
            </div>

            <ChannelsList>
              <ChannelItem>
                <ChannelLeft>
                  <ChannelIcon>
                    <Mail size={16} />
                  </ChannelIcon>
                  <div style={{ minWidth: 0 }}>
                    <ChannelLabel>Email</ChannelLabel>
                    <ChannelValue href={`mailto:${BRAND.email}`}>
                      {BRAND.email}
                    </ChannelValue>
                  </div>
                </ChannelLeft>
                <CopyButton onClick={handleCopyEmail} aria-label="Copy email address">
                  {copied ? <Check size={12} color="#22C55E" /> : <Copy size={12} />}
                  {copied ? 'Copied' : 'Copy'}
                </CopyButton>
              </ChannelItem>

              <ChannelItem>
                <ChannelLeft>
                  <ChannelIcon>
                    <Phone size={16} />
                  </ChannelIcon>
                  <div style={{ minWidth: 0 }}>
                    <ChannelLabel>Phone</ChannelLabel>
                    <ChannelValue href={`tel:${BRAND.phone.replace(/\s+/g, '')}`}>
                      {BRAND.phone}
                    </ChannelValue>
                  </div>
                </ChannelLeft>
              </ChannelItem>

              <ChannelItem>
                <ChannelLeft>
                  <ChannelIcon>
                    <GithubIcon size={16} />
                  </ChannelIcon>
                  <div style={{ minWidth: 0 }}>
                    <ChannelLabel>GitHub</ChannelLabel>
                    <ChannelValue
                      href={BRAND.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/Ameen2425
                    </ChannelValue>
                  </div>
                </ChannelLeft>
              </ChannelItem>

              <ChannelItem>
                <ChannelLeft>
                  <ChannelIcon>
                    <LinkedinIcon size={16} />
                  </ChannelIcon>
                  <div style={{ minWidth: 0 }}>
                    <ChannelLabel>LinkedIn</ChannelLabel>
                    <ChannelValue
                      href={BRAND.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/ameenabdul
                    </ChannelValue>
                  </div>
                </ChannelLeft>
              </ChannelItem>
            </ChannelsList>

            <AvailabilityNotice>
              <Sparkles size={14} />
              <span>
                <strong>Current Status:</strong> Ready for immediate onboarding in Full-Stack Python, Django, React, or Software Engineering roles.
              </span>
            </AvailabilityNotice>
          </InfoCard>

          {/* Right Column: Contact Form */}
          <FormCard onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Opportunity Discussion / Project Inquiry"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <TextArea
                id="message"
                name="message"
                placeholder="Hello Abdul, I'd like to discuss a role or project..."
                required
                value={formData.message}
                onChange={handleChange}
              />
            </FormGroup>

            {submitted && (
              <SuccessAlert>
                <Check size={14} color="#22C55E" />
                <span>Opening email client... Thank you for reaching out!</span>
              </SuccessAlert>
            )}

            <Button
              type="submit"
              variant="purple"
              size="md"
              fullWidth
            >
              <Send size={16} />
              Send Message ↗
            </Button>
          </FormCard>
        </TwoColGrid>
      </ContactContainer>
    </ContactSection>
  );
}
