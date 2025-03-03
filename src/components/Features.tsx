import { Brain, TrendingUp, Users, Target, Award, DollarSign } from "lucide-react";
const Features = () => {
  const features = [{
    icon: <Brain className="h-8 w-8" />,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning models predict player performance in your specific team context.",
    delay: 100
  }, {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Performance Prediction",
    description: "Forecast how a player's skills will translate to on-field performance with your squad.",
    delay: 200
  }, {
    icon: <Users className="h-8 w-8" />,
    title: "Squad Compatibility",
    description: "Evaluate how well a player will integrate with your existing team dynamics and tactics.",
    delay: 300
  }, {
    icon: <Target className="h-8 w-8" />,
    title: "Targeted Recruitment",
    description: "Identify the exact player profiles that will maximize value for your specific needs.",
    delay: 400
  }, {
    icon: <Award className="h-8 w-8" />,
    title: "Competitive Edge",
    description: "Gain insights on how transfers will impact your standing against league competitors.",
    delay: 500
  }, {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Budget Optimization",
    description: "Maximize return on investment by identifying undervalued players ideal for your team.",
    delay: 600
  }];
  return <section id="features" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 bg-black/5 rounded-full text-sm font-medium text-gray-800 mb-4 animate-fade-in">
            Key Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up" style={{
          animationDelay: "100ms"
        }}>
            Data-Driven Transfer Intelligence
          </h2>
          <p className="text-lg text-gray-600 animate-fade-up" style={{
          animationDelay: "200ms"
        }}>SquadAssist uses advanced AI to make your transfer decisions easier and better</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-subtle border border-gray-100 feature-card-hover animate-fade-up" style={{
          animationDelay: `${feature.delay}ms`
        }}>
              <div className="bg-black/5 p-3 rounded-lg w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Features;