
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  
  const commands = [
    '> whoami',
    'abishek@portfolio:~$ Computer Science and Engineering Student & Developer',
    '',
    '> cat about.txt',
    '🎓 CSE Student passionate about building scalable solutions',
    '💻 Full-Stack Developer with modern web technologies',
    '🚀 DevOps enthusiast automating deployment pipelines', 
    '🤖 AI/ML explorer diving deep into LLMs and neural networks',
    '⚡ Always learning, always building, always innovating',
    '',
    '> ls skills/',
    '📚 Programming Languages: C, C++, Python, Java',
    '🌐 Web and App Development: HTML, CSS, Javascript, Typescript, React.js, Node.js, React Native',
    '⚙️ Databases: MySQL, PostgreSQL, MongoDB',
    '🗄️ Frameworks & Libraries: Fast API, Flask, OpenCV, Tensorflow, Scikit-learn, PyTorch',
    '☁️ DevOps & Cloud Tools: Docker, Kubernetes, AWS, Terraform, Ansible, Github Actions',
    '🧠 Development Tools: Git, VS Code, XAMPP Server, Figma, Android Studio, ChatGPT, Apache',
    '',
    '> echo "Ready to collaborate!"',
    'Ready to collaborate! 🚀'
  ];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < commands.length) {
        const currentCommand = commands[index];
        console.log(`Adding command ${index}: "${currentCommand}"`);
        setTerminalOutput(prev => [...prev, currentCommand]);
        index++;
      } else {
        console.log('All commands added, clearing timer');
        clearInterval(timer);
      }
    }, 300);

    return () => {
      console.log('Cleaning up timer');
      clearInterval(timer);
    };
  }, []);

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-cyber-green mb-4 glitch-text" data-text="About Me">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto rounded-full"></div>
      </div>

      <div className="terminal-window max-w-4xl mx-auto">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="text-cyber-green font-fira ml-4 text-sm">abishek@portfolio:~</span>
        </div>
        
        <div className="p-6 font-fira text-sm leading-relaxed min-h-[400px]">
          {terminalOutput.map((line, index) => (
            <div 
              key={`line-${index}`}
              className={`mb-2 ${
                line.startsWith('>') ? 'text-cyber-blue' : 
                line.startsWith('abishek@') ? 'text-cyber-purple' :
                line.includes('🎓') || line.includes('💻') || line.includes('🚀') || line.includes('🤖') || line.includes('⚡') ? 'text-cyber-green' :
                line.includes('📚') || line.includes('🌐') || line.includes('⚙️') || line.includes('🗄️') || line.includes('☁️') || line.includes('🧠') ? 'text-cyber-yellow' :
                'text-gray-300'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {line || '\u00A0'}
            </div>
          ))}
          {terminalOutput.length < commands.length && (
            <div className="inline-block w-2 h-4 bg-cyber-green animate-blink ml-1"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
