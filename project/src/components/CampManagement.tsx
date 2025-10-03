import React, { useState } from 'react';
import { Calendar, MapPin, Users, Plus, CreditCard as Edit, Trash2 } from 'lucide-react';

const CampManagement: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingCamp, setEditingCamp] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    village: '',
    location: '',
    startTime: '',
    endTime: '',
    expectedAttendees: '',
    vaccines: [] as string[],
    healthWorker: ''
  });

  const vaccineOptions = [
    'BCG', 'DPT-1', 'DPT-2', 'DPT-3', 'OPV-1', 'OPV-2', 'OPV-3', 
    'Hepatitis B', 'Measles', 'MMR', 'JE', 'TT'
  ];

  const mockCamps = [
    {
      id: 1,
      name: 'Routine Vaccination Camp',
      date: '2024-01-20',
      village: 'Vadakkupatti',
      location: 'Village School',
      startTime: '09:00',
      endTime: '15:00',
      expectedAttendees: 45,
      actualAttendees: 42,
      vaccines: ['DPT-1', 'DPT-2', 'OPV-1', 'OPV-2'],
      healthWorker: 'Dr. Ramalingam',
      status: 'completed'
    },
    {
      id: 2,
      name: 'Measles Vaccination Drive',
      date: '2024-01-25',
      village: 'Keezhaiyur',
      location: 'Community Center',
      startTime: '10:00',
      endTime: '14:00',
      expectedAttendees: 35,
      vaccines: ['Measles', 'MMR'],
      healthWorker: 'Dr. Priya',
      status: 'scheduled'
    }
  ];

  const handleVaccineChange = (vaccine: string) => {
    setFormData(prev => ({
      ...prev,
      vaccines: prev.vaccines.includes(vaccine)
        ? prev.vaccines.filter(v => v !== vaccine)
        : [...prev.vaccines, vaccine]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Camp data:', formData);
    setShowForm(false);
    setEditingCamp(null);
    setFormData({
      name: '',
      date: '',
      village: '',
      location: '',
      startTime: '',
      endTime: '',
      expectedAttendees: '',
      vaccines: [],
      healthWorker: ''
    });
  };

  const handleEdit = (camp: any) => {
    setEditingCamp(camp);
    setFormData({
      name: camp.name,
      date: camp.date,
      village: camp.village,
      location: camp.location,
      startTime: camp.startTime,
      endTime: camp.endTime,
      expectedAttendees: camp.expectedAttendees.toString(),
      vaccines: camp.vaccines,
      healthWorker: camp.healthWorker
    });
    setShowForm(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Calendar className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Vaccination Camps</h1>
              <p className="text-gray-600">தடுப்பூசி முகாம்கள்</p>
            </div>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Plus className="w-4 h-4 mr-2" />
            Schedule Camp
          </button>
        </div>

        {/* Camp List */}
        <div className="space-y-6 mb-8">
          {mockCamps.map((camp) => (
            <div key={camp.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{camp.name}</h3>
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{new Date(camp.date).toLocaleDateString('en-IN')}</span>
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{camp.village} - {camp.location}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(camp.status)}`}>
                  {camp.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Time</p>
                  <p className="font-medium">{camp.startTime} - {camp.endTime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Expected Attendees</p>
                  <p className="font-medium">
                    {camp.expectedAttendees}
                    {camp.actualAttendees && ` (${camp.actualAttendees} attended)`}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Health Worker</p>
                  <p className="font-medium">{camp.healthWorker}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Vaccines Available</p>
                <div className="flex flex-wrap gap-2">
                  {camp.vaccines.map((vaccine) => (
                    <span key={vaccine} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      {vaccine}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(camp)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center">
                  <Trash2 className="w-4 h-4 mr-1" />
                  Cancel
                </button>
                {camp.status === 'scheduled' && (
                  <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                    Mark Complete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Camp Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-screen overflow-y-auto">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {editingCamp ? 'Edit Camp' : 'Schedule New Camp'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Camp Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Village *
                    </label>
                    <input
                      type="text"
                      value={formData.village}
                      onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location *
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Start Time *
                    </label>
                    <input
                      type="time"
                      value={formData.startTime}
                      onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      End Time *
                    </label>
                    <input
                      type="time"
                      value={formData.endTime}
                      onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vaccines Available *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {vaccineOptions.map((vaccine) => (
                      <label key={vaccine} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.vaccines.includes(vaccine)}
                          onChange={() => handleVaccineChange(vaccine)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{vaccine}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expected Attendees
                    </label>
                    <input
                      type="number"
                      value={formData.expectedAttendees}
                      onChange={(e) => setFormData({ ...formData, expectedAttendees: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Assigned Health Worker
                    </label>
                    <input
                      type="text"
                      value={formData.healthWorker}
                      onChange={(e) => setFormData({ ...formData, healthWorker: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingCamp(null);
                      setFormData({
                        name: '',
                        date: '',
                        village: '',
                        location: '',
                        startTime: '',
                        endTime: '',
                        expectedAttendees: '',
                        vaccines: [],
                        healthWorker: ''
                      });
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {editingCamp ? 'Update Camp' : 'Schedule Camp'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampManagement;