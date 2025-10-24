import ContactForm from '../components/ContactForm'

const Contact = () => (
  <div className="page contact-page">
    <section className="page-header reveal-on-scroll">
      <p className="eyebrow">Let’s collaborate</p>
      <h2>Tell us about your next home project.</h2>
      <p className="lead">
        Share a few details below and Design On Target will follow up within one business day to arrange a walkthrough and outline the steps to bring
        your ideas to life.
      </p>
    </section>

    <section className="contact-layout reveal-on-scroll">
      <ContactForm />

      <aside className="contact-details">
        <div className="details-card reveal-on-scroll">
          <h3>Studios & hours</h3>
          <p>
            <strong>Essexvale Office:</strong> 2 Target Kloof Road, Port Elizabeth (Gqeberha)
            <br />
            <strong>WERK 2.0 Workshop:</strong> 17 Horton Street, Port Elizabeth
          </p>
          <p>
            <strong>Hours:</strong> Weekdays 9:00–17:00 · Saturdays 9:00–13:00
          </p>
        </div>

        <div className="details-card reveal-on-scroll" style={{ '--reveal-index': 1 }}>
          <h3>Direct contact</h3>
          <ul>
            <li>
              <strong>Phone:</strong> <a href="tel:+27833244303">+27 (0)83 324 4303</a>
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:wayne@designontarget.co.za">wayne@designontarget.co.za</a>
            </li>
            <li>
              <strong>Facebook:</strong>{' '}
              <a href="https://www.facebook.com/designontargetsa" target="_blank" rel="noreferrer">
                @designontargetsa
              </a>
            </li>
          </ul>
        </div>

        <div className="details-card reveal-on-scroll" style={{ '--reveal-index': 2 }}>
          <h3>Service areas</h3>
          <ul>
            <li>Port Elizabeth / Gqeberha</li>
            <li>Nelson Mandela Bay</li>
            <li>Broader Eastern Cape on request</li>
            <li>Collaboration with out-of-town clients by arrangement</li>
          </ul>
        </div>
      </aside>
    </section>
  </div>
)

export default Contact
