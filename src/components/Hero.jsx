import { ArrowUpRight, Phone } from 'lucide-react';
import { BRAND } from '../data/site';
import Reveal from './Reveal';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <Reveal className="hero-copy">
          <p className="eyebrow">A local specialist, properly equipped</p>
          <h1 className="display hero-title">
            Rooms that
            <br />
            <span className="accent">hold</span> their
            <br />
            own.
          </h1>
          <p className="lede hero-lede">
            PVC cupboards, windows, doors and glass work made around your home — with honest
            material choices and a finish that stays useful for years.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Plan your project <ArrowUpRight className="arrow" />
            </a>
            <a className="btn btn-outline" href={`tel:${BRAND.phonePrimary}`}>
              <Phone /> Speak to us
            </a>
          </div>
          <p className="hero-note">Measured, made and fitted by a team nearby.</p>
        </Reveal>

        <Reveal className="hero-art" delay={120}>
          <div className="hero-frame">
            <img
              src="/images/hero-interior.jpg"
              alt="Sunlit living room with floor-to-ceiling black framed sliding windows and sheer curtains"
            />
            <div className="hero-shade" />
            <div className="hero-badge">
              Tailored
              <br />
              for home
              <br />
              living
            </div>
            <div className="hero-caption">
              <p className="hero-caption-title">Open to better.</p>
              <p className="hero-caption-sub">Windows · Glass · Light</p>
            </div>
          </div>
          <div className="hero-meta">
            <span>Material-led interiors</span>
            <span>SM / 01</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
