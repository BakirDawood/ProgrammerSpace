import React, { useEffect, useState } from 'react';
import { Globe, Smartphone, User, Bot, Building, Code2 } from 'lucide-react';

const Services: React.FC = () => {
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

    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Custom Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies and best practices.',
      color: 'blue'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      color: 'green'
    },
    {
      icon: User,
      title: 'Portfolio & Resume Websites',
      description: 'Professional personal websites that showcase your skills and achievements beautifully.',
      color: 'purple'
    },
    {
      icon: Bot,
      title: 'AI Integration Projects',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      color: 'orange'
    },
    {
      icon: Building,
      title: 'Business Digital Platforms',
      description: 'Enterprise-grade solutions that streamline operations and drive growth.',
      color: 'red'
    },
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Tailored solutions designed specifically for your unique business requirements.',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
      green: 'text-green-500 bg-green-50 dark:bg-green-900/20',
      purple: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
      orange: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20',
      red: 'text-red-500 bg-red-50 dark:bg-red-900/20',
      teal: 'text-teal-500 bg-teal-50 dark:bg-teal-900/20'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our <span className="text-blue-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-lg ${getColorClasses(service.color)} mb-6`}>
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-blue-500 hover:text-blue-600 font-semibold text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;