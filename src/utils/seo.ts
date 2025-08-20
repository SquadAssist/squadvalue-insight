// SEO utility functions for dynamic meta tags
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: any;
}

export const updatePageSEO = (seo: SEOProps) => {
  // Update document title
  document.title = seo.title;
  
  // Update or create meta tags
  updateMetaTag('description', seo.description);
  
  if (seo.keywords) {
    updateMetaTag('keywords', seo.keywords);
  }
  
  // Update canonical URL
  if (seo.canonical) {
    updateLinkTag('canonical', seo.canonical);
  }
  
  // Update robots meta tag
  const robotsContent = seo.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
  updateMetaTag('robots', robotsContent);
  
  // Update Open Graph tags
  updateMetaProperty('og:title', seo.title);
  updateMetaProperty('og:description', seo.description);
  updateMetaProperty('og:type', seo.ogType || 'website');
  
  if (seo.canonical) {
    updateMetaProperty('og:url', seo.canonical);
  }
  
  if (seo.ogImage) {
    updateMetaProperty('og:image', seo.ogImage);
  }
  
  // Update Twitter Card tags
  updateMetaName('twitter:title', seo.title);
  updateMetaName('twitter:description', seo.description);
  updateMetaName('twitter:card', 'summary_large_image');
  
  if (seo.ogImage) {
    updateMetaName('twitter:image', seo.ogImage);
  }

  // Add structured data if provided
  if (seo.structuredData) {
    addStructuredData(seo.structuredData);
  }
};

const updateMetaTag = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const updateMetaProperty = (property: string, content: string) => {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const updateMetaName = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const updateLinkTag = (rel: string, href: string) => {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
};

const addStructuredData = (data: any) => {
  // Remove existing structured data added by this function
  const existingScript = document.querySelector('script[data-dynamic-structured-data]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-dynamic-structured-data', 'true');
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Comprehensive organization structured data
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "TechnologyCompany", "ResearchOrganization"],  
  "name": "SquadAssist",
  "alternateName": "Squad Assist",
  "description": "Leading AI-powered football transfer intelligence platform providing advanced analytics and data-driven insights for professional football clubs, agents, and sporting directors worldwide",
  "url": "https://squadassist.ai",
  "logo": "https://squadassist.ai/logo-optimized.png",
  "foundingDate": "2024",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Leuven",
    "addressCountry": "Belgium"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@squadassist.ai",
    "contactType": "customer service"
  },
  "founder": [
    {
      "@type": "Person",
      "name": "Wout Pauwels",
      "jobTitle": "Co-Founder",
      "alumniOf": "KU Leuven",
      "worksFor": {
        "@type": "Organization",
        "name": "SquadAssist"
      }
    },
    {
      "@type": "Person", 
      "name": "Maarten Wyns",
      "jobTitle": "Co-Founder",
      "alumniOf": "KU Leuven",
      "worksFor": {
        "@type": "Organization",
        "name": "SquadAssist"
      }
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/squadassist"
  ],
  "expertise": [
    "Artificial Intelligence in Football",
    "Transfer Market Analytics",
    "Player Performance Prediction", 
    "Squad Optimization",
    "Football Data Science",
    "Machine Learning for Sports",
    "Predictive Analytics",
    "Sports Investment Analysis"
  ],
  "knowsAbout": [
    "How to predict football player performance using AI",
    "Transfer fee prediction methods",
    "Squad composition analysis techniques", 
    "Football player valuation models",
    "AI-powered scouting systems",
    "Data-driven recruitment strategies",
    "Player development forecasting",
    "Transfer market trend analysis",
    "Football Analytics",
    "Premier League player analysis",
    "La Liga transfer intelligence", 
    "Serie A scouting data",
    "Bundesliga analytics",
    "Ligue 1 player values",
    "Eredivisie talent identification",
    "Championship prospects evaluation",
    "European football leagues",
    "Transfer Market Analysis",
    "Player Valuation methodologies",
    "Artificial Intelligence in Sports applications",
    "Machine Learning algorithms for football",
    "Sports Data Science techniques",
    "Football Scouting technology",
    "Player Performance Prediction models",
    "Squad Analysis frameworks",
    "Tactical Analysis systems",
    "Football Investment optimization",
    "Youth player development tracking",
    "Injury risk assessment",
    "Contract optimization strategies"
  ],
  "teaches": [
    "How AI predicts football transfer values",
    "Methods for analyzing player performance data",
    "Techniques for squad optimization",
    "Approaches to data-driven scouting",
    "Strategies for transfer budget optimization",
    "Ways to assess player market value",
    "How to identify undervalued football talent",
    "Methods for predicting player development"
  ],
  "serviceType": [
    "Football Analytics Software",
    "Player Valuation Services", 
    "Transfer Intelligence Platform",
    "Sports Data Analysis",
    "AI Scouting Solutions",
    "Squad Planning Tools"
  ]
};

