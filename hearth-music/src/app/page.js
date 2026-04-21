import Link from "next/link";
import {
  FiClock,
  FiHeadphones,
  FiList,
  FiMusic,
  FiPlayCircle,
  FiRadio,
  FiTrendingUp,
  FiUsers,
  FiVolume2,
  FiZap,
} from "react-icons/fi";
import FeatureCard from "@/components/feature-card";
import SectionHeading from "@/components/section-heading";
import StatCard from "@/components/stat-card";
import { coreFeatures, quickStats } from "@/data/site";

const statIcons = [FiUsers, FiMusic, FiTrendingUp];
const homeFeatureIcons = [FiHeadphones, FiRadio, FiZap];
const liveTracks = [
  {
    title: "Now Playing",
    icon: FiMusic,
    lineOne: "Blinding Lights",
    lineTwo: "The Weeknd",
    meta: "1/21",
  },
  {
    title: "Queue",
    icon: FiList,
    lineOne: "1. Levitating - Dua Lipa",
    lineTwo: "2. Stay - Kid LAROI",
    meta: "3 songs",
  },
  {
    title: "Lyrics",
    icon: FiHeadphones,
    lineOne: "Through the neon lights and rain",
    lineTwo: "This city never sleeps tonight",
    meta: "Live",
  },
  {
    title: "Volume",
    icon: FiVolume2,
    lineOne: "Master Output",
    lineTwo: "75%",
    meta: "Stable",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section ref-hero">
        <div className="container ref-hero-inner">
          <p className="ref-kicker">Stream music, control playback, and vibe - all in Discord</p>
          <h1>The #1 Free Discord Music Bot For Every Server!</h1>
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

          <div className="ref-card-row">
            {liveTracks.map((track, index) => {
              const Icon = track.icon;

              return (
                <article key={track.title} className={`ref-mini-card card-${index + 1}`}>
                  <p className="mini-head">
                    <Icon /> {track.title}
                  </p>
                  <div className="mini-body">
                    <p>{track.lineOne}</p>
                    <p>{track.lineTwo}</p>
                  </div>
                  <p className="mini-meta">{track.meta}</p>
                  {track.title === "Now Playing" ? (
                    <div className="mini-controls" aria-hidden="true">
                      <span>
                        <FiPlayCircle />
                      </span>
                      <span>
                        <FiClock />
                      </span>
                    </div>
                  ) : null}
                </article>
              );
            })}
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