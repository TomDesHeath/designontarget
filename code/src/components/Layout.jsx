import { NavLink, Outlet, useLocation } from 'react-router-dom'
import logoPlaceholder from '../assets/logo.svg'
import WhatsAppChat from './WhatsAppChat'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const Layout = () => {
  const location = useLocation()
  useRevealOnScroll(location.pathname)

  return (
    <div className="site">
      <header className="site-header reveal-on-scroll is-visible">
        <div className="header-inner">
          <NavLink to="/" className="brand-link">
            <img src={logoPlaceholder} alt="Design On Target logo" className="brand-logo" />
            <div className="brand-container">
              <span className="brand-text">Design On Target</span>
              <div className="eyebrow" style={{margin:0}}>Imagination meets function</div>
            </div>
          </NavLink>
          <nav className="main-nav">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Home
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `cta-link${isActive ? ' active' : ''}`}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="site-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="reveal-on-scroll">
            <div className="brand-text footer-brand">Design On Target</div>
            <p>Custom interior alterations, kitchens, bathrooms, and joinery crafted for life in Port Elizabeth (Gqeberha).</p>
          </div>
          <div className="reveal-on-scroll" style={{ '--reveal-index': 1 }}>
            <h4>Visit</h4>
            <p>
              Office · 2 Target Kloof Road<br />
              Workshop · WERK 2.0 Studio · 17 Horton Street<br />
              Port Elizabeth (Gqeberha)
            </p>
          </div>
          <div className="reveal-on-scroll" style={{ '--reveal-index': 2 }}>
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="tel:+27833244303">+27 (0)83 324 4303</a>
              </li>
              <li>
                <a href="mailto:wayne@designontarget.co.za">wayne@designontarget.co.za</a>
              </li>
              <li>
                <a href="https://www.facebook.com/designontargetsa" target="_blank" rel="noreferrer">
                  Facebook @designontargetsa
                </a>
              </li>
              <li>Weekdays 9:00–17:00 · Saturdays 9:00–13:00</li>
            </ul>
          </div>
        </div>
        <div className="footer-note">© {new Date().getFullYear()} Design On Target. All rights reserved.</div>
      </footer>
      <WhatsAppChat />
    </div>
  )
}

export default Layout
