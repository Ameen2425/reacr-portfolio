import { styled } from '../../styles/stitches.config';
import { certifications } from '../../data/certifications';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { Brain, Cpu, Sparkles, MessageSquare, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Brain,
  Cpu,
  Sparkles,
  MessageSquare,
};

const CertificationsSection = styled('section', {
  py: '$20',
  px: '$4',
  backgroundColor: '$bgSecondary',
  position: 'relative',
  borderTop: '1px solid $border',
  borderBottom: '1px solid $border',

  '@mobile': {
    py: '$14',
    px: '$3',
  },
});

const CertContainer = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
});

const CertGrid = styled(motion.div, {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '$5',

  '@mobile': {
    gridTemplateColumns: '1fr',
    gap: '$3',
  },
});

const CertCard = styled(motion.div, {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$2xl',
  p: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  position: 'relative',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  width: '100%',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.35) 50%, transparent 100%)',
  },

  '&:hover': {
    borderColor: 'rgba(139, 92, 246, 0.45)',
    boxShadow: '0 16px 36px -8px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(139, 92, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  },

  '@mobile': {
    p: '$5',
    borderRadius: '$lg',
  },

  '@smallMobile': {
    p: '$4',
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
  size: '44px',
  borderRadius: '$md',
  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  color: '$primaryLight',
  transition: 'all 0.25s ease',

  [`${CertCard}:hover &`]: {
    background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
    color: '$white',
    boxShadow: '0 0 16px rgba(139, 92, 246, 0.6)',
    borderColor: '$primaryLight',
  },
});

const CertTitle = styled('h3', {
  fontSize: '$lg',
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
  margin: '4px 0 0 0',
  wordBreak: 'break-word',
});

const CertDesc = styled('p', {
  fontSize: '$xs',
  color: '$textSecondary',
  lineHeight: 1.6,
  margin: 0,
});

const VerifiedRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: '$mono',
  fontSize: '0.72rem',
  color: '$textMuted',
  mt: 'auto',
  pt: '$3',
  borderTop: '1px solid $border',
  flexWrap: 'wrap',
});

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Certifications() {
  return (
    <CertificationsSection id="certifications">
      <CertContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="05 / CREDENTIALS"
            title="My Certifications"
            subtitle="Specialized domain training and credentials across Machine Learning, AI, and Prompt Engineering."
            align="center"
          />
        </motion.div>

        <CertGrid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          transition={{ staggerChildren: 0.12 }}
        >
          {certifications.map((cert) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <CertCard
                key={cert.id}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <CardHeader>
                  <IconWrapper>
                    <Icon size={22} />
                  </IconWrapper>
                  <Badge variant="pill">{cert.tag}</Badge>
                </CardHeader>

                <div>
                  <CertTitle>{cert.title}</CertTitle>
                  <IssuerText>{cert.issuer}</IssuerText>
                </div>

                <CertDesc>{cert.description}</CertDesc>

                <VerifiedRow>
                  <CheckCircle size={14} color="#10B981" />
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
