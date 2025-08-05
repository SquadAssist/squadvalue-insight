import { useState } from "react";
import { DollarSign, Users, Target } from "lucide-react";
import { FeatureInquiryModal } from "./FeatureInquiryModal";
const LinearStyleFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const features = [{
    icon: <DollarSign className="h-12 w-12" />,
    title: "Transfer Budget Optimization",
    description: "Maximize your return on investment by identifying undervalued players who offer the best value-for-money within your budget constraints.",
    gradient: "from-blue-500 to-cyan-500"
  }, {
    icon: <Users className="h-12 w-12" />,
    title: "Squad-Aware Analytics",
    description: "Our platform analyzes your entire squad composition and compares it against competitors, ensuring optimal team balance and strategic advantage.",
    gradient: "from-purple-500 to-pink-500"
  }, {
    icon: <Target className="h-12 w-12" />,
    title: "Strategic Investment Targets",
    description: "SquadAssist identifies high-potential players and optimal investment opportunities based on comprehensive market analysis and future value projections.",
    gradient: "from-orange-500 to-red-500"
  }];
  return <section className="py-16 sm:py-20 lg:py-24 bg-gray-950 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-50"></div>
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Made for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              smart
            </span>
            <br />
            football clubs and agents
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 animate-fade-in max-w-3xl mx-auto leading-relaxed" style={{
          animationDelay: "200ms"
        }}>SquadAssist is shaped by the practices and principles that distinguish world-class football clubs from the rest: context-aware identification of the best transfer targets in your budget</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-500 animate-fade-up group" style={{
          animationDelay: `${(index + 1) * 200}ms`
        }}>
              {/* Icon with gradient background */}
              <div className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-xl w-fit mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-base">
                {feature.description}
              </p>

              {/* Hover effect button */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={() => setSelectedFeature(feature.title)} className="flex items-center text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-200">
                  I want this
                  <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>)}
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: "1s"
      }}></div>
      </div>

      {/* Feature Inquiry Modal */}
      <FeatureInquiryModal isOpen={!!selectedFeature} onClose={() => setSelectedFeature(null)} featureTitle={selectedFeature || ""} />
    </section>;
};
export default LinearStyleFeatures;