import { FiCheckCircle, FiStar } from "react-icons/fi";
import SectionHeading from "@/components/section-heading";
import { plans } from "@/data/site";

export const metadata = {
  title: "Premium",
};

export default function PremiumPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Performance Tiers"
          title="Choose the power level your stage needs"
          description="Upgrade for lower latency, stronger stability, and advanced sonic controls as your audience grows."
        />

        <div className="plan-grid">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`glass-card plan-card ${index === 1 ? "is-featured" : ""}`.trim()}
            >
              <div className="card-head">
                <div className="icon-chip">
                  <FiStar />
                </div>
                <h3>{plan.name}</h3>
              </div>
              <p className="plan-price">{plan.price}</p>
              <p className="plan-summary">{plan.summary}</p>
              <ul className="perk-list">
                {plan.perks.map((perk) => (
                  <li key={perk}>
                    <FiCheckCircle /> {perk}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
