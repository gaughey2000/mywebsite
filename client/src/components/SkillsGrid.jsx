import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiVite,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiGithub,
    SiGit,
    SiDocker,
  } from "react-icons/si"
  
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { Icon: SiHtml5, label: "HTML5", color: "#E34F26" },
        { Icon: SiCss3, label: "CSS3", color: "#1572B6" },
        { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
        { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
        { Icon: SiReact, label: "React", color: "#61DAFB" },
        { Icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
        { Icon: SiVite, label: "Vite", color: "#646CFF" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { Icon: SiNodedotjs, label: "Node.js", color: "#339933" },
        { Icon: SiExpress, label: "Express", color: "#000000" },
      ]
    },
    {
      title: "Database",
      skills: [
        { Icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
        { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { Icon: SiGithub, label: "GitHub", color: "#181717" },
        { Icon: SiGit, label: "Git", color: "#F05032" },
        { Icon: SiDocker, label: "Docker", color: "#2496ED" },
      ]
    }
  ]
  
  function SkillItem({ Icon: SkillIcon, label, color, delay = 0 }) {
    return (
      <div
        className="group bg-white rounded-2xl border border-secondary-30 p-6 hover:shadow-lg hover:shadow-accent/10 hover:border-accent/30 transform hover:-translate-y-1 transition-all duration-300"
        style={{
          animationDelay: `${delay}ms`
        }}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <SkillIcon 
              className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" 
              style={{ color }}
            />
          </div>
          <span className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
            {label}
          </span>
        </div>
      </div>
    )
  }
  
  export default function SkillsGrid() {
    return (
      <div className="space-y-16">
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="space-y-8">
            <div className="text-center space-y-3">
              <h3 className="text-xl font-bold text-gradient">
                {category.title}
              </h3>
              <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.label}
                  className="animate-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                >
                  <SkillItem 
                    {...skill}
                    delay={categoryIndex * 200 + skillIndex * 100}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Skills Summary */}
        <div className="bg-gradient-to-br from-accent/5 to-accent/10 backdrop-blur-sm rounded-3xl border border-accent/20 p-8 md:p-12 text-center space-y-6">
          <h3 className="text-2xl font-bold text-gradient">
            Always Learning
          </h3>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            Technology evolves rapidly, and I stay current with the latest tools and best practices. 
            This toolkit represents my core competencies, but I'm always expanding my skillset to deliver 
            the best solutions for each project.
          </p>
        </div>
      </div>
    )
  }