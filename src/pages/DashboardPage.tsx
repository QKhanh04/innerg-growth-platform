import React from 'react';
import { Header } from '@/src/components/Header';
import { Sidebar } from '@/src/components/Sidebar';
import { 
  Flame, 
  Trophy, 
  ChevronRight, 
  Play, 
  Calendar, 
  Clock, 
  Star,
  BookOpen,
  Video,
  Mic
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background-light">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
            {/* Main Content Area */}
            <div className="flex-1 space-y-12">
              {/* Happening This Week */}
              <section>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black tracking-tight">Happening This Week</h2>
                  <button className="text-primary text-sm font-bold hover:underline">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <EventCard 
                    type="Workshop"
                    title="Leadership Fundamentals"
                    time="Mon, 10:00 AM"
                    image="https://picsum.photos/seed/leadership/800/400"
                    color="primary"
                  />
                  <EventCard 
                    type="Mentorship"
                    title="Product Strategy Session"
                    time="Wed, 02:30 PM"
                    image="https://picsum.photos/seed/strategy/800/400"
                    color="blue-500"
                  />
                </div>
              </section>

              {/* Recommended for You */}
              <section>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black tracking-tight">Recommended for You</h2>
                  <span className="text-[10px] font-black bg-primary/20 text-slate-900 px-3 py-1 rounded-full uppercase tracking-widest">Based on Wishlist</span>
                </div>
                <div className="space-y-4">
                  <RecommendationItem 
                    title="Advanced Design Systems"
                    stats="4.8 ★ • 12 Modules"
                    icon={BookOpen}
                  />
                  <RecommendationItem 
                    title="Frontend for Designers"
                    stats="4.9 ★ • 8 Modules"
                    icon={Play}
                  />
                </div>
              </section>

              {/* Recently Added */}
              <section>
                <h2 className="text-2xl font-black tracking-tight mb-8">Recently Added</h2>
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-2">
                  <RecentItem icon={BookOpen} title="Q3 Company Strategy Guide" meta="Resource Hub • 2h ago" />
                  <RecentItem icon={Video} title="Communication for Managers" meta="Course • 5h ago" />
                  <RecentItem icon={Mic} title="Career Growth Fireside Chat" meta="Podcast • Yesterday" />
                </div>
              </section>
            </div>

            {/* Right Sidebar */}
            <aside className="w-full lg:w-96 space-y-8">
              {/* Learning Streak */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 text-center">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-black text-lg">Learning Streak</h3>
                  <Flame className="size-6 text-orange-500 fill-current" />
                </div>
                <div className="relative flex items-center justify-center mb-6">
                  <svg className="size-48 -rotate-90">
                    <circle className="text-slate-100" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
                    <circle className="text-primary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12" strokeDasharray="552.9" strokeDashoffset="138.2" strokeLinecap="round"></circle>
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-5xl font-black">12</span>
                    <span className="text-xs uppercase font-black text-slate-400 tracking-widest">Days</span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Keep it up! You're in the top <span className="text-primary font-black">5%</span> of learners this month.
                </p>
              </div>

              {/* Points Balance */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Points Balance</p>
                  <div className="flex items-end gap-2 mt-2">
                    <h3 className="text-5xl font-black">1,240</h3>
                    <p className="text-primary font-black mb-1 text-lg">pts</p>
                  </div>
                  <button className="mt-8 w-full bg-white text-slate-900 font-black py-4 rounded-2xl text-sm hover:bg-primary transition-all active:scale-95 shadow-lg">
                    Redeem Rewards
                  </button>
                </div>
                <div className="absolute -right-8 -bottom-8 size-40 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              {/* Calendar Mini */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-black text-sm">September 2023</h3>
                  <div className="flex gap-4">
                    <ChevronRight className="size-4 text-slate-400 rotate-180 cursor-pointer" />
                    <ChevronRight className="size-4 text-slate-400 cursor-pointer" />
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-black text-slate-400 mb-4 uppercase tracking-widest">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => <div key={d}>{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold">
                  {Array.from({ length: 21 }, (_, i) => {
                    const day = i + 1;
                    const isToday = day === 11;
                    const hasEvent = day === 13;
                    return (
                      <div 
                        key={i} 
                        className={cn(
                          "py-2 rounded-xl transition-all cursor-pointer",
                          isToday && "bg-primary/20 text-slate-900",
                          hasEvent && "bg-primary/40 text-slate-900",
                          !isToday && !hasEvent && "hover:bg-slate-50 text-slate-500"
                        )}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Trending Skills */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <h3 className="font-black text-sm mb-6 uppercase tracking-widest text-slate-400">Trending Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['UX Strategy', 'React.js', 'Emotional Intel', 'Public Speaking'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-600 border border-slate-100">
                      {skill}
                    </span>
                  ))}
                  <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl text-xs font-black text-primary">
                    Figma Pro
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

function EventCard({ type, title, time, image, color }: any) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100">
      <div className="h-48 overflow-hidden relative">
        <img src={image} alt={title} className="size-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
           <span className={cn("text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest text-white shadow-sm", `bg-${color}`)}>
            {type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-black text-lg mb-4 group-hover:text-primary transition-colors">{title}</h4>
        <div className="flex items-center gap-3 text-sm text-slate-500 font-bold">
          <Calendar className="size-4" />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}

function RecommendationItem({ title, stats, icon: Icon }: any) {
  return (
    <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-primary/30 transition-all group">
      <div className="size-16 rounded-2xl bg-slate-50 flex-shrink-0 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
        <Icon className="size-8 text-primary" />
      </div>
      <div className="flex-1">
        <h4 className="font-black text-lg text-slate-900">{title}</h4>
        <p className="text-sm text-slate-500 font-bold mt-1">{stats}</p>
      </div>
      <button className="bg-primary hover:bg-primary/90 text-slate-900 text-sm font-black py-3 px-8 rounded-2xl transition-all active:scale-95 shadow-lg shadow-primary/20">
        Start
      </button>
    </div>
  );
}

function RecentItem({ icon: Icon, title, meta }: any) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-all group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
          <Icon className="size-5" />
        </div>
        <div>
          <p className="font-bold text-slate-900">{title}</p>
          <p className="text-xs text-slate-400 font-bold mt-1">{meta}</p>
        </div>
      </div>
      <ChevronRight className="size-5 text-slate-300 group-hover:text-primary transition-all group-hover:translate-x-1" />
    </div>
  );
}
