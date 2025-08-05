// SEO utility functions for dynamic meta tags
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
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
  
  if (seo.ogImage) {
    updateMetaName('twitter:image', seo.ogImage);
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

// Preloaded page-specific SEO configurations
export const pageSEOConfigs = {
  home: {
    title: "SquadAssist - AI Football Transfer Analysis | Player Value Prediction",
    description: "AI-powered football transfer intelligence platform. Predict player value, optimize recruitment strategy, and make data-driven transfer decisions. Advanced soccer analytics for clubs and agents.",
    keywords: "football transfer analysis, soccer player analytics, AI recruitment, transfer market intelligence, player scouting software, football data analytics, soccer transfer decisions, player value prediction",
    canonical: "https://squadassist.ai/",
    ogImage: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed"
  },
  pricingAgents: {
    title: "Agent Pricing Plans - SquadAssist | Football Transfer Analytics",
    description: "Discover SquadAssist pricing plans for football agents. From free tier to elite packages, find the perfect AI-powered transfer analysis solution for your agency.",
    keywords: "football agent pricing, soccer analytics plans, transfer analysis subscription, agent software pricing, football scouting tools cost",
    canonical: "https://squadassist.ai/pricing/agents",
    ogImage: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed",
    ogType: "article"
  },
  contact: {
    title: "Contact SquadAssist - Get Football Transfer Intelligence Support",
    description: "Contact SquadAssist for AI-powered football transfer analysis support. Get in touch with our team for custom solutions, pricing, and technical assistance.",
    keywords: "contact squadassist, football analytics support, transfer analysis help, soccer software contact",
    canonical: "https://squadassist.ai/contact",
    ogImage: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed"
  },
  team: {
    title: "Meet the SquadAssist Team - Football Analytics Experts",
    description: "Meet the expert team behind SquadAssist's AI-powered football transfer intelligence platform. Learn about our founders and their vision for soccer analytics.",
    keywords: "squadassist team, football analytics experts, soccer technology founders, AI sports team",
    canonical: "https://squadassist.ai/team",
    ogImage: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed"
  },
  blog: {
    title: "Football Analytics Blog - SquadAssist Insights & Research",
    description: "Read the latest insights on football analytics, AI in soccer, transfer market trends, and data-driven scouting strategies from SquadAssist experts.",
    keywords: "football analytics blog, soccer AI insights, transfer market analysis, data-driven scouting, sports technology articles",
    canonical: "https://squadassist.ai/blog",
    ogImage: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed"
  },
  faq: {
    title: "FAQ - SquadAssist Football Transfer Analytics Questions",
    description: "Find answers to frequently asked questions about SquadAssist's AI-powered football transfer analysis platform, pricing, features, and how to get started.",
    keywords: "squadassist faq, football analytics questions, transfer analysis help, soccer software support",
    canonical: "https://squadassist.ai/faq",
    ogImage: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed"
  }
};