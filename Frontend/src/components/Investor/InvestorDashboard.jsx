import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CircleDollarSign, TrendingUp, User, ArrowUpRight } from 'lucide-react';

const InvestorDashboard = () => {
  // Sample data - replace with real data
  const userData = {
    name: "Alex Thompson",
    email: "alex@example.com",
    totalInvestment: 250000,
    investmentGrowth: 12.4,
    investments: [
      { id: 1, name: "Tech Growth Fund", amount: 75000, growth: 15.2, date: "2024-01-15" },
      { id: 2, name: "Clean Energy ETF", amount: 50000, growth: 8.7, date: "2024-02-01" },
      { id: 3, name: "Real Estate Trust", amount: 125000, growth: 10.1, date: "2024-01-28" }
    ]
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Investment Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="h-6 w-6 text-gray-400" />
              <span className="text-white">{userData.name}</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Investment Card */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-400">Total Investment</p>
                  <h2 className="text-2xl font-bold text-white">
                    ${userData.totalInvestment.toLocaleString()}
                  </h2>
                </div>
                <CircleDollarSign className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          {/* Growth Rate Card */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-400">Portfolio Growth</p>
                  <h2 className="text-2xl font-bold text-green-400">
                    +{userData.investmentGrowth}%
                  </h2>
                </div>
                <TrendingUp className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          {/* Active Investments Card */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-400">Active Investments</p>
                  <h2 className="text-2xl font-bold text-white">
                    {userData.investments.length}
                  </h2>
                </div>
                <ArrowUpRight className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Investments List */}
        <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Investment Portfolio</h3>
            <div className="space-y-4">
              {userData.investments.map((investment) => (
                <div
                  key={investment.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-700/50 backdrop-blur-sm"
                >
                  <div className="space-y-1">
                    <h4 className="font-medium text-white">{investment.name}</h4>
                    <p className="text-sm text-gray-400">
                      Invested on {new Date(investment.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-white">
                      ${investment.amount.toLocaleString()}
                    </p>
                    <p className="text-sm text-green-400">+{investment.growth}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvestorDashboard;