import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Leaf, ChevronDown, MessageSquare, Users } from 'lucide-react';

export default function ModernNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isInteractionOpen, setIsInteractionOpen] = useState(false);
  const isAuthenticated = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
    // logout logic here
  };

  const handleInteractionClick = (e) => {
    e.preventDefault();
    setIsInteractionOpen(!isInteractionOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.interaction-dropdown')) {
        setIsInteractionOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const InteractionDropdown = () => (
    <div className="interaction-dropdown relative group">
      <button
        onClick={handleInteractionClick}
        className="flex items-center space-x-1 px-3 py-2 group"
      >
        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
          Interaction
        </span>
        <ChevronDown className={`w-3 h-4 pt-1 text-gray-300 group-hover:text-white transition-all duration-300 ${isInteractionOpen ? 'rotate-180 ' : ''
          }`} />
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </button>

      {isInteractionOpen && (
        <div className="absolute top-full left-[-42px] mt-1 w-48 py-2 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-emerald-500/20 shadow-xl">
          <Link
            to="/chat"
            className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm">Chat</span>
          </Link>
          <Link
            to="/forum"
            className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <Users className="w-4 h-4" />
            <span className="text-sm">Anonymous Forum</span>
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/20 ${scrolled ? 'backdrop-blur-md' : 'backdrop-blur-md'
      }`}>
      <div className={`absolute inset-0 bg-black/20 backdrop-blur-md transition-all duration-500 
        ${scrolled ? 'bg-black/40' : ''}`} />

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="group relative">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 tracking-tight group-hover:from-white group-hover:to-emerald-200 transition-all duration-300">
                  LeafLink
                </span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <div className={`w-5 h-5 relative transform transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''
                }`}>
                <span className={`absolute w-5 h-0.5 bg-white transform transition-all duration-300 
                  ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`} />
                <span className={`absolute w-5 h-0.5 bg-white transform transition-all duration-300 
                  ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
              </div>
            </button>
          </div>

          <div className="hidden sm:flex items-center space-x-6">
            <Link to="/" className="relative group px-3 py-2">
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                Home
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link to="/jobs" className="relative group px-3 py-2">
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                Jobs
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <InteractionDropdown />
            <Link to="/mentors" className="relative group px-1 py-2">
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                Find a Mentor
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link to="/startups" className="relative group px-3 py-2">
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                Startups
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center cursor-pointer transform hover:scale-105 transition-all duration-300"
                  onClick={() => navigate(`/profile/`)}>
                  <span className="text-white font-medium">A</span>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <div className={`sm:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen' : 'max-h-0'
            }`}>
            <div className="relative backdrop-blur-3xl bg-black/40 border-t border-white/10">
              <div className="px-4 py-3 space-y-2">
                <Link
                  to="/"
                  className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/jobs"
                  className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                >
                  Jobs
                </Link>
                <div className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium">
                  <div className="flex items-center justify-between" onClick={handleInteractionClick}>
                    <span>Interaction</span>
                    <ChevronDown className={` transform transition-transform ${isInteractionOpen ? 'rotate-360' : ''}`} />
                  </div>
                  {isInteractionOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <Link
                        to="/chat"
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat</span>
                      </Link>
                      <Link
                        to="/forum"
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                      >
                        <Users className="w-4 h-4" />
                        <span>Anonymous Forum</span>
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to="/mentors"
                  className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                >
                  Find a Mentor
                </Link>
                <Link
                  to="/startups"
                  className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                >
                  Startups
                </Link>
                {!isAuthenticated && (
                  <div className="pt-2 space-y-2">
                    <Link
                      to="/login"
                      className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm font-medium text-center transition-all duration-300 hover:from-emerald-600 hover:to-green-600"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}