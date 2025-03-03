
import { Rocket, Database, LineChart, UserCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Database className="h-8 w-8 text-white" />,
      title: "Data Integration",
      description: "We integrate with your existing player data and combine it with our comprehensive football database.",
      delay: 100
    },
    {
      icon: <LineChart className="h-8 w-8 text-white" />,
      title: "AI Analysis",
      description: "Our algorithms analyze how player attributes will perform within your specific tactical setup and league context.",
      delay: 300
    },
    {
      icon: <UserCheck className="h-8 w-8 text-white" />,
      title: "Value Prediction",
      description: "We generate precise forecasts of how a player will impact your team's performance metrics.",
      delay: 500
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Strategic Decisions",
      description: "Make confident transfer decisions backed by data-driven insights tailored to your club's unique needs.",
      delay: 700
    }
  ];

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
            Our platform uses a systematic approach to transform raw data into actionable transfer intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: `${step.delay}ms` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-black rounded-full opacity-10 blur-lg transform scale-110"></div>
                <div className="bg-black rounded-full p-5 relative z-10 mb-6">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
