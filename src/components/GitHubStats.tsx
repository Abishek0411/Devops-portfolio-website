
const GitHubStats = () => {
  const username = "Abishek0411"; // Replace with actual GitHub username

  return (
    <section id="github" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-cyber-green mb-4 glitch-text" data-text="GitHub Analytics">
          GitHub Analytics
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto rounded-full"></div>
        <p className="text-cyber-blue mt-4 font-fira">Code never lies, numbers tell the story</p>
      </div>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="text-cyber-green font-fira ml-4 text-sm">github-stats@terminal:~</span>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* GitHub Stats Card */}
            <div className="space-y-4">
              <div className="text-cyber-green font-fira text-sm mb-4">
                {'> curl -s https://api.github.com/users/' + username + '/stats'}
              </div>
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00ff41&text_color=ffffff&icon_color=a855f7`}
                alt="GitHub Stats"
                className="w-full rounded-lg border border-cyber-green/30"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* GitHub Streak Stats */}
            <div className="space-y-4">
              <div className="text-cyber-purple font-fira text-sm mb-4">
                {'> git log --oneline --graph --all --since="1 year ago"'}
              </div>
              <img 
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0a0a0a&stroke=00ff41&ring=a855f7&fire=00d9ff&currStreakLabel=ffffff`}
                alt="GitHub Streak"
                className="w-full rounded-lg border border-cyber-purple/30"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Most Used Languages */}
          <div className="mt-6">
            <div className="text-cyber-blue font-fira text-sm mb-4">
              {'> gh api /users/' + username + '/repos | jq ".[].language" | sort | uniq -c'}
            </div>
            <div className="flex justify-center">
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0a0a0a&title_color=00ff41&text_color=ffffff`}
                alt="Most Used Languages"
                className="rounded-lg border border-cyber-blue/30"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Activity Graph */}
          <div className="mt-6">
            <div className="text-cyber-yellow font-fira text-sm mb-4">
              {'> git log --format="%ad" --date=short | sort | uniq -c | tail -365'}
            </div>
            <img 
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&bg_color=0a0a0a&color=00ff41&line=a855f7&point=00d9ff`}
              alt="GitHub Activity Graph"
              className="w-full rounded-lg border border-cyber-yellow/30"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Terminal output simulation */}
          <div className="mt-6 text-cyber-green font-fira text-sm">
            <div className="animate-pulse">{'> echo "Happy coding! 🚀"'}</div>
            <div className="text-gray-300 ml-2">Happy coding! 🚀</div>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-cyber-gray/20 border border-cyber-green/30 rounded-lg p-4">
          <div className="text-2xl font-orbitron font-bold text-cyber-green">500+</div>
          <div className="text-sm text-gray-400">Commits</div>
        </div>
        <div className="bg-cyber-gray/20 border border-cyber-purple/30 rounded-lg p-4">
          <div className="text-2xl font-orbitron font-bold text-cyber-purple">25+</div>
          <div className="text-sm text-gray-400">Repositories</div>
        </div>
        <div className="bg-cyber-gray/20 border border-cyber-blue/30 rounded-lg p-4">
          <div className="text-2xl font-orbitron font-bold text-cyber-blue">10+</div>
          <div className="text-sm text-gray-400">Languages</div>
        </div>
        <div className="bg-cyber-gray/20 border border-cyber-yellow/30 rounded-lg p-4">
          <div className="text-2xl font-orbitron font-bold text-cyber-yellow">365</div>
          <div className="text-sm text-gray-400">Days Active</div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
