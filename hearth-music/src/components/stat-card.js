export default function StatCard({ icon: Icon, label, value }) {
  return (
    <article className="glass-card stat-card">
      <div className="icon-chip">{Icon ? <Icon /> : null}</div>
      <p className="stat-value">{value}</p>
      <p className="stat-label">{label}</p>
    </article>
  );
}
