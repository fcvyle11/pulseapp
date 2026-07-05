import { mockPlan } from "@/lib/mock-plan";

type PlanPanelProps = {
  visible: boolean;
};

export function PlanPanel({ visible }: PlanPanelProps) {
  if (!visible) {
    return (
      <section className="plan-panel empty-state">
        <p className="eyebrow">Plan Preview</p>
        <h2>No plan generated yet.</h2>
        <p>
          Once you submit a feature idea, the Spec Writer output will appear
          here for approval.
        </p>
      </section>
    );
  }

  return (
    <section className="plan-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Generated Plan</p>
          <h2>{mockPlan.title}</h2>
        </div>

        <div className="approval-actions">
          <button className="secondary-button">Edit Plan</button>
          <button className="primary-button">Approve Plan</button>
        </div>
      </div>

      <p className="plan-summary">{mockPlan.summary}</p>

      <div className="plan-grid">
        <PlanBlock title="Affected Areas" items={mockPlan.affectedAreas} />
        <PlanBlock title="Backend Tasks" items={mockPlan.backendTasks} />
        <PlanBlock title="Frontend Tasks" items={mockPlan.frontendTasks} />
        <PlanBlock title="Testing Tasks" items={mockPlan.testingTasks} />
        <PlanBlock title="Risks" items={mockPlan.risks} />
      </div>
    </section>
  );
}

function PlanBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="plan-block">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}