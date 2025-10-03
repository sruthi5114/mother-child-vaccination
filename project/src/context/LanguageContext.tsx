import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'en' | 'ta';
  setLanguage: (lang: 'en' | 'ta') => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'dashboard': 'Dashboard',
    'maternal_health': 'Maternal Health',
    'child_vaccination': 'Child Vaccination',
    'upcoming_appointments': 'Upcoming Appointments',
    'vaccination_due': 'Vaccination Due',
    'register_pregnancy': 'Register Pregnancy',
    'register_child': 'Register Child',
    'view_schedule': 'View Schedule',
    'vaccination_camps': 'Vaccination Camps',
    'reports': 'Reports',
    'profile': 'Profile',
    'login': 'Login',
    'logout': 'Logout',
    'welcome': 'Welcome',
    'mother_name': 'Mother Name',
    'child_name': 'Child Name',
    'age': 'Age',
    'village': 'Village',
    'next_vaccination': 'Next Vaccination',
    'save': 'Save',
    'cancel': 'Cancel'
  },
  ta: {
    'dashboard': 'கட்டுப்பாட்டு பலகை',
    'maternal_health': 'தாய்ப்பேறு சுகாதாரம்',
    'child_vaccination': 'குழந்தை தடுப்பூசி',
    'upcoming_appointments': 'வரவிருக்கும் நியமனங்கள்',
    'vaccination_due': 'தடுப்பூசி வேண்டும்',
    'register_pregnancy': 'கர்ப்பம் பதிவு',
    'register_child': 'குழந்தை பதிவு',
    'view_schedule': 'அட்டவணை பார்க்க',
    'vaccination_camps': 'தடுப்பூசி முகாம்கள்',
    'reports': 'அறிக்கைகள்',
    'profile': 'சுயவிவரம்',
    'login': 'உள்நுழைய',
    'logout': 'வெளியேறு',
    'welcome': 'வரவேற்கிறோம்',
    'mother_name': 'தாயின் பெயர்',
    'child_name': 'குழந்தையின் பெயர்',
    'age': 'வயது',
    'village': 'கிராமம்',
    'next_vaccination': 'அடுத்த தடுப்பூசி',
    'save': 'சேமி',
    'cancel': 'ரத்து'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ta'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};