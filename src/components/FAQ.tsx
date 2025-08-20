
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is SquadAssist and how does it work?",
      answer: "SquadAssist is an AI-powered football transfer intelligence platform that helps clubs and agents make data-driven recruitment decisions. We use advanced machine learning algorithms to predict player performance in your specific team context and forecast future transfer values up to 3 years ahead. Our dual AI system analyzes on-field value by simulating competitive scenarios and predicts transfer values using historical data patterns from similar players.",
    },
    {
      question: "How does AI predict football player performance and transfer values?",
      answer: "Our AI system uses two specialized models: 1) On-Field Value prediction analyzes team compositions, tactical systems, and competitive environments to forecast how a player will perform in your specific squad context. 2) Transfer Value forecasting uses machine learning on historical transfer data, player development patterns, and market valuations to predict future worth. Both models process thousands of data points including performance metrics, age curves, positional demands, and market trends.",
    },
    {
      question: "What data sources does SquadAssist use for football analytics?",
      answer: "SquadAssist integrates comprehensive data from professional football leagues worldwide, including match statistics, player performance metrics, transfer records, market valuations, injury histories, and tactical analysis. Our platform processes data from major European leagues (Premier League, La Liga, Serie A, Bundesliga, Ligue 1), emerging markets, and youth academies to provide complete player intelligence.",
    },
    {
      question: "How accurate are SquadAssist's transfer predictions?",
      answer: "Our AI models achieve high accuracy rates by analyzing historical patterns and continuous learning from market outcomes. The system accounts for variables like player age, position, league quality, contract situations, and market dynamics. While football transfers involve unpredictable elements, our data-driven approach provides significantly more reliable estimates than traditional valuation methods, helping clubs make informed investment decisions.",
    },
    {
      question: "What makes SquadAssist different from traditional scouting methods?",
      answer: "Unlike traditional scouting that relies on subjective observations and limited match viewing, SquadAssist provides objective, comprehensive analysis of thousands of players simultaneously. Our AI can process complete performance histories, predict future development trajectories, and calculate precise value-for-money metrics that human scouts cannot match. We complement rather than replace scouting by providing data-driven insights for initial screening and validation.",
    },
    {
      question: "Can SquadAssist analyze players from lower divisions and emerging markets?",
      answer: "Yes, SquadAssist's AI models are trained on extensive datasets that include players from various competition levels, from top European leagues to emerging markets and lower divisions. This allows us to identify hidden gems and undervalued talents who might be overlooked by traditional scouting networks focused only on major leagues.",
    },
    {
      question: "How does SquadAssist help with transfer budget optimization?",
      answer: "SquadAssist analyzes your current squad composition, tactical system, and budget constraints to recommend optimal spending strategies across different positions. Our platform identifies the best value-for-money players who fit your specific team needs, suggests position priorities based on performance impact, and calculates ROI scenarios for different transfer strategies to maximize your budget efficiency.",
    },
    {
      question: "What is squad-aware analytics and why is it important?",
      answer: "Squad-aware analytics means our AI doesn't just evaluate players in isolation—it analyzes how they would perform within your specific team context. This includes tactical fit, positional competition, chemistry with existing players, and how the addition would affect overall team balance. This approach is crucial because a player who excels in one system might struggle in another, making context-specific analysis essential for successful transfers.",
    },
    {
      question: "How far ahead can SquadAssist predict player development and values?",
      answer: "SquadAssist can forecast player development trajectories and transfer values up to 3 years ahead. Our models account for typical age curves, position-specific development patterns, injury risk factors, and market evolution trends. This long-term perspective helps clubs plan strategic investments and identify players with the highest potential for value appreciation.",
    },
    {
      question: "Who should use SquadAssist - clubs, agents, or both?",
      answer: "Both football clubs and agents benefit from SquadAssist's intelligence. Clubs use our platform for recruitment strategy, budget optimization, and squad planning. Agents leverage our data to demonstrate their players' value to potential buyers, identify the best market opportunities, and negotiate from a position of data-backed strength. Our platform serves anyone involved in football transfer decision-making.",
    },
    {
      question: "How does SquadAssist handle different playing styles and tactical systems?",
      answer: "Our AI models are trained to understand various tactical systems (4-3-3, 4-4-2, 3-5-2, etc.) and playing styles (possession-based, counter-attacking, high-pressing, etc.). The system analyzes how different player profiles perform in different tactical contexts and predicts fit based on your team's specific style of play. This ensures recommendations are tactically aligned with your club's philosophy.",
    },
    {
      question: "What support and training does SquadAssist provide to new users?",
      answer: "SquadAssist provides comprehensive onboarding including platform training, data interpretation guidance, and ongoing technical support. Our team works with clubs and agents to ensure they maximize the platform's value through proper implementation and usage. We also provide regular updates on market insights and platform enhancements to keep users at the forefront of football analytics.",
    },
  ];

  // Structured data for FAQ
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 bg-black/5 rounded-full text-sm font-medium text-gray-800 mb-4 animate-fade-in">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up" style={{
            animationDelay: "100ms"
          }}>
            Everything You Need to Know About Football Transfer Analytics
          </h2>
          <p className="text-lg text-gray-600 animate-fade-up" style={{
            animationDelay: "200ms"
          }}>
            Common questions about AI-powered transfer intelligence and how SquadAssist can transform your recruitment strategy
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="animate-fade-up" style={{
                animationDelay: `${300 + index * 100}ms`
              }}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
