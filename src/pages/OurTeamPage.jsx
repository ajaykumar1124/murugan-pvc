import { ArrowUpRight, HeartHandshake, ShieldCheck, UsersRound } from 'lucide-react';
import Reveal from '../components/Reveal';
import TeamSection from '../components/TeamSection';
import './OurTeamPage.css';

const teamValues = [
  {
    title: 'Quality in the details',
    description: 'Attention to quality, safety and customer requirements guides our work.',
    Icon: ShieldCheck,
  },
  {
    title: 'Working together',
    description: 'Supervisors, staff, technicians and helpers contribute as one team.',
    Icon: UsersRound,
  },
  {
    title: 'Customer support',
    description: 'Professional assistance from project requirements through completion.',
    Icon: HeartHandshake,
  },
];

export function OurTeamContent({ showHero = true, contactHref = '/#contact' }) {
  return (
    <div className="our-team-page">
      {showHero && (
        <section className="our-team-hero">
          <div className="container our-team-hero-inner">
            <Reveal className="our-team-hero-copy">
              <p className="eyebrow">People Behind Our Work</p>
              <h1 className="display">Our Team</h1>
              <p className="our-team-hero-subtitle">Meet the team behind Sri Murugan PVC.</p>
              <p className="our-team-hero-description">
                A team of supervisors, staff, technicians, helpers and administrative support working
                together on PVC projects.
              </p>
            </Reveal>
            <Reveal delay={140} className="our-team-hero-media">
              <img
                src="/images/completed-house-charcoal.jpg"
                alt="Completed home exterior with charcoal finishes and installed windows"
              />
              <span>Quality work, made together.</span>
            </Reveal>
          </div>
        </section>
      )}

      <TeamSection />

      <section className="section team-culture" aria-labelledby="team-culture-heading">
        <div className="container">
          <Reveal>
            <p className="eyebrow">How We Work</p>
            <h2 className="display" id="team-culture-heading">Good work takes a team.</h2>
          </Reveal>
          <div className="team-values-grid">
            {teamValues.map(({ title, description, Icon }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="team-value-card">
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="team-page-cta">
        <div className="container team-page-cta-inner">
          <div>
            <p className="eyebrow eyebrow--gold">Start a Conversation</p>
            <h2>Let’s Build Something Great Together</h2>
            <p>Talk to our team about your requirements.</p>
          </div>
          <a className="btn btn-primary" href={contactHref}>
            Contact Us <ArrowUpRight className="arrow" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default function OurTeamPage() {
  return (
    <main>
      <OurTeamContent />
    </main>
  );
}