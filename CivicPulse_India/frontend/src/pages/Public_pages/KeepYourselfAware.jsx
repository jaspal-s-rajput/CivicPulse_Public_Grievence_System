const KeepYourselfAware = () => {
  return (
    <>
      {/* ================= INTERNAL CSS ================= */}
      <style>
        {`
        .aware-wrap {
          max-width: 950px;
          margin: 0 auto;
          padding: 3rem 0 6rem;
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        /* ===== HEADER ===== */
        .aware-hero h1 {
          font-size: clamp(2.4rem, 4.5vw, 3.2rem);
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .aware-hero p {
          max-width: 720px;
          font-size: 1.1rem;
          line-height: 1.75;
          color: var(--text-muted);
        }

        /* ===== SECTION ===== */
        .aware-section {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 4rem;
          align-items: start;
        }

        .aware-section h2 {
          font-size: 1.5rem;
          line-height: 1.3;
        }

        .aware-section p {
          line-height: 1.7;
          color: var(--text-muted);
        }

        /* ===== TOPIC LIST ===== */
        .aware-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .aware-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .aware-item span {
          font-weight: 700;
          color: var(--primary);
          font-size: 0.9rem;
        }

        .aware-item p {
          margin: 0;
          line-height: 1.6;
        }

        /* ===== INFO STRIP ===== */
        .aware-note {
          max-width: 780px;
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--text-muted);
        }

        /* ===== DIVIDER ===== */
        .aware-divider {
          height: 1px;
          background: var(--border-soft);
          width: 100%;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .aware-section {
            grid-template-columns: 1fr;
          }
        }
        `}
      </style>

      {/* ================= PAGE CONTENT ================= */}
      <div className="aware-wrap">

        {/* HERO */}
        <section className="aware-hero">
          <h1>Keep Yourself Aware</h1>
          <p>
            Staying informed empowers citizens to participate actively in
            governance, respond responsibly to civic situations, and
            contribute positively to community development.
          </p>
        </section>

        <div className="aware-divider" />

        {/* AWARENESS TOPICS */}
        <section className="aware-section">
          <h2>Citizen Awareness Areas</h2>

          <div className="aware-list">
            <div className="aware-item">
              <span>01</span>
              <p>
                Public safety alerts, emergency advisories,
                and disaster preparedness information.
              </p>
            </div>

            <div className="aware-item">
              <span>02</span>
              <p>
                Government schemes, welfare programs,
                and eligibility benefits for citizens.
              </p>
            </div>

            <div className="aware-item">
              <span>03</span>
              <p>
                Municipal rules, civic duties,
                and responsibilities of residents.
              </p>
            </div>

            <div className="aware-item">
              <span>04</span>
              <p>
                Environmental protection guidelines,
                waste management, and sustainability practices.
              </p>
            </div>

            <div className="aware-item">
              <span>05</span>
              <p>
                Digital grievance redressal rights,
                service timelines, and complaint escalation processes.
              </p>
            </div>
          </div>
        </section>

        <div className="aware-divider" />

        {/* CLOSING NOTE */}
        <section className="aware-note">
          <p>
            CivicPulse is committed to strengthening transparency and
            awareness by providing timely information, verified updates,
            and accessible resources that help citizens make informed
            decisions and engage responsibly with civic institutions.
          </p>
        </section>

      </div>
    </>
  );
};

export default KeepYourselfAware;
