
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
      answer: "SquadAssist is an AI-powered football transfer intelligence platform that helps clubs and agents make data-driven recruitment decisions. We use advanced machine learning to predict player performance in your specific team context and forecast future transfer values.",
    },
    {
      question: "What makes SquadAssist different from traditional scouting?",
      answer: "Unlike traditional scouting that relies on subjective observations, SquadAssist provides objective, data-driven analysis. Our platform can analyze thousands of players simultaneously, predict future performance, and calculate precise value-for-money metrics that human scouts cannot match.",
    },
    {
      question: "Who can benefit from using SquadAssist?",
      answer: "Football clubs of all sizes, sporting directors, heads of recruitment, football agents, and data analysts can benefit from our platform. Whether you're managing transfer budgets or representing players, SquadAssist provides the intelligence you need.",
    },
    {
      question: "Can SquadAssist help with budget optimization?",
      answer: "Yes, SquadAssist analyzes your squad composition and budget constraints to recommend optimal spending across different positions. Our platform identifies the best value-for-money players that fit your specific team needs and financial parameters.",
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
