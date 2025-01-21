import React, { useState,useEffect } from 'react';
import { Search, ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../Auth/ApiClient';

const startupData = [
  {
    id: 1,
    name: "Quantum Computing Co",
    title: "Next-Gen Quantum Solutions",
    description: "Building accessible quantum computing platforms for businesses and researchers.",
    date: "2024-01-20",
    founder: "Dr. Emily Watson",
    traction: "50K+ Users",
    raised: "$5M",
    growth: "+127% MoM",
    logo: "/api/placeholder/80/80"
  },
  {
    id: 2,
    name: "BioTech Innovations",
    title: "Synthetic Biology Platform",
    description: "Revolutionizing drug discovery through AI-powered protein design.",
    date: "2024-01-15",
    founder: "Dr. Robert Kim",
    traction: "30+ Patents",
    raised: "$3.8M",
    growth: "+85% MoM",
    logo: "/api/placeholder/80/80"
  },
  {
    id: 3,
    name: "SpaceNav",
    title: "Satellite Navigation Systems",
    description: "Precise positioning and navigation solutions for autonomous vehicles.",
    date: "2024-01-10",
    founder: "Maria González",
    traction: "12 Satellites",
    raised: "$7.2M",
    growth: "+93% MoM",
    logo: "/api/placeholder/80/80"
  }
];
const roledata = [];
const StartupListingMagazine = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [role, setRole] = useState([]);
  const filteredStartups = startupData.filter(startup =>
    startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    startup.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navigate = useNavigate() ;
  useEffect(() => {
    function handleStartups(){
    try {
        // const response = apiClient ('https://api.example.com/startups');
        // const {data} = response.data;
        setRole(roledata);
      } catch (error) {
      console.error('Error decoding token:', error);
      if (authentication) {
        navigate('/login');
      }
      
    }
  }
  handleStartups();
  },[]);
  const handleinvestor = () => {
    if (!role.includes("investor")) {
      setRole((prevRoles) => [...prevRoles, "investor"]);
    }
  };
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Discover Tomorrow's
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Unicorns</span>
          </h1>
          <p className="text-gray-400 text-xl">Explore the most innovative startups shaping the future</p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={24} />
          <input
            type="text"
            placeholder="Search innovative startups..."
            className="w-full bg-gray-800/50 backdrop-blur-xl pl-12 pr-4 py-4 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className='flex justify-center gap-8'>
  {!role.includes('investor') && (
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold p-4 rounded-xl shadow-md transition-all duration-300 mb-4"
    onClick={handleinvestor}>
      <div className="text-center">
        <h2 className="text-3xl font-bold ">Be an Investor</h2>
      </div>
    </button>
  )}
  {!role.includes('entrepreneur') && (
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold  p-4 rounded-xl shadow-md transition-all duration-300 mb-4"
    onClick={() => navigate('/addStartup')}>
      <div className="text-center">
        <h2 className="text-3xl font-bold">Be an Entrepreneur</h2>
      </div>
    </button>
  )}
</div>

      {/* Startup Cards */}
      <div className="max-w-6xl mx-auto space-y-8">
        {filteredStartups.map(startup => (
          <div
            key={startup.id}
            className="group relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 hover:from-gray-800/60 hover:to-gray-900/60 transition-all duration-300"
          >
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {/* Logo and Main Info */}
                <div className="flex-shrink-0">
                  {/* <img
                    src={startup.logo}
                    alt={`${startup.name} logo`}
                    className="w-20 h-20 rounded-xl bg-gray-700"
                  /> */}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <h2 className="text-2xl font-bold text-white">{startup.name}</h2>
                    <span className="text-green-400 font-medium">{startup.title}</span>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 max-w-3xl">
                    {startup.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <Users className="text-green-400" size={20} />
                      <span className="text-gray-300">{startup.traction}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign className="text-green-400" size={20} />
                      <span className="text-gray-300">Raised {startup.raised}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="text-green-400" size={20} />
                      <span className="text-gray-300">{startup.growth}</span>
                    </div>
                  </div>
                </div>
                {/* Action Button */}
                <div className="flex-shrink-0">
                  <button onClick={()=>navigate("/startupDetails")} className="group/btn flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white font-medium transition-colors">
                    Learn More
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupListingMagazine;