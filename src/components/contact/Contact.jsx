import { useState } from 'react';
import { styled } from '../../styles/stitches.config';
import { BRAND } from '../../styles/theme';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight, FileText } from 'lucide-react';

const ContactSection = styled('section', {
  py: '$16',
  px: '$6',
  backgroundColor: '$bgSecondary',
  borderBottom: '1px solid $border',

  '@mobile': {
    py: '$12',
    px: '$4',
  },
});

const ContactContainer = styled('div', {
  maxWidth: '1240px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
});

const ContactGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1.05fr 0.95fr',
  gap: '$12',
  alignItems: 'start',

  '@tablet': {
    gridTemplateColumns: '1fr',
    gap: '$8',
  },
});

const InfoCol = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});

const IntroText = styled('p', {
  fontSize: '$base',
  color: '$textSecondary',
  lineHeight: 1.65,
  margin: 0,
});

const ChannelsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const ChannelCard = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$xs',
  padding: '$4 $5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$3',
  transition: 'border-color 0.2s ease',

  '&:hover': {
    borderColor: '$borderStrong',
  },

  '@mobile': {
    padding: '$3 $4',
  },
});

const ChannelLeft = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  minWidth: 0,
});

const ChannelIcon = styled('div', {
  size: '34px',
  minWidth: '34px',
  borderRadius: '$xs',
  backgroundColor: '$bgSecondary',
  border: '1px solid $border',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$accent',
});

const ChannelLabel = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
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
    color: '$accent',
  },
});

const ChannelStatic = styled('span', {
  fontSize: '$sm',
  fontWeight: '$semibold',
  color: '$textPrimary',
  display: 'block',
});

const CopyButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  fontFamily: '$mono',
  fontSize: '0.72rem',
  fontWeight: '$medium',
  padding: '6px 12px',
  borderRadius: '$xs',
  border: '1px solid $border',
  backgroundColor: '$bgSecondary',
  color: '$textPrimary',
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  flexShrink: 0,

  '&:hover': {
    borderColor: '$borderStrong',
    backgroundColor: '$bgCard',
  },
});

const AvailabilityNotice = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$3',
  padding: '$4 $5',
  borderRadius: '$xs',
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  fontSize: '$xs',
  color: '$textSecondary',
  lineHeight: 1.6,
});

const FormCard = styled('form', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$sm',
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  '@mobile': {
    padding: '$5',
  },
});

const FormTitle = styled('h3', {
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.01em',
  margin: 0,
});

const FormGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

const FormLabel = styled('label', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  color: '$textMuted',
});

const Input = styled('input', {
  height: '42px',
  padding: '0 12px',
  borderRadius: '$xs',
  border: '1px solid $border',
  backgroundColor: '$bg',
  color: '$textPrimary',
  fontSize: '$sm',
  outline: 'none',
  transition: 'border-color 0.15s ease',

  '&:focus': {
    borderColor: '$textPrimary',
    backgroundColor: '$bgCard',
  },

  '&::placeholder': {
    color: '$textFaint',
  },
});

const Textarea = styled('textarea', {
  minHeight: '110px',
  padding: '10px 12px',
  borderRadius: '$xs',
  border: '1px solid $border',
  backgroundColor: '$bg',
  color: '$textPrimary',
  fontSize: '$sm',
  outline: 'none',
  resize: 'vertical',
  transition: 'border-color 0.15s ease',

  '&:focus': {
    borderColor: '$textPrimary',
    backgroundColor: '$bgCard',
  },

  '&::placeholder': {
    color: '$textFaint',
  },
});

