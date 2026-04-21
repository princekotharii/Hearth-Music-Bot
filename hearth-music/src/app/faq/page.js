import { FiChevronDown, FiHelpCircle, FiMessageCircle, FiMusic, FiPlayCircle } from "react-icons/fi";
import SectionHeading from "@/components/section-heading";
import { supportFaq } from "@/data/site";

export const metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-hero page-hero-faq">
          <p className="eyebrow">FAQ</p>
          <h1>Common questions answered simply.</h1>
          <p className="hero-copy">
            Clear answers to the most asked Hearth setup and playback questions.
          </p>
        </div>

        <SectionHeading
          eyebrow="Quick Answers"
          title="Short, useful answers for busy server owners"
          description="If you need a fast decision on permissions, .play usage, or support, start here."
        />

        <div className="faq-feature-row">
          <article className="glass-card faq-feature-card">
            <FiMusic />
            <h3>Music-first experience</h3>
            <p>Built to feel like a live music room, not a cluttered bot panel.</p>
          </article>
          <article className="glass-card faq-feature-card">
            <FiPlayCircle />
            <h3>Slash command ready</h3>
            <p>Quick command flow keeps music sessions fast and intuitive.</p>
          </article>
          <article className="glass-card faq-feature-card">
            <FiMessageCircle />
            <h3>Support is easy</h3>
            <p>Need help? Your team can jump into the support server anytime.</p>
          </article>
        </div>

        <div className="faq-accordion">
          {supportFaq.map((item) => (
            <details key={item.question} className="glass-card faq-item">
              <summary className="faq-summary">
                <span className="faq-summary-left">
                  <span className="icon-chip">
                    <FiHelpCircle />
                  </span>
                  <span>{item.question}</span>
                </span>
                <span className="faq-arrow" aria-hidden="true">
                  <FiChevronDown />
                </span>
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
