import { BRANDS } from '../data/site';
import Reveal from './Reveal';
import './Brands.css';

export default function Brands() {
  return (
    <section className="section brands" id="brands">
      <div className="container brands-inner">
        <Reveal>
          <p className="eyebrow">05 / Materials we trust</p>
          <h2 className="display">
            Good work
            <br />
            needs a good
            <br />
            starting point.
          </h2>
          <p className="lede brands-lede">
            We work with selected brands so the components behind your finish are as dependable as
            the finish itself.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="brands-grid">
            {BRANDS.map((brand) => (
              <div className="brand-cell" key={brand.name}>
                <span className="brand-dot" />
                <h3 className="brand-name">{brand.name}</h3>
                <p className="brand-sub">{brand.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
