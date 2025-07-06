import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PricingAgents = () => {
  const tiers = [
    {
      name: "Free",
      price: "Free",
      features: [
        "Sell a player: 3/day",
        "Find a club: 1/week if daily active"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "€2000/year",
      features: [
        "Sell a player: 20/day",
        "Find a club: 3/week"
      ],
      popular: true
    },
    {
      name: "Elite", 
      price: "€5000/year",
      features: [
        "Sell a player: Unlimited",
        "Find a club: Unlimited",
        "Find a player: Unlimited"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-up">
                Agent Pricing Plans
              </h1>
              <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: "200ms"}}>
                Empower your football agency with AI-driven transfer intelligence. Choose the plan that fits your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {tiers.map((tier, index) => (
                <Card 
                  key={tier.name}
                  className={`relative ${tier.popular ? 'border-primary shadow-lg scale-105' : ''} animate-fade-up`}
                  style={{animationDelay: `${(index + 1) * 200}ms`}}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{tier.price}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4">
                      <Button 
                        className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                        variant={tier.name === 'Free' ? 'outline' : tier.popular ? 'default' : 'outline'}
                        asChild
                      >
                        <a 
                          href={`https://product.squadassist.ai/sign-up?type=agent&plan=${tier.name.toLowerCase() === 'pro' ? 'premium' : tier.name.toLowerCase()}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Get Started
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12 animate-fade-up" style={{animationDelay: "800ms"}}>
              <p className="text-muted-foreground">
                Need a custom solution? <span className="text-primary font-medium">Contact our team</span> for enterprise pricing.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingAgents;