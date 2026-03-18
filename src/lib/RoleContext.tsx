import React, { createContext, useContext, useState, useEffect } from 'react';

export type Role = 'mentee' | 'mentor' | 'hr' | 'admin';

export interface UserProfile {
  name: string;
  role: Role;
  position: string;
  avatar: string;
  department: string;
  location: string;
  email: string;
  points: number;
  badges: number;
  skills: {
    teaching: string[];
    learning: string[];
  };
  about: string;
}

interface RoleContextProps {
  role: Role;
  setRole: (role: Role) => void;
  user: UserProfile;
}

const RoleContext = createContext<RoleContextProps | undefined>(undefined);

const roleProfiles: Record<Role, UserProfile> = {
  mentee: {
    name: 'Nguyen Van Minh',
    role: 'mentee',
    position: 'Junior Product Designer',
    avatar: 'https://picsum.photos/seed/alex/400/400',
    department: 'Product Design Team',
    location: 'San Francisco, CA',
    email: 'alex.r@innerg.com',
    points: 450,
    badges: 4,
    skills: {
      teaching: ['Sketch'],
      learning: ['Figma', 'React.js', 'Design Systems']
    },
    about: 'I am a junior designer eager to learn from my senior colleagues and grow my skills in Figma and front-end development.'
  },
  mentor: {
    name: 'Minh Dang',
    role: 'mentor',
    position: 'Senior Software Engineer',
    avatar: 'https://picsum.photos/seed/minh/400/400',
    department: 'Engineering Department',
    location: 'Ho Chi Minh City, VN',
    email: 'minh.d@innerg.com',
    points: 2850,
    badges: 15,
    skills: {
      teaching: ['React.js', 'Node.js', 'Clean Architecture'],
      learning: ['AI/ML', 'Product Management']
    },
    about: 'With over 10 years of experience, I love sharing my knowledge about scalable systems and modern web technologies.'
  },
  hr: {
    name: 'Lan Huong',
    role: 'hr',
    position: 'HR Manager',
    avatar: 'https://picsum.photos/seed/huong/400/400',
    department: 'People & Culture',
    location: 'Hanoi, VN',
    email: 'huong.l@innerg.com',
    points: 120,
    badges: 2,
    skills: {
      teaching: ['Conflict Resolution', 'Onboarding Processes'],
      learning: ['Data Analytics', 'Strategic Planning']
    },
    about: 'Dedicated to fostering a culture of continuous learning and professional growth within our organization.'
  },
  admin: {
    name: 'System Admin',
    role: 'admin',
    position: 'IT Infrastructure Lead',
    avatar: 'https://picsum.photos/seed/admin/400/400',
    department: 'IT Operations',
    location: 'Ho Chi Minh City, VN',
    email: 'admin@innerg.com',
    points: 0,
    badges: 0,
    skills: {
      teaching: ['Security Best Practices'],
      learning: ['Cloud Native Architecture']
    },
    about: 'Managing the InnerG platform to ensure smooth operations and data security for all employees.'
  },
};

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<Role>('mentee');

  useEffect(() => {
    const savedRole = localStorage.getItem('DEMO_ROLE') as Role;
    if (savedRole && Object.keys(roleProfiles).includes(savedRole)) {
      setRoleState(savedRole);
    }
  }, []);

  const setRole = (newRole: Role) => {
    setRoleState(newRole);
    localStorage.setItem('DEMO_ROLE', newRole);
  };

  return (
    <RoleContext.Provider value={{ role, setRole, user: roleProfiles[role] }}>
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
