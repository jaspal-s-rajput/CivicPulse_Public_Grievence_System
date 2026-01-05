const About = () => {
  return (
    <>
      <style>
        {`
        .about-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 0 6rem;
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        /* ===== HERO ===== */
        .about-hero {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-eyebrow {
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--accent);
        }

        .about-hero h1 {
          font-size: clamp(2.6rem, 5vw, 3.4rem);
          line-height: 1.15;
          margin: 1rem 0;
        }

        .about-hero p {
          font-size: 1.1rem;
          line-height: 1.75;
          color: var(--text-muted);
          max-width: 720px;
        }

        .about-hero img {
          width: 100%;
          border-radius: 20px;
          object-fit: cover;
        }

        /* ===== SECTION ===== */
        .about-section {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 4rem;
          align-items: start;
        }

        .about-section h2 {
          font-size: 1.5rem;
        }

        .about-section p {
          line-height: 1.7;
          color: var(--text-muted);
        }

        /* ===== LIST ===== */
        .about-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .about-list-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .about-list-item span {
          font-weight: 700;
          color: var(--primary);
        }

        /* ===== WHAT WE DO ===== */
        .about-what {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .about-what-item img {
          width: 100%;
          max-height: 180px;
          object-fit: contain;
          margin-bottom: 1rem;
        }

        .about-what-item h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .about-what-item p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-muted);
        }

        /* ===== DIVIDER ===== */
        .about-divider {
          height: 1px;
          background: var(--border-soft);
        }

        /* ===== VISION ===== */
        .about-vision {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-vision img {
          width: 100%;
          max-height: 260px;
          object-fit: contain;
        }

        .about-vision p {
          font-size: 1.1rem;
          line-height: 1.75;
          color: var(--text-muted);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .about-hero,
          .about-section,
          .about-vision {
            grid-template-columns: 1fr;
          }

          .about-what {
            grid-template-columns: 1fr;
          }
        }
        `}
      </style>

      <div className="about-wrap">

        {/* HERO */}
        <section className="about-hero">
          <div>
            <span className="about-eyebrow">About CivicPulse</span>
            <h1>
              A modern platform for
              transparent civic governance.
            </h1>
            <p>
              CivicPulse is a Smart City grievance and citizen services
              platform designed to strengthen trust, accountability,
              and collaboration between citizens and municipal authorities.
            </p>
          </div>

          {/* City / Governance Image */}
          <img
            src="https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d"
            alt="Smart city governance"
          />
        </section>

        <div className="about-divider" />

        {/* WHO WE ARE */}
        <section className="about-section">
          <h2>Who We Are</h2>

          <div className="about-list">
            <div className="about-list-item">
              <span>01</span>
              <p>Built for Smart Cities and digital governance ecosystems</p>
            </div>
            <div className="about-list-item">
              <span>02</span>
              <p>Designed to support municipal workflows at scale</p>
            </div>
            <div className="about-list-item">
              <span>03</span>
              <p>Focused on transparency, trust, and service efficiency</p>
            </div>
          </div>
        </section>

        <div className="about-divider" />

        {/* WHAT WE DO */}
        <section>
          <h2 style={{ marginBottom: "2.5rem" }}>What We Do</h2>

          <div className="about-what">
            <div className="about-what-item">
              <img
                src="https://undraw.co/api/illustrations/undraw_file_searching_re_3evy.svg"
                alt="Grievance management"
              />
              <h3>Grievance Management</h3>
              <p>
                Digitized complaint registration, routing,
                and resolution across departments.
              </p>
            </div>

            <div className="about-what-item">
              <img
                src="https://undraw.co/api/illustrations/undraw_data_reports_re_p4so.svg"
                alt="Tracking and transparency"
              />
              <h3>Transparency & Tracking</h3>
              <p>
                Real-time status visibility, SLA tracking,
                and citizen notifications.
              </p>
            </div>

            <div className="about-what-item">
              <img
                src="https://undraw.co/api/illustrations/undraw_city_life_re_8tok.svg"
                alt="Smart city services"
              />
              <h3>Smart City Enablement</h3>
              <p>
                Data-driven insights to improve civic
                planning and public services.
              </p>
            </div>
          </div>
        </section>

        <div className="about-divider" />

        {/* VISION */}
        <section className="about-vision">
          <div>
            <h2>Our Vision</h2>
            <p>
              To enable a citizen-first governance ecosystem where
              technology strengthens trust, improves accountability,
              and ensures timely resolution of public issues.
            </p>
          </div>

          <img
            src="https://undraw.co/api/illustrations/undraw_public_service_re_3u7s.svg"
            alt="Public service vision"
          />
        </section>

      </div>
    </>
  );
};

export default About;
