import { ArrowUpRight, BadgeCheck, MessageCircle, UsersRound } from 'lucide-react';
import Reveal from './Reveal';
import './AboutSection.css';

const companyValues = [
  {
    title: 'Quality',
    description: 'Focused on delivering dependable products and workmanship.',
    Icon: BadgeCheck,
  },
  {
    title: 'Experienced Team',
    description: 'Skilled supervisors, technicians and support staff working together.',
    Icon: UsersRound,
  },
  {
    title: 'Customer Service',
    description: 'Professional assistance from project requirements through completion.',
    Icon: MessageCircle,
  },
];

export default function AboutSection() {
  return (
    <section className="section about-section" id="about-us" aria-labelledby="about-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow">About Us</p>
          <h2 className="display" id="about-heading">About Sri Murugan PVC</h2>
        </Reveal>

        <div className="about-layout">
          <Reveal delay={80} className="about-intro">
            <p className="about-description">
              Sri Murugan PVC is committed to delivering reliable, quality-focused PVC solutions
              with professional service and experienced workmanship. Our team combines technical
              knowledge, practical experience and dedicated customer support to complete every
              project with attention to quality, safety and customer requirements.
            </p>
            <a className="btn btn-primary" href="#completed-projects">
              Explore Our Work <ArrowUpRight className="arrow" />
            </a>
          </Reveal>

          <div className="about-values">
            {companyValues.map(({ title, description, Icon }, index) => (
              <Reveal key={title} delay={120 + index * 70}>
                <article className="about-value">
                  <Icon className="about-value-icon" aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}