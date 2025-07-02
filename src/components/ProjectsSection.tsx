
import { Card } from '@/components/ui/card';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      name: "BlogTok",
      description: "A modern blogging platform with real-time features and social interactions powered with CI/CD",
      stack: ["HTML/CSS", "Node.js", "MongoDB", "Docker"],
      github: "https://github.com/Abishek0411/Blogging-Website",
      category: "Full-Stack"
    },
    {
      name: "PlasticDetectYOLO",
      description: "AI-powered plastic waste detection system using YOLO computer vision",
      stack: ["Python", "YOLO", "OpenCV", "TensorFlow"],
      github: "https://github.com/Abishek0411/Underwater-Plastic-Detection",
      category: "AI/ML"
    },
    {
      name: "F1-ProR",
      description: "Formula 1 racing analytics and prediction platform",
      stack: ["React", "Python", "Streamlit", "FastAPI", "PostgreSQL"],
      github: "https://github.com/Abishek0411/F1-Race-Strategy-Prediction",
      category: "Analytics"
    },
    {
      name: "Hriday",
      description: "Healthcare management system with patient tracking and analytics",
      stack: ["React Native", "TypeScript", "Nginx", "Flask", "SVM"],
      github: "https://github.com/Abishek0411/Hriday-ECG-Tagging",
      category: "Healthcare"
    },
    {
      name: "FITSRM",
      description: "Fitness and health tracking application with personalized recommendations",
      stack: ["React Native", "Python", "MySQL", "Tailwind CSS"],
      github: "https://github.com/Abishek0411/Fitness_App_Frontend",
      category: "Mobile"
    },
    {
      name: "Skincare AI",
      description: "AI-powered skincare analysis and recommendation system",
      stack: ["Python", "TensorFlow", "Flask", "OpenCV", "Raspberry Pi"],
      github: "https://github.com/Abishek0411/Skincare-Analysis-Frontend",
      category: "AI/ML"
    }
  ];

  const categoryColors = {
    "Full-Stack": "border-cyber-green text-cyber-green",
    "AI/ML": "border-cyber-purple text-cyber-purple",
    "Analytics": "border-cyber-blue text-cyber-blue",
    "Healthcare": "border-cyber-pink text-cyber-pink",
    "Mobile": "border-cyber-yellow text-cyber-yellow"
  };

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-cyber-green mb-4 glitch-text" data-text="Featured Projects">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        <p className="text-cyber-blue mt-4 font-fira">Building the future, one project at a time</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.name}
            className="project-card group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-orbitron font-bold text-cyber-green mb-2 group-hover:animate-neon-pulse">
                  {project.name}
                </h3>
                <span className={`text-xs px-2 py-1 border rounded-full ${categoryColors[project.category as keyof typeof categoryColors]}`}>
                  {project.category}
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span 
                  key={tech}
                  className="bg-cyber-gray/50 text-cyber-blue px-2 py-1 rounded text-xs border border-cyber-blue/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project number */}
            <div className="absolute top-4 right-4 text-cyber-green/30 font-orbitron text-3xl font-bold">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* GitHub icon in bottom right */}
            <a 
              href={project.github}
              className="absolute bottom-1 right-1 text-cyber-blue hover:text-cyber-green transition-colors p-4 hover:bg-cyber-green/10 rounded-full min-w-12 min-h-12 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub`}
            >
              <Github size={20} />
            </a>

          </div>
        ))}
      </div>

      {/* View all projects link */}
      <div className="text-center mt-12">
        <a 
          href="https://github.com/Abishek0411?tab=repositories" 
          className="inline-flex items-center gap-2 text-cyber-purple hover:text-cyber-blue transition-colors font-fira"
        >
          <Github size={16} />
          View all projects on GitHub
          <span className="animate-bounce">→</span>
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
