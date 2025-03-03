
import { LineChart, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 bg-black/5 rounded-full text-sm font-medium text-gray-800 mb-4 animate-fade-in">
            The Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
            How SquadAssist Works
          </h2>
          <p className="text-lg text-gray-600 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Our system predicts the On Field Value and the Future Transfer Fee using 2 separate AI-systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* On Field Value */}
          <div 
            className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm animate-fade-up border border-gray-100"
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-black rounded-full opacity-10 blur-lg transform scale-110"></div>
              <div className="bg-black rounded-full p-5 relative z-10">
                <LineChart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">On Field Value</h3>
            <p className="text-gray-600">
              SquadAssist predicts how your expected sportive outcomes change by adding the player while taking all squads of all competitors into account.
            </p>
          </div>

          {/* Future Transfer Fee */}
          <div 
            className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm animate-fade-up border border-gray-100"
            style={{ animationDelay: "500ms" }}
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-black rounded-full opacity-10 blur-lg transform scale-110"></div>
              <div className="bg-black rounded-full p-5 relative z-10">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Future Transfer Fee</h3>
            <p className="text-gray-600">
              SquadAssist predicts the transfer value of the player in a few years time by finding past players who were most similar in terms of growth potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
