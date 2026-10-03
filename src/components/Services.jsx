import { SERVICES } from '../data/site';
import ServiceCard from './ServiceCard';
import Reveal from './Reveal';
import './Services.css';

export function Services({ onPreview }) {
  return (
    <section className="section services" id="services">
      <div className="container">
        <Reveal>
          <p className="eyebrow">03 / Our services</p>
          <h2 className="display">
            Services for every
            <br />
            room.
          </h2>
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 70}>
              <ServiceCard service={service} onPreview={onPreview} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="services-note">
            Every service is tailored to your needs, space and budget. Start a conversation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Services;
