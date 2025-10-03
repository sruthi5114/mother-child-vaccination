import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  role: 'parent' | 'healthworker' | 'phc_staff';
  village?: string;
  phone: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (credentials: { phone: string; otp: string; role: string }) => Promise<void>;
  logout: () => void;
  register: (userData: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('mcvs_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials: { phone: string; otp: string; role: string }) => {
    // Simulate API call
    const mockUser: User = {
      id: '1',
      name: credentials.role === 'parent' ? 'Priya Devi' : 'Dr. Ramalingam',
      role: credentials.role as User['role'],
      village: 'Vadakkupatti',
      phone: credentials.phone
    };
    
    setUser(mockUser);
    localStorage.setItem('mcvs_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mcvs_user');
  };

  const register = async (userData: any) => {
    // Simulate registration
    console.log('Registering user:', userData);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};