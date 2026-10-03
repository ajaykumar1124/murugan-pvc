import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { BRAND, whatsappUrl } from '../data/site';
import EnquiryForm from './EnquiryForm';
import Reveal from './Reveal';
import './EnquirySection.css';

export default function EnquirySection({ interest, onInterestChange }) {
  return (
    <section className="section enquiry" id="contact">
      <div className="container enquiry-inner">
        <Reveal className="enquiry-left">
          <p className="eyebrow">06 / Let's make a plan</p>
          <h2 className="display">
            Tell us what
            <br />
            your home
            <br />
            needs next.
          </h2>
          <p className="lede enquiry-lede">
            Send a few details. We will help you work out the sensible next step — a call, a
            measure-up or a clear material recommendation.
          </p>

          <div className="contact-rows">
            <div className="contact-row">
              <Phone />
              <div>
                <p className="contact-label">Primary line</p>
                <a className="contact-value" href={`tel:${BRAND.phonePrimary}`}>
                  {BRAND.phonePrimary}
                </a>
              </div>
            </div>

            <div className="contact-row">
              <Phone />
              <div>
                <p className="contact-label">Secondary line</p>
                <a className="contact-value" href={`tel:${BRAND.phoneSecondary}`}>
                  {BRAND.phoneSecondary}
                </a>
              </div>
            </div>

            <div className="contact-row">
              <MessageCircle />
              <div>
                <p className="contact-label">Quick message</p>
                <a
                  className="contact-value"
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                >
                  Start on WhatsApp
                </a>
              </div>
            </div>

            <div className="contact-row">
              <MapPin />
              <div>
                <p className="contact-label">Visit our showroom</p>
                <a 
                  className="contact-value" 
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {BRAND.fullAddress}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <EnquiryForm interest={interest} onInterestChange={onInterestChange} />
        </Reveal>
      </div>
    </section>
  );
}
