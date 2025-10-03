import React from 'react';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

const VaccinationStatus: React.FC = () => {
  const vaccinationData = [
    { vaccine: 'BCG', completed: 89, pending: 5, overdue: 2 },
    { vaccine: 'DPT-1', completed: 82, pending: 8, overdue: 6 },
    { vaccine: 'DPT-2', completed: 75, pending: 12, overdue: 9 },
    { vaccine: 'DPT-3', completed: 68, pending: 15, overdue: 13 },
    { vaccine: 'Polio-1', completed: 85, pending: 7, overdue: 4 },
    { vaccine: 'Measles', completed: 72, pending: 10, overdue: 14 }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Vaccination Status Overview</h3>
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center">
            <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
            <span>Completed</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 text-yellow-500 mr-1" />
            <span>Pending</span>
          </div>
          <div className="flex items-center">
            <AlertCircle className="w-3 h-3 text-red-500 mr-1" />
            <span>Overdue</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {vaccinationData.map((vaccine) => {
          const total = vaccine.completed + vaccine.pending + vaccine.overdue;
          const completedPercentage = (vaccine.completed / total) * 100;
          const pendingPercentage = (vaccine.pending / total) * 100;
          const overduePercentage = (vaccine.overdue / total) * 100;

          return (
            <div key={vaccine.vaccine} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">{vaccine.vaccine}</span>
                <span className="text-sm text-gray-600">{total} children</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="flex h-full rounded-full overflow-hidden">
                  <div
                    className="bg-green-500"
                    style={{ width: `${completedPercentage}%` }}
                  ></div>
                  <div
                    className="bg-yellow-500"
                    style={{ width: `${pendingPercentage}%` }}
                  ></div>
                  <div
                    className="bg-red-500"
                    style={{ width: `${overduePercentage}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-600">
                <span className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                  {vaccine.completed} ({completedPercentage.toFixed(0)}%)
                </span>
                <span className="flex items-center">
                  <Clock className="w-3 h-3 text-yellow-500 mr-1" />
                  {vaccine.pending}
                </span>
                <span className="flex items-center">
                  <AlertCircle className="w-3 h-3 text-red-500 mr-1" />
                  {vaccine.overdue}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VaccinationStatus;