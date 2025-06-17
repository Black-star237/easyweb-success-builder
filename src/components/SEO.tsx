
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "EasyWeb - Création de sites web professionnels au Cameroun",
  description = "EasyWeb transforme vos idées en sites qui cartonnent. Création de sites vitrine, e-commerce et applications web au Cameroun. Devis gratuit en 24h.",
  keywords = "création site web Cameroun, développement web Yaoundé, site internet professionnel, e-commerce Cameroun, développeur web Douala",
  image = "/lovable-uploads/e326e6f8-eb14-4e87-a39d-52531111fe9b.png",
  url = "https://easyweb.eswb.site",
  type = "website",
  structuredData
}) => {
  const fullUrl = url.startsWith('http') ? url : `https://easyweb.eswb.site${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://easyweb.eswb.site${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="EasyWeb" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="EasyWeb" />
      <meta name="geo.region" content="CM" />
      <meta name="geo.placename" content="Cameroun" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
