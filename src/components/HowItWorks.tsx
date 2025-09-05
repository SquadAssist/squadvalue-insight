import { Trophy, TrendingUp } from "lucide-react";
const HowItWorks = () => {
  return <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground animate-fade-up" style={{
          animationDelay: "100ms"
        }}>How SquadAssist's AI Works</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground animate-fade-up max-w-3xl mx-auto leading-relaxed" style={{
          animationDelay: "200ms"
        }}>The Sportive Impact and Future Transfer Value each have a separate AI model:</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* On Field Value */}
          <div className="flex flex-col items-center text-center p-6 sm:p-8 lg:p-10 bg-card rounded-xl shadow-subtle animate-fade-up border border-border hover:shadow-md transition-all duration-300" style={{
          animationDelay: "300ms"
        }}>
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-lg transform scale-110"></div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-5 relative z-10">
                <Trophy className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-card-foreground">Sportive Impact</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">SquadAssist predicts your team's expected performance outcomes with and without specific players. Our AI simulates competitive scenarios while analyzing the complete squads of all your competitors, providing accurate performance forecasting.</p>
          </div>

          {/* Future Transfer Fee */}
          <div className="flex flex-col items-center text-center p-6 sm:p-8 lg:p-10 bg-card rounded-xl shadow-subtle animate-fade-up border border-border hover:shadow-md transition-all duration-300" style={{
          animationDelay: "500ms"
        }}>
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-lg transform scale-110"></div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-5 relative z-10">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-card-foreground">Future Transfer Value</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">SquadAssist forecasts players' transfer values 3 years ahead by analyzing historical data from similar players. Our machine learning models identify patterns in player development and market valuations to predict long-term investment potential.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;