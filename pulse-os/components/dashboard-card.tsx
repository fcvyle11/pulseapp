import type { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  value: string;
  description: string;
  status?: ReactNode;
};

export function DashboardCard({
  title,
  value,
  description,
  status,
}: DashboardCardProps) {
  return (
    <article className="dashboard-card">
      <div className="card-header">
        <p>{title}</p>
        {status}
      </div>

      <h3>{value}</h3>
      <span>{description}</span>
    </article>
  );
}