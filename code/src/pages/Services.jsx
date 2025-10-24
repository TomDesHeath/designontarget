import { Link } from 'react-router-dom'
import { services } from '../data/services'

const Services = () => (
  <div className="page services-page">
    <section className="page-header reveal-on-scroll">
      <p className="eyebrow">What we deliver</p>
      <h2>Interior alterations and joinery crafted to fit every corner of your space.</h2>
      <p className="lead">
        Whether you&apos;re opening your kitchen, refreshing a bathroom, or commissioning bespoke cabinetry, Design On Target pairs thoughtful design
        advice with meticulous fabrication across Gqeberha and greater Nelson Mandela Bay.
      </p>
    </section>

    <section className="services-grid">
      {services.map((service, index) => (
        <Link
          key={service.slug}
          to={`/services/${service.slug}`}
          className="card service-card reveal-on-scroll"
          style={{ '--reveal-index': index }}
        >
          <div className="card-media">
            <img src={service.image.src} alt={service.image.alt} loading="lazy" />
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <ul>
            {service.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </Link>
      ))}
    </section>

    <section className="process-section reveal-on-scroll">
      <div className="process-card reveal-on-scroll" style={{ '--reveal-index': 0 }}>
        <h3>Our proven process</h3>
        <ol>
          <li>
            <strong>Consult & scope</strong>
            <span>Meet on site or in the workshop to understand your goals, budget, and any structural considerations.</span>
          </li>
          <li>
            <strong>Design, quote & schedule</strong>
            <span>Refine layouts, finishes, and joinery details, then align on costings and build timelines that suit your home.</span>
          </li>
          <li>
            <strong>Fabricate & install</strong>
            <span>Manufacture cabinetry and bespoke items in-house before coordinating trades and final installation on site.</span>
          </li>
        </ol>
      </div>
      <div className="credentials-card reveal-on-scroll" style={{ '--reveal-index': 1 }}>
        <h3>Credentials & coverage</h3>
        <ul>
          <li>Located at 2 Target Kloof Road and WERK 2.0, Horton Street</li>
          <li>On-site consultations across Port Elizabeth / Gqeberha</li>
          <li>Experienced craftsmen for kitchens, bathrooms, and bespoke joinery</li>
          <li>Project updates shared with our Facebook community @designontargetsa</li>
        </ul>
      </div>
    </section>
  </div>
)

export default Services
