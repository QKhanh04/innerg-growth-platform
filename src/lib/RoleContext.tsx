import React, { createContext, useContext, useState, useEffect } from 'react';

export type Role = 'guest' | 'mentee' | 'mentor' | 'hr' | 'admin';

interface RoleContextProps {
  role: Role;
  setRole: (role: Role) => void;
}

const RoleContext = createContext<RoleContextProps | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<Role>('mentee');

  useEffect(() => {
    // Load initial role from localStorage
    const savedRole = localStorage.getItem('DEMO_ROLE') as Role;
    if (savedRole && ['guest', 'mentee', 'mentor', 'hr', 'admin'].includes(savedRole)) {
      setRoleState(savedRole);
    }
  }, []);

  const setRole = (newRole: Role) => {
    setRoleState(newRole);
    localStorage.setItem('DEMO_ROLE', newRole);
    // Optional: could trigger page reload or navigation if necessary
    // window.location.reload(); 
  };

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}
