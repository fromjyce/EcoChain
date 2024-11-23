import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = (email, password) => {
    if (email === 'root@gmail.com' && password === 'root@123') {
      setUser({ email });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    router.push('/signin');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
