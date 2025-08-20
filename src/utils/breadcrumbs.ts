// Breadcrumb utilities for SEO and navigation
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const generateBreadcrumbStructuredData = (breadcrumbs: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const addPerformanceOptimizations = () => {
  // Add preconnect for external domains
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://images.unsplash.com'
  ];

  preconnectDomains.forEach(domain => {
    if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  });

  // Add dns-prefetch for additional performance
  const dnsPrefetchDomains = [
    'https://squadassist.ai',
    'https://wiazpjgccgexlbtprucl.supabase.co'
  ];

  dnsPrefetchDomains.forEach(domain => {
    if (!document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`)) {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    }
  });
};

// Common breadcrumb configurations
export const breadcrumbConfigs = {
  contact: [
    { name: "Home", url: "https://squadassist.ai/" },
    { name: "Contact", url: "https://squadassist.ai/contact" }
  ],
  team: [
    { name: "Home", url: "https://squadassist.ai/" },
    { name: "Team", url: "https://squadassist.ai/team" }
  ],
  blog: [
    { name: "Home", url: "https://squadassist.ai/" },
    { name: "Blog", url: "https://squadassist.ai/blog" }
  ],
  faq: [
    { name: "Home", url: "https://squadassist.ai/" },
    { name: "FAQ", url: "https://squadassist.ai/faq" }
  ],
  pricingAgents: [
    { name: "Home", url: "https://squadassist.ai/" },
    { name: "Pricing", url: "https://squadassist.ai/pricing/agents" }
  ]
};