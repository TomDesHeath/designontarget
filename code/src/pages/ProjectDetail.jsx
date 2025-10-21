import { Navigate, useParams } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import { projects } from '../data/projects'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/portfolio" replace />
  }

  return (
    <div className="page detail-page project-detail">
      <section className="detail-hero reveal-on-scroll">
        <div className="detail-copy">
          <p className="eyebrow">{project.sector}</p>
          <h2>{project.name}</h2>
          <p className="lead">{project.summary}</p>
        </div>
        <div className="detail-media">
          <img src={project.image.src} alt={project.image.alt} loading="lazy" />
        </div>
      </section>

      <section className="detail-highlights reveal-on-scroll">
        <h3>Project highlights</h3>
        <ul>
          {project.metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
      </section>

      <section className="detail-contact reveal-on-scroll">
        <div className="detail-contact-copy">
          <h3>Inspired by {project.name}?</h3>
          <p>Let us know what you&apos;d like to achieve and we&apos;ll outline how we can help tailor the space to your needs.</p>
        </div>
        <ContactForm context={`Project: ${project.name}`} />
      </section>
    </div>
  )
}

export default ProjectDetail
