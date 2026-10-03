import { VALUES } from '../data/site';
import './ValueStrip.css';

export default function ValueStrip() {
  return (
    <section className="value-strip">
      <div className="container value-strip-inner">
        <p className="value-strip-label">Built on the details that matter</p>
        {VALUES.map((value) => (
          <div className="value-item" key={value.title}>
            <h3>{value.title}</h3>
            <p>{value.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
