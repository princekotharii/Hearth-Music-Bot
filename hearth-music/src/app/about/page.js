import { FiActivity, FiClock, FiDisc, FiHeadphones, FiMusic, FiRadio, FiUsers } from "react-icons/fi";
import FeatureCard from "@/components/feature-card";
import SectionHeading from "@/components/section-heading";
import StatCard from "@/components/stat-card";
import { aboutHighlights, aboutStats } from "@/data/site";

const statIcons = [FiUsers, FiMusic, FiClock];
const aboutIcons = [FiHeadphones, FiRadio, FiActivity];

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-hero page-hero-soft">
          <p className="eyebrow">About Hearth</p>
          <h1>Built for communities that want a better music room.</h1>
          <p className="hero-copy">
            Hearth is designed like a live session, not just a bot. Clean UI,
            smooth playback, and warm music-driven visuals keep the experience
            feeling premium and alive.
          </p>
        </div>

        <div className="stat-grid page-stat-grid">
          {aboutStats.map((stat, index) => (
            <StatCard key={stat.label} icon={statIcons[index]} label={stat.label} value={stat.value} />
          ))}
        </div>

        <SectionHeading
          eyebrow="Why Hearth"
          title="The music vibe carries through every screen"
          description="From glowing cards to centered layouts, Hearth keeps the energy consistent for fans and server owners."
        />

        <div className="feature-grid">
          {aboutHighlights.map((item, index) => (
            <FeatureCard
              key={item.title}
              icon={aboutIcons[index]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="about-band glass-card">
          <div>
            <p className="panel-label">Mission</p>
            <h3>Make server music feel like a real session.</h3>
          </div>
          <p>
            Hearth brings together queue control, clarity, and atmosphere so your
            Discord community can listen together without friction.
          </p>
          <span className="about-band-icon">
            <FiDisc />
          </span>
        </div>
      </div>
    </section>
  );
}
