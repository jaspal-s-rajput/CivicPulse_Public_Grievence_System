const Home = () => {
  return (
    <main className="page civic-home">
      {/* ================= INTERNAL CSS ================= */}
      <style>{`
        .civic-home {
          display: flex;
          flex-direction: column;
          gap: 5.5rem;
        }

        section {
          max-width: 1200px;
        }

        /* ---------- HERO ---------- */
        .hero-eyebrow {
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          max-width: 760px;
          color: var(--text-muted);
        }

        .hero-actions {
          margin-top: 2.2rem;
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-actions button {
          padding: 0.95rem 1.6rem;
          border-radius: 18px;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(
            135deg,
            var(--primary),
            var(--primary-strong)
          );
          color: #fff;
        }

        .btn-secondary {
          background: color-mix(in srgb, var(--surface) 92%, transparent);
          border: 1px solid var(--border);
          color: var(--text-primary);
        }

        /* ---------- IMAGE CAROUSEL ---------- */
        .image-carousel {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(320px, 1fr);
          gap: 1.5rem;
          overflow-x: auto;
          padding-bottom: 1rem;
          scroll-snap-type: x mandatory;
        }

        .image-card {
          scroll-snap-align: start;
          border-radius: 26px;
          overflow: hidden;
          position: relative;
          min-height: 260px;
          box-shadow: var(--card-shadow);
        }

        .image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.1)
          );
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
          color: #fff;
          font-weight: 600;
        }

        /* ---------- VIDEO CAROUSEL ---------- */
        .video-carousel {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(360px, 1fr);
          gap: 1.5rem;
          overflow-x: auto;
        }

        .video-card {
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--border-soft);
          background: var(--surface);
        }

        .video-card iframe {
          width: 100%;
          height: 220px;
          border: none;
        }

        .video-caption {
          padding: 1rem 1.25rem;
          font-weight: 600;
        }

        /* ---------- CONTENT BLOCK ---------- */
        .content-block h2 {
          font-size: 1.8rem;
          margin-bottom: 0.75rem;
        }

        .content-block p {
          color: var(--text-muted);
          line-height: 1.75;
          max-width: 900px;
        }

        /* ---------- SHLOKAS ---------- */
        .shloka {
          margin-top: 1.25rem;
          font-style: italic;
          font-size: 1rem;
          color: var(--accent);
          letter-spacing: 0.05em;
        }

        .shloka-meaning {
          margin-top: 0.5rem;
          font-size: 0.95rem;
          color: var(--text-muted);
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section>
        <p className="hero-eyebrow">Smart City e-Governance Platform</p>

        <h1 className="hero-title">
          CivicPulse — Smart City Grievance Management System
        </h1>

        <p className="hero-subtitle">
          Transparent grievance reporting, faster resolutions,
          smarter cities through citizen participation and
          digital governance.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">File Complaint</button>
          <button className="btn-secondary">Track Complaint</button>
        </div>
      </section>

      {/* ================= IMAGE CAROUSEL ================= */}
      <section>
        <div className="image-carousel">
          {[
            {
              img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
              label: "Smart City Infrastructure"
            },
            {
              img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
              label: "Digital Governance Services"
            },
            {
              img: "https://images.unsplash.com/photo-1565372918671-85b87c2f8b38",
              label: "Citizen Engagement"
            },
            {
              img: "https://images.unsplash.com/photo-1526401485004-2aa7f3cfe4c8",
              label: "Urban Development Initiatives"
            }
          ].map(({ img, label }) => (
            <div key={label} className="image-card">
              <img src={img} alt={label} />
              <div className="image-overlay">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GOVERNMENT INITIATIVES ================= */}
      <section className="content-block">
        <h2>Government Initiatives & Civic Awareness</h2>
        <p>
          CivicPulse aligns with national digital governance initiatives
          aimed at empowering citizens, improving transparency, and
          strengthening accountability. By encouraging active public
          participation, the platform supports awareness campaigns,
          digital grievance redressal mechanisms, and data-driven
          governance for smarter cities.
        </p>

        <div className="shloka">
          कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
        </div>
        <div className="shloka-meaning">
          You have the right to perform your duty, but not to the fruits of action.
        </div>
      </section>

      {/* ================= VIDEO CAROUSEL ================= */}
      <section>
        <div className="video-carousel">
          {[
            {
              id: "xK6Kx8uR7vE",
              title: "Digital India & Smart Cities"
            },
            {
              id: "9ZK5FJ8c0cA",
              title: "Citizen-Centric Governance"
            },
            {
              id: "M4jJ6QJpJ6o",
              title: "Urban Innovation & Public Services"
            }
          ].map(v => (
            <div key={v.id} className="video-card">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                allowFullScreen
              />
              <div className="video-caption">{v.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MISSION & MOTO ================= */}
      <section className="content-block">
        <h2>Our Mission & Civic Motto</h2>
        <p>
          CivicPulse is built on the belief that responsible citizenship
          and responsive governance together shape sustainable urban
          development. Every complaint is a voice, every resolution is
          progress.
        </p>

        <div className="shloka">
          जनसेवा परमो धर्मः
        </div>
        <div className="shloka-meaning">
          Service to the people is the highest duty.
        </div>
      </section>
    </main>
  );
};

export default Home;
