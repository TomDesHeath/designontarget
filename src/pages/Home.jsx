import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { projects } from '../data/projects'
import heroImage from '../assets/wayne.jpg'

const Home = () => {
  const featuredServices = services.slice(0, 3)
  const featuredProjects = projects.slice(0, 3)

  return (
    <div className="page home-page">
      <section className="hero reveal-on-scroll">
        <div className="hero-content">
          <p className="eyebrow">Bespoke home alterations in Gqeberha, South Africa</p>
          <h1>Crafted kitchens, bathrooms, and joinery built around your life.</h1>
          <p className="hero-copy">
            Design On Target transforms Port Elizabeth homes with tailored alterations, from layout changes and service coordination to custom cabinetry
            produced in our Essexvale and Horton Street workshops.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn primary">
              Get a quote
            </Link>
            <Link to="/portfolio" className="btn ghost">
              Explore our projects
            </Link>
          </div>
        </div>
        <div className="hero-media">
          <img src={heroImage} alt="Stylised rendering of a renovated kitchen space" className="hero-image" />
          <div className="hero-stats">
            <div>
              <span className="metric">Gqeberha</span>
              <span className="label">Serving Port Elizabeth & Nelson Mandela Bay</span>
            </div>
            <div>
              <span className="metric">2 workshops</span>
              <span className="label">Target Kloof Road & Horton Street</span>
            </div>
            <div>
              <span className="metric">083 324 4303</span>
              <span className="label">Call weekdays 9:00–17:00</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar reveal-on-scroll">
        <h2>Tailor-made alterations guided by a hands-on local team.</h2>
        <p>
          From the first conversation to final handover, Design On Target manages planning, joinery fabrication, and on-site coordination so every
          kitchen, bathroom, or extension fits the way you live. We translate ideas into workable drawings, manufacture the details in-house, and
          install with care across Nelson Mandela Bay.
        </p>
      </section>

      <section className="preview-grid reveal-on-scroll">
        <div className="section-header">
          <h3>Featured Services</h3>
          <Link to="/services" className="link">
            Explore all services
          </Link>
        </div>
        <div className="card-grid">
          {featuredServices.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="card service-card reveal-on-scroll"
              style={{ '--reveal-index': index }}
            >
              <div className="card-media">
                <img src={service.image.src} alt={service.image.alt} loading="lazy" />
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <ul>
                {service.highlights.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="preview-grid reveal-on-scroll">
        <div className="section-header">
          <h3>Recent Projects</h3>
          <Link to="/portfolio" className="link">
            Browse portfolio
          </Link>
        </div>
        <div className="card-grid">
          {featuredProjects.map((project, index) => (
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
              <h4>{project.name}</h4>
              <p>{project.summary}</p>
              <ul>
                {project.metrics.slice(0, 2).map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-banner reveal-on-scroll">
        <div>
          <h3>Ready to talk about your project?</h3>
          <p>Share your wish list and we&apos;ll arrange a walkthrough to scope the work, budget, and timeline that suit your home.</p>
        </div>
        <Link to="/contact" className="btn primary">
          Start the conversation
        </Link>
      </section>
    </div>
  )
}

export default Home
