export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="glass-card feature-card">
      <div className="icon-chip">{Icon ? <Icon /> : null}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
