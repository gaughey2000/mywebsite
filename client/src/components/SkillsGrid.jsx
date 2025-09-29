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
  
  const skills = [
    // Frontend
    { Icon: SiHtml5, label: "HTML5" },
    { Icon: SiCss3, label: "CSS3" },
    { Icon: SiJavascript, label: "JavaScript" },
    { Icon: SiTypescript, label: "TypeScript" },
    { Icon: SiReact, label: "React" },
    { Icon: SiTailwindcss, label: "Tailwind CSS" },
    { Icon: SiVite, label: "Vite" },
  
    // Backend
    { Icon: SiNodedotjs, label: "Node.js" },
    { Icon: SiExpress, label: "Express" },
  
    // Databases
    { Icon: SiPostgresql, label: "PostgreSQL" },
    { Icon: SiMongodb, label: "MongoDB" },
  
    // Tools & Workflow
    { Icon: SiGithub, label: "GitHub" },
    { Icon: SiGit, label: "Git" },
    { Icon: SiDocker, label: "Docker" },
  ]
  
  export default function SkillsGrid() {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-8">
        {skills.map(({ Icon, label }) => ( // eslint-disable-line no-unused-vars
          <div
            key={label}
            className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-muted transition"
          >
            <Icon className="w-10 h-10 text-accent" />
            <span className="text-sm text-secondary text-center">{label}</span>
          </div>
        ))}
      </div>
    )
  }