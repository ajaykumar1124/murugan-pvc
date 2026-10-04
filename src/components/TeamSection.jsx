import { UserRound } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/site';
import Reveal from './Reveal';
import './TeamSection.css';

export default function TeamSection() {
  return (
    <section className="section team-section" id="our-team" aria-labelledby="team-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Team Profiles</p>
          <h2 className="display" id="team-heading">People Behind Our Work</h2>
          <p className="team-intro">
            Behind every successful project is a dedicated team. Our supervisors, technicians,
            helpers and administrative staff work together to provide reliable service and quality
            workmanship to our customers.
          </p>
        </Reveal>

        <div className="team-grid">
          {TEAM_MEMBERS.map((member, index) => (
            <Reveal key={member.name} delay={(index % 3) * 60}>
              <article className="team-card">
                {member.photo ? (
                  <img
                    className="team-photo"
                    src={member.photo}
                    alt={`${member.name}, ${member.position}`}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="team-photo-placeholder"
                    role="img"
                    aria-label={`Photo placeholder for ${member.name}`}
                  >
                    <UserRound aria-hidden="true" />
                    <span>Photo not provided</span>
                  </div>
                )}
                <div className="team-card-details">
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                  <span>{member.description}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}