'use client'

import { useEffect, useRef } from 'react'
import { Inbox, PhoneCall, CalendarCheck, MessageSquare, TreePine, BarChart3 } from 'lucide-react'
import { gsap } from 'gsap'

const features = [
  {
    icon: Inbox,
    title: 'Smart Inbox',
    desc: 'Capture text, voice, image or WhatsApp and let AI auto classify and organize.',
  },
  {
    icon: PhoneCall,
    title: 'AI Voice Call Reminders',
    desc: 'Important tasks? Get a Hinglish AI voice call so you never miss what matters.',
  },
  {
    icon: CalendarCheck,
    title: 'AI Planner',
    desc: 'AI analyzes your schedule and suggests the best plan with one-tap apply.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Integration',
    desc: 'Sync tasks and messages from WhatsApp into your unified workspace.',
  },
  {
    icon: TreePine,
    title: 'Productivity Forest',
    desc: 'Stay consistent and grow your own forest as you complete tasks.',
  },
  {
    icon: BarChart3,
    title: 'Smart Insights',
    desc: 'Get productivity reports, burnout risk alerts, and personalized suggestions.',
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              '.feature-card',
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
            )
            gsap.fromTo(
              '.section-title',
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
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
    <section className="features-section" id="features" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">
          Powerful Features to Simplify Your Life<span className="highlight">+</span>
        </h2>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">
              <f.icon size={24} />
            </div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
