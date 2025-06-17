
export const useStructuredData = () => {
  const getOrganizationData = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EasyWeb",
    "url": "https://easyweb.eswb.site",
    "logo": "https://easyweb.eswb.site/lovable-uploads/e326e6f8-eb14-4e87-a39d-52531111fe9b.png",
    "description": "Agence de création de sites web professionnels au Cameroun",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CM",
      "addressRegion": "Centre",
      "addressLocality": "Yaoundé"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+237674833400",
      "contactType": "customer service",
      "availableLanguage": ["French"]
    },
    "sameAs": [
      "https://wa.me/237674833400"
    ]
  });

  const getServiceData = (serviceName: string, description: string, price?: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "EasyWeb",
      "url": "https://easyweb.eswb.site"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Cameroun"
    },
    ...(price && {
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "XAF"
      }
    })
  });

  const getWebsiteData = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EasyWeb",
    "url": "https://easyweb.eswb.site",
    "description": "Création de sites web professionnels au Cameroun",
    "publisher": {
      "@type": "Organization",
      "name": "EasyWeb"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://easyweb.eswb.site/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  });

  const getBreadcrumbData = (items: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  });

  const getFAQData = (faqs: Array<{question: string, answer: string}>) => ({
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
  });

  return {
    getOrganizationData,
    getServiceData,
    getWebsiteData,
    getBreadcrumbData,
    getFAQData
  };
};
