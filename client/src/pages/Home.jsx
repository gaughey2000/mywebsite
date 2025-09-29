import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const services = [
  { 
    title: "Apps & Websites", 
    text: "From your own personal website to a full business software solution. No project is too big or small.",
    icon: "🚀"
  },
  { 
    title: "SaaS Development", 
    text: "Building and managing all your SaaS needs with modern architecture and scalable solutions.",
    icon: "⚡"
  },
  { 
    title: "Clean Responsive UI", 
    text: "Responsive UI using Tailwind and solid components that work beautifully on all devices.",
    icon: "✨"
  }
]

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="space-y-20">
      {/* Enhanced Hero Section */}
      <div className={`text-center space-y-8 ${isVisible ? 'animate-in slide-in-from-bottom-8 duration-700' : 'opacity-0'}`}>
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="inline-block">
            <div className="animate-pulse">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for hire
              </span>
            </div>
          </div>
          
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient">
              Connor McGaughey
            </h1>
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
                Full Stack Software Developer
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            I deliver fast, clean, and secure code. Available for all software development roles 
            and freelance projects. Let's build something amazing together.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            to="/projects" 
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-2xl shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 transform hover:scale-105 transition-all duration-200"
          >
            See My Work
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-4 font-semibold rounded-2xl border-2 border-secondary-30 text-primary hover:border-accent hover:text-accent hover:bg-accent/5 transform hover:scale-105 transition-all duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Enhanced Services Grid */}
      <div className={`${isVisible ? 'animate-in slide-in-from-right-8 duration-700 delay-300' : 'opacity-0'} space-y-12`}>
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">What I Do</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Specialized services to bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="group bg-white rounded-3xl border border-secondary-30 p-8 shadow-sm hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 transform hover:-translate-y-2 transition-all duration-300"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="text-center space-y-6">
                <div className="text-5xl group-hover:animate-bounce">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary group-hover:text-gradient transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 backdrop-blur-sm rounded-3xl border border-accent/20 p-8 md:p-12 text-center space-y-8">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            Let's discuss your ideas and turn them into reality. I'm available for both 
            full-time positions and freelance work.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Start a Conversation
          </Link>
          <Link 
            to="/about" 
            className="px-8 py-4 font-semibold rounded-2xl border-2 border-white/20 text-primary hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
          >
            Learn More About Me
          </Link>
        </div>
      </div>
    </section>
  )
}