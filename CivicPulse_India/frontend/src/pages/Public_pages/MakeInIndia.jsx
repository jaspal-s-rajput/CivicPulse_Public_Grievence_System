const MakeInIndia = () => {
  return (
    <>
      {/* ================= INTERNAL CSS ================= */}
      <style>
        {`
        .makeindia-wrap {
          max-width: 950px;
          margin: 0 auto;
          padding: 3rem 0 6rem;
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        /* ===== HERO ===== */
        .makeindia-hero h1 {
          font-size: clamp(2.4rem, 4.5vw, 3.2rem);
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .makeindia-hero p {
          max-width: 760px;
          font-size: 1.1rem;
          line-height: 1.75;
          color: var(--text-muted);
        }

        /* ===== SECTION ===== */
        .makeindia-section {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 4rem;
          align-items: start;
        }

        .makeindia-section h2 {
          font-size: 1.5rem;
          line-height: 1.3;
        }

        .makeindia-section p {
          line-height: 1.7;
          color: var(--text-muted);
        }

        /* ===== SUPPORT POINTS ===== */
        .makeindia-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .makeindia-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .makeindia-item span {
          font-weight: 700;
          color: var(--primary);
          font-size: 0.9rem;
        }

        .makeindia-item p {
          margin: 0;
          line-height: 1.6;
        }

        /* ===== CLOSING NOTE ===== */
        .makeindia-note {
          max-width: 780px;
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--text-muted);
        }

        /* ===== DIVIDER ===== */
        .makeindia-divider {
          height: 1px;
          background: var(--border-soft);
          width: 100%;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .makeindia-section {
            grid-template-columns: 1fr;
          }
        }
        `}
      </style>

      {/* ================= PAGE CONTENT ================= */}
      <div className="makeindia-wrap">

        {/* HERO */}
        <section className="makeindia-hero">
          <h1>Make in India</h1>
          <p>
            CivicPulse proudly aligns with the Make in India initiative by
            promoting indigenous digital solutions that strengthen governance,
            empower citizens, and support national technological self-reliance.
          </p>
        </section>

        <div className="makeindia-divider" />

        {/* SUPPORT SECTION */}
        <section className="makeindia-section">
          <h2>How CivicPulse Supports Make in India</h2>

          <div className="makeindia-list">
            <div className="makeindia-item">
              <span>01</span>
              <p>
                Designed and developed using modern web technologies
                by Indian talent and innovation.
              </p>
            </div>

            <div className="makeindia-item">
              <span>02</span>
              <p>
                Supports Digital India and Smart City initiatives
                through scalable and secure digital infrastructure.
              </p>
            </div>

            <div className="makeindia-item">
              <span>03</span>
              <p>
                Encourages local innovation, open standards,
                and sustainable technology practices.
              </p>
            </div>

            <div className="makeindia-item">
              <span>04</span>
              <p>
                Strengthens e-Governance systems by improving transparency,
                accountability, and service delivery.
              </p>
            </div>
          </div>
        </section>

        <div className="makeindia-divider" />

        {/* CLOSING */}
        <section className="makeindia-note">
          <p>
            Building reliable and indigenous public digital platforms is a
            cornerstone of national growth. CivicPulse contributes to this
            vision by delivering technology-driven governance solutions that
            serve citizens efficiently and responsibly.
          </p>
        </section>

      </div>
    </>
  );
};

export default MakeInIndia;
