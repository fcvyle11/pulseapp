import { DashboardCard } from "@/components/dashboard-card";
import { StatusPill } from "@/components/status-pill";
import { dashboardCards } from "@/lib/dashboard-data";

export default function DashboardPage() {
  return (
    <main className="dashboard-page">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Pulse OS</p>
          <h1>Build Pulse with control, not chaos.</h1>
          <p className="hero-copy">
            A private operating layer for planning features, managing agents,
            reviewing changes, and protecting the main Pulse codebase.
          </p>
        </div>

        <div className="hero-actions">
          <StatusPill label="Owner Access" tone="success" />
          <StatusPill label="Local Mode" tone="neutral" />
        </div>
      </section>

      <section className="dashboard-grid">
        {dashboardCards.map((card) => (
          <DashboardCard
            key={card.title}
            title={card.title}
            value={card.value}
            description={card.description}
            status={<StatusPill label={card.status} tone={card.tone} />}
          />
        ))}
      </section>

      <section className="activity-panel">
        <p className="eyebrow">Recent Activity</p>
        <h2>No agent runs yet.</h2>
        <p>
          The shell is ready. Next comes the interface page, where the actual
          planning and agent conversation will live, because apparently buttons
          need consequences now.
        </p>
      </section>
    </main>
  );
}