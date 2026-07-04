import "./hero-section.css";

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-glow hero-glow-left" aria-hidden="true" />
      <div className="hero-glow hero-glow-right" aria-hidden="true" />

      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="hero-shell">
        <p className="hero-kicker">
          Live nearby · early access opening soon
        </p>

        <h1 id="hero-title" className="hero-title">
          Find what is happening before everyone else does.
        </h1>

        <p className="hero-description">
          Pulse shows nearby plans, familiar faces, late-night spots, and small
          moments forming around you before they vanish into someone else’s story.
        </p>

        <form className="hero-form" action="/api/waitlist" method="post">
          <label htmlFor="hero-email" className="hero-sr-only">
            Email address
          </label>

          <input
            id="hero-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@somewhere.com"
            className="hero-input"
          />

          <button type="submit" className="hero-submit">
            Join early
          </button>
        </form>

        <p className="hero-note">
          Built for people who want better plans than refreshing the same dead
          group chat.
        </p>
      </div>
    </section>
  );
}