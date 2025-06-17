
import React from 'react';
import { getSitemapUrls, generateSitemap } from '@/utils/sitemap';

const Sitemap = () => {
  const urls = getSitemapUrls();
  const sitemapXml = generateSitemap(urls);
  
  // Set the content type using a meta tag approach
  React.useEffect(() => {
    // Set the page title to indicate this is XML content
    document.title = 'Sitemap';
  }, []);

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', padding: '20px' }}>
      {sitemapXml}
    </div>
  );
};

export default Sitemap;
