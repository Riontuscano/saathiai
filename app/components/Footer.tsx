import { Heart, Sparkles, Globe, ExternalLink, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <div className="footer-banner" id="download">
        <p>
          <Heart size={16} />
          Made for students &amp; professionals to focus better, plan smarter and achieve more.
        </p>
      </div>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="nav-logo" style={{ color: 'white', marginBottom: '0.5rem', display: 'inline-flex' }}>
                <div className="nav-logo-icon">
                  <Sparkles size={20} />
                </div>
                saathi.ai
              </a>
              <p>Your AI-powered life companion. Organize, plan, and achieve more every day.</p>
            </div>

            <div className="footer-col">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#screenshots">Screenshots</a>
              <a href="https://github.com/Riontuscano/saathiai/releases/download/v1.0.0/Saathi.apk" target="_blank" rel="noopener noreferrer">Download</a>
              <a href="#">Changelog</a>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <a href="#faq">FAQ</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Support</a>
            </div>

            <div className="footer-col">
              <h4>Connect</h4>
              <a href="https://github.com/Riontuscano/saathiai" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="#">Contact Us</a>
              <a href="#">Community</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} saathi.ai — All rights reserved.</p>
            <div className="footer-socials">
              <a href="https://github.com/Riontuscano/saathiai" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Globe size={18} /></a>
              <a href="https://github.com/Riontuscano/saathiai/releases/download/v1.0.0/Saathi.apk" target="_blank" rel="noopener noreferrer" aria-label="Download"><ExternalLink size={18} /></a>
              <a href="#" aria-label="Chat"><MessageCircle size={18} /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
