
const TechStack = () => {
  const techCategories = [
    {
      category: "Languages",
      icon: "💻",
      techs: ["Python", "JavaScript", "TypeScript", "Java", "C/C++"]
    },
    {
      category: "Frontend",
      icon: "🌐",
      techs: ["React", "React Native", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      techs: ["Node.js", "Express", "Flask", "FastAPI"]
    },
    {
      category: "Database",
      icon: "🗄️",
      techs: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      techs: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Ansible", "SonarQube"]
    },
    {
      category: "AI/ML",
      icon: "🧠",
      techs: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "YOLO"]
    }
  ];

  return (
    <section id="tech" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-cyber-green mb-4 glitch-text" data-text="Tech Arsenal">
          Tech Arsenal
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-pink mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category, index) => (
          <div 
            key={category.category}
            className="terminal-window hover:scale-105 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-cyber-green font-fira ml-4 text-sm flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                {category.category}
              </span>
            </div>
            
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <span 
                    key={tech}
                    className="tech-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated code blocks */}
      <div className="mt-12 text-center">
        <div className="inline-block bg-cyber-gray/20 border border-cyber-green/30 rounded-lg p-4 font-fira text-sm">
          <div className="text-cyber-blue mb-1">// Current focus</div>
          <div className="text-cyber-green">
            <span className="text-cyber-purple">const</span> focus = [
            <span className="text-cyber-yellow">"AI/ML"</span>, 
            <span className="text-cyber-yellow">"DevOps"</span>, 
            <span className="text-cyber-yellow">"Full-Stack Development"</span>
            ];
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
