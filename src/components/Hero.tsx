
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const leagues = [
  "Champions League",
  "Ligue 1", 
  "Eredivisie",
  "Jupiler Pro League",
  "Championship",
  "Saudi Pro League"
];

const Hero = () => {

  return (
    <section className="pt-24 pb-32 bg-gradient-to-b from-white via-trust-50/30 to-white">
      <div className="hero-container">
        {/* Urgency Badge */}
        <div className="text-center mb-8 animate-fade-up">
          <div className="urgency-badge">
            ⚡ Early access stops soon
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="text-center mb-16">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-up" 
              style={{ animationDelay: "100ms" }}>
            Predict Player Value
            <span className="block text-accent">Before You Buy</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" 
             style={{ animationDelay: "200ms" }}>
            The only AI that forecasts how players will perform in{" "}
            <span className="font-semibold text-foreground">YOUR</span> team context.
            Stop guessing. Start knowing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" 
               style={{ animationDelay: "300ms" }}>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 group">
                See How It Works
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="group">
                Contact Sales
                <Target className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* League Social Proof */}
          <div className="animate-fade-up" style={{ animationDelay: "400ms" }}>
            <p className="text-sm text-muted-foreground mb-4">
              Our users are playing in:
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {leagues.map((league, index) => (
                <span key={league} className="league-mention">
                  {league}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-6 animate-fade-up" 
             style={{ animationDelay: "500ms" }}>
          <div className="modern-card text-center group hover-lift">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/20 transition-colors">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Squad-Aware Analytics</h3>
            <p className="text-muted-foreground text-sm">
              Unlike generic stats, we predict how players fit your specific tactical system and squad dynamics.
            </p>
          </div>

          <div className="modern-card text-center group hover-lift">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/20 transition-colors">
              <Trophy className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Value Prediction</h3>
            <p className="text-muted-foreground text-sm">
              Forecast both on-field contribution and future transfer value to maximize your ROI on every signing.
            </p>
          </div>

          <div className="modern-card text-center group hover-lift">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/20 transition-colors">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Risk Reduction</h3>
            <p className="text-muted-foreground text-sm">
              Reduce transfer failures by 45% with AI-powered insights that consider your club's unique context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
