import "./PublicLayout.css";
import logoImg from "../assets/india-silver-map.png";
import makeInIndiaImg from "../assets/make-in-india-white.png";

export default function Footer() {
  return (
    <footer className="cp-footer">
      <div className="cp-footer__inner">

        {/* BRAND */}
        <div className="cp-footer__brand">
          <div className="cp-footer__logo">
            <img src={logoImg} alt="CivicPulse India" />
            <span>CivicPulse India</span>
          </div>

          <p className="cp-footer__desc">
            Empowering citizens and authorities through a unified
            Smart City grievance management platform.
          </p>

          <p className="cp-footer__tagline">
            जनसेवा · समाधान · विश्वास
          </p>

          {/* MAKE IN INDIA */}
          <div className="cp-footer__makeinindia">
            <img
              src={makeInIndiaImg}
              alt="Make in India"
            />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="cp-footer__col">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/faq">FAQ</a>
          <a href="/aware">Awareness</a>
          <a href="/make-in-india">Make in India</a>
        </div>

        {/* SUPPORT */}
        <div className="cp-footer__col">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Support</a>
        </div>

        {/* CONTACT */}
        <div className="cp-footer__col">
          <h4>Contact</h4>
          <p>support@civicpulse.in</p>
          <p>+91 9XXXX XXXXX</p>
          <p>Smart City Innovation Hub, India</p>
        </div>
      
      </div>

      <div className="cp-footer__bottom">
        © {new Date().getFullYear()} CivicPulse India · Built for Smart Governance
      </div>
    </footer>
  );
}
