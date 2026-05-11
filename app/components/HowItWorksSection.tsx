'use client'

import { useEffect, useRef } from 'react'
import { Mic, ClipboardList, Wand2 } from 'lucide-react'
import { gsap } from 'gsap'

const steps = [
  {
    icon: Mic,
    title: 'Capture Anything',
    desc: 'Speak, type, snap a photo, or forward from WhatsApp. Saathi captures it all instantly.',
  },
  {
    icon: ClipboardList,
    title: 'AI Organizes',
    desc: 'Your AI assistant classifies, tags, and organizes everything into the right category.',
  },
  {
    icon: Wand2,
    title: 'Plan & Execute',
    desc: 'Get an AI-generated daily plan, smart reminders, and track your progress effortlessly.',
  },
]

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              '.step-card',
              { y: 40, opacity: 0, scale: 0.95 },
              { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.2, ease: 'back.out(1.2)' }
            )
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
    <section className="how-section" id="how-it-works" ref={sectionRef}>
      <div className="how-inner">
        <div className="section-header">
          <h2 className="section-title">
            How It <span className="highlight">Works</span>
          </h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step-card" key={i}>
              <div className="step-number">{i + 1}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
