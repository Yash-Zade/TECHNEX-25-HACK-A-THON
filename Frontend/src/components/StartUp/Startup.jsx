import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Users, 
  Calendar, 
  DollarSign, 
  Briefcase, 
  Globe,
  Mail,
  LinkedinIcon,
  Twitter,
  Wallet,
  Building,
  TrendingUp,
  X
} from 'lucide-react';

const CompanyCard = ({ icon: Icon, title, value }) => (
  <div className="flex items-center gap-3">
    <Icon className="w-6 h-6 text-emerald-400" />
    <div>
      <p className="text-gray-500">{title}</p>
      <p className="text-white text-lg">{value}</p>
    </div>
  </div>
);

const MetricCard = ({ title, value }) => (
  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
    <p className="text-gray-500 text-sm mb-2 capitalize">{title}</p>
    <p className="text-white text-xl font-semibold">{value}</p>
  </div>
);

const TeamMemberCard = ({ name, role, image }) => (
  <div className="flex items-center gap-4 bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
    {/* <img 
      src={image} 
      alt={name}
      className="w-16 h-16 rounded-full bg-gray-800"
    /> */}
    <div>
      <p className="text-white font-medium text-lg">{name}</p>
      <p className="text-gray-500">{role}</p>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-50 w-full max-w-md bg-gray-900 border border-gray-800 rounded-xl p-6">
        {children}
      </div>
    </div>
  );
};

const InvestmentForm = ({ startupData, onSubmit }) => {
  const [amount, setAmount] = useState(startupData.investment.minAmount);
  
  const calculateEquity = (investAmount) => {
    const percentage = ((investAmount / parseInt(startupData.investment.valuation.replace('M', '000000'))) * 100).toFixed(3);
    return `${percentage}%`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Investment Amount (Min: ${startupData.investment.minAmount.toLocaleString()})
        </label>
        <input
          type="number"
          min={startupData.investment.minAmount}
          step={1000}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
        <p className="text-sm text-emerald-400 mt-2">
          Estimated Equity: {calculateEquity(amount)}
        </p>
      </div>
      
      <button 
        type="submit"
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-colors"
      >
        Confirm Investment
      </button>
    </form>
  );
};

const InvestmentProgress = ({ raised, target }) => {
  const progress = (parseInt(raised) / parseInt(target)) * 100;
  
  return (
    <div className="space-y-4">
      <div className="w-full bg-gray-800 rounded-full h-4">
        <div 
          className="bg-emerald-500 h-4 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-emerald-400">${raised}M raised</span>
        <span className="text-gray-400">${target}M target</span>
      </div>
    </div>
  );
};

