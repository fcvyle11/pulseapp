const logs = [
    "Pulse OS interface mounted.",
    "Waiting for feature input.",
    "Spec Writer available.",
    "Coder and Tester locked until approval flow exists.",
  ];
  
  export function RunLog() {
    return (
      <section className="run-log-panel">
        <p className="eyebrow">Run Log</p>
        <h2>System output</h2>
  
        <div className="run-log">
          {logs.map((log, index) => (
            <p key={log}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {log}
            </p>
          ))}
        </div>
      </section>
    );
  }