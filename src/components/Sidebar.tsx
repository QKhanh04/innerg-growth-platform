import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Search,
  Calendar,
  FolderOpen,
  Heart,
  User,
  Settings,
  Zap
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Search, label: 'Explore', path: '/explore' },
  { icon: Calendar, label: 'My Schedule', path: '/schedule' },
  { icon: FolderOpen, label: 'Resource Hub', path: '/resources' },
  { icon: Heart, label: 'Wishlist', path: '/wishlist' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0 shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-slate-900 shadow-sm">
          <Zap className="size-6 fill-current" />
        </div>
        <div>
          <h1 className="text-slate-900 font-bold text-lg leading-none">InnerG</h1>
          <p className="text-slate-500 text-xs mt-1">Growth Platform</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-primary/10 text-primary font-bold border-l-4 border-primary rounded-l-none -ml-4 pl-7"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <item.icon className={cn("size-5", isActive && "fill-primary/20")} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <Link
          to="/settings"
          className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
        >
          <Settings className="size-5" />
          <span className="text-sm font-medium">Settings</span>
        </Link>
        <div className="mt-4 flex items-center gap-3 p-2 bg-slate-50 rounded-xl">
          <img
            src="https://picsum.photos/seed/alex/100/100"
            alt="User"
            className="size-10 rounded-full object-cover border-2 border-primary/20"
            referrerPolicy="no-referrer"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-slate-900 truncate">Alex Rivera</p>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Senior Lead</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
