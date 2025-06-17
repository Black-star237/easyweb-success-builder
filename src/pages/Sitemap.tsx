
import React, { useEffect } from 'react';
import { generateSitemap, getSitemapUrls } from '@/utils/sitemap';

const Sitemap = () => {
  useEffect(() => {
    const urls = getSitemapUrls();
    const sitemapXml = generateSitemap(urls);
    
    // Set content type to XML
    document.contentType = 'application/xml';
    
    // Replace page content with XML
    document.documentElement.innerHTML = sitemapXml;
  }, []);

  return null;
};

export default Sitemap;
