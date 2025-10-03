import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle, Search, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const VaccinationSchedule: React.FC = () => {
  const { t } = useLanguage();
  const [selectedChild, setSelectedChild] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const mockChildren = [
    { id: '1', name: 'Arjun Kumar', dateOfBirth: '2024-01-01' },
    { id: '2', name: 'Meera Lakshmi', dateOfBirth: '2023-06-15' },
    { id: '3', name: 'Karthik Raj', dateOfBirth: '2023-12-10' }
  ];

  const mockSchedule = [
    {
      id: 1,
      vaccine: 'BCG',
      ageRecommendation: 'At birth',
      scheduledDate: '2024-01-02',
      status: 'completed',
      location: 'PHC Vadakkupatti',
      notes: 'No adverse reactions'
    },
    {
      id: 2,
      vaccine: 'Hepatitis B (Birth Dose)',
      ageRecommendation: 'At birth',
      scheduledDate: '2024-01-02',
      status: 'completed',
      location: 'PHC Vadakkupatti',
      notes: 'Given with BCG'
    },
    {
      id: 3,
      vaccine: 'OPV-0',
      ageRecommendation: 'At birth',
      scheduledDate: '2024-01-02',
      status: 'completed',
      location: 'PHC Vadakkupatti',
      notes: ''
    },
    {
      id: 4,
      vaccine: 'DPT-1',
      ageRecommendation: '6 weeks',
      scheduledDate: '2024-02-12',
      status: 'scheduled',
      location: 'Village Camp',
      notes: ''
    },
    {
      id: 5,
      vaccine: 'OPV-1',
      ageRecommendation: '6 weeks',
      scheduledDate: '2024-02-12',
      status: 'scheduled',
      location: 'Village Camp',
      notes: ''
    },
    {
      id: 6,
      vaccine: 'Hepatitis B-1',
      ageRecommendation: '6 weeks',
      scheduledDate: '2024-02-12',
      status: 'scheduled',
      location: 'Village Camp',
      notes: ''
    },
    {
      id: 7,
      vaccine: 'DPT-2',
      ageRecommendation: '10 weeks',
      scheduledDate: '2024-03-11',
      status: 'pending',
      location: 'Village Camp',
      notes: ''
    },
    {
      id: 8,
      vaccine: 'OPV-2',
      ageRecommendation: '10 weeks',
      scheduledDate: '2024-03-11',
      status: 'pending',
      location: 'Village Camp',
      notes: ''
    },
    {
      id: 9,
      vaccine: 'Measles',
      ageRecommendation: '9-12 months',
      scheduledDate: '2024-10-01',
      status: 'pending',
      location: 'PHC Vadakkupatti',
      notes: ''
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'scheduled':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'overdue':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'overdue':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredSchedule = mockSchedule.filter(item => {
    if (filterStatus === 'all') return true;
    return item.status === filterStatus;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6">
          <Calendar className="w-8 h-8 text-blue-500 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Vaccination Schedule</h1>
            <p className="text-gray-600">தடுப்பூசி அட்டவணை</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Child / குழந்தை தேர்வு
            </label>
            <select
              value={selectedChild}
              onChange={(e) => setSelectedChild(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Children / எல்லா குழந்தைகள்</option>
              {mockChildren.map((child) => (
                <option key={child.id} value={child.id}>
                  {child.name} (Born: {child.dateOfBirth})
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Status / நிலை வடிகட்டி
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status / எல்லா நிலைகள்</option>
              <option value="completed">Completed / முடிந்தது</option>
              <option value="scheduled">Scheduled / திட்டமிடப்பட்டது</option>
              <option value="pending">Pending / நிலுவையில்</option>
              <option value="overdue">Overdue / தாமதம்</option>
            </select>
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="space-y-4">
          {filteredSchedule.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Timeline line */}
              {index < filteredSchedule.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200 z-0"></div>
              )}
              
              <div className={`relative bg-white border-2 rounded-lg p-4 hover:shadow-md transition-shadow ${getStatusColor(item.status)}`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 z-10">
                    {getStatusIcon(item.status)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.vaccine}</h3>
                        <p className="text-sm text-gray-600">{item.ageRecommendation}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          {new Date(item.scheduledDate).toLocaleDateString('en-IN')}
                        </p>
                        <p className="text-xs text-gray-500">{item.location}</p>
                      </div>
                    </div>
                    
                    {item.notes && (
                      <div className="bg-gray-50 rounded p-2 mt-2">
                        <p className="text-sm text-gray-700">
                          <strong>Notes:</strong> {item.notes}
                        </p>
                      </div>
                    )}
                    
                    <div className="flex justify-end space-x-2 mt-3">
                      {item.status === 'scheduled' && (
                        <>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            Send Reminder
                          </button>
                          <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                            Mark Complete
                          </button>
                        </>
                      )}
                      {item.status === 'pending' && (
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Schedule
                        </button>
                      )}
                      {item.status === 'overdue' && (
                        <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                          Follow Up
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Status Legend / நிலை விளக்கம்</h3>
          <div className="flex flex-wrap space-x-6">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">Completed / முடிந்தது</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-blue-500 mr-2" />
              <span className="text-sm text-gray-700">Scheduled / திட்டமிடப்பட்டது</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-700">Pending / நிலுவையில்</span>
            </div>
            <div className="flex items-center">
              <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
              <span className="text-sm text-gray-700">Overdue / தாமதம்</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccinationSchedule;