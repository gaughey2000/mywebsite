import { Link } from "react-router-dom"
import SEO from "../components/SEO"

const notFoundConfig = {
  title: "Page Not Found - Connor McGaughey",
  description: "The page you're looking for doesn't exist. Explore Connor McGaughey's portfolio, projects, and contact information.",
  canonical: "/404"
}

export default function NotFound() {
  return (
    <>
      <SEO pageConfig={notFoundConfig} />
      <section className="text-center space-y-8 py-16">
        <div className="space-y-4">
          <div className="text-8xl">🔍</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">
            Page Not Found
          </h1>
          <p className="text-lg text-secondary max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            to="/" 
            className="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Go Home
          </Link>
          <Link 
            to="/projects" 
            className="px-8 py-4 font-semibold rounded-2xl border-2 border-secondary-30 text-primary hover:border-accent hover:text-accent hover:bg-accent/5 transform hover:scale-105 transition-all duration-200"
          >
            View Projects
          </Link>
        </div>
      </section>
    </>
  )
}