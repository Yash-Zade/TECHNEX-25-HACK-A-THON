import React, { useState  } from 'react';
import { X, TrendingUp, Users, DollarSign, Globe, Calendar, Mail, LinkedIn, Twitter, Building, ChevronRight, BarChart3 } from 'lucide-react';
import useNavigate from 'react-router-dom' ;
// Extended startup data with more details
const navigate = useNavigate() ;
const Startup = {
  id: 1,
  name: "Quantum Computing Co",
  title: "Next-Gen Quantum Solutions",
  description: "Building accessible quantum computing platforms for businesses and researchers, focusing on quantum algorithm optimization and error correction. Our technology enables companies to harness quantum computing power without requiring extensive quantum physics expertise.",
  longDescription: `Quantum Computing Co is revolutionizing the quantum computing landscape by making this powerful technology accessible to businesses of all sizes. Our platform combines cutting-edge quantum hardware integration with user-friendly software interfaces, enabling companies to solve complex computational problems that are infeasible for classical computers.

We specialize in:
• Quantum Algorithm Optimization
• Error Correction Systems
• Cloud-Based Quantum Computing
• Industry-Specific Quantum Solutions`,
  date: "2024-01-20",
  founder: {
    name: "Dr. Emily Watson",
    title: "CEO & Quantum Physicist",
    bio: "Former lead researcher at CERN with 15+ years experience in quantum computing",
    education: "Ph.D. in Quantum Physics, MIT",
    image: "/api/placeholder/64/64"
  },
  team: [
    { name: "Dr. James Chen", role: "CTO", image: "/api/placeholder/48/48" },
    { name: "Sarah Miller", role: "Head of Engineering", image: "/api/placeholder/48/48" },
    { name: "Dr. Robert Park", role: "Lead Researcher", image: "/api/placeholder/48/48" }
  ],
  traction: "50K+ Users",
  raised: "$5M",
  growth: "+127% MoM",
  location: "Boston, MA",
  employees: "45+",
  website: "www.quantumcomputing.co",
  funding: {
    total: "$5M",
    rounds: [
      { name: "Seed", amount: "$1.5M", date: "2023-06" },
      { name: "Series A", amount: "$3.5M", date: "2024-01" }
    ]
  },
  metrics: {
    activeUsers: "50,000+",
    processedCalculations: "1M+",
    cloudPartners: "12",
    patents: "8"
  },
  logo: "/api/placeholder/120/120"
};

const StartupDetailModal = ({ isOpen, onClose, startupId }) => {
  if (!isOpen) return null;
  
  const data = Startup; // In real app, fetch based on startupId

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="relative max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white transition-colors z-10"
          >
            <X size={20} />
          </button>

          {/* Hero section */}  
          <div className="relative p-8 md:p-12 border-b border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
            <div className="relative flex flex-col md:flex-row gap-8">
              <img
                src={data.logo}
                alt={`${data.name} logo`}
                className="w-24 h-24 md:w-30 md:h-30 rounded-xl bg-gray-800"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">{data.name}</h2>
                <p className="text-green-400 text-xl mb-4">{data.title}</p>
                <p className="text-gray-300 text-lg max-w-3xl mb-6">{data.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex items-center gap-3">
                    <Users className="text-green-400" size={20} />
                    <span className="text-gray-300">{data.traction}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="text-green-400" size={20} />
                    <span className="text-gray-300">Raised {data.funding.total}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="text-green-400" size={20} />
                    <span className="text-gray-300">{data.growth}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="text-green-400" size={20} />
                    <span className="text-gray-300">{data.employees}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
            {/* Left column */}
            <div className="md:col-span-2 space-y-8">
              {/* About */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-4">About</h3>
                <p className="text-gray-300 whitespace-pre-line">{data.longDescription}</p>
              </section>

              {/* Key Metrics */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-4">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(data.metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-800/50 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                      <p className="text-white text-lg font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Team */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-4">Team</h3>
                <div className="space-y-6">
                  {/* Founder */}
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={data.founder.image}
                        alt={data.founder.name}
                        className="w-16 h-16 rounded-lg"
                      />
                      <div>
                        <h4 className="text-white font-semibold mb-1">{data.founder.name}</h4>
                        <p className="text-green-400 mb-2">{data.founder.title}</p>
                        <p className="text-gray-300 text-sm mb-2">{data.founder.bio}</p>
                        <p className="text-gray-400 text-sm">{data.founder.education}</p>
                      </div>
                    </div>
                  </div>

                  {/* Other team members */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.team.map((member) => (
                      <div key={member.name} className="bg-gray-800/50 rounded-lg p-4 flex items-center gap-3">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-12 h-12 rounded-lg"
                        />
                        <div>
                          <h4 className="text-white font-medium">{member.name}</h4>
                          <p className="text-gray-400 text-sm">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              {/* Contact & Links */}
              <section className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Contact & Links</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-green-400">
                    <Globe size={18} />
                    <span>{data.website}</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-green-400">
                    <LinkedIn size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-green-400">
                    <Twitter size={18} />
                    <span>Twitter</span>
                  </a>
                </div>
              </section>

              {/* Funding History */}
              <section className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Funding History</h3>
                <div className="space-y-4">
                  {data.funding.rounds.map((round, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">{round.name}</p>
                        <p className="text-gray-400 text-sm">{round.date}</p>
                      </div>
                      <p className="text-green-400 font-semibold">{round.amount}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Location */}
              <section className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Location</h3>
                <div className="flex items-center gap-3">
                  <Building size={18} className="text-gray-400" />
                  <span className="text-gray-300">{data.location}</span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startup;