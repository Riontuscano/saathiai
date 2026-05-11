'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

const screenshots = [
  { src: '/app-planner.png', alt: 'Saathi.ai Planner View' },
  { src: '/app-notes.png', alt: 'Saathi.ai Notes View' },
  { src: '/app-dashboard.png', alt: 'Saathi.ai Dashboard View' },
]

export default function ScreenshotsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              '.screenshot-item',
              { y: 60, opacity: 0, scale: 0.9 },
              { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out' }
            )
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="screenshots-section" id="screenshots" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">
          App <span className="highlight">Screenshots</span>
        </h2>
      </div>

      <div className="screenshots-grid">
        {screenshots.map((s, i) => (
          <div className="screenshot-item" key={i}>
            <Image src={s.src} alt={s.alt} width={280} height={560} style={{ objectFit: 'cover', height: 'auto' }} />
          </div>
        ))}
      </div>
    </section>
  )
}
