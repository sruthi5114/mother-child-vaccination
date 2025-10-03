import React, { useState } from 'react';
import { Users, MapPin, Calendar, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import StatsCard from './StatsCard';

const HealthWorkerDashboard: React.FC = () => {
  const [selectedVillage, setSelectedVillage] = useState('all');

  const villages = [
    'Vadakkupatti', 'Keezhaiyur', 'Melakadaiyur', 'Pudupatti', 'Karuppur'
  ];

  const mockStats = {
    totalFamilies: 248,
    pregnantMothers: 12,
    childrenUnder5: 145,
    vaccinesThisWeek: 67,
    overdueVaccinations: 8,
    completionRate: 87.5
  };

  const todayTasks = [
    { id: 1, type: 'vaccination', description: 'DPT-3 for Arjun Kumar', village: 'Vadakkupatti', time: '10:00 AM' },
    { id: 2, type: 'anc', description: 'ANC visit for Priya Devi', village: 'Keezhaiyur', time: '11:30 AM' },
    { id: 3, type: 'follow-up', description: 'Follow-up: Missed vaccines', village: 'Vadakkupatti', time: '2:00 PM' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Worker Dashboard</h1>
        <p className="text-gray-600">சுகாதார ஊழியர் கட்டுப்பாட்டு பலகை</p>
      </div>

      {/* Village Selector */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex items-center space-x-4">
          <MapPin className="w-5 h-5 text-blue-500" />
          <label className="text-sm font-medium text-gray-700">Select Village:</label>
          <select
            value={selectedVillage}
            onChange={(e) => setSelectedVillage(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Villages</option>
            {villages.map((village) => (
              <option key={village} value={village}>{village}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Total Families"
          value={mockStats.totalFamilies}
          icon={<Users className="w-6 h-6" />}
          color="blue"
          subtitle="Under coverage"
        />
        <StatsCard
          title="Pregnant Mothers"
          value={mockStats.pregnantMothers}
          icon={<Users className="w-6 h-6" />}
          color="purple"
          subtitle="Active pregnancies"
        />
        <StatsCard
          title="Children Under 5"
          value={mockStats.childrenUnder5}
          icon={<Users className="w-6 h-6" />}
          color="green"
          subtitle="Registered children"
        />
        <StatsCard
          title="Vaccines This Week"
          value={mockStats.vaccinesThisWeek}
          icon={<TrendingUp className="w-6 h-6" />}
          color="blue"
          subtitle="Administered"
        />
        <StatsCard
          title="Overdue Vaccinations"
          value={mockStats.overdueVaccinations}
          icon={<AlertTriangle className="w-6 h-6" />}
          color="red"
          subtitle="Require attention"
        />
        <StatsCard
          title="Completion Rate"
          value={mockStats.completionRate}
          icon={<CheckCircle className="w-6 h-6" />}
          color="green"
          subtitle="%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Tasks */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Today's Tasks</h3>
            <Calendar className="w-5 h-5 text-blue-500" />
          </div>
          <div className="space-y-4">
            {todayTasks.map((task) => (
              <div key={task.id} className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{task.description}</h4>
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="mr-4">{task.village}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{task.time}</span>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Complete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Village Coverage Map */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Village Coverage</h3>
            <MapPin className="w-5 h-5 text-green-500" />
          </div>
          <div className="space-y-4">
            {villages.map((village) => {
              const coverage = Math.floor(Math.random() * 20) + 80; // Mock coverage data
              return (
                <div key={village} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{village}</span>
                    <span className="text-sm text-gray-600">{coverage}% coverage</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-full rounded-full ${
                        coverage >= 90 ? 'bg-green-500' : coverage >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${coverage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthWorkerDashboard;