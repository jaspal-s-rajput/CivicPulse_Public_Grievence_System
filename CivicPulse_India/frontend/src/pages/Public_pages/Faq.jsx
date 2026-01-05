import { useState } from "react";

const faqs = [
  {
    question: "What is CivicPulse?",
    answer:
      "CivicPulse is a Smart City grievance and citizen services platform that enables citizens to report issues, track resolutions, and engage transparently with municipal authorities.",
  },
  {
    question: "Who can use CivicPulse?",
    answer:
      "CivicPulse can be used by citizens, municipal officers, and administrators. Citizens can submit and track grievances, while authorities manage and resolve them through structured workflows.",
  },
  {
    question: "How do I register a grievance?",
    answer:
      "Citizens can log in or register on the platform, select the grievance category, provide details and location, and submit the complaint digitally.",
  },
  {
    question: "Can I track the status of my complaint?",
    answer:
      "Yes. Every grievance receives a unique tracking ID. Citizens can view real-time updates, actions taken, and resolution status through the dashboard.",
  },
  {
    question: "What types of issues can be reported?",
    answer:
      "Issues related to sanitation, roads, street lighting, water supply, public safety, utilities, and other municipal services can be reported.",
  },
  {
    question: "Is CivicPulse aligned with Smart City initiatives?",
    answer:
      "Yes. CivicPulse is designed to support Smart City and e-Governance initiatives by improving transparency, accountability, and data-driven decision-making.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      {/* ================= INTERNAL CSS ================= */}
      <style>
        {`
        .faq-wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 3rem 0 6rem;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        /* ===== HEADER ===== */
        .faq-header h1 {
          font-size: clamp(2.4rem, 4.5vw, 3.2rem);
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .faq-header p {
          max-width: 700px;
          font-size: 1.1rem;
          line-height: 1.75;
          color: var(--text-muted);
        }

        /* ===== FAQ LIST ===== */
        .faq-list {
          display: flex;
          flex-direction: column;
        }

        .faq-item {
          border-top: 1px solid var(--border-soft);
          padding: 1.75rem 0;
        }

        .faq-item:last-child {
          border-bottom: 1px solid var(--border-soft);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          cursor: pointer;
        }

        .faq-question h3 {
          font-size: 1.15rem;
          font-weight: 600;
        }

        .faq-toggle {
          font-size: 1.5rem;
          line-height: 1;
          transition: transform 0.25s ease;
        }

        .faq-toggle.open {
          transform: rotate(45deg);
        }

        .faq-answer {
          margin-top: 1rem;
          max-width: 760px;
          line-height: 1.7;
          color: var(--text-muted);
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== FOOTER NOTE ===== */
        .faq-footer {
          margin-top: 3rem;
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        `}
      </style>

      {/* ================= PAGE CONTENT ================= */}
      <div className="faq-wrap">

        {/* HEADER */}
        <section className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about CivicPulse, grievance
            registration, complaint tracking, and citizen services.
          </p>
        </section>

        {/* FAQ LIST */}
        <section className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-item" key={index}>
              <div
                className="faq-question"
                onClick={() => toggle(index)}
              >
                <h3>{item.question}</h3>
                <span
                  className={`faq-toggle ${
                    activeIndex === index ? "open" : ""
                  }`}
                >
                  +
                </span>
              </div>

              {activeIndex === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </section>

        {/* FOOTER NOTE */}
        <div className="faq-footer">
          Still have questions? Please contact your local municipal
          office or reach out through the CivicPulse support channel.
        </div>

      </div>
    </>
  );
};

export default Faq;
