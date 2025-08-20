import { Cpu, TrendingUp, Users, Shield } from "lucide-react";

const MethodologyContent = () => {
  const methodologies = [
    {
      icon: Cpu,
      title: "Dual AI System Architecture",
      description: "Our proprietary two-model approach separates on-field performance prediction from transfer value forecasting, ensuring specialized accuracy in each domain.",
      details: [
        "Performance Model: Analyzes tactical fit, squad integration, and competitive context",
        "Valuation Model: Processes historical transfer data and market dynamics",
        "Cross-validation between models ensures consistent, reliable predictions",
        "Continuous learning from real-world outcomes improves accuracy over time"
      ]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics Framework",
      description: "Advanced statistical methods and machine learning algorithms trained on comprehensive football datasets to forecast player development and market values.",
      details: [
        "Time-series analysis for player development trajectories",
        "Regression models for transfer fee prediction",
        "Age curve analysis for performance decline/improvement patterns",
        "Market trend correlation with economic and sporting factors"
      ]
    },
    {
      icon: Users,
      title: "Squad-Aware Intelligence",
      description: "Unlike isolated player analysis, our system evaluates how potential signings would integrate with existing squad dynamics and tactical systems.",
      details: [
        "Tactical system compatibility analysis (4-3-3, 4-4-2, 3-5-2, etc.)",
        "Position competition and depth chart optimization",  
        "Chemistry prediction based on playing style compatibility",
        "Squad balance impact assessment for overall team performance"
      ]
    },
    {
      icon: Shield,
      title: "Data Quality & Validation",
      description: "Rigorous data processing and validation ensures the highest quality inputs for our AI models, minimizing noise and maximizing signal.",
      details: [
        "Multi-source data verification and cross-referencing",
        "Outlier detection and statistical anomaly filtering",
        "Regular model retraining with updated market data",
        "Backtesting against historical transfer outcomes for accuracy validation"
      ]
    }
  ];

  // Structured data for methodology and technical expertise
  const methodologyStructuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "SquadAssist AI Football Analytics Methodology",
    "description": "Technical overview of SquadAssist's dual AI system for football player analysis and transfer value prediction.",
    "author": {
      "@type": "Organization",
      "name": "SquladAssist"
    },
    "about": [
      "Machine Learning in Football",
      "AI Player Analysis",
      "Transfer Value Prediction",
      "Squad Analytics",
      "Football Data Science"
    ],
    "teaches": [
      "How AI predicts football player performance",
      "Methods for transfer value forecasting", 
      "Squad-aware analytics techniques",
      "Football data science approaches"
    ]
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyStructuredData) }}
      />
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block py-2 px-4 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            Our Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            How SquadAssist's AI Technology Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Understanding the technical foundations and scientific approaches behind our football transfer intelligence platform.
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {methodologies.map((method, index) => (
            <div key={index} className="bg-card rounded-xl p-6 sm:p-8 shadow-subtle border border-border">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-4 flex-shrink-0">
                  <method.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-card-foreground">
                    {method.title}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {method.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {detail}
                        </span>
                      </div>
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

export default MethodologyContent;