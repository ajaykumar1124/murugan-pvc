import { useState } from 'react';
import { Check, Send } from 'lucide-react';
import { BRAND, INTEREST_OPTIONS, whatsappUrl } from '../data/site';
import './EnquiryForm.css';

const PHONE_PATTERN = /^[0-9+\-\s]{8,15}$/;

export default function EnquiryForm({ interest, onInterestChange }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const next = {};
    if (name.trim().length < 2) next.name = 'Please tell us your name.';
    if (!PHONE_PATTERN.test(phone.trim())) next.phone = 'A reachable number, 8–15 digits.';
    if (!interest) next.interest = 'Choose what you need.';
    return next;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitError('');
    setStatus('sending');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${BRAND.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          interested_in: interest,
          project: message.trim() || '—',
          _subject: `New enquiry — ${interest} — Sri Murugan website`,
          _template: 'table',
        }),
      });

      const result = await response.json();
      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error(result.message || `Form service responded ${response.status}`);
      }

      setStatus('success');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unexpected error while sending.');
      setStatus('error');
    }
  };

  const emailSubject = `Website enquiry: ${interest}`;
  const emailBody = [
    `Name: ${name.trim()}`,
    `Phone: ${phone.trim()}`,
    `Interested in: ${interest}`,
    `Project: ${message.trim() || 'Not specified'}`,
  ].join('\n');
  const emailFallback = `mailto:${BRAND.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  const whatsappFallback = whatsappUrl(
    `Website enquiry\n${emailBody}`,
  );

  const reset = () => {
    setName('');
    setPhone('');
    setMessage('');
    setErrors({});
    setSubmitError('');
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="form-card">
        <div className="form-success">
          <span className="success-icon">
            <Check />
          </span>
          <h3>Enquiry sent.</h3>
          <p>
            Thank you — we have your details and will call you back on the number you shared. If it
            is urgent, ring the primary line any day of the week.
          </p>
          <button type="button" className="btn btn-outline" onClick={reset}>
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="form-head">
        <h3>
          Start with the
          <br />
          basics.
        </h3>
        <p>No commitment. Just a useful first conversation.</p>
      </div>

      <div className="form-grid">
        <div className={`field ${errors.name ? 'invalid' : ''}`}>
          <label htmlFor="enquiry-name">Your name</label>
          <input
            id="enquiry-name"
            type="text"
            placeholder="How should we call you?"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className={`field ${errors.phone ? 'invalid' : ''}`}>
          <label htmlFor="enquiry-phone">Phone number</label>
          <input
            id="enquiry-phone"
            type="tel"
            placeholder="A number we can reach"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          {errors.phone && <span className="error-msg">{errors.phone}</span>}
        </div>

        <div className={`field full ${errors.interest ? 'invalid' : ''}`}>
          <label htmlFor="enquiry-interest">I am interested in</label>
          <select
            id="enquiry-interest"
            value={interest}
            onChange={(event) => onInterestChange(event.target.value)}
          >
            {INTEREST_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.interest && <span className="error-msg">{errors.interest}</span>}
        </div>

        <div className="field full">
          <label htmlFor="enquiry-message">A little about the project</label>
          <textarea
            id="enquiry-message"
            placeholder="Room, approximate size, timeline — whatever you know."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
      </div>

      <button className="btn btn-primary btn-block form-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        <Send className="arrow" />
      </button>

      {status === 'error' && (
        <p className="form-status" role="alert">
          The enquiry could not be sent right now. Please try again,{' '}
          <a href={emailFallback}>email these details</a>, or{' '}
          <a href={whatsappFallback} target="_blank" rel="noreferrer">
            start on WhatsApp
          </a>{' '}
          instead.
          {submitError && <span> Error details: {submitError}</span>}
        </p>
      )}
    </form>
  );
}