const FeedbackNotice = styled('div', {
  padding: '$3 $4',
  borderRadius: '$xs',
  backgroundColor: '$successLight',
  border: '1px solid $successBorder',
  color: '$success',
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
          label="// 07 · CONTACT & INQUIRIES"
          title="Direct contact & professional inquiries."
          subtitle="Interested in discussing a full-stack developer opening, a project collaboration, or reviewing technical work? Reach out directly."
        />

        <ContactGrid>
          <InfoCol>
            <IntroText>
              I am actively seeking an entry-level or junior role as a Full Stack Python Developer, Backend Engineer, or React Developer. I am based in Hyderabad, India and available for both on-site and remote positions.
            </IntroText>

            <ChannelsList>
              <ChannelCard>
                <ChannelLeft>
                  <ChannelIcon>
                    <Mail size={16} />
                  </ChannelIcon>
                  <div>
                    <ChannelLabel>Email Address</ChannelLabel>
                    <ChannelValue href={`mailto:${BRAND.email}`}>
                      {BRAND.email}
                    </ChannelValue>
                  </div>
                </ChannelLeft>
                <CopyButton onClick={handleCopyEmail} aria-label="Copy email address">
                  {copied ? <Check size={13} color="#15803D" /> : <Copy size={13} />}
                  {copied ? 'Copied' : 'Copy'}
                </CopyButton>
              </ChannelCard>

              <ChannelCard>
                <ChannelLeft>
                  <ChannelIcon>
                    <Phone size={16} />
                  </ChannelIcon>
                  <div>
                    <ChannelLabel>Phone Number</ChannelLabel>
                    <ChannelValue href={`tel:${BRAND.phone.replace(/\s+/g, '')}`}>
                      {BRAND.phone}
                    </ChannelValue>
                  </div>
                </ChannelLeft>
              </ChannelCard>

              <ChannelCard>
                <ChannelLeft>
                  <ChannelIcon>
                    <MapPin size={16} />
                  </ChannelIcon>
                  <div>
                    <ChannelLabel>Location</ChannelLabel>
                    <ChannelStatic>{BRAND.location}</ChannelStatic>
                  </div>
                </ChannelLeft>
                <Badge variant="pill">IST / UTC+5:30</Badge>
              </ChannelCard>

              <ChannelCard>
                <ChannelLeft>
                  <ChannelIcon>
                    <GithubIcon size={16} />
                  </ChannelIcon>
                  <div>
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
                <a
                  href={BRAND.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#71747D' }}
                  aria-label="Open GitHub profile"
                >
                  <ArrowUpRight size={15} />
                </a>
              </ChannelCard>

              <ChannelCard>
                <ChannelLeft>
                  <ChannelIcon>
                    <LinkedinIcon size={16} />
                  </ChannelIcon>
                  <div>
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
                <a
                  href={BRAND.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#71747D' }}
                  aria-label="Open LinkedIn profile"
                >
                  <ArrowUpRight size={15} />
                </a>
              </ChannelCard>
            </ChannelsList>

            <AvailabilityNotice>
              <div>
                <strong>Notice of Availability:</strong> Immediate availability for full-time engineering employment. Complete official resume and transcripts available upon request.
              </div>
            </AvailabilityNotice>
          </InfoCol>

          <FormCard onSubmit={handleSubmit}>
            <FormTitle>Send a Direct Message</FormTitle>

            <FormGroup>
              <FormLabel htmlFor="contact-name">Your Name</FormLabel>
              <Input
                id="contact-name"
                name="name"
                placeholder="e.g. Jane Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="contact-email">Your Email</FormLabel>
              <Input
                id="contact-email"
                type="email"
                name="email"
                placeholder="e.g. jane@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="contact-subject">Subject</FormLabel>
              <Input
                id="contact-subject"
                name="subject"
                placeholder="e.g. Full Stack Python Developer Opportunity"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="contact-message">Message</FormLabel>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="Write your note, job description, or inquiry here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <Button
              type="submit"
              variant="primary"
              size="md"
              style={{ width: '100%', mt: '8px' }}
            >
              <Send size={15} />
              Open Email Composer
            </Button>

            {submitted && (
              <FeedbackNotice>
                <Check size={14} />
                Email client launched with pre-filled details. Thank you!
              </FeedbackNotice>
            )}
          </FormCard>
        </ContactGrid>
      </ContactContainer>
    </ContactSection>
  );
}
