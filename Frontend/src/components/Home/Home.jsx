import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Users, MessageCircle, BarChart3, Rocket, FileText, UserCheck, MessagesSquare, Building2 } from 'lucide-react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "AI Resume Tailoring",
      description: "Get personalized resume optimization using advanced AI to match your profile with dream opportunities",
      gradient: "from-emerald-600 to-green-500"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Mentor Connect",
      description: "Connect with industry experts who can guide your career journey and provide valuable insights",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      title: "1:1 Mentoring Sessions",
      description: "Schedule private mentoring sessions to discuss your career goals and challenges",
      gradient: "from-emerald-500 to-green-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Anonymous Forums",
      description: "Engage in open discussions about career challenges and opportunities with privacy",
      gradient: "from-green-600 to-emerald-500"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Smart Dashboards",
      description: "Specialized dashboards for mentors, employers, admins, and investors to manage their experience",
      gradient: "from-emerald-400 to-green-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Mentor Chat",
      description: "Real-time messaging system to stay connected with your mentors",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Startup Showcase",
      description: "Platform for startups to present their ideas and connect with potential investors",
      gradient: "from-emerald-500 to-green-400"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Startup Investment",
      description: "Investment opportunities for backing promising startups and innovations",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Team Building",
      description: "Find the perfect teammates for your startup through our matching system",
      gradient: "from-emerald-600 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-950 to-black opacity-90" />
      
      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float-delay" />
        <div className="absolute bottom-0 left-1/3 w-88 h-88 bg-lime-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float-long" />
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-emerald-400 bg-clip-text text-transparent">
              Elevate Your Career Path
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Connect with mentors, find opportunities, and build your future with AI-powered career guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
                onClick={() => handleNavigate('/jobs')}
              >
                Get Started
              </button>
              <button 
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-lg border border-emerald-500/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                onClick={() => handleNavigate('/mentors')}
              >
                Find a Mentor
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl transition-all duration-500 group-hover:bg-white/10" />
                  <div className="relative p-8">
                    <div className={`w-12 h-12 rounded-lg mb-6 bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-green-900/30 backdrop-blur-3xl" />
              <div className="relative p-12 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Career?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join our community of mentors, startups, and professionals shaping the future
                </p>
                <button 
                  className="px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 hover:scale-105 transition-all duration-300"
                  onClick={() => handleNavigate('/register')}
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;