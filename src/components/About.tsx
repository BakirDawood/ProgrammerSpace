import React, { useEffect, useState } from 'react';
import { Keyboard, Monitor, Brain, Rocket, Users, Code } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const icons = [
    { Icon: Keyboard, delay: '0s' },
    { Icon: Monitor, delay: '0.2s' },
    { Icon: Brain, delay: '0.4s' },
    { Icon: Rocket, delay: '0.6s' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="text-blue-500">Programmer Space</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are a vibrant community of developers and a cutting-edge digital solutions agency, 
              committed to fostering growth, collaboration, and innovation in the tech world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                  <Users className="h-6 w-6 mr-3 text-blue-500" />
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To create a thriving ecosystem where developers of all skill levels can collaborate, 
                  learn, and grow together while delivering exceptional digital solutions to our clients.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                  <Code className="h-6 w-6 mr-3 text-green-500" />
                  Our Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To be the leading platform that bridges the gap between talented developers and 
                  innovative businesses, creating meaningful connections and outstanding digital experiences.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {icons.map(({ Icon, delay }, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: delay }}
                >
                  <Icon className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {index === 0 ? '100+' : index === 1 ? '50+' : index === 2 ? '24/7' : '∞'}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {index === 0 ? 'Developers' : index === 1 ? 'Projects' : index === 2 ? 'Support' : 'Innovation'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;