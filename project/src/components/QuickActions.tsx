import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Baby, Calendar, MapPin, FileText, QrCode } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      title: 'Register Mother',
      subtitle: 'தாய் பதிவு',
      icon: <UserPlus className="w-5 h-5" />,
      link: '/maternal-registration',
      color: 'blue'
    },
    {
      title: 'Register Child',
      subtitle: 'குழந்தை பதிவு',
      icon: <Baby className="w-5 h-5" />,
      link: '/child-registration',
      color: 'green'
    },
    {
      title: 'Schedule Camp',
      subtitle: 'முகாம் அட்டவணை',
      icon: <Calendar className="w-5 h-5" />,
      link: '/camps',
      color: 'purple'
    },
    {
      title: 'View Reports',
      subtitle: 'அறிக்கைகள்',
      icon: <FileText className="w-5 h-5" />,
      link: '/reports',
      color: 'orange'
    },
    {
      title: 'Generate QR',
      subtitle: 'QR குறியீடு',
      icon: <QrCode className="w-5 h-5" />,
      link: '/profile',
      color: 'indigo'
    },
    {
      title: 'Village Map',
      subtitle: 'கிராம வரைபடம்',
      icon: <MapPin className="w-5 h-5" />,
      link: '/reports',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500 hover:bg-blue-600',
      green: 'bg-green-500 hover:bg-green-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
      orange: 'bg-orange-500 hover:bg-orange-600',
      indigo: 'bg-indigo-500 hover:bg-indigo-600',
      red: 'bg-red-500 hover:bg-red-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.link}
            className={`${getColorClasses(action.color)} text-white p-4 rounded-lg transition-colors hover:shadow-md group`}
          >
            <div className="flex items-center justify-center mb-2">
              {action.icon}
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">{action.title}</div>
              <div className="text-xs opacity-90">{action.subtitle}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;