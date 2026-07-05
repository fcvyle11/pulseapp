export function Topbar() {
    return (
      <header className="topbar">
        <div>
          <p className="eyebrow">Workspace</p>
          <h2>Pulse Control Room</h2>
        </div>
  
        <div className="user-chip">
          <span className="user-dot" />
          <div>
            <strong>Kyle</strong>
            <small>Owner</small>
          </div>
        </div>
      </header>
    );
  }