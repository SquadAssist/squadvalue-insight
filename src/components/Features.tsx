import { Search, FileCheck, Building2, Handshake, ArrowRight } from "lucide-react";
import { useState } from "react";
import { FeatureInquiryModal } from "./FeatureInquiryModal";

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  
  const features = [{
    icon: <Search className="h-12 w-12" />,
    title: "Find a player",
    description: "Prioritize the players that will create most value for you within your constraints thanks to our AI-powered predictions. We predict the future transfer value, playing time and sportive impact for all players in 100 leagues and compare it to their expected cost to help you create the ideal long list.",
    gradient: "from-blue-500 to-cyan-500",
    delay: 100
  }, {
    icon: <FileCheck className="h-12 w-12" />,
    title: "Buy a player",
    description: "Analyze the purchase of a specific player for a given fee and wage to assess whether or not he's a smart investment. This is ideal for the final decision meeting or for a first quick scan after a player is proposed.",
    gradient: "from-green-500 to-emerald-500",
    delay: 200
  }, {
    icon: <Building2 className="h-12 w-12" />,
    title: "Find a club",
    description: "Find the ideal club to move a player to (on loan or on permanent transfer). You can optimize for expected playing time, value created, club level (and more) after filtering for clubs that can afford him and countries that the player would want to move to.",
    gradient: "from-purple-500 to-pink-500",
    delay: 300
  }, {
    icon: <Handshake className="h-12 w-12" />,
    title: "Sell a player",
    description: "Convince a club that your player is smart investment, driving stronger interest and higher prioritization.",
    gradient: "from-orange-500 to-red-500",
    delay: 400
  }];
  
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-up text-white" style={{
            animationDelay: "100ms"
          }}>
            SquadAssist helps with all transfer decisions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 animate-fade-up max-w-3xl mx-auto leading-relaxed" style={{
            animationDelay: "200ms"
          }}>
            Whether you're scouting talent, negotiating deals, or optimizing your squad, our AI-powered platform provides the insights you need to make winning decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-gray-700 transition-all duration-300 animate-fade-up overflow-hidden" 
              style={{
                animationDelay: `${feature.delay}ms`
              }}
            >
              <div className="p-4 rounded-2xl w-fit mb-6 transition-transform duration-300 group-hover:scale-110">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
                {feature.description}
              </p>
              
              {/* "I want this" button - appears on hover */}
              <button
                onClick={() => setSelectedFeature(feature.title)}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                I want this
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <FeatureInquiryModal
        isOpen={selectedFeature !== null}
        onClose={() => setSelectedFeature(null)}
        featureTitle={selectedFeature || ""}
      />
    </section>
  );
};

export default Features;
