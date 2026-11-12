import { styled } from '../../styles/stitches.config';
import { certifications } from '../../data/certifications';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';

const CertSection = styled('section', {
  py: '$16',
  px: '$6',
  backgroundColor: '$bg',
  borderBottom: '1px solid $border',

  '@mobile': {
    py: '$12',
    px: '$4',
  },
});

const CertContainer = styled('div', {
  maxWidth: '1240px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
});

const CertGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$6',

  '@tablet': {
    gridTemplateColumns: '1fr',
  },
});

const CertCard = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$sm',
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$4',
  transition: 'border-color 0.2s ease, transform 0.2s ease',

  '&:hover': {
    borderColor: '$borderStrong',
    transform: 'translateY(-1px)',
  },

  '@mobile': {
    padding: '$5',
  },
});

const CardTop = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});

const HeaderMeta = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',
  flexWrap: 'wrap',
});

const IssuerTag = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.74rem',
  fontWeight: '$semibold',
  color: '$accent',
});

const CertTitle = styled('h3', {
  fontSize: '$base',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.01em',
  margin: 0,
});

const CertDesc = styled('p', {
  fontSize: '$xs',
  color: '$textSecondary',
  lineHeight: 1.6,
  margin: 0,
});

const CardBottom = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  pt: '$3',
  borderTop: '1px solid $borderLight',
});

const VerificationStatus = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  fontFamily: '$mono',
  fontSize: '0.72rem',
  color: '$textMuted',
});

export default function Certifications() {
  return (
    <CertSection id="certifications">
      <CertContainer>
        <SectionHeading
          label="// 06 · VERIFIED CREDENTIALS"
          title="Professional certifications & technical specializations."
          subtitle="Focused training in machine learning workflows, artificial intelligence fundamentals, prompt design, and engineering communication."
        />

        <CertGrid>
          {certifications.map((cert) => (
            <CertCard key={cert.id}>
              <CardTop>
                <HeaderMeta>
                  <IssuerTag>{cert.issuer}</IssuerTag>
                  <Badge variant="pill">{cert.category}</Badge>
                </HeaderMeta>

                <CertTitle>{cert.title}</CertTitle>
                <CertDesc>{cert.description}</CertDesc>
              </CardTop>

              <CardBottom>
                <VerificationStatus>
                  <CheckCircle2 size={13} color="#15803D" />
                  Verified Curriculum
                </VerificationStatus>

                <Badge variant="accent">{cert.tag}</Badge>
              </CardBottom>
            </CertCard>
          ))}
        </CertGrid>
      </CertContainer>
    </CertSection>
  );
}
