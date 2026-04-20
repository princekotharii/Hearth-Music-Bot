import Link from "next/link";
import {
  FiClock,
  FiDisc,
  FiHeadphones,
  FiMusic,
  FiPlayCircle,
  FiRadio,
  FiSliders,
  FiStar,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import FeatureCard from "@/components/feature-card";
import SectionHeading from "@/components/section-heading";
import StatCard from "@/components/stat-card";
import { coreFeatures, quickStats } from "@/data/site";

const statIcons = [FiUsers, FiMusic, FiTrendingUp];
const homeFeatureIcons = [FiHeadphones, FiRadio, FiStar];
const liveTracks = [
  { title: "Starlight Echoes", artist: "Aria Flux", time: "03:42" },
  { title: "Midnight Metro", artist: "Nova Key", time: "02:58" },
  { title: "Fever Frequency", artist: "Skyline Unit", time: "04:11" },
];

export default function HomePage() {
  return (
    <>
      <section className="section hero-section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Drop The Beat In Discord</p>
            <h1>Hearth is your always-on music stage for every community.</h1>
            <p className="hero-copy">
              Spin high-energy listening rooms with stable playback, crowd-driven
              queues, and controls that feel like a real DJ deck inside Discord.
            </p>
            <div className="hero-actions">
              <Link href="/support" className="button button-primary">
                Add To Discord
              </Link>
              <Link href="/features" className="button button-ghost">
                Hear The Features
              </Link>
            </div>

            <div className="wave-strip" aria-hidden="true">
              {Array.from({ length: 36 }).map((_, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.06}s` }} />
              ))}
            </div>
          </div>

          <div className="hero-stack">
            <div className="hero-panel glass-card">
              <p className="panel-label">Now Mixing</p>
              <h3>Neon Rooftop Session // Live Queue</h3>
              <p className="panel-copy">27 tracks lined up by 18 listeners</p>
              <div className="eq-bars" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.12}s` }} />
                ))}
              </div>

              <div className="panel-meta-row">
                <span>
                  <FiDisc /> Auto-DJ Active
                </span>
                <span>
                  <FiSliders /> Bass Boost +15%
                </span>
              </div>
            </div>

            <div className="playlist-card glass-card">
              <h3>Tonight&apos;s Setlist</h3>
              <div className="playlist-list">
                {liveTracks.map((track) => (
                  <div className="playlist-item" key={track.title}>
                    <span className="play-icon">
                      <FiPlayCircle />
                    </span>
                    <div>
                      <p className="track-title">{track.title}</p>
                      <p className="track-artist">{track.artist}</p>
                    </div>
                    <span className="track-time">
                      <FiClock /> {track.time}
                    </span>
                  </div>
                ))}
              </div>
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
        <div className="container">
          <SectionHeading
            eyebrow="Sound Engine"
            title="Production-grade tools for nonstop community sessions"
            description="Hearth balances clean output, crowd control, and fast commands so your music never loses momentum."
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