
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [showSubtext, setShowSubtext] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  
  const heroText = "Hey There! I'm Abishek";
  const subText = "Fullstack Dev · DevOps Pilot · LLM Explorer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < heroText.length) {
        setDisplayText(heroText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setShowAvatar(true);
          setShowSubtext(true);
        }, 500);
        setTimeout(() => setShowButtons(true), 1500);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto">
        {/* Animated Gun SVG */}
        <div className="mb-8 animate-fade-in-up">
          <svg 
            width="120" 
            height="80" 
            viewBox="0 0 120 80" 
            className="mx-auto mb-4 text-cyber-green"
            fill="currentColor"
          >
            <path d="M10 40 L90 40 L90 35 L95 35 L95 30 L105 30 L105 35 L110 35 L110 45 L105 45 L105 50 L95 50 L95 45 L90 45 L90 40 L85 40 L85 45 L80 45 L80 50 L10 50 Z"/>
            <circle cx="20" cy="45" r="3" className="animate-neon-pulse"/>
            <rect x="25" y="42" width="50" height="6" className="animate-pulse"/>
          </svg>
        </div>

        {/* Main heading with typewriter effect and Avatar */}
        <div className="flex flex-col items-center mb-6">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black glitch-text neon-text"
            data-text={displayText}
          >
            {displayText}
            <span className="animate-blink border-r-2 border-cyber-green ml-1"></span>
          </h1>
          
          {/* Profile Avatar */}
          {showAvatar && (
            <div className="mt-8 animate-fade-in">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-cyber-green shadow-lg">
                <AvatarImage 
                  src={`${import.meta.env.BASE_URL}avatar.jpg`}
                  alt="Abishek S R"
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl font-orbitron bg-cyber-gray text-cyber-green">
                  AS
                </AvatarFallback>
              </Avatar>
            </div>
          )}
        </div>

        {/* Subtext with fade-in */}
        {showSubtext && (
          <p className="text-xl md:text-2xl text-cyber-blue font-fira mb-8 animate-fade-in-up tracking-wider">
            {subText}
          </p>
        )}

        {/* Call-to-action buttons */}
        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button 
              className="neon-button"
              onClick={() => window.open('https://drive.google.com/file/d/1R5_7O8iYufVFDSvIpxgMFRxJ2i2B2qOd/view?usp=drive_link')}
            >
              <span className="mr-2">📄</span>
              View Resume
            </Button>
            <Button 
              className="neon-button border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-cyber-dark"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="mr-2">💬</span>
              Contact Me
            </Button>
          </div>
        )}

        {/* Floating code snippets */}
        <div className="absolute top-20 left-10 opacity-30 text-cyber-green font-fira text-sm animate-pulse hidden lg:block">
          <div>{'> npm run dev'}</div>
          <div>{'> Building the future...'}</div>
        </div>
        
        <div className="absolute bottom-20 right-10 opacity-30 text-cyber-purple font-fira text-sm animate-pulse hidden lg:block">
          <div>{'console.log("Welcome!");'}</div>
          <div>{'// Let\'s build something epic'}</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
