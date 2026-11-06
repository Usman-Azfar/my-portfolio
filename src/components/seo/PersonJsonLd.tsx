import { person, siteConfig, siteUrl, social } from "@/config/site";

// Structured data so search engines can tie this site, and the profiles in
// sameAs, to one person. Validate with https://validator.schema.org/.
const personId = `${siteUrl}/#person`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: person.name,
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      jobTitle: "Software Engineer",
      description: siteConfig.seo.description,
      worksFor: { "@type": "Organization", name: "InfoTech Group" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Punjab University College of Information Technology (PUCIT), University of the Punjab",
      },
      address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
      knowsAbout: [
        "Software Engineering",
        "Java",
        "Spring Boot",
        "Edge AI",
        "Machine Learning",
        "Embedded Systems",
        "Cloud Architecture",
      ],
      sameAs: [social.github, social.linkedin, "https://doi.org/10.5281/zenodo.23770989"].filter(Boolean),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: person.name,
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: siteConfig.seo.title,
      mainEntity: { "@id": personId },
    },
  ],
};

export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
