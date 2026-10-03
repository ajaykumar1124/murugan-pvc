import './ServiceCard.css';

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className={`service-card ${service.highlight ? 'service-card-highlight' : ''}`}>
      <div className="service-card-top">
        <div className="service-icon-wrap">
          <Icon className="service-icon" strokeWidth={1.6} />
        </div>
        <div className="service-copy">
          <h3 className="service-title">{service.title}</h3>
          <p className="service-sub">{service.sub}</p>
        </div>
      </div>

      <div className="service-media">
        <img
          src={service.img}
          alt={service.alt || service.title}
          loading="lazy"
          style={{ objectPosition: service.imagePosition || 'center' }}
        />
      </div>
    </article>
  );
}
