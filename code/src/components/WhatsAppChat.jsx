import { useEffect, useState } from 'react'

const PHONE_NUMBER = '27833244303'
const DEFAULT_MESSAGE = encodeURIComponent(
  "Hi Design On Target! I'd like to chat about an interior alteration and would appreciate a call back."
)
export const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}?text=${DEFAULT_MESSAGE}`

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const toggleWidget = () =>
    setIsOpen((prev) => {
      const next = !prev
      if (next) {
        setHasInteracted(true)
      }
      return next
    })

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true)
      setHasInteracted(true)
    }

    if (typeof window === 'undefined') {
      return undefined
    }

    window.addEventListener('open-whatsapp', handleOpen)
    return () => window.removeEventListener('open-whatsapp', handleOpen)
  }, [])

  const promptVisible = !isOpen && !hasInteracted

  return (
    <div className={`whatsapp-widget${isOpen ? ' open' : ''}`}>
      {promptVisible && (
        <div className="whatsapp-nudge" role="status">
          <strong>Psst! Need quick advice?</strong>
          <span>Chat with Wayne on WhatsApp for a fast response.</span>
        </div>
      )}
      {isOpen && (
        <div id="whatsapp-panel" className="whatsapp-panel" role="dialog" aria-label="WhatsApp conversation launcher">
          <div className="panel-header">
            <div className="avatar" aria-hidden="true">
              <span>DT</span>
            </div>
            <div>
              <p className="title">Design On Target</p>
              <p className="subtitle">Typically replies within one business day</p>
            </div>
            <button type="button" className="panel-close" onClick={toggleWidget} aria-label="Close WhatsApp chat">
              ×
            </button>
          </div>
          <div className="panel-body">
            <p>Hi! Tell us about the kitchen, bathroom, or joinery work you have planned and we&apos;ll continue the conversation on WhatsApp.</p>
            <a className="btn primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Continue in WhatsApp
            </a>
          </div>
        </div>
      )}
      <button
        type="button"
        className="whatsapp-toggle"
        onClick={toggleWidget}
        data-open={isOpen}
        aria-label={isOpen ? 'Hide WhatsApp chat' : 'Chat on WhatsApp'}
        aria-expanded={isOpen}
        aria-controls="whatsapp-panel"
      >
        <span className="whatsapp-toggle-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M16.04 3C9.394 3 4 8.393 4 15.04c0 2.604.78 5.02 2.14 7.045L4 29l7.107-2.088A12.02 12.02 0 0 0 16.04 27c6.646 0 12.04-5.393 12.04-12.04C28.08 8.393 22.686 3 16.04 3Zm0 21.882c-2.07 0-4.01-.62-5.64-1.69l-.404-.26-4.222 1.24 1.248-4.107-.264-.422a9.94 9.94 0 0 1-1.59-5.604c0-5.516 4.49-10.006 10.012-10.006s10.012 4.49 10.012 10.006c0 5.522-4.49 10.043-10.012 10.043Zm5.59-7.48c-.304-.152-1.8-.89-2.078-.99-.278-.1-.48-.15-.682.153-.203.304-.78.99-.955 1.194-.174.203-.354.228-.658.076-.304-.152-1.29-.475-2.46-1.51-.91-.81-1.526-1.81-1.7-2.114-.174-.304-.018-.468.133-.62.137-.136.304-.354.456-.532.152-.178.203-.304.304-.507.102-.203.05-.38-.025-.532-.076-.152-.68-1.64-.932-2.24-.244-.586-.492-.506-.68-.516-.176-.008-.379-.01-.582-.01s-.532.076-.81.38c-.278.304-1.06 1.036-1.06 2.524s1.084 2.93 1.232 3.134c.152.203 2.132 3.254 5.17 4.56.722.312 1.285.498 1.725.637.724.23 1.38.198 1.9.12.58-.087 1.8-.737 2.054-1.45.253-.713.253-1.324.177-1.45-.076-.127-.278-.2-.582-.353Z"
            />
          </svg>
        </span>
        <span className="whatsapp-toggle-copy">
          <span className="whatsapp-toggle-title">{isOpen ? 'Hide WhatsApp chat' : 'Chat on WhatsApp'}</span>
          <span className="whatsapp-toggle-subtitle">
            {isOpen ? 'You can send us the details anytime.' : 'Replies within one business day.'}
          </span>
        </span>
      </button>
    </div>
  )
}

export default WhatsAppChat
