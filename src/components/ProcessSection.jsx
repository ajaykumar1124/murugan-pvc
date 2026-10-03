import { PVC_PROCESS } from '../data/site';
import Reveal from './Reveal';
import './ProcessSection.css';

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="container">
        <Reveal>
          <h2 className="process-title">Our Process</h2>
        </Reveal>
        
        <div className="process-steps">
          {PVC_PROCESS.map((item, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className="process-step">
                <div className="process-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {idx < PVC_PROCESS.length - 1 && <div className="process-line" aria-hidden="true" />}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
