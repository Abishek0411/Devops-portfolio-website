
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Research Intern",
      company: "UPES University",
      period: "2024",
      type: "Research",
      description: [
        "Conducting cutting-edge research in AI/ML applications",
        "Developing novel algorithms for computer vision projects",
        "Publishing research papers in international conferences",
        "Collaborating with PhD researchers and faculty members"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Research"]
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance Projects",
      period: "2022 - Present",
      type: "Development",
      description: [
        "Built 10+ full-stack applications for various clients",
        "Implemented modern web technologies and best practices",
        "Deployed applications on cloud platforms (AWS, Heroku)",
        "Maintained 99%+ uptime for production applications"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
    },
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      period: "2021 - Present",
      type: "Community",
      description: [
        "Contributing to popular open-source repositories",
        "Mentoring junior developers in the community",
        "Participating in hackathons and coding competitions",
        "Building developer tools and libraries"
      ],
      technologies: ["JavaScript", "Python", "Git", "GitHub", "DevTools"]
    }
  ];

  const typeColors = {
    "Research": "text-cyber-purple border-cyber-purple",
    "Development": "text-cyber-green border-cyber-green",
    "Community": "text-cyber-blue border-cyber-blue"
  };

  return (
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-cyber-green mb-4 glitch-text" data-text="Experience">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-purple mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-green via-cyber-purple to-cyber-blue transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <div 
            key={index}
            className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right md:pr-1/2' : 'md:pl-1/2 md:text-left'}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyber-green rounded-full transform -translate-x-1/2 border-2 border-cyber-dark z-10">
              <div className="w-full h-full bg-cyber-green rounded-full animate-neon-pulse"></div>
            </div>

            <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className={`ml-4 px-2 py-1 text-xs border rounded-full ${typeColors[exp.type as keyof typeof typeColors]}`}>
                    {exp.type}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-orbitron font-bold text-cyber-green mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-cyber-blue font-fira">{exp.company}</p>
                    </div>
                    <span className="text-cyber-purple text-sm font-fira bg-cyber-purple/10 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="text-gray-300 text-sm space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyber-green mt-1">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-cyber-gray/50 text-cyber-yellow px-2 py-1 rounded text-xs border border-cyber-yellow/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
