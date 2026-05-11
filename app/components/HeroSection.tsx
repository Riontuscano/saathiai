'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Download, Play, Shield, HardDrive, Smartphone, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo('.hero-badge', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.3 })
        .fromTo('.hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.3')
        .fromTo('.hero-desc', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
        .fromTo('.hero-buttons', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
        .fromTo('.hero-meta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.2')
        .fromTo('.phone-mockup', { y: 60, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.9 }, '-=0.6')
        .fromTo('.phone-secondary', { y: 40, opacity: 0 }, { y: 0, opacity: 0.85, duration: 0.7, stagger: 0.15 }, '-=0.5')
        .fromTo('.sticky-note', { scale: 0, opacity: 0, rotation: -10 }, { scale: 1, opacity: 1, rotation: (i: number) => [-5, 3, -2][i], duration: 0.5, stagger: 0.12 }, '-=0.4')

      // Floating animation for sticky notes
      gsap.to('.sticky-note', {
        y: -8,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.4 },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={heroRef} id="hero">
      <div className="hero-bg-glow" />

      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={14} />
          Your AI Life Companion
        </div>

        <h1 className="hero-title">
          Organize. Plan.<br />
          <span className="gradient-text">Achieve More.</span>
        </h1>

        <p className="hero-desc">
          saathi.ai is an AI-powered life management app that helps students and professionals capture tasks, plan better, get smart reminders, and stay productive.
        </p>

        <div className="hero-buttons">
          <a href="#download" className="btn-primary">
            <Download size={18} /> Download APK
          </a>
          <a href="#how-it-works" className="btn-secondary">
            <Play size={18} /> Watch Demo
          </a>
        </div>

        <div className="hero-meta">
          <div className="hero-meta-item">
            <Shield size={14} /> v1.0.0
          </div>
          <div className="hero-meta-item">
            <HardDrive size={14} /> 28 MB
          </div>
          <div className="hero-meta-item">
            <Smartphone size={14} /> Android 8.0+
          </div>
        </div>
      </div>

      <div className="hero-visuals">
        <div className="sticky-note note-1">
          Submit PRCC<br />Assignment
        </div>
        <div className="sticky-note note-2">
          Group Discussion<br />Today
        </div>
        <div className="sticky-note note-3">
          Maths Test<br />Tomorrow
        </div>

        <div className="phone-secondary left">
          <Image src="/app-planner.png" alt="Saathi.ai planner view" width={200} height={400} style={{ objectFit: 'cover', height: 'auto' }} />
        </div>

        <div className="phone-mockup">
          <Image src="/app-notes.png" alt="Saathi.ai notes view" width={260} height={520} priority style={{ objectFit: 'cover', height: 'auto' }} />
        </div>

        <div className="phone-secondary right">
          <Image src="/app-dashboard.png" alt="Saathi.ai dashboard" width={200} height={400} style={{ objectFit: 'cover', height: 'auto' }} />
        </div>
      </div>
    </section>
  )
}
