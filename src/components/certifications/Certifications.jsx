import { styled } from '../../styles/stitches.config';
import { certifications } from '../../data/certifications';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { Brain, Cpu, Sparkles, MessageSquare, Award, CheckCircle } from 'lucide-react';

const iconMap = {
  Brain,
  Cpu,
  Sparkles,
  MessageSquare,
};

const CertificationsSection = styled('section', {
  py: '$16',
  px: '$4',
  backgroundColor: '$bgSecondary',
  position: 'relative',
  borderTop: '1px solid $border',
  borderBottom: '1px solid $border',

  '@mobile': {
    py: '$12',
    px: '$3',
  },
});

const CertContainer = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
});

const CertGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$4',

  '@mobile': {
    gridTemplateColumns: '1fr',
    gap: '$3',
  },
});

const CertCard = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$xl',
  p: '$5',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  position: 'relative',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  width: '100%',

  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: 'rgba(139, 92, 246, 0.4)',
    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.6), 0 0 20px rgba(139, 92, 246, 0.15)',
  },

  '@mobile': {
    p: '$4',
    borderRadius: '$lg',
  },

  '@smallMobile': {
    p: '$3',
  },
});

const CardHeader = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '$2',
  flexWrap: 'wrap',
});

const IconWrapper = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '38px',
  borderRadius: '$md',
  backgroundColor: 'rgba(139, 92, 246, 0.1)',
  border: '1px solid rgba(139, 92, 246, 0.25)',
  color: '$primaryLight',
  transition: 'all 0.2s ease',

  [`${CertCard}:hover &`]: {
    backgroundColor: '$primary',
    color: '$white',
    boxShadow: '0 0 12px rgba(139, 92, 246, 0.5)',
  },
});

const CertTitle = styled('h3', {
  fontSize: '$base',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.02em',
  margin: 0,
  wordBreak: 'break-word',
});

const IssuerText = styled('p', {
  fontSize: '$xs',
  fontWeight: '$medium',
  color: '$primaryLight',
  margin: '2px 0 0 0',
  wordBreak: 'break-word',
});

const CertDesc = styled('p', {
  fontSize: '0.75rem',
  color: '$textSecondary',
  lineHeight: 1.5,
  margin: 0,
});

const VerifiedRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontFamily: '$mono',
  fontSize: '0.7rem',
  color: '$textMuted',
  mt: 'auto',
  pt: '$2',
  borderTop: '1px solid $border',
  flexWrap: 'wrap',
});

export default function Certifications() {
  return (
    <CertificationsSection id="certifications">
      <CertContainer>
        <SectionHeading
          label="05 / CREDENTIALS"
          title="My Certifications"
          subtitle="Specialized domain training and credentials across Machine Learning, AI, and Prompt Engineering."
          align="center"
        />

        <CertGrid>
          {certifications.map((cert) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <CertCard key={cert.id}>
                <CardHeader>
                  <IconWrapper>
                    <Icon size={20} />
                  </IconWrapper>
                  <Badge variant="pill">{cert.tag}</Badge>
                </CardHeader>

                <div>
                  <CertTitle>{cert.title}</CertTitle>
                  <IssuerText>{cert.issuer}</IssuerText>
                </div>

                <CertDesc>{cert.description}</CertDesc>

                <VerifiedRow>
                  <CheckCircle size={12} color="#22C55E" />
                  <span>{cert.category}</span>
                </VerifiedRow>
              </CertCard>
            );
          })}
        </CertGrid>
      </CertContainer>
    </CertificationsSection>
  );
}
