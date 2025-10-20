import { Navigate, useParams } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import { services } from '../data/services'

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <div className="page detail-page service-detail">
      <section className="detail-hero reveal-on-scroll">
        <div className="detail-copy">
          <p className="eyebrow">Service</p>
          <h2>{service.title}</h2>
          <p className="lead">{service.description}</p>
        </div>
        <div className="detail-media">
          <img src={service.image.src} alt={service.image.alt} loading="lazy" />
        </div>
      </section>

      <section className="detail-highlights reveal-on-scroll">
        <h3>What this includes</h3>
        <ul>
          {service.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="detail-contact reveal-on-scroll">
        <div className="detail-contact-copy">
          <h3>Ready to discuss {service.title}?</h3>
          <p>Share a few project details below and we&apos;ll be in touch with next steps and timing for a walkthrough.</p>
        </div>
        <ContactForm context={`Service: ${service.title}`} />
      </section>
    </div>
  )
}

export default ServiceDetail
