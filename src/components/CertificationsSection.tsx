
const CertificationsSection = () => {
  const certifications = [
    {
      name: "Java Programming",
      provider: "NPTEL",
      year: "2023",
      type: "Programming",
      icon: "☕"
    },
    {
      name: "Database Management Systems",
      provider: "NPTEL",
      year: "2023",
      type: "Database",
      icon: "🗄️"
    },
    {
      name: "AWS Cloud Foundations",
      provider: "Amazon Web Services",
      year: "2023",
      type: "Cloud",
      icon: "☁️"
    },
    {
      name: "AWS Solutions Architect",
      provider: "Amazon Web Services",
      year: "2023",
      type: "Architecture",
      icon: "🏗️"
    },
    {
      name: "Machine Learning",
      provider: "Coursera",
      year: "2022",
      type: "AI/ML",
      icon: "🧠"
    },
    {
      name: "Deep Learning Specialization",
      provider: "Coursera",
      year: "2022",
      type: "AI/ML",
      icon: "🤖"
    }
  ];

  const typeColors = {
    "Programming": "border-cyber-green text-cyber-green",
    "Database": "border-cyber-blue text-cyber-blue",
    "Cloud": "border-cyber-purple text-cyber-purple",
    "Architecture": "border-cyber-yellow text-cyber-yellow",
    "AI/ML": "border-cyber-pink text-cyber-pink"
  };

  return (
    <section id="certifications" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-cyber-green mb-4 glitch-text" data-text="Certifications">
          Certifications
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-pink mx-auto rounded-full"></div>
        <p className="text-cyber-blue mt-4 font-fira">Continuous learning, continuous growth</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="terminal-window group hover:scale-105 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-cyber-green font-fira ml-4 text-sm flex items-center gap-2">
                <span className="text-lg">{cert.icon}</span>
                {cert.year}
              </span>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-orbitron font-bold text-cyber-green mb-2 group-hover:animate-neon-pulse">
                  {cert.name}
                </h3>
                <p className="text-cyber-blue text-sm font-fira mb-2">
                  {cert.provider}
                </p>
                <span className={`text-xs px-2 py-1 border rounded-full ${typeColors[cert.type as keyof typeof typeColors]}`}>
                  {cert.type}
                </span>
              </div>

              {/* Certificate badge */}
              <div className="bg-cyber-gray/30 border border-cyber-green/30 rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">{cert.icon}</div>
                <div className="text-cyber-green font-fira text-xs">VERIFIED</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievement stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-cyber-gray/20 border border-cyber-green/30 rounded-lg p-4">
          <div className="text-2xl font-orbitron font-bold text-cyber-green">{certifications.length}+</div>
          <div className="text-sm text-gray-400">Certifications</div>
        </div>
        <div className="bg-cyber-gray/20 border border-cyber-purple/30 rounded-lg p-4">
          <div className="text-2xl font-orbitron font-bold text-cyber-purple">3</div>
          <div className="text-sm text-gray-400">Cloud Certs</div>
        </div>
        <div className="bg-cyber-gray/20 border border-cyber-blue/30 rounded-lg p-4">
          <div className="text-2xl font-orbitron font-bold text-cyber-blue">2</div>
          <div className="text-sm text-gray-400">AI/ML Certs</div>
        </div>
        <div className="bg-cyber-gray/20 border border-cyber-yellow/30 rounded-lg p-4">
          <div className="text-2xl font-orbitron font-bold text-cyber-yellow">100%</div>
          <div className="text-sm text-gray-400">Pass Rate</div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
