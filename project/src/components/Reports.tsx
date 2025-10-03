import React, { useState } from 'react';
import { BarChart, FileText, Download, Filter, TrendingUp, Users, MapPin } from 'lucide-react';

const Reports: React.FC = () => {
  const [reportType, setReportType] = useState('vaccination');
  const [dateRange, setDateRange] = useState('monthly');
  const [selectedVillage, setSelectedVillage] = useState('all');

  const villages = ['All Villages', 'Vadakkupatti', 'Keezhaiyur', 'Melakadaiyur', 'Pudupatti', 'Karuppur'];

  const vaccinationData = [
    { vaccine: 'BCG', completed: 89, target: 95, percentage: 93.7 },
    { vaccine: 'DPT-1', completed: 82, target: 95, percentage: 86.3 },
    { vaccine: 'DPT-2', completed: 75, target: 95, percentage: 78.9 },
    { vaccine: 'DPT-3', completed: 68, target: 95, percentage: 71.6 },
    { vaccine: 'OPV-1', completed: 85, target: 95, percentage: 89.5 },
    { vaccine: 'OPV-2', completed: 78, target: 95, percentage: 82.1 },
    { vaccine: 'OPV-3', completed: 71, target: 95, percentage: 74.7 },
    { vaccine: 'Measles', completed: 72, target: 95, percentage: 75.8 }
  ];

  const villageData = [
    { village: 'Vadakkupatti', children: 52, vaccinated: 48, percentage: 92.3 },
    { village: 'Keezhaiyur', children: 38, vaccinated: 32, percentage: 84.2 },
    { village: 'Melakadaiyur', children: 29, vaccinated: 27, percentage: 93.1 },
    { village: 'Pudupatti', children: 16, vaccinated: 13, percentage: 81.3 },
    { village: 'Karuppur', children: 10, vaccinated: 9, percentage: 90.0 }
  ];

  const handleDownload = (format: string) => {
    console.log(`Downloading report in ${format} format`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6">
          <BarChart className="w-8 h-8 text-blue-500 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
            <p className="text-gray-600">அறிக்கைகள் மற்றும் பகுப்பாய்வு</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Report Type
              </label>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="vaccination">Vaccination Coverage</option>
                <option value="village">Village-wise Report</option>
                <option value="maternal">Maternal Health</option>
                <option value="overdue">Overdue Vaccinations</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="weekly">This Week</option>
                <option value="monthly">This Month</option>
                <option value="quarterly">This Quarter</option>
                <option value="yearly">This Year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Village
              </label>
              <select
                value={selectedVillage}
                onChange={(e) => setSelectedVillage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                {villages.map((village) => (
                  <option key={village} value={village.toLowerCase()}>
                    {village}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-blue-600">Total Children</p>
                <p className="text-2xl font-bold text-blue-900">145</p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
              <div>
                <p className="text-sm text-green-600">Overall Coverage</p>
                <p className="text-2xl font-bold text-green-900">87.5%</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-yellow-500 mr-3" />
              <div>
                <p className="text-sm text-yellow-600">Pregnant Mothers</p>
                <p className="text-2xl font-bold text-yellow-900">12</p>
              </div>
            </div>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-red-500 mr-3" />
              <div>
                <p className="text-sm text-red-600">Overdue</p>
                <p className="text-2xl font-bold text-red-900">8</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vaccination Coverage Report */}
        {reportType === 'vaccination' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Vaccination Coverage Report</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleDownload('pdf')}
                  className="flex items-center px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                >
                  <Download className="w-4 h-4 mr-1" />
                  PDF
                </button>
                <button
                  onClick={() => handleDownload('excel')}
                  className="flex items-center px-3 py-1 text-sm text-green-600 border border-green-600 rounded hover:bg-green-50"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Excel
                </button>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vaccine
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Completed
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Target
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Coverage %
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Progress
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {vaccinationData.map((vaccine) => (
                    <tr key={vaccine.vaccine}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {vaccine.vaccine}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {vaccine.completed}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {vaccine.target}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {vaccine.percentage}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div
                              className={`h-2 rounded-full ${
                                vaccine.percentage >= 90 ? 'bg-green-500' : 
                                vaccine.percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${(vaccine.percentage / 100) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-600">{vaccine.percentage}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Village-wise Report */}
        {reportType === 'village' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Village-wise Coverage Report</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleDownload('pdf')}
                  className="flex items-center px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                >
                  <Download className="w-4 h-4 mr-1" />
                  PDF
                </button>
                <button
                  onClick={() => handleDownload('excel')}
                  className="flex items-center px-3 py-1 text-sm text-green-600 border border-green-600 rounded hover:bg-green-50"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Excel
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {villageData.map((village) => (
                <div key={village.village} className="bg-white border rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                    <h3 className="font-semibold text-gray-900">{village.village}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Children:</span>
                      <span className="font-medium">{village.children}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Vaccinated:</span>
                      <span className="font-medium">{village.vaccinated}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Coverage:</span>
                      <span className={`font-medium ${
                        village.percentage >= 90 ? 'text-green-600' : 
                        village.percentage >= 75 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {village.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className={`h-2 rounded-full ${
                          village.percentage >= 90 ? 'bg-green-500' : 
                          village.percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${village.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;