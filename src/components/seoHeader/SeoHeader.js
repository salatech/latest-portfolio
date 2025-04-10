import React from "react";
import { Helmet } from "react-helmet";
import { seo } from "../../portfolio.js";

function SeoHeader() {
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content="Solahudeen Abdulrahmon, Software Engineer, Frontend Developer, React, JavaScript, Portfolio" />
      <meta name="author" content="Solahudeen Abdulrahmon" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo?.og?.image || "%PUBLIC_URL%/logo512.png"} />
      <meta property="og:site_name" content={seo?.og?.site_name} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={seo?.twitter?.cardType || "summary_large_image"} />
      <meta name="twitter:title" content={seo?.og?.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo?.og?.image || "%PUBLIC_URL%/logo512.png"} />
      <meta name="twitter:creator" content={seo?.twitter?.handle} />
      <meta name="twitter:site" content={seo?.twitter?.site} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo?.og?.url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Solahudeen Abdulrahmon",
          "url": seo?.og?.url,
          "image": seo?.og?.image || "%PUBLIC_URL%/logo512.png",
          "jobTitle": "Software Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "H30"
          },
          "description": seo.description,
          "sameAs": [
            "https://github.com/salatech",
            "https://www.linkedin.com/in/solahudeen-abdulrahmon-000a41215",
            "https://twitter.com/salatech2"
          ],
          "knowsAbout": [
            "Frontend Development",
            "React",
            "JavaScript",
            "TypeScript",
            "React Native",
            "Web Development",
            "Mobile Development"
          ],
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Ladoke Akintola University of Technology",
            "sameAs": "https://www.lautech.edu.ng/"
          }
        })}
      </script>
    </Helmet>
  );
}

export default SeoHeader;
