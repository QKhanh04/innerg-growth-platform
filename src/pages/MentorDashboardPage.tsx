import React from 'react';
import { Header } from '@/src/components/Header';
import { Sidebar } from '@/src/components/Sidebar';
import { 
  GraduationCap, 
  Users, 
  Star, 
  Zap, 
  Plus, 
  BarChart3, 
  Clock, 
  MessageSquare, 
  ChevronRight,
  MoreVertical,
  FileText,
  PlayCircle,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

export default function MentorDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background-light">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-slate-900 shadow-sm">
                    <GraduationCap className="size-6" />
                  </div>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Mentor Portal</span>
                </div>
                <h2 className="text-4xl font-black tracking-tight">Mentor Dashboard</h2>
                <p className="text-slate-500 text-lg font-medium mt-2">Manage your classes, track student progress, and view your performance</p>
              </div>
              <Link 
                to="/mentor/create"
                className="flex items-center justify-center gap-3 bg-primary text-slate-900 px-8 py-4 rounded-2xl font-black shadow-xl shadow-primary/20 hover:brightness-105 active:scale-95 transition-all"
              >
                <Plus className="size-5" />
                Create New Class
              </Link>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard label="Total Classes" value="12" icon={GraduationCap} color="blue" />
              <StatCard label="Total Students" value="1,420" icon={Users} color="primary" />
              <StatCard label="Avg. Rating" value="4.9" icon={Star} color="amber" />
              <StatCard label="Points Earned" value="8,450" icon={Zap} color="emerald" />
            </div>

            <div className="flex flex-col xl:flex-row gap-10">
              {/* Main Content: Active Classes */}
              <div className="flex-1 space-y-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black tracking-tight">Active Classes</h3>
                  <button className="text-primary text-sm font-bold hover:underline">View All</button>
                </div>

                <div className="space-y-6">
                  <MentorClassCard 
                    title="Figma Auto-Layout Masterclass"
                    students={124}
                    rating="4.9"
                    status="Ongoing"
                    nextSession="Tomorrow, 10:00 AM"
                  />
                  <MentorClassCard 
                    title="Design Systems at Scale"
                    students={450}
                    rating="4.8"
                    status="Ongoing"
                    nextSession="Fri, Sep 22, 02:00 PM"
                  />
                  <MentorClassCard 
                    title="UX Research Methods"
                    students={86}
                    rating="5.0"
                    status="Upcoming"
                    nextSession="Starts Oct 5"
                  />
                </div>
              </div>

              {/* Sidebar: Performance & Approvals */}
              <aside className="w-full xl:w-96 space-y-8 shrink-0">
                {/* Performance Chart Placeholder */}
                <div className="bg-white rounded-[40px] p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-black text-lg flex items-center gap-2">
                      <BarChart3 className="size-5 text-primary" />
                      Performance
                    </h3>
                    <select className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-transparent border-none outline-none">
                      <option>Last 7 Days</option>
                      <option>Last 30 Days</option>
                    </select>
                  </div>
                  <div className="h-48 flex items-end justify-between gap-2 px-2">
                    {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          className="w-full bg-primary/20 rounded-t-lg group-hover:bg-primary transition-colors relative"
                        >
                          <div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg" style={{ height: '30%' }}></div>
                        </motion.div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Day {i+1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pending Approvals */}
                <div className="bg-white rounded-[40px] p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-black text-lg flex items-center gap-2">
                      <Clock className="size-5 text-amber-500" />
                      Pending Approvals
                    </h3>
                    <span className="text-[10px] font-black bg-amber-100 text-amber-700 px-2 py-1 rounded-full">4 New</span>
                  </div>
                  <div className="space-y-6">
                    <ApprovalItem name="Sarah Chen" class="Advanced Figma" time="2h ago" />
                    <ApprovalItem name="David Kim" class="Advanced Figma" time="5h ago" />
                    <ApprovalItem name="Elena Martinez" class="Design Systems" time="Yesterday" />
                  </div>
                  <button className="w-full mt-8 py-4 border-2 border-slate-100 rounded-2xl text-sm font-black text-slate-400 hover:border-primary/30 hover:text-primary transition-all">
                    Review All Requests
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, color }: any) {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm flex items-center gap-6 group hover:border-primary/30 transition-all">
      <div className={cn(
        "size-16 rounded-2xl flex items-center justify-center shrink-0 transition-colors",
        color === 'blue' && "bg-blue-50 text-blue-500",
        color === 'primary' && "bg-primary/10 text-primary",
        color === 'amber' && "bg-amber-50 text-amber-500",
        color === 'emerald' && "bg-emerald-50 text-emerald-500"
      )}>
        <Icon className="size-8" />
      </div>
      <div>
        <p className="text-3xl font-black text-slate-900">{value}</p>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{label}</p>
      </div>
    </div>
  );
}

function MentorClassCard({ title, students, rating, status, nextSession }: any) {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4">
            <h4 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">{title}</h4>
            <span className={cn(
              "text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest",
              status === 'Ongoing' ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"
            )}>
              {status}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-8 text-sm text-slate-500 font-bold">
            <div className="flex items-center gap-2">
              <Users className="size-4" />
              <span>{students} Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="size-4 text-amber-500 fill-current" />
              <span>{rating} Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              <span>Next: {nextSession}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-4 bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-2xl transition-all">
            <MessageSquare className="size-5" />
          </button>
          <button className="p-4 bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-2xl transition-all">
            <FileText className="size-5" />
          </button>
          <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl text-sm font-black hover:bg-slate-800 transition-all active:scale-95">
            Manage Class
          </button>
        </div>
      </div>
    </div>
  );
}

function ApprovalItem({ name, class: className, time }: any) {
  return (
    <div className="flex items-center justify-between group cursor-pointer">
      <div className="flex items-center gap-4">
        <img src={`https://picsum.photos/seed/${name}/100/100`} alt={name} className="size-10 rounded-full object-cover border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
        <div>
          <p className="text-sm font-black text-slate-900">{name}</p>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{className} • {time}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors">
          <CheckCircle2 className="size-4" />
        </button>
        <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
          <MoreVertical className="size-4" />
        </button>
      </div>
    </div>
  );
}
