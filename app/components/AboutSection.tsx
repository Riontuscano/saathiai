'use client'

import { useEffect, useRef } from 'react'
import { Target, Users, Zap } from 'lucide-react'
import { gsap } from 'gsap'

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo('.about-text', { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
            gsap.fromTo('.about-stats', { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.2 })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">
          About <span className="highlight">saathi.ai</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Built for students & professionals who want to do more.</h3>
          <p>
            saathi.ai was born from a simple frustration — too many tools, too little focus.
            We built an all-in-one AI companion that understands your life, organizes your chaos,
            and helps you stay on track with personalized plans, smart reminders, and a productivity
            forest that grows with you.
          </p>
          <p>
            Whether you are managing college assignments, work deadlines, or personal goals —
            saathi.ai adapts to your unique needs and helps you achieve more with less stress.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <Target size={24} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }} />
            <div className="stat-value">6+</div>
            <div className="stat-label">Core Features</div>
          </div>
          <div className="stat-item">
            <Users size={24} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }} />
            <div className="stat-value">AI</div>
            <div className="stat-label">Powered Engine</div>
          </div>
          <div className="stat-item">
            <Zap size={24} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }} />
            <div className="stat-value">1-Tap</div>
            <div className="stat-label">Smart Planning</div>
          </div>
        </div>
      </div>
    </section>
  )
}
