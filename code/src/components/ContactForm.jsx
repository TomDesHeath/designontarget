import { useState } from 'react'
import { WHATSAPP_LINK } from './WhatsAppChat'

const ContactForm = ({ context }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')

  const formattedContext = context
    ? context.replace(/^service:\s*/i, '').replace(/^project:\s*/i, '')
    : ''

  const handleWhatsAppLaunch = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-whatsapp', { detail: { source: 'contact-form' } }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = (data.get('name') || '').toString().trim()

    form.reset()
    setSubmittedName(name)
    setIsSubmitted(true)
  }

  const handleNewInquiry = () => {
    setSubmittedName('')
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <div className="contact-form contact-form-success reveal-on-scroll is-visible" role="status" aria-live="polite">
        <div className="success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M9.7 16.3 5.4 12l1.4-1.4 2.9 2.88 7.5-7.48 1.4 1.4-8.9 8.9Z"
            />
          </svg>
        </div>
        <h3>{submittedName ? `Thank you, ${submittedName}!` : 'Thank you!'}</h3>
        <p>
          We’ve received your inquiry and will be in touch within one business day to align on next steps.
          {formattedContext ? ` We’ve noted your interest in "${formattedContext}".` : ''}
        </p>
        <div className="success-actions">
          <a
            className="btn primary"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={handleWhatsAppLaunch}
          >
            Continue on WhatsApp
          </a>
          <button type="button" className="btn ghost" onClick={handleNewInquiry}>
            Send another inquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className="contact-form reveal-on-scroll" onSubmit={handleSubmit}>
      {context ? <input type="hidden" name="context" value={context} /> : null}

      <div className="contact-form-whatsapp" role="status">
        <div className="contact-form-whatsapp-copy">
          <strong>Prefer WhatsApp?</strong>
          <span>Tap below to share your project with Wayne for a quick reply.</span>
        </div>
        <a
          className="btn ghost whatsapp-inline-btn"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          onClick={handleWhatsAppLaunch}
        >
          Open WhatsApp
        </a>
      </div>

      <div className="field-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Jane Smith" required />
      </div>
      <div className="field-row">
        <div className="field-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="field-group">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="083 324 4303" />
        </div>
      </div>
      <div className="field-group">
        <label htmlFor="projectType">Project focus</label>
        <select id="projectType" name="projectType" defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option value="alterations">Home alterations or extensions</option>
          <option value="kitchen">Kitchen remodel</option>
          <option value="bathroom">Bathroom renovation</option>
          <option value="joinery">Custom cabinetry or bespoke item</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="field-group">
        <label htmlFor="timeline">Preferred start date</label>
        <input id="timeline" name="timeline" type="month" />
      </div>
      <div className="field-group">
        <label htmlFor="details">Project details</label>
        <textarea
          id="details"
          name="details"
          rows={5}
          placeholder="Share the spaces involved, preferred finishes, timelines, and any inspiration you would like us to consider."
        ></textarea>
      </div>
      <button type="submit" className="btn primary full-width">
        Submit inquiry
      </button>
    </form>
  )
}

export default ContactForm
