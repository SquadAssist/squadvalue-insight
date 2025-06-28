
import { LineChart, TrendingUp, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-subtle to-white relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 tech-pattern opacity-20"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block py-2 px-4 bg-navy-light/20 rounded-full text-sm font-medium text-navy-primary mb-6 animate-fade-in">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 heading-premium animate-fade-up" 
              style={{ animationDelay: "100ms" }}>
            How SquadAssist Works
          </h2>
          <p className="text-xl text-slate-600 animate-fade-up font-inter" 
             style={{ animationDelay: "200ms" }}>
            We predict the On Field Value and the Future Transfer Fee through 2 AI-systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* On Field Value */}
          <div className="flex flex-col items-center text-center p-10 card-premium rounded-2xl group hover:scale-105 transition-all duration-500 animate-fade-up border-2 border-navy-light/20" 
               style={{ animationDelay: "300ms" }}>
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-primary/20 to-tech-blue/20 rounded-full blur-2xl transform scale-150"></div>
              <div className="bg-gradient-to-br from-navy-primary to-tech-blue rounded-full p-6 relative z-10 shadow-premium group-hover:shadow-premium-lg transition-all duration-300">
                <LineChart className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-poppins font-bold mb-6 text-navy-deep">
              On Field Value
            </h3>
            <p className="text-slate-600 leading-relaxed font-inter text-lg">
              SquadAssist predicts your expected sportive outcomes with and without the player. 
              We take the full squads of all your competitors into account while simulating the competition.
            </p>
            
            {/* Process indicators */}
            <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <div className="w-2 h-2 bg-navy-primary rounded-full animate-pulse-premium"></div>
              <span>Squad Analysis</span>
              <ArrowRight className="h-3 w-3" />
              <div className="w-2 h-2 bg-tech-blue rounded-full animate-pulse-premium"></div>
              <span>Performance Prediction</span>
            </div>
          </div>

          {/* Future Transfer Fee */}
          <div className="flex flex-col items-center text-center p-10 card-premium rounded-2xl group hover:scale-105 transition-all duration-500 animate-fade-up border-2 border-navy-light/20" 
               style={{ animationDelay: "500ms" }}>
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 to-navy-primary/20 rounded-full blur-2xl transform scale-150"></div>
              <div className="bg-gradient-to-br from-tech-blue to-navy-primary rounded-full p-6 relative z-10 shadow-premium group-hover:shadow-premium-lg transition-all duration-300">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-poppins font-bold mb-6 text-navy-deep">
              Future Transfer Fee
            </h3>
            <p className="text-slate-600 leading-relaxed font-inter text-lg">
              SquadAssist predicts the transfer value of the player in a few years time by finding 
              past players who were most similar in terms of growth potential.
            </p>
            
            {/* Process indicators */}
            <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <div className="w-2 h-2 bg-tech-blue rounded-full animate-pulse-premium"></div>
              <span>Historical Analysis</span>
              <ArrowRight className="h-3 w-3" />
              <div className="w-2 h-2 bg-navy-primary rounded-full animate-pulse-premium"></div>
              <span>Value Projection</span>
            </div>
          </div>
        </div>

        {/* Connection line between the two systems */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-navy-primary to-tech-blue animate-pulse-premium"></div>
      </div>
    </section>
  );
};

export default HowItWorks;
