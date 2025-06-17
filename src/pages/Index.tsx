
import React from 'react';
import SEO from '@/components/SEO';
import { useStructuredData } from '@/hooks/useStructuredData';
import { usePerformance } from '@/hooks/usePerformance';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Promesses from '@/components/Promesses';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const { getOrganizationData, getWebsiteData } = useStructuredData();
  usePerformance();

  const combinedStructuredData = [
    getOrganizationData(),
    getWebsiteData()
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="EasyWeb - Création de sites web professionnels au Cameroun | Devis gratuit"
        description="EasyWeb transforme vos idées en sites qui cartonnent. Création de sites vitrine, e-commerce et applications web au Cameroun. Devis gratuit en 24h. Prix promotionnels jusqu'au 22 juin !"
        keywords="création site web Cameroun, développement web Yaoundé, site internet professionnel, e-commerce Cameroun, développeur web Douala, site vitrine prix, boutique en ligne"
        structuredData={combinedStructuredData}
      />
      <Header />
      <Hero />
      <Promesses />
      <Services />
      <Portfolio />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
