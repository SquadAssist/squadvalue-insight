
import { Brain, TrendingUp, Users, DollarSign, PiggyBank, Award } from "lucide-react";

const Features = () => {
  const features = [{
    icon: <Brain className="h-8 w-8" />,
    title: "AI-Powered Player Analysis",
    description: "Advanced machine learning models predict player performance and value within your specific team context and competitive environment.",
    delay: 100
  }, {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Future Transfer Value Prediction",
    description: "SquadAssist predicts how players will develop and what they'll be worth in future transfer windows, helping you invest in tomorrow's stars today",
    delay: 200
  }, {
    icon: <Users className="h-8 w-8" />,
    title: "Squad-Aware Analytics",
    description: "Our platform analyzes your entire squad composition and compares it against competitors, ensuring optimal team balance and strategic advantage",
    delay: 300
  }, {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Transfer Budget Optimization",
    description: "Maximize your return on investment by identifying undervalued players who offer the best value-for-money within your budget constraints.",
    delay: 400
  }, {
    icon: <PiggyBank className="h-8 w-8" />,
    title: "Strategic Position Investment",
    description: "SquadAssist analyzes your squad needs and recommends optimal budget allocation across positions to maximize team performance and value",
    delay: 500
  }, {
    icon: <Award className="h-8 w-8" />,
    title: "AI Experts",
    description: "Beyond our AI platform, SquadAssist provides access to top-level football analytics experts who offer personalized consulting and strategic guidance",
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
            Advanced Football Transfer Intelligence
          </h2>
          <p className="text-lg text-gray-600 animate-fade-up" style={{
          animationDelay: "200ms"
        }}>SquadAssist uses cutting-edge AI and machine learning to revolutionize football transfer decisions. Our platform provides comprehensive player analysis, transfer value predictions, and strategic insights to help clubs and agents make smarter recruitment choices.</p>
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
