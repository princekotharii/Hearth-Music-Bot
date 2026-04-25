import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiCommand,
  FiHeadphones,
  FiMusic,
  FiRadio,
  FiShield,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { coreFeatures, quickStats } from "@/data/site";
import "./page.css";

const featureIcons = [FiHeadphones, FiRadio, FiCommand, FiZap];

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

const trustStrip = [
  { icon: FiShield, text: "99.99% uptime" },
  { icon: FiUsers, text: "42K+ active servers" },
  { icon: FiMusic, text: "180K+ queue actions daily" },
];

export default function HomePage() {
  return (
    <>
      <section className="section home-fusion-hero">
        <div className="container home-fusion-hero-grid">
          <div className="home-fusion-main">
            <div className="home-fusion-hero-badge">
              <span className="home-fusion-live-dot" />
              <span>Live audio room</span>
              <span className="home-fusion-mini-wave" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
            <p className="home-fusion-kicker">Hearth Music Bot</p>
            <h1>
              Discord Music,
              <span>Run Like A Live Room.</span>
            </h1>
            <p className="home-fusion-sub">
              Fast commands, cleaner queues, and stable playback in one focused
              experience built for communities that actually listen together.
            </p>

            <div className="home-fusion-actions">
              <Link href="/support" className="button button-primary">
                Invite Hearth
              </Link>
              <Link href="/documentation" className="button button-ghost">
                Open Docs
              </Link>
            </div>

            <div className="home-fusion-trust-row">
              {trustStrip.map((item) => {
                const Icon = item.icon;

                return (
                  <span key={item.text}>
                    <Icon /> {item.text}
                  </span>
                );
              })}
            </div>
          </div>

          <aside className="home-fusion-side" aria-hidden="true">
            <div className="home-fusion-logo-card glass-card">
              <span className="home-fusion-logo-ring home-fusion-logo-ring-1" />
              <span className="home-fusion-logo-ring home-fusion-logo-ring-2" />
              <span className="home-fusion-logo-spark" />
              <div className="home-fusion-logo-stage">
              <Image
                src="/hearth-log-withoutbg.png"
                alt=""
                width={360}
                height={360}
                className="home-fusion-logo"
              />
              </div>
              <p>HEARTH AUDIO CORE</p>
            </div>

            <div className="home-fusion-now glass-card">
              <p className="home-fusion-now-head">
                <FiMusic /> Queue Live
              </p>
              {queuePreview.map((track) => (
                <div className="home-fusion-now-row" key={track.name}>
                  <div>
                    <p>{track.name}</p>
                    <span>{track.artist}</span>
                  </div>
                  <strong>{track.duration}</strong>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section home-fusion-metrics">
        <div className="container home-fusion-metrics-grid">
          {quickStats.map((stat) => (
            <article className="home-fusion-metric" key={stat.label}>
              <p>{stat.value}</p>
              <span>{stat.label}</span>
            </article>
          ))}
          <article className="home-fusion-metric">
            <p>42K+</p>
            <span>Active Servers</span>
          </article>
          <article className="home-fusion-metric">
            <p>180K+</p>
            <span>Daily Queue Actions</span>
          </article>
        </div>
      </section>

      <section className="section home-fusion-features">
        <div className="container home-fusion-feature-grid">
          <article className="home-fusion-manifesto">
            <p className="eyebrow">The Difference</p>
            <h2>Built for rooms where music is the main event.</h2>
            <p>
              Hearth cuts command friction and keeps playback predictable,
              so moderators control flow without killing momentum.
            </p>
          </article>

          <div className="home-fusion-card-list">
            {coreFeatures.slice(0, 4).map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];

              return (
                <article className="home-fusion-feature-card" key={feature.title}>
                  <span className="home-fusion-feature-icon">
                    <Icon />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section home-fusion-flow">
        <div className="container home-fusion-flow-grid">
          <article className="home-fusion-steps-wrap">
            <p className="eyebrow">Session Flow</p>
            <h2>Quick path from invite to full control.</h2>
            <div className="home-fusion-steps">
              {flowSteps.map((item, index) => (
                <div className="home-fusion-step" key={item.step}>
                  <span className="home-fusion-step-num">0{index + 1}</span>
                  <div>
                    <p className="home-fusion-step-code">{item.step}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="home-fusion-cta">
            <h3>Ready to run a better Discord music room?</h3>
            <p>
              Bring Hearth in, drop your first track, and keep the room moving
              with cleaner queue control.
            </p>

            <div className="home-fusion-cta-actions">
              <Link href="/support" className="button button-primary">
                Invite Bot
              </Link>
              <Link href="/documentation" className="button button-ghost">
                Setup Guide <FiArrowRight />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}