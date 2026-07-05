import { StatusPill } from "@/components/status-pill";

const agents = [
  {
    name: "Spec Writer",
    description: "Turns rough ideas into build specs.",
    status: "Ready",
    tone: "success" as const,
  },
  {
    name: "Coder",
    description: "Builds approved work in sandbox branches.",
    status: "Locked",
    tone: "neutral" as const,
  },
  {
    name: "Tester",
    description: "Runs checks before merge review.",
    status: "Locked",
    tone: "neutral" as const,
  },
  {
    name: "Marketing",
    description: "Packages live activity into growth content.",
    status: "Idle",
    tone: "neutral" as const,
  },
];

const runState = [
  ["Stage", "Waiting for input"],
  ["Branch", "main"],
  ["Sandbox", "Ready"],
  ["Model route", "Hybrid"],
];

export function AgentStatus() {
  return (
    <aside className="agent-status-panel">
      <div className="side-section">
        <p className="eyebrow">Agents</p>
        <h2>Build team</h2>

        <div className="agent-list">
          {agents.map((agent) => (
            <div className="agent-row" key={agent.name}>
              <div>
                <strong>{agent.name}</strong>
                <span>{agent.description}</span>
              </div>

              <StatusPill label={agent.status} tone={agent.tone} />
            </div>
          ))}
        </div>
      </div>

      <div className="side-section">
        <p className="eyebrow">Current Run</p>
        <div className="run-state">
          {runState.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}