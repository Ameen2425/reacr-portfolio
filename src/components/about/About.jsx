import { styled } from '../../styles/stitches.config';
import SectionHeading from '../common/SectionHeading';
import { BRAND } from '../../styles/theme';
import { Database, Server, Layout, GitBranch, Terminal, ShieldCheck } from 'lucide-react';

const AboutSection = styled('section', {
  py: '$16',
  px: '$6',
  backgroundColor: '$bgSecondary',
  borderBottom: '1px solid $border',

  '@mobile': {
    py: '$12',
    px: '$4',
  },
});

const AboutContainer = styled('div', {
  maxWidth: '1240px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
});

const EditorialGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1.1fr 0.9fr',
  gap: '$12',
  alignItems: 'start',

  '@tablet': {
    gridTemplateColumns: '1fr',
    gap: '$8',
  },
});

const NarrativeCol = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const Paragraph = styled('p', {
  fontSize: '$base',
  color: '$textSecondary',
  lineHeight: 1.7,
  margin: 0,
});

const Factsheet = styled('div', {
  mt: '$4',
  border: '1px solid $border',
  borderRadius: '$xs',
  backgroundColor: '$bgCard',
  overflow: 'hidden',
});

const FactRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: '140px 1fr',
  padding: '$3 $4',
  borderBottom: '1px solid $borderLight',
  alignItems: 'baseline',
  gap: '$3',

  '&:last-child': {
    borderBottom: 'none',
  },

  '@mobile': {
    gridTemplateColumns: '1fr',
    gap: '2px',
  },
});

const FactLabel = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: '$textMuted',
});

const FactValue = styled('span', {
  fontSize: '$sm',
  color: '$textPrimary',
  fontWeight: '$medium',
});

const PillarsCol = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const PillarCard = styled('div', {
  backgroundColor: '$bgCard',
  border: '1px solid $border',
  borderRadius: '$sm',
  padding: '$5',
  transition: 'border-color 0.2s ease, transform 0.2s ease',

  '&:hover': {
    borderColor: '$borderStrong',
    transform: 'translateY(-1px)',
  },
});

const PillarHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  mb: '$2',
});

const PillarIcon = styled('div', {
  size: '32px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$xs',
  backgroundColor: '$bgSecondary',
  border: '1px solid $border',
  color: '$accent',
});

const PillarTitle = styled('h3', {
  fontSize: '$base',
  fontWeight: '$bold',
  color: '$textPrimary',
  letterSpacing: '-0.01em',
  margin: 0,
});

const PillarDesc = styled('p', {
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.6,
  margin: 0,
});

export default function About() {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionHeading
          label="// 01 · BACKGROUND"
          title="Rooted in core CS fundamentals, focused on practical web systems."
          subtitle="How I approach engineering, problem solving, and building full-stack web applications."
        />

        <EditorialGrid>
          <NarrativeCol>
            <Paragraph>
              I am a Computer Science and Engineering graduate from Krishna University College of Engineering and Technology (CGPA 8.0/10). My engineering journey is built on core computer science fundamentals — object-oriented programming, relational database management, data structures, and web application architecture.
            </Paragraph>
            <Paragraph>
              Rather than treating backend and frontend as disconnected silos, I enjoy the complete flow of web development: modeling relational tables in MySQL, structuring clean RESTful API endpoints in Django, and consuming those APIs in ReactJS to build clear, dependable user interfaces.
            </Paragraph>
            <Paragraph>
              Through internships at Rashtriya Ispat Nigam Limited (Visakhapatnam Steel Plant) and Datavalley India, as well as leading my project team for Eco-Track AI, I have practiced validating enterprise software modules, troubleshooting application bugs, and shipping responsive web layouts that work consistently across devices.
            </Paragraph>

            <Factsheet>
              <FactRow>
                <FactLabel>Degree</FactLabel>
                <FactValue>B.Tech in Computer Science and Engineering (2022 – 2026)</FactValue>
              </FactRow>
              <FactRow>
                <FactLabel>Institution</FactLabel>
                <FactValue>Krishna University College of Engineering & Technology</FactValue>
              </FactRow>
              <FactRow>
                <FactLabel>Location</FactLabel>
                <FactValue>Hyderabad, Telangana, India</FactValue>
              </FactRow>
              <FactRow>
                <FactLabel>Primary Stack</FactLabel>
                <FactValue>Python, Django REST Framework, ReactJS, JavaScript, MySQL</FactValue>
              </FactRow>
              <FactRow>
                <FactLabel>Availability</FactLabel>
                <FactValue>Immediate / Open to Full-Stack, Backend & Frontend Roles</FactValue>
              </FactRow>
            </Factsheet>
          </NarrativeCol>

          <PillarsCol>
            <PillarCard>
              <PillarHeader>
                <PillarIcon>
                  <Server size={17} />
                </PillarIcon>
                <PillarTitle>Backend & RESTful Architecture</PillarTitle>
              </PillarHeader>
              <PillarDesc>
                Designing modular server applications using Python and Django. Building RESTful APIs with Django REST Framework, handling request routing, data serialization, authentication, and structured error responses.
              </PillarDesc>
            </PillarCard>

            <PillarCard>
              <PillarHeader>
                <PillarIcon>
                  <Database size={17} />
                </PillarIcon>
                <PillarTitle>Relational Data & Schema Design</PillarTitle>
              </PillarHeader>
              <PillarDesc>
                Architecting database schemas in MySQL, establishing entity relationships, writing normalized queries, and implementing full CRUD operations with transactional integrity.
              </PillarDesc>
            </PillarCard>

            <PillarCard>
              <PillarHeader>
                <PillarIcon>
                  <Layout size={17} />
                </PillarIcon>
                <PillarTitle>Frontend Engineering & Usability</PillarTitle>
              </PillarHeader>
              <PillarDesc>
                Developing component-driven user interfaces in ReactJS with Redux state management. Translating real user workflows into accessible, responsive web interfaces that maintain performance across viewports.
              </PillarDesc>
            </PillarCard>

            <PillarCard>
              <PillarHeader>
                <PillarIcon>
                  <ShieldCheck size={17} />
                </PillarIcon>
                <PillarTitle>Testing, Debugging & Code Quality</PillarTitle>
              </PillarHeader>
              <PillarDesc>
                Applying hands-on experience from industrial enterprise internships to identify regressions, isolate edge-case bugs, validate module behavior, and maintain clear Git version control practices.
              </PillarDesc>
            </PillarCard>
          </PillarsCol>
        </EditorialGrid>
      </AboutContainer>
    </AboutSection>
  );
}
