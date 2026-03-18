import React, { useState } from 'react';
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
  Zap,
  Sparkles,
  Check,
  CheckCircle2,
  AlertCircle,
  Chrome
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function SchedulePage() {
  const [view, setView] = useState<'week' | 'month'>('week');
  const [schedulingStatus, setSchedulingStatus] = useState<'idle' | 'analyzing' | 'confirming' | 'scheduling' | 'success'>('idle');
  const [isIgnored, setIsIgnored] = useState(false);

  const handleScheduleRequest = () => {
    setSchedulingStatus('analyzing');
    setTimeout(() => setSchedulingStatus('confirming'), 2000);
  };

  const handleConfirmSlot = () => {
    setSchedulingStatus('scheduling');
    setTimeout(() => setSchedulingStatus('success'), 2500);
    setTimeout(() => setSchedulingStatus('idle'), 7000);
  };

  return (
    <div className="flex min-h-screen bg-background-light">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <AnimatePresence>
          {schedulingStatus !== 'idle' && (
            <AIAnalyzingOverlay
              status={schedulingStatus}
              onConfirm={handleConfirmSlot}
              onCancel={() => setSchedulingStatus('idle')}
            />
          )}
        </AnimatePresence>
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-7xl mx-auto space-y-10">
            {/* AI Smart Suggestion Banner */}
            <AnimatePresence>
              {!isIgnored && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-slate-900 rounded-[32px] p-6 lg:p-8 relative overflow-hidden group shadow-2xl shadow-indigo-500/20"
                >
                  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6 text-center lg:text-left">
                      <div className="size-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0 animate-pulse">
                        <Sparkles className="size-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white italic tracking-tight">AI Smart-Scheduler suggestion</h3>
                        <p className="text-slate-400 font-medium mt-1 max-w-xl">
                          Based on <span className="text-primary font-bold">12 Mentees</span> and <span className="text-primary font-bold">Mentor Minh Dang's</span> availability, the optimal time for <span className="text-white font-black underline decoration-primary decoration-2 underline-offset-4">Advanced React</span> is <span className="text-white font-black underline decoration-primary decoration-2 underline-offset-4">Wed, 03:00 PM</span>.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 w-full lg:w-auto">
                      <button
                        onClick={handleScheduleRequest}
                        className="flex-1 lg:flex-none bg-primary text-slate-900 px-8 py-3 rounded-xl font-black text-sm hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-primary/20"
                      >
                        Schedule Now
                      </button>
                      <button
                        onClick={() => setIsIgnored(true)}
                        className="flex-1 lg:flex-none bg-white/10 text-white px-8 py-3 rounded-xl font-black text-sm hover:bg-white/20 transition-all border border-white/10"
                      >
                        Ignore
                      </button>
                    </div>
                  </div>
                  {/* Background Glow */}
                  <div className="absolute top-0 right-1/4 w-64 h-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
                  <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Page Title & Stats */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-black tracking-tight text-slate-900">My Schedule</h2>
                <div className="flex items-center gap-4 mt-3">
                  <p className="text-slate-500 text-lg font-medium">Manage your personal and company-wide sessions</p>
                  <div className="h-4 w-px bg-slate-200" />
                  <div className="flex items-center gap-2 text-xs font-black text-emerald-500 uppercase tracking-widest whitespace-nowrap">
                    <div className="size-2 rounded-full bg-emerald-500 animate-ping" />
                    Live Sync Active
                  </div>
                </div>
              </div>
              <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
                <button
                  onClick={() => setView('week')}
                  className={cn(
                    "px-8 py-2.5 text-sm font-black rounded-xl uppercase tracking-wider transition-all",
                    view === 'week' ? "bg-slate-100 shadow-inner text-slate-900" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  Week
                </button>
                <button
                  onClick={() => setView('month')}
                  className={cn(
                    "px-8 py-2.5 text-sm font-black rounded-xl uppercase tracking-wider transition-all",
                    view === 'month' ? "bg-slate-100 shadow-inner text-slate-900" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  Month
                </button>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-10">
              {/* Calendar Grid */}
              <div className="flex-1 min-w-0">
                {view === 'week' ? (
                  <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50">
                    <div className="grid grid-cols-6 border-b border-slate-200 bg-slate-50/50 text-center sm:text-left">
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
                        { type: 'upcoming', title: 'Sound Healing', color: 'blue', isConflict: true },
                        null,
                        { type: 'upcoming', title: 'Yin Yoga', color: 'blue' }
                      ]} />
                      <TimeRow time="03:00 PM" slots={[
                        null,
                        null,
                        { type: 'upcoming', title: 'Advanced React', color: 'primary', isRecommended: true },
                        null,
                        null
                      ]} />
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50 p-8">
                    <div className="flex items-center justify-between mb-8">
                      <h4 className="text-xl font-black text-slate-900">September 2026</h4>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-slate-100 rounded-lg"><ChevronRight className="size-5 rotate-180" /></button>
                        <button className="p-2 hover:bg-slate-100 rounded-lg"><ChevronRight className="size-5" /></button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                        <div key={d} className="bg-slate-50 p-4 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">{d}</div>
                      ))}
                      {Array.from({ length: 35 }).map((_, i) => {
                        const day = i - 1; // Offset for demo
                        const isCurrentMonth = day > 0 && day <= 30;
                        const hasClass = isCurrentMonth && [5, 12, 15, 20, 25].includes(day);
                        const isToday = day === 17;

                        return (
                          <div key={i} className={cn(
                            "bg-white h-32 p-3 relative group transition-colors hover:bg-slate-50/50",
                            !isCurrentMonth && "bg-slate-50/30 grayscale"
                          )}>
                            <span className={cn(
                              "text-sm font-black",
                              isToday ? "size-7 bg-primary text-slate-900 rounded-full flex items-center justify-center -mt-1 -ml-1" : "text-slate-400 font-bold",
                              !isCurrentMonth && "text-slate-200"
                            )}>
                              {day > 0 && day <= 30 ? day : day <= 0 ? 31 + day : day - 30}
                            </span>

                            {hasClass && (
                              <div className="mt-2 space-y-1">
                                <div className="p-1 px-2 bg-primary/10 border-l-2 border-primary rounded text-[8px] font-black text-primary truncate">
                                  {day === 15 ? 'React Class' : 'Yoga Flow'}
                                </div>
                                {day === 20 && (
                                  <div className="p-1 px-2 bg-indigo-50 border-l-2 border-indigo-400 rounded text-[8px] font-black text-indigo-500 truncate">
                                    Product Sync
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
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

                {/* Pending Workshop Requests */}
                <div className="bg-white rounded-[40px] border border-slate-200 p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-black text-xl text-slate-900 flex items-center gap-2">
                      <Sparkles className="size-5 text-primary" />
                      Pending Requests
                    </h3>
                    <span className="text-[10px] font-black bg-slate-100 px-3 py-1 rounded-full text-slate-500">4 NEW</span>
                  </div>
                  <div className="space-y-6">
                    <PendingWorkshop
                      title="Advanced React Patterns"
                      requestedBy="Engineering Dept."
                      mentees={12}
                      priority="High"
                    />
                    <PendingWorkshop
                      title="UI/UX Motion Design"
                      requestedBy="Design Team"
                      mentees={8}
                      priority="Medium"
                    />
                    <PendingWorkshop
                      title="Product Strategy 101"
                      requestedBy="Thu Ha (PM)"
                      mentees={5}
                      priority="Normal"
                    />
                  </div>
                </div>

                {/* Calendar Synchronization */}
                <div className="bg-white rounded-[40px] border border-slate-200 p-8 shadow-sm relative overflow-hidden group">
                  <h3 className="font-black text-xl text-slate-900 mb-6 flex items-center gap-2">
                    <RefreshCw className="size-5 text-primary animate-spin-slow" />
                    External Sync
                  </h3>
                  <div className="space-y-4">
                    <SyncToggle
                      label="Google Calendar"
                      icon="https://www.google.com/favicon.ico"
                      isActive={true}
                      lastSync="2 mins ago"
                    />
                    <SyncToggle
                      label="Outlook Calendar"
                      icon="https://www.microsoft.com/favicon.ico"
                      isActive={false}
                    />
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-50">
                    <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                      <AlertCircle className="size-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-black text-amber-900 uppercase tracking-tight">Conflict Detected</p>
                        <p className="text-[10px] font-medium text-amber-700 mt-1 leading-relaxed">
                          Your "Vinyasa Mastery" overlaps with an external "Product Review" on Google Calendar.
                        </p>
                        <button className="text-[10px] font-black text-amber-900 underline mt-2 hover:opacity-70 transition-opacity">
                          Auto-Resolve with AI
                        </button>
                      </div>
                    </div>
                  </div>
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
                "text-[10px] font-black uppercase leading-none mb-2 tracking-widest flex items-center gap-1.5",
                slot.type === 'upcoming' && !slot.isRecommended && "text-blue-600",
                slot.type === 'teaching' && "text-emerald-600",
                slot.type === 'completed' && "text-slate-500",
                slot.isRecommended && "text-primary"
              )}>
                {slot.isRecommended && <Sparkles className="size-3 fill-current" />}
                {slot.isConflict && <AlertCircle className="size-3" />}
                {slot.isRecommended ? 'AI Recommended' : slot.type}
              </p>
              <p className="text-sm font-black leading-tight truncate text-slate-900">{slot.title}</p>
              {slot.isConflict && (
                <div className="absolute top-2 right-2 size-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
              )}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

function PendingWorkshop({ title, requestedBy, mentees, priority }: any) {
  return (
    <div className="p-4 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all bg-slate-50/50 group cursor-pointer relative overflow-hidden">
      <div className="relative z-10 flex justify-between items-start">
        <div>
          <p className="text-sm font-black text-slate-900 leading-tight group-hover:text-primary transition-colors">{title}</p>
          <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-tighter">Requested by {requestedBy}</p>
        </div>
        <div className={cn(
          "px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest",
          priority === 'High' ? "bg-red-50 text-red-500" : "bg-blue-50 text-blue-500"
        )}>
          {priority}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div className="flex -space-x-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="size-5 rounded-full border-2 border-white bg-slate-200" />
          ))}
        </div>
        <span className="text-[9px] font-black text-slate-400">+{mentees} interested</span>
      </div>
    </div>
  );
}

function AIAnalyzingOverlay({ status, onConfirm, onCancel }: { status: string, onConfirm: () => void, onCancel: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "fixed inset-0 z-[100] transition-colors duration-1000 flex items-center justify-center p-6",
        status === 'success' ? "bg-emerald-500/90 backdrop-blur-2xl" : "bg-slate-900/40 backdrop-blur-xl"
      )}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={cn(
          "rounded-[40px] p-12 max-w-xl w-full shadow-2xl text-center relative overflow-hidden transition-all duration-700",
          status === 'success' ? "bg-white scale-110" : "bg-white"
        )}
      >
        <div className="relative z-10">
          {status !== 'success' ? (
            <>
              <div className="size-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                <Sparkles className={cn(
                  "size-10 text-primary transition-all duration-1000",
                  (status === 'analyzing' || status === 'scheduling') ? 'animate-spin' : 'animate-bounce'
                )} />
                {(status === 'analyzing' || status === 'scheduling') && <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />}
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                {status === 'analyzing' && "AI is analyzing participants..."}
                {status === 'confirming' && "Best Slot Found!"}
                {status === 'scheduling' && "Finalizing session..."}
              </h3>

              {status === 'confirming' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-6 bg-slate-50 rounded-3xl border border-slate-200"
                >
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Optimal Suggestion</p>
                  <p className="text-3xl font-black text-slate-900 tracking-tight">Wed, 03:00 PM</p>
                  <p className="text-sm font-bold text-slate-500 mt-2">Maximum participation: 100% matched.</p>

                  <div className="mt-8 flex gap-3">
                    <button
                      onClick={onConfirm}
                      className="flex-1 bg-primary text-slate-900 py-4 rounded-2xl font-black text-sm hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-primary/20"
                    >
                      Confirm & Notify All
                    </button>
                    <button
                      onClick={onCancel}
                      className="flex-1 bg-slate-200 text-slate-600 py-4 rounded-2xl font-black text-sm hover:bg-slate-300 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-4 max-w-xs mx-auto">
                  <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span>Scanning Calendars</span>
                    <span className={status !== 'analyzing' ? 'text-primary' : ''}>{status === 'analyzing' ? '85%' : 'Complete'}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: status === 'analyzing' ? '85%' : '100%' }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6"
            >
              <div className="size-32 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-emerald-500/40 animate-bounce">
                <CheckCircle2 className="size-16" />
              </div>
              <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter italic">BOOM! SCHEDULED.</h2>
              <div className="inline-flex flex-col gap-2 p-6 bg-emerald-50 rounded-3xl border border-emerald-100 border-dashed mb-8">
                <p className="text-xl font-black text-emerald-900 uppercase">Wed, Sep 23 @ 03:00 PM</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-emerald-600 font-black uppercase tracking-widest text-xs">
                  <div className="size-2 bg-emerald-500 rounded-full animate-ping" />
                  Invitations Sent to Entire Team
                </div>
                <p className="text-slate-500 font-bold max-w-xs mx-auto text-lg leading-tight">
                  Check your Google/Outlook calendar. A company-wide announcement is now live!
                </p>
              </div>
              <button
                onClick={onCancel}
                className="mt-12 w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:brightness-110 active:scale-95 transition-all"
              >
                Close & Back to Dashboard
              </button>
            </motion.div>
          )}
        </div>

        {/* Animating rings */}
        <div className="absolute -top-20 -right-20 size-64 border border-primary/10 rounded-full animate-pulse" />
        <div className="absolute -bottom-20 -left-20 size-64 border border-primary/5 rounded-full animate-pulse delay-700" />
      </motion.div>
    </motion.div>
  );
}

function SyncToggle({ label, icon, isActive, lastSync }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-primary/20 transition-all">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-xl bg-white shadow-sm flex items-center justify-center p-2 border border-slate-50">
          <img src={icon} alt={label} className="size-full object-contain" />
        </div>
        <div>
          <p className="text-sm font-black text-slate-900 tracking-tight">{label}</p>
          {isActive && <p className="text-[10px] text-primary font-black uppercase tracking-tighter">Connected</p>}
          {!isActive && <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Disconnected</p>}
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <div className={cn(
          "size-5 rounded-full flex items-center justify-center transition-colors",
          isActive ? "bg-primary text-slate-900 shadow-[0_0_10px_rgba(19,236,182,0.4)]" : "bg-slate-200 text-slate-400"
        )}>
          {isActive ? <Check className="size-3 stroke-[4]" /> : <div className="size-2 bg-white rounded-full" />}
        </div>
        {lastSync && <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{lastSync}</span>}
      </div>
    </div>
  );
}

export function UpcomingItem({ icon: Icon, title, time }: any) {
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
