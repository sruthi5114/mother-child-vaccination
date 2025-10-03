import React from 'react';
import { Calendar, AlertTriangle, CheckCircle, Users, TrendingUp, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import StatsCard from './StatsCard';
import UpcomingAppointments from './UpcomingAppointments';
import VaccinationStatus from './VaccinationStatus';
import QuickActions from './QuickActions';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

  const mockStats = {
    totalChildren: 145,
    upcomingVaccinations: 23,
    overdueVaccinations: 8,
    completedThisMonth: 67
  };

  const mockHighRiskCases = [
    { id: 1, name: 'Lakshmi Devi', issue: 'Missed 2 consecutive vaccines', village: 'Vadakkupatti' },
    { id: 2, name: 'Ravi Kumar', issue: 'High fever after last vaccination', village: 'Keezhaiyur' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('welcome')}, {user?.name}!
        </h1>
        <p className="text-gray-600">
          {user?.village && (
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {user.village}
            </span>
          )}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Children"
          value={mockStats.totalChildren}
          icon={<Users className="w-6 h-6" />}
          color="blue"
          subtitle="Registered in system"
        />
        <StatsCard
          title="Upcoming Vaccinations"
          value={mockStats.upcomingVaccinations}
          icon={<Calendar className="w-6 h-6" />}
          color="green"
          subtitle="Next 7 days"
        />
        <StatsCard
          title="Overdue Vaccinations"
          value={mockStats.overdueVaccinations}
          icon={<AlertTriangle className="w-6 h-6" />}
          color="red"
          subtitle="Require immediate attention"
        />
        <StatsCard
          title="Completed This Month"
          value={mockStats.completedThisMonth}
          icon={<TrendingUp className="w-6 h-6" />}
          color="purple"
          subtitle="Vaccinations given"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <QuickActions />
        </div>

        {/* Upcoming Appointments */}
        <div className="lg:col-span-2">
          <UpcomingAppointments />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vaccination Status */}
        <VaccinationStatus />

        {/* High Risk Cases */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">High Risk Cases</h3>
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div className="space-y-4">
            {mockHighRiskCases.map((case_) => (
              <div key={case_.id} className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{case_.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{case_.issue}</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <MapPin className="w-3 h-3 mr-1" />
                      {case_.village}
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Follow Up
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full text-center py-2 text-sm text-red-600 hover:text-red-800 font-medium border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
            View All High Risk Cases
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;