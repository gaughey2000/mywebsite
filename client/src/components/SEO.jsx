import { useEffect } from 'react'
import { generateMetaTags, generatePersonStructuredData, generateWebsiteStructuredData } from '../utils/seo'

export default function SEO({ pageConfig = {}, structuredData = null }) {
  const metaTags = generateMetaTags(pageConfig)

  useEffect(() => {
    // Update title
    document.title = metaTags.title

    // Update or create meta tags
    updateMetaTag('description', metaTags.description)
    updateMetaTag('keywords', metaTags.keywords)
    
    // Canonical URL
    updateLinkTag('canonical', metaTags.canonical)
    
    // Open Graph tags
    updateMetaProperty('og:title', metaTags.openGraph.title)
    updateMetaProperty('og:description', metaTags.openGraph.description)
    updateMetaProperty('og:url', metaTags.openGraph.url)
    updateMetaProperty('og:type', metaTags.openGraph.type)
    updateMetaProperty('og:image', metaTags.openGraph.image)
    updateMetaProperty('og:site_name', metaTags.openGraph.siteName)
    updateMetaProperty('og:locale', metaTags.openGraph.locale)
    
    // Twitter Card tags
    updateMetaName('twitter:card', metaTags.twitter.card)
    updateMetaName('twitter:site', metaTags.twitter.site)
    updateMetaName('twitter:creator', metaTags.twitter.creator)
    updateMetaName('twitter:title', metaTags.twitter.title)
    updateMetaName('twitter:description', metaTags.twitter.description)
    updateMetaName('twitter:image', metaTags.twitter.image)

    // Structured Data
    updateStructuredData('person-schema', generatePersonStructuredData())
    updateStructuredData('website-schema', generateWebsiteStructuredData())
    
    // Custom structured data if provided
    if (structuredData) {
      updateStructuredData('page-schema', structuredData)
    }

    // Cleanup function to remove page-specific structured data
    return () => {
      const pageSchema = document.getElementById('page-schema')
      if (pageSchema) {
        pageSchema.remove()
      }
    }
  }, [metaTags, structuredData])

  return null // This component doesn't render anything
}

// Helper functions
function updateMetaTag(name, content) {
  if (!content) return
  
  let element = document.querySelector(`meta[name="${name}"]`)
  if (element) {
    element.setAttribute('content', content)
  } else {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    element.setAttribute('content', content)
    document.head.appendChild(element)
  }
}

function updateMetaProperty(property, content) {
  if (!content) return
  
  let element = document.querySelector(`meta[property="${property}"]`)
  if (element) {
    element.setAttribute('content', content)
  } else {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    element.setAttribute('content', content)
    document.head.appendChild(element)
  }
}

function updateMetaName(name, content) {
  if (!content) return
  
  let element = document.querySelector(`meta[name="${name}"]`)
  if (element) {
    element.setAttribute('content', content)
  } else {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    element.setAttribute('content', content)
    document.head.appendChild(element)
  }
}

function updateLinkTag(rel, href) {
  if (!href) return
  
  let element = document.querySelector(`link[rel="${rel}"]`)
  if (element) {
    element.setAttribute('href', href)
  } else {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    element.setAttribute('href', href)
    document.head.appendChild(element)
  }
}

function updateStructuredData(id, data) {
  // Remove existing structured data with this ID
  const existingScript = document.getElementById(id)
  if (existingScript) {
    existingScript.remove()
  }

  // Add new structured data
  const script = document.createElement('script')
  script.id = id
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}