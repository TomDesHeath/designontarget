import { useEffect } from 'react'

const useRevealOnScroll = (key) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => el.classList.add('is-visible'))
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

    const observeTargets = () => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        if (el.classList.contains('is-visible')) {
          return
        }

        if (el.dataset.revealObserverAttached === 'true') {
          return
        }

        observer.observe(el)
        el.dataset.revealObserverAttached = 'true'
      })
    }

    requestAnimationFrame(observeTargets)

    let mutationObserver
    if ('MutationObserver' in window) {
      mutationObserver = new MutationObserver(observeTargets)
      mutationObserver.observe(document.body, { childList: true, subtree: true })
    }

    return () => {
      observer.disconnect()
      if (mutationObserver) {
        mutationObserver.disconnect()
      }
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        delete el.dataset.revealObserverAttached
      })
    }
  }, [key])
}

export default useRevealOnScroll
