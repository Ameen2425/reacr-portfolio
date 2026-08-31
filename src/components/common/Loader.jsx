import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styled, keyframes } from '../../styles/stitches.config';

const spinGlow = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const LoaderOverlay = styled(motion.div, {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#050508',
  zIndex: 9999,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$6',
  px: '$4',
});

const LogoContainer = styled(motion.div, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '84px',
});

const GlowRing = styled('div', {
  position: 'absolute',
  top: '-6px',
  left: '-6px',
  right: '-6px',
  bottom: '-6px',
  borderRadius: '$xl',
  background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 50%, #A78BFA 100%)',
  filter: 'blur(10px)',
  opacity: 0.7,
  animation: `${spinGlow} 4s linear infinite`,
});

const LogoBox = styled('div', {
  position: 'relative',
  size: '72px',
  borderRadius: '$lg',
  backgroundColor: '#0E0E15',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$mono',
  fontSize: '$3xl',
  fontWeight: '$black',
  color: '$white',
  background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2)',
});

const ProgressWrapper = styled('div', {
  width: '240px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3',
});

const TrackBar = styled('div', {
  width: '100%',
  height: '4px',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  borderRadius: '$full',
  overflow: 'hidden',
  position: 'relative',
});

const FillBar = styled(motion.div, {
  height: '100%',
  background: 'linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)',
  borderRadius: '$full',
  boxShadow: '0 0 12px rgba(139, 92, 246, 0.8)',
});

const StatusText = styled('span', {
  fontFamily: '$mono',
  fontSize: '$xs',
  color: '$textSecondary',
  letterSpacing: '0.04em',
  textAlign: 'center',
});

const PercentageText = styled('span', {
  fontFamily: '$mono',
  fontSize: '$sm',
  fontWeight: '$bold',
  color: '$primaryLight',
});

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing modules...');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 8;
        return next > 100 ? 100 : next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onFinish]);

  useEffect(() => {
    if (progress < 40) {
      setStatus('Loading Full-Stack & Python Stack...');
    } else if (progress < 75) {
      setStatus('Configuring AI & Computer Vision Models...');
    } else if (progress < 99) {
      setStatus('Rendering Design System...');
    } else {
      setStatus('Ready');
    }
  }, [progress]);

  return (
    <AnimatePresence>
      <LoaderOverlay
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
      >
        <LogoContainer
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <GlowRing />
          <LogoBox>A.</LogoBox>
        </LogoContainer>

        <ProgressWrapper>
          <TrackBar>
            <FillBar
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.1 }}
            />
          </TrackBar>

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <StatusText>{status}</StatusText>
            <PercentageText>{progress}%</PercentageText>
          </div>
        </ProgressWrapper>
      </LoaderOverlay>
    </AnimatePresence>
  );
}
