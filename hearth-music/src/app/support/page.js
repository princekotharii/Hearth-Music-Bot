import { FiExternalLink, FiHelpCircle, FiMessageCircle } from "react-icons/fi";
import SectionHeading from "@/components/section-heading";
import { supportFaq } from "@/data/site";

export const metadata = {
  title: "Support",
};

export default function SupportPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Backstage Help"
          title="Setup support for every music room"
          description="From first invite to advanced audio tuning, get direct help to keep your sessions smooth."
        />

        <div className="support-grid">
          <article className="glass-card support-card">
            <div className="card-head">
              <div className="icon-chip">
                <FiMessageCircle />
              </div>
              <h3>Join Support Server</h3>
            </div>
            <p>
              Chat with moderators, request features, and open a troubleshooting
              ticket directly in Discord.
            </p>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="button button-primary inline-button"
            >
              Open Discord <FiExternalLink />
            </a>
          </article>

          <article className="glass-card support-card">
            <div className="card-head">
              <div className="icon-chip">
                <FiHelpCircle />
              </div>
              <h3>Common Questions</h3>
            </div>

            <div className="faq-list">
              {supportFaq.map((item) => (
                <div key={item.question} className="faq-item">
                  <h4>{item.question}</h4>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
