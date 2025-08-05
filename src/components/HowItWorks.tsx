const HowItWorks = () => {
  return (
    <section className="py-24 bg-trust-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Why SquadAssist Works Better
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
            Traditional scouting misses the context. We predict performance in YOUR specific tactical system and squad dynamics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="modern-card animate-fade-up" style={{ animationDelay: "300ms" }}>
            <h3 className="text-xl font-semibold mb-4 text-accent">Squad-Contextual Analysis</h3>
            <p className="text-muted-foreground mb-4">
              We don't just analyze isolated player stats. Our AI understands how players will perform within your specific tactical system, alongside your current squad members.
            </p>
            <ul className="space-y-3 text-sm text-foreground">
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Tactical system compatibility scoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Squad chemistry and balance impact</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Position-specific role optimization</span>
              </li>
            </ul>
          </div>
          
          <div className="modern-card animate-fade-up" style={{ animationDelay: "400ms" }}>
            <h3 className="text-xl font-semibold mb-4 text-accent">Predictive Value Modeling</h3>
            <p className="text-muted-foreground mb-4">
              Beyond current ability, we forecast future performance and market value evolution. Identify players who will grow with your club and appreciate in value.
            </p>
            <ul className="space-y-3 text-sm text-foreground">
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>3-year performance trajectory forecasting</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Market value appreciation prediction</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>ROI optimization for every transfer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;