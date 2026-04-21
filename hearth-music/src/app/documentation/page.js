import { FiBookOpen, FiCpu, FiList, FiPlayCircle, FiSliders, FiZap } from "react-icons/fi";
import SectionHeading from "@/components/section-heading";
import { docsSections } from "@/data/site";

const docIcons = [FiPlayCircle, FiList, FiSliders, FiCpu];

export const metadata = {
  title: "Documentation",
};

export default function DocumentationPage() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-hero page-hero-docs">
          <p className="eyebrow">Documentation</p>
          <h1>Everything you need to set up Hearth fast.</h1>
          <p className="hero-copy">
            Simple setup steps, playback guidance, and troubleshooting notes for
            both first-time users and server admins.
          </p>
        </div>

        <SectionHeading
          eyebrow="Popular Topics"
          title="Start with the essentials, then tune the room"
          description="These guides cover the most common setup paths for Discord music servers."
        />

        <div className="docs-grid">
          {docsSections.map((section, index) => {
            const Icon = docIcons[index];

            return (
              <article key={section.title} className="glass-card docs-card">
                <div className="card-head">
                  <div className="icon-chip">
                    {Icon ? <Icon /> : <FiBookOpen />}
                  </div>
                  <h3>{section.title}</h3>
                </div>
                <ul className="docs-list">
                  {section.items.map((item) => (
                    <li key={item}>
                      <FiZap />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="docs-banner glass-card">
          <p className="panel-label">Quick Tip</p>
          <h3>Use .play, then keep the session alive with .queue and .shuffle.</h3>
        </div>
      </div>
    </section>
  );
}
