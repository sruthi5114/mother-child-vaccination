import React from 'react';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';

const UpcomingAppointments: React.FC = () => {
  const appointments = [
    {
      id: 1,
      childName: 'Arjun Kumar',
      motherName: 'Priya Devi',
      vaccination: 'DPT-3',
      date: '2024-01-15',
      time: '10:00 AM',
      village: 'Vadakkupatti',
      phone: '+91 9876543210',
      status: 'scheduled'
    },
    {
      id: 2,
      childName: 'Meera Lakshmi',
      motherName: 'Kamala Devi',
      vaccination: 'Measles',
      date: '2024-01-16',
      time: '11:30 AM',
      village: 'Keezhaiyur',
      phone: '+91 9876543211',
      status: 'overdue'
    },
    {
      id: 3,
      childName: 'Karthik Raj',
      motherName: 'Selvam Devi',
      vaccination: 'Polio-2',
      date: '2024-01-17',
      time: '9:00 AM',
      village: 'Vadakkupatti',
      phone: '+91 9876543212',
      status: 'scheduled'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-green-100 text-green-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h3>
        <Calendar className="w-5 h-5 text-blue-500" />
      </div>
      
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-medium text-gray-900">{appointment.childName}</h4>
                <p className="text-sm text-gray-600">Mother: {appointment.motherName}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                {appointment.status}
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="font-medium">{appointment.vaccination}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {appointment.date} at {appointment.time}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {appointment.village}
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                {appointment.phone}
              </div>
            </div>
            
            <div className="flex justify-end space-x-2 mt-3">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Send Reminder
              </button>
              <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                Mark Complete
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-4 w-full text-center py-2 text-sm text-blue-600 hover:text-blue-800 font-medium border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
        View All Appointments
      </button>
    </div>
  );
};

export default UpcomingAppointments;