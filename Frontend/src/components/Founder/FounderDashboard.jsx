import React, { useState } from 'react';
import { Wallet, Plus, Edit, Trash2, Briefcase, ChevronDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const FounderDashboard = () => {
  const [startups, setStartups] = useState([
    { 
      id: 1, 
      name: 'TechInnovate', 
      description: 'AI-powered project management platform',
      funding: '$500K',
      stage: 'Seed',
      founders: ['Alex Rivera', 'Emma Chen'],
      technologies: ['AI', 'Machine Learning', 'Cloud Computing']
    },
    { 
      id: 2, 
      name: 'GreenEnergy Solutions', 
      description: 'Sustainable energy technology',
      funding: '$1.2M',
      stage: 'Series A',
      founders: ['Mark Thompson'],
      technologies: ['Renewable Energy', 'Battery Tech']
    }
  ]);

  const [wallet, setWallet] = useState({
    balance: '$250,000',
    cryptoBalance: '2.5 ETH',
    investments: '$750K',
    transactions: [
      { id: 1, type: 'Investment', amount: '+$100K', date: '2024-02-01' },
      { id: 2, type: 'Expense', amount: '-$50K', date: '2024-01-15' }
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
    <div className="pt-24 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 space-y-6">
      {/* Founder Profile & Wallet Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Founder Profile */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6">
         
            <div>
              <h1 className="text-2xl font-bold text-green-400">Alex Rivera</h1>
              <p className="text-gray-400">Serial Tech Entrepreneur</p>
            </div>
          </div>
        </div>

        {/* Wallet Section */}
        {/* <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Wallet className="text-green-500" />
            <span className="font-semibold">Wallet Overview</span>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-green-400 font-bold">{wallet.balance}</p>
              <p className="text-xs text-gray-400">Total Balance</p>
            </div>
            <div>
              <p className="text-blue-400 font-bold">{wallet.cryptoBalance}</p>
              <p className="text-xs text-gray-400">Crypto</p>
            </div>
            <div>
              <p className="text-purple-400 font-bold">{wallet.investments}</p>
              <p className="text-xs text-gray-400">Investments</p>
            </div>
          </div>
        </div> */}
      {/* Startups Dashboard */}

    
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-green-400">My Startups</h2>
          <Link to={"/addStartup"}>
          <button 
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <Plus className="mr-2" /> Add Startup
          </button></Link>
        </div>

       

        <div className="space-y-4">
          {startups.map((startup) => (
            <div 
              key={startup.id} 
              className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <Briefcase className="text-green-500" />
                  <Link to={"/startupDetails"}>
                  <h3 className="text-lg font-semibold">{startup.name}</h3>
                  </Link>
                </div>
                <div className="flex space-x-2">
                  <button className="text-green-500 hover:bg-white/10 p-2 rounded-lg">
                    <Edit size={20} />
                  </button>
                  <button 
                    onClick={() => deleteStartup(startup.id)}
                    className="text-red-500 hover:bg-white/10 p-2 rounded-lg"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <p className="text-gray-400 mt-2">{startup.description}</p>
              <div className="mt-2 flex space-x-4 text-sm">
                <span>Funding: {startup.funding}</span>
                <span>Stage: {startup.stage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    

      {/* Add Startup Modal */}
      
      {isAddStartupModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-green-400">Add New Startup</h2>
              <button 
                onClick={() => setIsAddStartupModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
          
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Startup Name" 
                value={newStartup.name}
                onChange={(e) => setNewStartup({...newStartup, name: e.target.value})}
                className="w-full bg-gray-700 text-white p-2 rounded-lg"
              />
              <input 
                type="text" 
                placeholder="Description" 
                value={newStartup.description}
                onChange={(e) => setNewStartup({...newStartup, description: e.target.value})}
                className="w-full bg-gray-700 text-white p-2 rounded-lg"
              />
              <input 
                type="text" 
                placeholder="Funding" 
                value={newStartup.funding}
                onChange={(e) => setNewStartup({...newStartup, funding: e.target.value})}
                className="w-full bg-gray-700 text-white p-2 rounded-lg"
              />
              <input 
                type="text" 
                placeholder="Stage" 
                value={newStartup.stage}
                onChange={(e) => setNewStartup({...newStartup, stage: e.target.value})}
                className="w-full bg-gray-700 text-white p-2 rounded-lg"
              />
              <button 
                onClick={addStartup}
                className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg"
              >
                Create Startup
              </button>
            </div>

          </div>
        </div>
       
      )}
    </div>
  );
};

export default FounderDashboard;