import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { updatePageSEO, pageSEOConfigs } from "@/utils/seo";
import backgroundImage from "@/assets/pricing-background.png";
const PricingAgents = () => {
  const tiers = [{
    name: "Starter",
    price: "€2000/year",
    features: ["Sell a player: 100/month", "Find a player: 5 player-league analyses / month"],
    popular: false
  }, {
    name: "Pro",
    price: "€4000/year",
    features: ["Sell a player: 500/month", "Find a player: 50 player-league analyses / month", "Find a player: 1 league/month"],
    popular: false
  }, {
    name: "Elite",
    price: "€5000/year",
    features: ["Sell a player: 1000/month", "Find a player: 100 player-league analyses / month", "Find a player: 5 leagues/month"],
    popular: true
  }];
  useEffect(() => {
    updatePageSEO(pageSEOConfigs.pricingAgents);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-cover bg-center bg-no-repeat relative" style={{
        backgroundImage: `url(${backgroundImage})`
      }}>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight animate-fade-up text-slate-50 md:text-4xl">Unlock your competitive advantage now</h1>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {tiers.map((tier, index) => <Card key={tier.name} className={`relative flex flex-col ${tier.popular ? 'border-primary shadow-lg scale-105' : ''} animate-fade-up`} style={{
              animationDelay: `${(index + 1) * 200}ms`
            }}>
                  {tier.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </div>}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{tier.price}</span>
                      <span className="text-sm text-muted-foreground block mt-1">per user</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex flex-col flex-1 space-y-4">
                     <ul className="space-y-3 flex-1">
                       {tier.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3">
                           <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                           <span className="text-sm text-muted-foreground">{feature}</span>
                         </li>)}
                     </ul>
                    
                    <div className="pt-4">
                      <Button className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90' : ''}`} variant={tier.name === 'Free' ? 'outline' : tier.popular ? 'default' : 'outline'} asChild>
                        <a href={`https://product.squadassist.ai/sign-up?type=agent&plan=${tier.name.toLowerCase() === 'pro' ? 'premium' : tier.name.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                          {tier.name === 'Starter' ? 'Get Started' : tier.name === 'Pro' ? 'Become Pro' : 'Make Me Elite'}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
            
            <div className="text-center mt-12 animate-fade-up" style={{
            animationDelay: "800ms"
          }}>
              <p className="text-white">
                Need a custom solution? <span className="text-white font-semibold">Contact our team</span> for enterprise pricing.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default PricingAgents;