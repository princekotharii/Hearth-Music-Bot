import { FiMail, FiMessageCircle, FiSend, FiUsers } from "react-icons/fi";
import SectionHeading from "@/components/section-heading";
import { contactChannels } from "@/data/site";

const contactIcons = [FiMessageCircle, FiMail, FiUsers];

export const metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-hero page-hero-contact">
          <p className="eyebrow">Contact Us</p>
          <h1>Talk to the Hearth team.</h1>
          <p className="hero-copy">
            For setup help, feature requests, partnerships, or server-specific
            guidance, we are ready to help.
          </p>
        </div>

        <SectionHeading
          eyebrow="Support Paths"
          title="Pick the best way to reach us"
          description="Use a channel that matches your request, whether it’s troubleshooting or new feature ideas."
        />

        <div className="contact-grid">
          {contactChannels.map((channel, index) => {
            const Icon = contactIcons[index];

            return (
              <article key={channel.title} className="glass-card contact-card">
                <div className="card-head">
                  <div className="icon-chip">
                    {Icon ? <Icon /> : null}
                  </div>
                  <h3>{channel.title}</h3>
                </div>
                <p>{channel.detail}</p>
              </article>
            );
          })}
        </div>

        <div className="contact-panel glass-card">
          <div>
            <p className="panel-label">Need a direct reply?</p>
            <h3>Send a message and we’ll get back to you.</h3>
          </div>
          <a href="mailto:support@hearthmusicbot.com" className="button button-primary">
            Email Support <FiSend />
          </a>
        </div>
      </div>
    </section>
  );
}
