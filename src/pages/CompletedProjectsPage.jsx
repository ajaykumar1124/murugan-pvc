import CompletedProjects from '../components/CompletedProjects';

export default function CompletedProjectsPage({ onPreview }) {
  return (
    <main>
      <CompletedProjects onPreview={onPreview} limit={0} contactHref="/#contact" />
    </main>
  );
}