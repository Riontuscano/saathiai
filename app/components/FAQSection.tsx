'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Is saathi.ai free to use?',
    a: 'Yes! saathi.ai offers a free tier with core features. Premium features like AI voice call reminders and advanced insights are available with a subscription.',
  },
  {
    q: 'How does the AI Voice Call Reminder work?',
    a: 'When you have an important task, saathi.ai can call you with a friendly Hinglish AI voice to remind you. You can set priority levels to control which tasks trigger calls.',
  },
  {
    q: 'Can I sync with WhatsApp?',
    a: 'Yes! Forward messages to your saathi.ai WhatsApp number and they will automatically be classified and added to your task inbox.',
  },
  {
    q: 'What is the Productivity Forest?',
    a: 'It is a gamified feature where you grow virtual trees by completing tasks. Stay consistent to grow a lush forest — break your streak and the trees wilt!',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. All data is encrypted end-to-end and stored securely. We never share your personal information with third parties.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        <div className="section-header">
          <h2 className="section-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
        </div>

        {faqs.map((faq, i) => (
          <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={i}>
            <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              {faq.q}
              <ChevronDown size={20} />
            </button>
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
