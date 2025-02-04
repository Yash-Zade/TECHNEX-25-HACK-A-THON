import React, { useState } from 'react';
import { Wallet, Plus, Edit, Trash2, Briefcase, X, User, BarChart, Activity, IndianRupee , Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
const FounderDashboard = () => {
  const [startups, setStartups] = useState([
    { 
      id: 1, 
      name: 'TechInnovate', 
      description: 'AI-powered project management platform',
      funding: '₹500K',
      stage: 'Seed',
      founders: ['Alex Rivera', 'Emma Chen'],
      technologies: ['AI', 'Machine Learning', 'Cloud Computing']
    },
    { 
      id: 2, 
      name: 'GreenEnergy Solutions', 
      description: 'Sustainable energy technology',
      funding: '₹1.2M',
      stage: 'Series A',
      founders: ['Mark Thompson'],
      technologies: ['Renewable Energy', 'Battery Tech']
    },
    { 
      id: 3, 
      name: 'HealthSync', 
      description: 'Wearable health monitoring devices',
      funding: '₹800K',
      stage: 'Seed',
      founders: ['Sophia Lee', 'Daniel Kim'],
      technologies: ['IoT', 'Wearable Tech', 'Healthcare']
    },
    { 
      id: 4, 
      name: 'EduTech Hub', 
      description: 'Online learning platform for coding',
      funding: '₹2M',
      stage: 'Series B',
      founders: ['Liam Johnson', 'Olivia Brown'],
      technologies: ['EdTech', 'E-learning', 'Web Development']
    },
    { 
      id: 5, 
      name: 'FinSecure', 
      description: 'Blockchain-based financial security',
      funding: '₹3.5M',
      stage: 'Series C',
      founders: ['Noah Wilson'],
      technologies: ['Blockchain', 'FinTech', 'Cybersecurity']
    },
    { 
      id: 6, 
      name: 'AgriTech Innovations', 
      description: 'Smart farming solutions',
      funding: '₹1M',
      stage: 'Series A',
      founders: ['Emma Davis', 'Lucas Martinez'],
      technologies: ['Agriculture', 'IoT', 'Data Analytics']
    }
    
  ]);

  const [wallet] = useState({
    balance: '₹250,000',
    cryptoBalance: '2.5 ETH',
    investments: '₹750K',
    transactions: [
      { id: 1, type: 'Investment', amount: '+₹100K', date: '2024-02-01' },
      { id: 2, type: 'Expense', amount: '-₹50K', date: '2024-01-15' }
    ]
  });

  const [isAddStartupModalOpen, setIsAddStartupModalOpen] = useState(false);
  const [newStartup, setNewStartup] = useState({
    name: '',
    description: '',
    funding: '',
    stage: ''
  });

  const addStartup = () => {
    const startup = {
      ...newStartup,
      id: startups.length + 1,
      founders: ['Alex Rivera'],
      technologies: []
    };
    setStartups([...startups, startup]);
    setIsAddStartupModalOpen(false);
    setNewStartup({ name: '', description: '', funding: '', stage: '' });
  };

  const deleteStartup = (id) => {
    setStartups(startups.filter(startup => startup.id !== id));
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 space-y-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Alex Rivera
            </h1>
            <p className="text-gray-400 font-light">Serial Tech Entrepreneur</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-xl hover:bg-white/10 transition-all">
            <BarChart className="w-5 h-5 text-emerald-400" />
            <span>Analytics</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-xl hover:bg-white/10 transition-all">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span>Activity</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.01] p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-emerald-500/10 rounded-xl">
              <Wallet className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Balance</p>
              <p className="text-2xl font-semibold">{wallet.balance}</p>
            </div>
          </div>
          <div className="space-y-2">
            {wallet.transactions.map(transaction => (
              <div key={transaction.id} className="flex justify-between items-center p-3 hover:bg-white/5 rounded-lg">
                <div>
                  <p className="font-medium">{transaction.type}</p>
                  <p className="text-sm text-gray-400">{transaction.date}</p>
                </div>
                <span className={`${transaction.amount.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/5 to-white/[0.01] p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-cyan-500/10 rounded-xl">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Crypto Assets</p>
              <p className="text-2xl font-semibold">{wallet.cryptoBalance}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/5 to-white/[0.01] p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-500/10 rounded-xl">
              <IndianRupee  className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Investments</p>
              <p className="text-2xl font-semibold">{wallet.investments}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Startups Section */}
      <div className="bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 rounded-2xl backdrop-blur-xl p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Venture Portfolio
          </h2>

<Link to="/hjkl;'">
          <button
            
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl hover:scale-[1.02] transition-transform"
          >
            <Plus className="w-5 h-5" />
            <span>New Venture</span>
          </button></Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {startups.map((startup) => (
            <Link to="/startupDetails">

            <div
              key={startup.id}
              className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all hover:border-emerald-500/30 relative"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{startup.name}</h3>
                    <p className="text-gray-400 text-sm">{startup.description}</p>
                  </div>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-white/10 rounded-lg">
                    <Edit className="w-5 h-5 text-emerald-400" />
                  </button>
                  <button
                    onClick={() => deleteStartup(startup.id)}
                    className="p-2 hover:bg-white/10 rounded-lg"
                  >
                    <Trash2 className="w-5 h-5 text-rose-400" />
                  </button>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-3">
                <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm">
                  {startup.stage}
                </div>
                <div className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">
                  {startup.funding}
                </div>
                {startup.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                <Users className="w-4 h-4" />
                <span>{startup.founders.join(', ')}</span>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Add Startup Modal */}
      {isAddStartupModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center p-4 z-50">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl w-full max-w-lg border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl" />
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  New Venture
                </h2>
                <button 
                  onClick={() => setIsAddStartupModalOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Venture Name</label>
                  <input
                    type="text"
                    value={newStartup.name}
                    onChange={(e) => setNewStartup({...newStartup, name: e.target.value})}
                    className="w-full bg-gray-700/50 backdrop-blur-lg text-white p-3 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Description</label>
                  <textarea
                    value={newStartup.description}
                    onChange={(e) => setNewStartup({...newStartup, description: e.target.value})}
                    className="w-full bg-gray-700/50 backdrop-blur-lg text-white p-3 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none h-24"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Funding</label>
                    <input
                      type="text"
                      value={newStartup.funding}
                      onChange={(e) => setNewStartup({...newStartup, funding: e.target.value})}
                      className="w-full bg-gray-700/50 backdrop-blur-lg text-white p-3 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Stage</label>
                    <select
                      value={newStartup.stage}
                      onChange={(e) => setNewStartup({...newStartup, stage: e.target.value})}
                      className="w-full bg-gray-700/50 backdrop-blur-lg text-white p-3 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                    >
                      <option value="">Select Stage</option>
                      <option value="Pre-Seed">Pre-Seed</option>
                      <option value="Seed">Seed</option>
                      <option value="Series A">Series A</option>
                      <option value="Series B">Series B</option>
                      <option value="Series C">Series C</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={addStartup}
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 text-white p-3 rounded-lg hover:scale-[1.02] transition-transform mt-4"
                >
                  Launch Venture
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FounderDashboard;