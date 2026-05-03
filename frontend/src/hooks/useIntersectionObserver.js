import { useEffect, useRef, useState } from 'react'

function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
        ...options
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [options])

  return [ref, isIntersecting]
}

export default useIntersectionObserver