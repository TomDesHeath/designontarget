import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const Portfolio = () => (
  <div className="page portfolio-page">
    <section className="page-header reveal-on-scroll">
      <p className="eyebrow">Highlighted work</p>
      <h2>Kitchens, bathrooms, and joinery tailored for homes in Port Elizabeth.</h2>
      <p className="lead">
        These recent projects showcase how Design On Target reimagines spaces—from open-plan kitchen conversions to bold bathroom statements—while
        keeping every detail aligned with the homeowner’s brief.
      </p>
    </section>

    <section className="projects-grid">
      {projects.map((project, index) => (
        <Link
          key={project.slug}
          to={`/portfolio/${project.slug}`}
          className="card project-card reveal-on-scroll"
          style={{ '--reveal-index': index }}
        >
          <div className="card-media">
            <img src={project.image.src} alt={project.image.alt} loading="lazy" />
          </div>
          <span className="chip">{project.sector}</span>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
          <ul>
            {project.metrics.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        </Link>
      ))}
    </section>

    <section className="testimonial reveal-on-scroll">
      <blockquote>
        We take time to understand the spaces you want to create, then craft the cabinetry, finishes, and site coordination needed to make them work.
      </blockquote>
      <p className="quote-credit">— The Design On Target team</p>
    </section>
  </div>
)

export default Portfolio
