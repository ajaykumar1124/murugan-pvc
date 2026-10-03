import { MATERIALS } from '../data/site';
import Reveal from './Reveal';
import './MaterialProfile.css';

export default function MaterialProfile() {
  return (
    <section className="section materials" id="materials">
      <div className="container materials-inner">
        <Reveal className="materials-left">
          <p className="eyebrow">02 / The inside story</p>
          <h2 className="display">
            The profile is
            <br />
            the promise.
          </h2>
          <p className="lede materials-lede">
            We will explain what goes inside the frame, cupboard or door — so you can choose with
            confidence, not just from a colour sample.
          </p>
          <figure className="materials-figure">
            <img
              src="/images/material-door.jpg"
              alt="Brown PVC door with panel mouldings beside a matching framed window"
            />
            <div className="materials-scrim" />
            <figcaption>Doors &amp; profiles / Made to measure</figcaption>
          </figure>
        </Reveal>

        <Reveal className="materials-right" delay={120}>
          <ul className="spec-list">
            {MATERIALS.map((material) => (
              <li className="spec-row" key={material.code}>
                <span className="spec-code">{material.code}</span>
                <div className="spec-body">
                  <h3 className="spec-title">{material.title}</h3>
                  <p className="spec-desc">{material.desc}</p>
                </div>
                <span className="spec-tag">{material.tag}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
