import { styled } from '../../styles/stitches.config';
import Badge from './Badge';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  mb: '$10',
  gap: '$3',

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
    align: 'center',
  },
});

const Title = styled('h2', {
  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.03em',
  lineHeight: 1.2,
  margin: 0,
});

const Subtitle = styled('p', {
  fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
  color: '$textSecondary',
  maxWidth: '620px',
  lineHeight: 1.6,
  margin: 0,
});

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  ...props
}) {
  return (
    <Container align={align} {...props}>
      {label && <Badge variant="section">{label}</Badge>}
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
}
