import { PVC_WHY } from '../data/site';
import Reveal from './Reveal';
import './WhyPVC.css';

export default function WhyPVC() {
  return (
    <section className="why-pvc">
      <div className="container">
        <div className="section-header dark">
          <Reveal>
            <p className="section-label">04 / WHY PVC</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="section-heading">Built for everyday living.</h2>
          </Reveal>
        </div>

        <div className="why-grid">
          {PVC_WHY.map((item, idx) => (
            <Reveal key={idx} delay={idx * 60}>
              <div className="why-item">
                <div className="why-icon">
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