const Startup = () => {
  const [showInvestModal, setShowInvestModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const startupData = {
    id: 1,
    name: "EcoTech Solutions",
    logo: "/api/placeholder/64/64",
    shortDescription: "Revolutionary green energy storage solutions",
    longDescription: "EcoTech Solutions is pioneering advanced energy storage technologies that combine high efficiency with environmental sustainability. Our proprietary battery technology increases renewable energy utilization while reducing carbon footprint.",
    founded: "2022",
    location: "San Francisco, CA",
    employeeCount: "50-100",
    fundingStage: "Series A",
    totalFunding: "$12.5M",
    industry: ["CleanTech", "Energy", "Hardware"],
    website: "https://ecotechsolutions.example",
    email: "contact@ecotechsolutions.example",
    socialMedia: {
      linkedin: "ecotech-solutions",
      twitter: "@ecotech"
    },
    metrics: {
      revenue: "$2.5M ARR",
      growth: "+150% YoY",
      customers: "28 Enterprise"
    },
    investment: {
      minAmount: 10000,
      valuation: "50M",
      equity: "0.02%",
      currentRound: "Series A",
      raised: "8.5",
      target: "12.5"
    },
    team: [
      {
        name: "Sarah Chen",
        role: "CEO & Co-founder",
        image: "/api/placeholder/48/48"
      },
      {
        name: "Dr. James Wilson",
        role: "CTO & Co-founder",
        image: "/api/placeholder/48/48"
      }
    ]
  };

  const handleInvestmentSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setShowInvestModal(false);
    }, 3000);
  };

  return (
    <div className="pt-16 min-h-screen w-full bg-gray-950">
      <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-gray-950/95 border-y border-gray-800 min-h-screen">
        <div className="max-w-[1920px] mx-auto p-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-12">
            <div className="flex items-center gap-6">
              {/* <img 
                src={startupData.logo} 
                alt={`${startupData.name} logo`}
                className="w-20 h-20 rounded-xl bg-gray-800"
              /> */}
              <div>
                <h1 className="text-3xl font-bold text-white">{startupData.name}</h1>
                <p className="text-gray-400 text-lg mt-2">{startupData.shortDescription}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setShowInvestModal(true)} 
                className="flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg text-white transition-all text-lg font-semibold"
              >
                <Wallet className="w-5 h-5" />
                Invest Now
              </button>
              
              <button className="flex items-center gap-2 px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg text-emerald-400 transition-all text-lg">
                Visit Website
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Investment Progress */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-white mb-6">Investment Progress</h2>
                <InvestmentProgress 
                  raised={startupData.investment.raised}
                  target={startupData.investment.target}
                />
              </div>

              {/* Metrics */}
              <div className="grid sm:grid-cols-3 gap-4">
                {Object.entries(startupData.metrics).map(([key, value]) => (
                  <MetricCard key={key} title={key} value={value} />
                ))}
              </div>

              {/* About */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">About</h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {startupData.longDescription}
                </p>
              </div>

              {/* Team */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Leadership Team</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {startupData.team.map((member) => (
                    <TeamMemberCard key={member.name} {...member} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Company Details */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-white mb-6">Company Details</h2>
                <div className="space-y-6">
                  <CompanyCard icon={Calendar} title="Founded" value={startupData.founded} />
                  <CompanyCard icon={Users} title="Team Size" value={startupData.employeeCount} />
                  <CompanyCard icon={DollarSign} title="Total Funding" value={startupData.totalFunding} />
                  <CompanyCard icon={Briefcase} title="Stage" value={startupData.fundingStage} />
                  <CompanyCard icon={Building} title="Location" value={startupData.location} />
                </div>
              </div>

              {/* Industry Tags */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Industry Focus</h2>
                <div className="flex flex-wrap gap-2">
                  {startupData.industry.map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-emerald-400" />
                    <a href={startupData.website} className="text-gray-400 hover:text-emerald-400 transition-colors">
                      {startupData.website.replace('https://', '')}
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <a href={`mailto:${startupData.email}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href={`https://linkedin.com/company/${startupData.socialMedia.linkedin}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a href={`https://twitter.com/${startupData.socialMedia.twitter}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Modal */}
      <Modal isOpen={showInvestModal} onClose={() => setShowInvestModal(false)}>
        <div className="relative">
          <button
            onClick={() => setShowInvestModal(false)}
            className="absolute right-0 top-0 text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          
          <h2 className="text-2xl font-bold text-white mb-2">
            Invest in {startupData.name}
          </h2>
          <p className="text-gray-400 mb-6">
            Join us in revolutionizing the clean energy sector
          </p>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 bg-gray-800/50 p-4 rounded-lg">
              <div>
                <p className="text-gray-400">Valuation</p>
                <p className="text-white font-semibold">${startupData.investment.valuation}</p>
              </div>
              <div>
                <p className="text-gray-400">Round</p>
                <p className="text-white font-semibold">{startupData.investment.currentRound}</p>
              </div>
              <div>
                <p className="text-gray-400">Raised</p>
                <p className="text-white font-semibold">${startupData.investment.raised}M</p>
              </div>
              <div>
                <p className="text-gray-400">Target</p>
                <p className="text-white font-semibold">${startupData.investment.target}M</p>
              </div>
            </div>
            
            <InvestmentForm 
              startupData={startupData}
              onSubmit={handleInvestmentSubmit}
            />
            
            {showSuccess && (
              <div className="text-center p-4 bg-emerald-500/20 text-emerald-400 rounded-lg">
                Investment request submitted successfully!
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Startup;