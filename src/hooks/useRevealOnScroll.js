import { useEffect } from 'react'

const useRevealOnScroll = (key) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const elements = Array.from(document.querySelectorAll('.reveal-on-scroll'))

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )

    requestAnimationFrame(() => {
      elements.forEach((el) => {
        if (el.classList.contains('is-visible')) {
          return
        }
        observer.observe(el)
      })
    })

    return () => observer.disconnect()
  }, [key])
}

export default useRevealOnScroll
