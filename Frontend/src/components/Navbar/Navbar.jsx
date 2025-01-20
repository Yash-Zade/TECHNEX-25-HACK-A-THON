import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function ModernNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isAuthenticated = true;
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logout = () => {
    // logout logic here
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/20 ${
      scrolled ? 'backdrop-blur-md' : 'backdrop-blur-md'
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
              <div className={`w-5 h-5 relative transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-180' : ''
              }`}>
                <span className={`absolute w-5 h-0.5 bg-white transform transition-all duration-300 
                  ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`} />
                <span className={`absolute w-5 h-0.5 bg-white transform transition-all duration-300 
                  ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
              </div>
            </button>
          </div>

          <div className="hidden sm:flex items-center space-x-6">
            {['Home', 'Jobs', 'Interactions', 'Find a Mentor'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : item === 'Find a Mentor' ? '/mentors' : `/${item.toLowerCase()}`}
                className="relative group px-3 py-2"
              >
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
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
                onClick={()=>navigate(`/profile/`)}>
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

          <div className={`sm:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}>
            <div className="relative backdrop-blur-2xl bg-black/40 border-t border-white/10">
              <div className="px-4 py-3 space-y-2">
                {['Home', 'Jobs', 'Interactions', 'Find a Mentor'].map((item) => (
                  <Link
                    key={item}
                    to={item === 'Home' ? '/' : item === 'Find a Mentor' ? '/mentors' : `/${item.toLowerCase()}`}
                    className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                  >
                    {item}
                  </Link>
                ))}
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