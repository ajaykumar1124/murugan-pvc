import { COMPLETED_PROJECTS } from '../data/site';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import './CompletedProjects.css';

const projectImages = COMPLETED_PROJECTS.flatMap((project) => project.images);

export default function CompletedProjects({ onPreview, limit = 3, contactHref = '#contact' }) {
  const projects = limit ? COMPLETED_PROJECTS.slice(0, limit) : COMPLETED_PROJECTS;

  const viewProject = (project, projectIndex) => {
    const firstImage = project.images[0];
    const galleryIndex = COMPLETED_PROJECTS
      .slice(0, projectIndex)
      .reduce((imageCount, item) => imageCount + item.images.length, 0);
    onPreview?.(firstImage.img, firstImage.alt, projectImages, galleryIndex);
  };

  return (
    <section
      className="section completed-projects"
      id="completed-projects"
      aria-labelledby="completed-projects-heading"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow">Our Works</p>
          <h2 className="display" id="completed-projects-heading">Completed Projects</h2>
          <p className="completed-projects-lede">
            Explore our completed projects and the quality of work delivered by our team.
          </p>
          <p className="completed-projects-intro">
            Take a look at some of our completed work. Each project reflects our commitment to
            quality workmanship, reliable service and customer satisfaction.
          </p>
        </Reveal>

        {limit > 0 && projects.length < COMPLETED_PROJECTS.length && (
          <div className="projects-more-link">
            <Link className="btn btn-outline" to="/completed-projects">
              View all completed projects
            </Link>
          </div>
        )}

        <div className="projects-grid">
          {projects.map((project, index) => {
            const image = project.images[0];
            return (
              <Reveal key={project.id} delay={(index % 3) * 70}>
                <article className="project-card">
                  <button
                    type="button"
                    className="project-image-button"
                    onClick={() => viewProject(project, index)}
                    aria-label={`View project image: ${image.alt}`}
                  >
                    <img src={image.img} alt={image.alt} loading="lazy" />
                    <span className="project-image-action">View Image</span>
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="projects-cta">
          <div>
            <h3>Have a project in mind?</h3>
            <p>Talk to our team about your requirements.</p>
          </div>
          <a className="btn btn-primary" href={contactHref}>Contact Us</a>
        </div>
      </div>
    </section>
  );
}