import { Brain, BarChart, Target, Database } from "lucide-react";

const ExpertiseContent = () => {
  const expertiseAreas = [
    {
      icon: Brain,
      title: "AI & Machine Learning in Football",
      description: "Advanced algorithms for player performance prediction, tactical analysis, and market valuation using neural networks and deep learning.",
      topics: ["Player performance modeling", "Tactical system analysis", "Injury risk prediction", "Development trajectory forecasting"]
    },
    {
      icon: BarChart,
      title: "Football Transfer Market Analytics", 
      description: "Comprehensive market intelligence covering valuation methods, trend analysis, and investment optimization strategies.",
      topics: ["Transfer fee prediction", "Market value assessment", "ROI optimization", "Contract timing analysis"]
    },
    {
      icon: Target,
      title: "Squad Building & Recruitment Strategy",
      description: "Data-driven approaches to team composition, positional analysis, and strategic recruitment planning.",
      topics: ["Squad balance optimization", "Positional need analysis", "Budget allocation strategy", "Long-term planning"]
    },
    {
      icon: Database,
      title: "Football Data Science & Analytics",
      description: "Statistical methodologies and data science techniques specific to football performance analysis and scouting.",
      topics: ["Performance metrics", "Statistical modeling", "Data visualization", "Predictive analytics"]
    }
  ];

  // Structured data for expertise and knowledge
  const expertiseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SquadAssist",
    "expertise": [
      "Artificial Intelligence in Sports",
      "Football Transfer Analytics", 
      "Player Performance Prediction",
      "Squad Optimization",
      "Sports Data Science",
      "Machine Learning for Football",
      "Transfer Market Analysis",
      "Football Recruitment Technology"
    ],
    "knowsAbout": [
      "Football player valuation",
      "AI-powered scouting",
      "Transfer market prediction",
      "Squad composition analysis", 
      "Football data analytics",
      "Player development forecasting",
      "Tactical analysis",
      "Sports investment optimization"
    ],
    "serviceType": [
      "Football Analytics Software",
      "Player Valuation Services",
      "Transfer Intelligence Platform",
      "Sports Data Analysis"
    ]
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(expertiseStructuredData) }}
      />
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block py-2 px-4 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            Our Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Deep Knowledge in Football Analytics
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SquadAssist combines cutting-edge AI technology with deep football expertise to deliver authoritative insights in sports analytics and transfer intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-card rounded-xl p-6 sm:p-8 shadow-subtle border border-border hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-card-foreground">
                    {area.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.topics.map((topic, topicIndex) => (
                      <span 
                        key={topicIndex}
                        className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/10"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseContent;