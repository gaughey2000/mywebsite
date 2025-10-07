// SEO utilities and configurations
export const siteConfig = {
  name: "Connor McGaughey",
  title: "Connor McGaughey - Full Stack Software Developer",
  description: "Full Stack Software Developer specializing in React, Node.js, and modern web applications. Available for development roles and freelance projects in the UK.",
  url: "https://connor-mcgaughey.co.uk",
  author: {
    name: "Connor McGaughey",
    email: "gaughey2000@protonmail.com",
    twitter: "@connormcgaughey", // Update with your actual handle
    github: "https://github.com/connormcgaughey", // Update with your actual GitHub
    linkedin: "https://linkedin.com/in/connormcgaughey" // Update with your actual LinkedIn
  },
  location: {
    country: "United Kingdom",
    city: "UK"
  },
  keywords: [
    "Full Stack Developer",
    "React Developer", 
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "UK Developer",
    "Freelance Developer",
    "PostgreSQL",
    "Express.js",
    "Tailwind CSS",
    "Modern Web Development"
  ],
  ogImage: "/og-image.jpg" // We'll create this
}

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: "Connor McGaughey - Full Stack Software Developer",
    description: "Full Stack Software Developer specializing in React, Node.js, and modern web applications. Available for development roles and freelance projects in the UK.",
    keywords: ["Full Stack Developer", "React", "Node.js", "JavaScript", "UK Developer"],
    canonical: "/"
  },
  about: {
    title: "About Connor McGaughey - Full Stack Developer Experience & Skills",
    description: "Learn about Connor McGaughey's 3+ years of software development experience, technical skills in React, Node.js, PostgreSQL, and professional background.",
    keywords: ["About Connor McGaughey", "Developer Experience", "Technical Skills", "Software Engineer Background"],
    canonical: "/about"
  },
  projects: {
    title: "Connor McGaughey's Portfolio - React & Node.js Projects",
    description: "Explore Connor McGaughey's portfolio of full-stack web applications including e-commerce platforms, SaaS solutions, and business management systems.",
    keywords: ["Portfolio", "React Projects", "Node.js Projects", "Full Stack Applications", "Web Development Portfolio"],
    canonical: "/projects"
  },
  contact: {
    title: "Contact Connor McGaughey - Hire Full Stack Developer",
    description: "Get in touch with Connor McGaughey for full-stack development projects, freelance work, or employment opportunities. Based in the UK, available worldwide.",
    keywords: ["Contact Developer", "Hire Full Stack Developer", "Freelance Developer UK", "Development Services"],
    canonical: "/contact"
  }
}

// Generate structured data (JSON-LD)
export const generatePersonStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": siteConfig.author.name,
  "jobTitle": "Full Stack Software Developer",
  "description": siteConfig.description,
  "url": siteConfig.url,
  "email": siteConfig.author.email,
  "sameAs": [
    siteConfig.author.github,
    siteConfig.author.linkedin,
    siteConfig.author.twitter ? `https://twitter.com/${siteConfig.author.twitter.replace('@', '')}` : null
  ].filter(Boolean),
  "address": {
    "@type": "PostalAddress",
    "addressCountry": siteConfig.location.country,
    "addressLocality": siteConfig.location.city
  },
  "knowsAbout": [
    "JavaScript",
    "TypeScript", 
    "React",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Full Stack Development",
    "Web Application Development",
    "Software Engineering"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Software Developer",
    "occupationLocation": {
      "@type": "Place",
      "name": siteConfig.location.country
    }
  }
})

export const generateWebsiteStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Website",
  "name": siteConfig.name,
  "description": siteConfig.description,
  "url": siteConfig.url,
  "author": {
    "@type": "Person",
    "name": siteConfig.author.name
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${siteConfig.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
})

// Generate project structured data
export const generateProjectStructuredData = (projects) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Connor McGaughey's Software Development Projects",
  "description": "A collection of full-stack web applications and software projects",
  "numberOfItems": projects.length,
  "itemListElement": projects.map((project, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "SoftwareApplication",
      "name": project.title,
      "description": project.summary,
      "applicationCategory": "WebApplication",
      "programmingLanguage": project.tech,
      "author": {
        "@type": "Person",
        "name": siteConfig.author.name
      },
      "url": project.live !== "#" ? project.live : undefined,
      "codeRepository": project.repo !== "#" ? project.repo : undefined
    }
  }))
})

// Meta tag helpers
export const generateMetaTags = (pageConfig) => {
  const config = { ...siteConfig, ...pageConfig }
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords?.join(', '),
    canonical: `${siteConfig.url}${config.canonical || ''}`,
    openGraph: {
      title: config.title,
      description: config.description,
      url: `${siteConfig.url}${config.canonical || ''}`,
      type: 'website',
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      siteName: siteConfig.name,
      locale: 'en_GB'
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.author.twitter,
      creator: siteConfig.author.twitter,
      title: config.title,
      description: config.description,
      image: `${siteConfig.url}${siteConfig.ogImage}`
    }
  }
}