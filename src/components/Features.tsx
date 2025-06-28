
import { Brain, TrendingUp, Users, DollarSign, PiggyBank, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning models predict player performance in your specific team context.",
      delay: 100
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth Potential",
      description: "SquadAssist predicts how the player will improve so that you know what the player will be worth in a few years time",
      delay: 200
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Squad-aware",
      description: "SquadAssist takes your entire squad into account - and those of your competitors as well",
      delay: 300
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Budget Optimization",
      description: "Maximize return on investment by identifying undervalued players ideal for your team.",
      delay: 400
    },
    {
      icon: <PiggyBank className="h-8 w-8" />,
      title: "Recommended Position Spend",
      description: "SquadAssist can detect how much you should ideally spend on each position given your total budget",
      delay: 500
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "More Than A Tool",
      description: "SquadAssist consists of top-level talent willing to provide the additional service you deserve",
      delay: 600
    }
  ];
  
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-subtle">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block py-2 px-4 bg-navy-light/20 rounded-full text-sm font-medium text-navy-primary mb-6 animate-fade-in">
            Key Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 heading-premium animate-fade-up" 
              style={{ animationDelay: "100ms" }}>
            Data-Driven Transfer Intelligence
          </h2>
          <p className="text-xl text-slate-600 animate-fade-up font-inter" 
             style={{ animationDelay: "200ms" }}>
            SquadAssist uses advanced AI to make your transfer decisions easier and better
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-premium p-8 rounded-xl group hover:scale-105 transition-all duration-500 animate-fade-up" 
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <div className="bg-gradient-to-br from-navy-primary/10 to-tech-blue/10 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-navy-primary">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-4 text-navy-deep">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-inter">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
