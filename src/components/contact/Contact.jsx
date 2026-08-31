import { useState } from 'react';
import { styled } from '../../styles/stitches.config';
import { BRAND } from '../../styles/theme';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { Mail, Phone, Send, Copy, Check, Sparkles } from 'lucide-react';

const ContactSection = styled('section', {
  py: '$20',
  px: '$4',
  backgroundColor: '$bg',
  position: 'relative',

  '@mobile': {
    py: '$14',
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
  gap: '$8',
  alignItems: 'start',

  '@tablet': {
    gridTemplateColumns: '1fr',
  },
});

const InfoCard = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$2xl',
  p: '$8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.4) 50%, transparent 100%)',
  },

  '@mobile': {
    p: '$5',
    borderRadius: '$lg',
  },

  '@smallMobile': {
    p: '$4',
  },
});

const InfoHeading = styled('h3', {
  fontSize: '$2xl',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.02em',
  margin: 0,
});

const InfoText = styled('p', {
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.65,
  margin: '8px 0 0 0',
});

const ChannelsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const ChannelItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$4',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid $border',
  borderRadius: '$lg',
  transition: 'all 0.25s ease',
  gap: '$2',
  flexWrap: 'wrap',

  '&:hover': {
    borderColor: 'rgba(139, 92, 246, 0.4)',
    backgroundColor: 'rgba(139, 92, 246, 0.06)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px -2px rgba(0, 0, 0, 0.5), 0 0 16px -4px rgba(139, 92, 246, 0.2)',
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
  size: '38px',
  minWidth: '38px',
  borderRadius: '$md',
  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  color: '$primaryLight',
});

const ChannelLabel = styled('span', {
  fontSize: '0.7rem',
  fontFamily: '$mono',
  color: '$textMuted',
  display: 'block',
});

const ChannelValue = styled('a', {
  fontSize: '$sm',
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
  gap: '5px',
  fontFamily: '$mono',
  fontSize: '0.72rem',
  fontWeight: '$medium',
  color: '$textSecondary',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid $border',
  borderRadius: '$sm',
  px: '$3',
  py: '6px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  flexShrink: 0,

  '&:hover': {
    color: '$white',
    borderColor: '$primary',
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    boxShadow: '0 0 12px rgba(139, 92, 246, 0.3)',
  },
});

const AvailabilityNotice = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$3',
  p: '$4',
  borderRadius: '$lg',
  backgroundColor: 'rgba(16, 185, 129, 0.06)',
  border: '1px dashed rgba(16, 185, 129, 0.35)',
  fontSize: '$xs',
  color: '$textSecondary',
  lineHeight: 1.5,

  '& svg': {
    color: '#34D399',
    flexShrink: 0,
    marginTop: '2px',
  },
});

const FormCard = styled('form', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$2xl',
  p: '$8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.4) 50%, transparent 100%)',
  },

  '@mobile': {
    p: '$5',
    borderRadius: '$lg',
  },

  '@smallMobile': {
    p: '$4',
  },
});

const FormGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

const FormLabel = styled('label', {
  fontFamily: '$mono',
  fontSize: '0.74rem',
  fontWeight: '$medium',
  color: '$textSecondary',
});

const Input = styled('input', {
  width: '100%',
  minHeight: '46px',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '$md',
  px: '$4',
  color: '$textPrimary',
  fontSize: '$sm',
  outline: 'none',
  transition: 'all 0.25s ease',
  boxSizing: 'border-box',

  '&:focus': {
    borderColor: '$primary',
    backgroundColor: 'rgba(139, 92, 246, 0.06)',
    boxShadow: '0 0 0 1px #8B5CF6, 0 0 16px -2px rgba(139, 92, 246, 0.3)',
  },

  '&::placeholder': {
    color: '$textMuted',
  },
});

const TextArea = styled('textarea', {
  width: '100%',
  minHeight: '120px',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '$md',
  p: '$4',
  color: '$textPrimary',
  fontSize: '$sm',
  outline: 'none',
  resize: 'vertical',
  transition: 'all 0.25s ease',
  boxSizing: 'border-box',

  '&:focus': {
    borderColor: '$primary',
    backgroundColor: 'rgba(139, 92, 246, 0.06)',
    boxShadow: '0 0 0 1px #8B5CF6, 0 0 16px -2px rgba(139, 92, 246, 0.3)',
  },

  '&::placeholder': {
    color: '$textMuted',
  },
});

const SuccessAlert = styled('div', {
  p: '$4',
  borderRadius: '$md',
  backgroundColor: 'rgba(16, 185, 129, 0.12)',
  border: '1px solid rgba(16, 185, 129, 0.35)',
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
                    <Mail size={18} />
                  </ChannelIcon>
                  <div style={{ minWidth: 0 }}>
                    <ChannelLabel>Email</ChannelLabel>
                    <ChannelValue href={`mailto:${BRAND.email}`}>
                      {BRAND.email}
                    </ChannelValue>
                  </div>
                </ChannelLeft>
                <CopyButton onClick={handleCopyEmail} aria-label="Copy email address">
                  {copied ? <Check size={13} color="#34D399" /> : <Copy size={13} />}
                  {copied ? 'Copied' : 'Copy'}
                </CopyButton>
              </ChannelItem>

              <ChannelItem>
                <ChannelLeft>
                  <ChannelIcon>
                    <Phone size={18} />
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
                    <GithubIcon size={18} />
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
                    <LinkedinIcon size={18} />
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
              <Sparkles size={16} />
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
                <Check size={15} color="#34D399" />
                <span>Opening email client... Thank you for reaching out!</span>
              </SuccessAlert>
            )}

            <Button
              type="submit"
              variant="purple"
              size="lg"
              fullWidth
            >
              <Send size={18} />
              Send Message ↗
            </Button>
          </FormCard>
        </TwoColGrid>
      </ContactContainer>
    </ContactSection>
  );
}