// Preloaded page-specific SEO configurations
export const pageSEOConfigs = {
  home: {
    title: "SquadAssist - AI Football Transfer Analysis | Player Value Prediction",
    description: "AI-powered football transfer intelligence platform. Predict player value, optimize recruitment strategy, and make data-driven transfer decisions. Advanced soccer analytics for clubs and agents.",
    keywords: "football transfer analysis, soccer player analytics, AI recruitment, transfer market intelligence, player scouting software, football data analytics, soccer transfer decisions, player value prediction",
    canonical: "https://squadassist.ai/",
    ogImage: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        organizationStructuredData,
        {
          "@type": "SoftwareApplication",
          "name": "SquadAssist",
          "description": "AI-powered football transfer intelligence platform providing player value prediction and recruitment analytics.",
          "url": "https://squadassist.ai",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          },
          "provider": organizationStructuredData
        }
      ]
    }
  },
  pricingAgents: {
    title: "Agent Pricing Plans - SquadAssist | Football Transfer Analytics",
    description: "Discover SquadAssist pricing plans for football agents. From free tier to elite packages, find the perfect AI-powered transfer analysis solution for your agency.",
    keywords: "football agent pricing, soccer analytics plans, transfer analysis subscription, agent software pricing, football scouting tools cost",
    canonical: "https://squadassist.ai/pricing/agents",
    ogImage: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed",
    ogType: "article",
    structuredData: organizationStructuredData
  },
  contact: {
    title: "Contact SquadAssist - Get Football Transfer Intelligence Support",
    description: "Contact SquadAssist for AI-powered football transfer analysis support. Get in touch with our team for custom solutions, pricing, and technical assistance.",
    keywords: "contact squadassist, football analytics support, transfer analysis help, soccer software contact",
    canonical: "https://squadassist.ai/contact",
    ogImage: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed",
    structuredData: organizationStructuredData
  },
  team: {
    title: "Meet the SquadAssist Team - Football Analytics Experts",
    description: "Meet the expert team behind SquadAssist's AI-powered football transfer intelligence platform. Learn about our founders and their vision for soccer analytics.",
    keywords: "squadassist team, football analytics experts, soccer technology founders, AI sports team",
    canonical: "https://squadassist.ai/team",
    ogImage: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        organizationStructuredData,
        {
          "@type": "AboutPage",
          "name": "Meet the SquadAssist Team",
          "description": "Learn about the expert team behind SquadAssist's AI-powered football transfer intelligence platform.",
          "url": "https://squadassist.ai/team",
          "mainEntity": organizationStructuredData
        }
      ]
    }
  },
  blog: {
    title: "Football Analytics Blog - SquadAssist Insights & Research",
    description: "Read the latest insights on football analytics, AI in soccer, transfer market trends, and data-driven scouting strategies from SquadAssist experts.",
    keywords: "football analytics blog, soccer AI insights, transfer market analysis, data-driven scouting, sports technology articles",
    canonical: "https://squadassist.ai/blog",
    ogImage: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        organizationStructuredData,
        {
          "@type": "Blog",
          "name": "SquadAssist Blog",
          "description": "Insights on AI-powered football analytics, transfer market trends, and the future of player recruitment.",
          "url": "https://squadassist.ai/blog",
          "publisher": organizationStructuredData
        }
      ]
    }
  },
  faq: {
    title: "FAQ - SquadAssist Football Transfer Analytics Questions",
    description: "Find answers to frequently asked questions about SquadAssist's AI-powered football transfer analysis platform, pricing, features, and how to get started.",
    keywords: "squadassist faq, football analytics questions, transfer analysis help, soccer software support",
    canonical: "https://squadassist.ai/faq",
    ogImage: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        organizationStructuredData,
        {
          "@type": "FAQPage",
          "name": "SquadAssist Frequently Asked Questions",
          "description": "Common questions about SquadAssist's AI-powered football transfer analysis platform.",
          "url": "https://squadassist.ai/faq",
          "publisher": organizationStructuredData
        }
      ]
    }
  }
};