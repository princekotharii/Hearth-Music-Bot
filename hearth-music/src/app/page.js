import Link from "next/link";
import {
  FiClock,
  FiHeadphones,
  FiMusic,
  FiPlayCircle,
  FiRadio,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiVolume2,
  FiZap,
} from "react-icons/fi";
import FeatureCard from "@/components/feature-card";
import SectionHeading from "@/components/section-heading";
import StatCard from "@/components/stat-card";
import { coreFeatures, quickStats } from "@/data/site";

const statIcons = [FiShield, FiClock];
const homeFeatureIcons = [FiHeadphones, FiRadio, FiZap];

const flowSteps = [
  { step: ".play", title: "Start the session", text: "Drop a track and let Hearth join the room instantly." },
  { step: ".queue", title: "Shape the setlist", text: "Move songs, shuffle the order, and keep the energy right." },
  { step: ".loop", title: "Keep the vibe alive", text: "Loop your favorites or let auto-DJ keep the mix going." },
];

const queuePreview = [
  { name: "Levitating", artist: "Dua Lipa", duration: "3:23" },
  { name: "Stay", artist: "Kid LAROI", duration: "2:21" },
  { name: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
];

export default function HomePage() {
  return (
    <>
      <section className="section ref-hero">
        <div className="container ref-hero-inner">
          <p className="ref-kicker">Stream music, control playback, and vibe - all in Discord</p>
          <h1>Free Discord Music Bot For Every Server!</h1>
          <p className="ref-copy">
            The best free Discord music bot with crystal-clear playback, smart
            queue controls, and powerful command tools built for every server.
          </p>

          <div className="ref-actions">
            <Link href="/documentation" className="button button-primary">
              Add Hearth - it&apos;s free
            </Link>
            <Link href="/contact" className="button button-ghost">
              Contact Us
            </Link>
          </div>

          <div className="hero-player-dock glass-card">
            <div className="dock-main">
              <p className="mini-head">
                <FiMusic /> Now Playing
              </p>
              <h3>Blinding Lights</h3>
              <p className="dock-artist">The Weeknd</p>
              <div className="dock-progress" aria-hidden="true">
                <span />
              </div>
              <div className="dock-controls" aria-hidden="true">
                <span>
                  <FiPlayCircle />
                </span>
                <span>
                  <FiVolume2 /> 75%
                </span>
                <span>
                  <FiClock /> 1:21 / 3:20
                </span>
              </div>
            </div>

            <div className="dock-queue">
              <p className="mini-head">Queue Preview</p>
              {queuePreview.map((track) => (
                <div className="dock-queue-row" key={track.name}>
                  <div>
                    <p className="track-title">{track.name}</p>
                    <p className="track-artist">{track.artist}</p>
                  </div>
                  <span className="track-time">{track.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stat-grid">
          {quickStats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={statIcons[index]}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container session-grid">
          <div className="session-copy glass-card">
            <p className="panel-label">Session Flow</p>
            <h2>Built for the rhythm of a real music room</h2>
            <p>
              Hearth keeps the setup simple, the queue clean, and the playback
              smooth so the vibe never drops.
            </p>

            <div className="session-steps">
              {flowSteps.map((item, index) => (
                <div className="session-step" key={item.step}>
                  <span className="session-step-number">0{index + 1}</span>
                  <div>
                    <p className="session-step-code">{item.step}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="session-panel glass-card">
            <p className="panel-label">Audio Snapshot</p>
            <h3>Night Drive // Low Noise Mix</h3>
            <div className="session-eq" aria-hidden="true">
              {Array.from({ length: 14 }).map((_, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.08}s` }} />
              ))}
            </div>
            <div className="session-badges">
              <span>Queue stable</span>
              <span>Filters on</span>
              <span>Listener ready</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Sound Engine"
            title="Designed like a live audio console, not a basic bot"
            description="Every page is built for rhythm, stability, and a music-first experience across the entire site."
          />
          <div className="feature-grid">
            {coreFeatures.slice(0, 3).map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={homeFeatureIcons[index]}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}