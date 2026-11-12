import { styled } from '../../styles/stitches.config';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  mb: '$8',
  gap: '$2',

  variants: {
    align: {
      left: {
        alignItems: 'flex-start',
        textAlign: 'left',
      },
      center: {
        alignItems: 'center',
        textAlign: 'center',
      },
    },
  },

  defaultVariants: {
    align: 'left',
  },
});

const Label = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.74rem',
  fontWeight: '$semibold',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '$accent',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
});

const Title = styled('h2', {
  fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.03em',
  lineHeight: 1.15,
  margin: 0,
});

const Subtitle = styled('p', {
  fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
  color: '$textSecondary',
  maxWidth: '640px',
  lineHeight: 1.6,
  margin: '4px 0 0 0',
});

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  ...props
}) {
  return (
    <Container align={align} {...props}>
      {label && <Label>{label}</Label>}
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
}
