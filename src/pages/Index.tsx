
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechStack from '@/components/TechStack';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import GitHubStats from '@/components/GitHubStats';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark relative overflow-x-hidden">
      {/* Matrix background */}
      <div className="fixed inset-0 matrix-bg opacity-30 pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechStack />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <GitHubStats />
        <ContactSection />
      </main>

      {/* Navigation to Blog */}
      <div className="fixed top-8 right-8 z-50">
        <Link to="/blog">
          <Button className="neon-button border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark">
            Blog Terminal
          </Button>
        </Link>
      </div>

      {/* Floating scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <ChevronDown 
          className="w-6 h-6 text-cyber-green animate-bounce cursor-pointer hover:text-cyber-blue transition-colors" 
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        />
      </div>
    </div>
  );
};

export default Index;
