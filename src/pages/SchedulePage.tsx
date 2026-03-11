import React from 'react';
import { Header } from '@/src/components/Header';
import { Sidebar } from '@/src/components/Sidebar';
import { 
  Calendar as CalendarIcon, 
  Plus, 
  RefreshCw, 
  Star, 
  ChevronRight,
  User,
  Settings,
  ArrowRight,
  Clock,
  Users,
  Airplay,
  Moon,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function SchedulePage() {
  return (
    <div className="flex min-h-screen bg-background-light">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Page Title */}
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-4xl font-black tracking-tight">My Schedule</h2>
                <p className="text-slate-500 text-lg font-medium mt-2">Manage your teaching and practice sessions for the week</p>
              </div>
              <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
                <button className="px-8 py-2.5 text-sm font-black bg-slate-100 rounded-xl">Week</button>
                <button className="px-8 py-2.5 text-sm font-black text-slate-400 hover:text-slate-600 transition-colors">Month</button>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-10">
              {/* Calendar Grid */}
              <div className="flex-1">
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50">
                  <div className="grid grid-cols-6 border-b border-slate-200 bg-slate-50/50">
                    <div className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">Time</div>
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                      <div key={day} className={cn(
                        "p-6 text-center text-sm font-black border-l border-slate-200",
                        i === 2 && "bg-primary/5 text-primary"
                      )}>
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="divide-y divide-slate-100">
                    <TimeRow time="08:00 AM" slots={[
                      { type: 'upcoming', title: 'Morning Flow', color: 'blue' },
                      null,
                      { type: 'teaching', title: 'Intermediate Hatha', color: 'emerald' },
                      null,
                      { type: 'completed', title: 'Early Meditation', color: 'slate' }
                    ]} />
                    <TimeRow time="10:00 AM" slots={[
                      null,
                      { type: 'upcoming', title: 'Vinyasa Mastery', color: 'blue' },
                      null,
                      { type: 'teaching', title: 'Beginner Flow', color: 'emerald' },
                      null
                    ]} />
                    <TimeRow time="02:00 PM" slots={[
                      { type: 'teaching', title: 'Prenatal Yoga', color: 'emerald' },
                      null,
                      { type: 'upcoming', title: 'Sound Healing', color: 'blue' },
                      null,
                      { type: 'upcoming', title: 'Yin Yoga', color: 'blue' }
                    ]} />
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="w-full xl:w-96 space-y-8 shrink-0">
                {/* Upcoming Classes */}
                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                  <h3 className="font-black text-xl mb-8 flex items-center justify-between">
                    Upcoming Classes
                    <span className="text-[10px] font-black text-primary px-3 py-1 bg-primary/10 rounded-full uppercase tracking-widest">3 Today</span>
                  </h3>
                  <div className="space-y-6">
                    <UpcomingItem icon={Users} title="Advanced Vinyasa" time="04:30 PM • 60 mins" />
                    <UpcomingItem icon={Airplay} title="Breathwork 101" time="06:00 PM • 30 mins" />
                    <UpcomingItem icon={Moon} title="Night Meditation" time="09:00 PM • 15 mins" />
                  </div>
                </div>

                {/* Sync Calendar */}
                <div className="bg-primary/5 rounded-3xl border border-primary/20 p-8 overflow-hidden relative group">
                  <div className="relative z-10">
                    <h3 className="font-black text-2xl text-slate-900 mb-3">Sync Calendar</h3>
                    <p className="text-slate-600 font-medium mb-8 leading-relaxed">Never miss a session. Sync your schedule with Google or Outlook.</p>
                    <button className="w-full bg-slate-900 text-white py-4 rounded-2xl text-sm font-black flex items-center justify-center gap-3 hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-slate-900/20">
                      <RefreshCw className="size-5" />
                      Connect Calendar
                    </button>
                  </div>
                  <CalendarIcon className="absolute -bottom-6 -right-6 size-40 text-primary/10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                </div>
              </div>
            </div>

            {/* Bottom Section: Completed Classes */}
            <section className="pt-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black tracking-tight">Completed Classes</h3>
                <button className="text-sm font-black text-primary hover:underline">View All History</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <CompletedCard 
                  title="Power Yoga Core" 
                  meta="Yesterday • 45 mins" 
                  rating="4.9" 
                  image="https://picsum.photos/seed/yoga1/400/400"
                />
                <CompletedCard 
                  title="Zen Stillness" 
                  meta="2 days ago • 20 mins" 
                  rating="5.0" 
                  image="https://picsum.photos/seed/yoga2/400/400"
                />
                <CompletedCard 
                  title="Restorative Pilates" 
                  meta="3 days ago • 60 mins" 
                  rating="4.8" 
                  image="https://picsum.photos/seed/yoga3/400/400"
                />
                <CompletedCard 
                  title="Sunset Yoga" 
                  meta="Last week • 30 mins" 
                  rating="5.0" 
                  image="https://picsum.photos/seed/yoga4/400/400"
                />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function TimeRow({ time, slots }: any) {
  return (
    <div className="grid grid-cols-6 h-32">
      <div className="p-6 text-xs font-bold text-slate-400">{time}</div>
      {slots.map((slot: any, i: number) => (
        <div key={i} className="p-3 border-l border-slate-100 relative">
          {slot && (
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={cn(
                "h-full rounded-2xl border-l-4 p-4 overflow-hidden cursor-pointer transition-all shadow-sm",
                slot.type === 'upcoming' && "bg-blue-50 border-blue-500 hover:bg-blue-100",
                slot.type === 'teaching' && "bg-emerald-50 border-emerald-500 hover:bg-emerald-100",
                slot.type === 'completed' && "bg-slate-50 border-slate-300 opacity-60"
              )}
            >
              <p className={cn(
                "text-[10px] font-black uppercase leading-none mb-2 tracking-widest",
                slot.type === 'upcoming' && "text-blue-600",
                slot.type === 'teaching' && "text-emerald-600",
                slot.type === 'completed' && "text-slate-500"
              )}>
                {slot.type}
              </p>
              <p className="text-sm font-black leading-tight truncate text-slate-900">{slot.title}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

function UpcomingItem({ icon: Icon, title, time }: any) {
  return (
    <div className="flex gap-5 p-4 rounded-2xl border border-slate-100 hover:border-primary/30 transition-all cursor-pointer group hover:bg-slate-50">
      <div className="size-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
        <Icon className="size-7 text-blue-600 group-hover:text-primary transition-colors" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-base font-black truncate group-hover:text-primary transition-colors">{title}</p>
        <p className="text-sm text-slate-500 font-bold mt-1">{time}</p>
      </div>
    </div>
  );
}

function CompletedCard({ title, meta, rating, image }: any) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-5 group">
      <div className="size-20 rounded-2xl bg-slate-100 overflow-hidden shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
        <img src={image} alt={title} className="size-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-base font-black truncate text-slate-900">{title}</p>
        <p className="text-xs text-slate-500 font-bold mt-1">{meta}</p>
        <div className="mt-3 flex items-center gap-1.5">
          <Star className="size-3 text-amber-500 fill-current" />
          <span className="text-[10px] font-black text-slate-700">{rating} Review</span>
        </div>
      </div>
    </div>
  );
}
