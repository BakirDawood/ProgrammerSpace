import React, { useEffect, useState } from 'react';
import { Users, Code, Palette, GraduationCap, ArrowRight } from 'lucide-react';

const Community: React.FC = () => {
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

    const section = document.getElementById('community');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const roles = [
    {
      icon: Code,
      title: 'Developers',
      description: 'Join our team of skilled developers working on cutting-edge projects',
      color: 'blue'
    },
    {
      icon: Palette,
      title: 'Designers',
      description: 'Creative minds who shape beautiful and intuitive user experiences',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Collaborators',
      description: 'Project managers and team leads who bring ideas to life',
      color: 'green'
    },
    {
      icon: GraduationCap,
      title: 'Interns',
      description: 'Students and new graduates ready to learn and grow with us',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      purple: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
      green: 'text-green-500 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      orange: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="community" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Join Our <span className="text-blue-500">Community</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Be part of a vibrant community of developers, designers, and innovators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {roles.map((role, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-gray-900 p-8 rounded-xl border-2 hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2 ${getColorClasses(role.color)} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full ${getColorClasses(role.color)} mb-6`}>
                    <role.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {role.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Ready to Join Us?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Whether you're an experienced developer or just starting your journey, 
                we welcome passionate individuals who are eager to grow and contribute.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;