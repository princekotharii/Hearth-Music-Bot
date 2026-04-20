import { FiCpu, FiLayers, FiShield, FiSliders, FiVolume2, FiZap } from "react-icons/fi";
import FeatureCard from "@/components/feature-card";
import SectionHeading from "@/components/section-heading";
import { coreFeatures } from "@/data/site";

const icons = [FiVolume2, FiLayers, FiZap, FiShield, FiSliders, FiCpu];

export const metadata = {
  title: "Features",
};

export default function FeaturesPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Audio Toolkit"
          title="Every feature tuned for better listening rooms"
          description="From queue choreography to real-time playback controls, Hearth is designed like a music console, not just a basic bot."
        />

        <div className="feature-grid">
          {coreFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={icons[index]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
