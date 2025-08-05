
import { Brain, TrendingUp, Users, DollarSign, PiggyBank, Award } from "lucide-react";

const Features = () => {
  const features = [{
    icon: Brain,
    title: "Stop Overpaying for Players",
    description: "Precise value predictions reduce transfer risk by 45%. Know exactly what a player is worth before you negotiate.",
    delay: 100
  }, {
    icon: TrendingUp,
    title: "Stop Guessing Player Fit",
    description: "Squad-aware analytics predict team chemistry impact. See how players actually perform in YOUR tactical system.",
    delay: 200
  }, {
    icon: Users,
    title: "Stop Missing Future Stars",
    description: "Growth forecasting identifies tomorrow's talents today. Invest in players before their value explodes.",
    delay: 300
  }, {
    icon: DollarSign,
    title: "Stop Budget Waste",
    description: "ROI optimization maximizes every euro spent. Get the highest impact players within your budget constraints.",
    delay: 400
  }, {
    icon: PiggyBank,
    title: "Stop Reactive Transfers",
    description: "Proactive insights plan 3 windows ahead. Build your squad strategically, not reactively.",
    delay: 500
  }, {
    icon: Award,
    title: "Stop Transfer Failures",
    description: "Context-aware analysis ensures cultural and tactical fit. Reduce adaptation failures by 60%.",
    delay: 600
  }];
  
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Stop Transfer Mistakes. Start Winning.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
            Every transfer decision affects your club's future. Our AI ensures you make the right choice every time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title} 
                className="modern-card text-center group hover-lift animate-fade-up"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
