import React from 'react';
import { Header } from '@/src/components/Header';
import { Sidebar } from '@/src/components/Sidebar';
import {
   Trophy,
   ChevronRight,
   Play,
   Calendar,
   Clock,
   Star,
   BookOpen,
   Video,
   Mic,
   MapPin,
   Users2,
   Info,
   X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useRole } from '@/src/lib/RoleContext';

export default function DashboardPage() {
   const { user } = useRole();
   const [selectedWorkshop, setSelectedWorkshop] = React.useState<any>(null);
   const [toast, setToast] = React.useState<string | null>(null);

   const handleRegister = (title: string) => {
      setToast(`Successfully registered for ${title}! 🎉`);
      setTimeout(() => setToast(null), 3000);
   };

   const heroWorkshop = {
      id: 'hero-1',
      title: "Advanced Product Strategy Masterclass",
      instructor: "Alex Rivera",
      role: "Senior Product Manager",
      rating: "4.9",
      location: "Room 402 • HQ Building",
      joined: "42/50",
      duration: "90 min",
      tags: ['Product Strategy', 'Leadership', 'Internal'],
      description: "Deep dive into product-led growth, market positioning, and scalable strategy frameworks used by industry leaders. This session covers practical case studies and hands-on exercises.",
      outcomes: [
         "Master the 7-step strategy framework",
         "Build a scalable product roadmap",
         "Learn to align stakeholders on vision"
      ]
   };

   return (
      <div className="flex min-h-screen bg-background-light">
         <Sidebar />
         <main className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <div className="flex-1 overflow-y-auto p-8 lg:p-12">
               <div className="max-w-7xl mx-auto space-y-12">

                  {/* SECTION 1 — HERO "NEXT UP" BANNER */}
                  <section className="relative">
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#0F1F3D] rounded-[32px] overflow-hidden min-h-[320px] flex flex-col lg:flex-row shadow-2xl border border-white/5"
                     >
                        {/* LEFT SIDE: Class Info (60%) */}
                        <div className="flex-[0.6] p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between">
                           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />

                           <div className="relative z-10">
                              <div className="flex items-center gap-4 mb-6">
                                 <div className="flex items-center gap-2 px-4 py-2 bg-[#00C896]/10 border border-[#00C896]/20 rounded-full">
                                    <span className="size-2 bg-[#00C896] rounded-full animate-pulse" />
                                    <span className="text-[#00C896] text-[10px] font-black uppercase tracking-widest">LIVE IN 2H 45M</span>
                                 </div>
                              </div>

                              <h1 className="text-3xl lg:text-4xl font-black text-white leading-[1.1] mb-6 max-w-xl">
                                 {heroWorkshop.title}
                              </h1>

                              <div className="flex items-center gap-3 mb-6">
                                 <div className="size-10 rounded-full border-2 border-[#00C896] p-0.5">
                                    <img src="https://i.pravatar.cc/150?u=minh" className="size-full rounded-full object-cover" alt="Mentor" />
                                 </div>
                                 <div>
                                    <p className="text-white font-bold text-sm">Hosted by {heroWorkshop.instructor}</p>
                                    <div className="flex items-center gap-1 mt-0.5">
                                       {[1, 2, 3, 4, 5].map(i => <Star key={i} className="size-3 text-primary fill-current" />)}
                                       <span className="text-white/40 text-[10px] font-black ml-1">{heroWorkshop.rating}</span>
                                    </div>
                                 </div>
                              </div>

                              <div className="flex flex-wrap items-center gap-6 text-white/60 text-xs font-bold mb-8">
                                 <div className="flex items-center gap-2">
                                    <MapPin className="size-4 text-[#00C896]" />
                                    <span>{heroWorkshop.location}</span>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <Users2 className="size-4 text-[#00C896]" />
                                    <span>{heroWorkshop.joined} Joined</span>
                                 </div>
                              </div>

                              <div className="flex flex-wrap gap-3">
                                 {heroWorkshop.tags.map(tag => (
                                    <span key={tag} className="px-4 py-1.5 rounded-xl border border-white/10 text-white/60 text-[9px] font-black uppercase tracking-widest hover:border-white/30 transition-colors">
                                       {tag}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        </div>

                        {/* RIGHT SIDE: Action Panel (40%) */}
                        <div className="flex-[0.4] bg-[#162040] p-8 lg:p-10 border-l border-white/5 flex flex-col justify-center">
                           <div className="mb-8">
                              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Suitable for you because...</p>
                              <div className="space-y-4">
                                 {[
                                    `Matches your interest in UI Design`,
                                    `Relevant to your Product Management path`
                                 ].map((reason, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                       <div className="size-1.5 bg-[#00C896] rounded-full mt-1.5 shrink-0" />
                                       <p className="text-white/80 text-sm font-medium leading-relaxed">{reason}</p>
                                    </div>
                                 ))}
                              </div>
                           </div>

                           <div className="space-y-4">
                              <div className="flex gap-3">
                                 <button
                                    onClick={() => handleRegister(heroWorkshop.title)}
                                    className="flex-1 bg-[#00C896] hover:bg-[#00E0A8] text-[#0F1F3D] py-4 rounded-2xl font-black text-sm transition-all active:scale-95 shadow-xl shadow-[#00C896]/20 flex items-center justify-center gap-2"
                                 >
                                    Register Now <ChevronRight className="size-4" />
                                 </button>
                                 <button
                                    onClick={() => setSelectedWorkshop(heroWorkshop)}
                                    className="px-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all flex items-center justify-center group"
                                    title="Xem chi tiết"
                                 >
                                    <Info className="size-5 text-white/40 group-hover:text-white transition-colors" />
                                 </button>
                              </div>
                              <button className="w-full bg-transparent border border-white/20 hover:bg-white/5 text-white py-4 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2">
                                 <Calendar className="size-4" /> Add to Calendar
                              </button>
                           </div>
                        </div>
                     </motion.div>
                  </section>

                  {/* SECTION 2 — WEEKLY ROADMAP + POINTS WIDGET */}
                  <div className="flex flex-col lg:flex-row gap-10">
                     {/* LEFT: Weekly Roadmap (62%) */}
                     <div className="flex-[0.62] space-y-10">
                        <div className="flex items-center justify-between">
                           <h2 className="text-3xl font-black tracking-tight text-[#0F1F3D]">Weekly Roadmap</h2>
                           <div className="flex bg-[#F0F2F7] p-1 rounded-2xl border border-slate-200">
                              <button className="px-6 py-2 bg-white rounded-xl text-xs font-black shadow-sm">Timeline</button>
                              <button className="px-6 py-2 text-slate-400 text-xs font-bold hover:text-slate-600">Calendar</button>
                           </div>
                        </div>

                        <div className="relative">
                           <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200" />

                           <div className="space-y-8 relative z-10">
                              <RoadmapItem
                                 date="TODAY"
                                 time="10:00 AM"
                                 title="Workshop: Leadership Fundamentals"
                                 instructor="Nguyen Van Minh"
                                 status="active"
                                 category="Internal"
                                 onViewDetails={(item: any) => setSelectedWorkshop(item)}
                                 onRegister={handleRegister}
                              />
                              <RoadmapItem
                                 date="WED, SEP 23"
                                 time="01:00 PM"
                                 title="Advanced React Masterclass"
                                 instructor="Minh Dang"
                                 status="later"
                                 category="Hard Skill"
                                 onViewDetails={(item: any) => setSelectedWorkshop(item)}
                                 onRegister={handleRegister}
                              />
                              <RoadmapItem
                                 date="FRI, SEP 25"
                                 time="02:30 PM"
                                 title="Mentorship Strategy Session"
                                 instructor="Sarah Chen"
                                 status="upcoming"
                                 category="1-on-1"
                                 onViewDetails={(item: any) => setSelectedWorkshop(item)}
                                 onRegister={handleRegister}
                              />
                           </div>
                        </div>
                     </div>

                     {/* RIGHT: Points Widget + Activity Stream (38%) */}
                     <aside className="flex-[0.38] space-y-8">
                        {/* POINTS WIDGET */}
                        <div className="bg-[#0F1F3D] rounded-[24px] p-6 shadow-2xl relative overflow-hidden group border border-white/5">
                           <div className="relative z-10">
                              <div className="flex items-center justify-between mb-6">
                                 <p className="text-[#00C896]/60 text-[9px] font-black uppercase tracking-[0.2em]">Current Balance</p>
                                 <Trophy className="size-4 text-primary" />
                              </div>
                              <div className="flex items-baseline gap-2">
                                 <h3 className="text-4xl font-black text-white tracking-tighter">1,240</h3>
                                 <p className="text-[#00C896] font-black text-sm">PTS</p>
                              </div>

                              <div className="mt-6 space-y-2.5">
                                 <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest">
                                    <span className="text-white/40">Level 8</span>
                                    <span className="text-white/40">850 / 2k to Level 9</span>
                                 </div>
                                 <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                       initial={{ width: 0 }}
                                       animate={{ width: '42.5%' }}
                                       className="h-full bg-[#00C896] shadow-[0_0_10px_#00C896]"
                                    />
                                 </div>
                                 <p className="text-[9px] font-black text-[#00C896]/60 text-center tracking-wide italic">
                                    Thêm 1,150 điểm để lên Level 9 🚀
                                 </p>
                              </div>

                              <div className="h-px bg-white/5 my-6" />

                              <button className="w-full bg-transparent border border-white/20 text-white font-black py-3 rounded-xl text-[9px] hover:bg-white/5 transition-all uppercase tracking-[0.2em]">
                                 Visit Rewards Store
                              </button>
                           </div>
                           <div className="absolute -right-20 -bottom-20 size-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-all duration-1000" />
                        </div>

                        {/* ACTIVITY STREAM */}
                        <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm">
                           <div className="flex items-center justify-between mb-4">
                              <h3 className="font-black text-[9px] uppercase tracking-[0.2em] text-slate-400">Activity Stream</h3>
                           </div>
                           <div className="space-y-1">
                              <ActivityItem icon={BookOpen} title="Q3 Strategy Guide" type="Resource • 2h ago" color="blue" />
                              <ActivityItem icon={Video} title="Communication Mastery" type="Video • 5h ago" color="purple" />
                              <ActivityItem icon={Mic} title="Growth Fireside Chat" type="Podcast • Yesterday" color="orange" />
                           </div>
                        </div>

                        {/* TRENDING SKILLS */}
                        <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm">
                           <h3 className="font-black text-[9px] uppercase tracking-[0.2em] text-slate-400 mb-4">🔥 Trending in Tech</h3>
                           <div className="flex flex-wrap gap-2">
                              <TrendingTag label="Gen AI" count="28" heat="hot" />
                              <TrendingTag label="React" count="21" heat="hot" />
                              <TrendingTag label="Zustand" count="14" heat="rising" />
                              <TrendingTag label="Motion" count="11" heat="normal" />
                              <TrendingTag label="Next.js" count="19" heat="normal" />
                           </div>
                        </div>
                     </aside>
                  </div>

                  {/* SECTION 3 — RECOMMENDED FOR YOU */}
                  <section className="space-y-8">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                           <h2 className="text-2xl font-black text-[#0F1F3D]">Recommended for You</h2>
                           <span className="px-3 py-1 bg-[#00C896]/10 text-[#00C896] text-[9px] font-black rounded-full uppercase tracking-widest border border-[#00C896]/20">PERSONALIZED</span>
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-widest text-[#00C896] hover:underline underline-offset-4">Xem tất cả →</button>
                     </div>

                     <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide no-scrollbar -mx-2 px-2">
                        <RecommendedCard
                           title="Advanced Design Systems"
                           stats="4.8 ★ • 12 Modules • ~4h"
                           category="Technical"
                           accent="blue"
                           mentor="Alex Rivera"
                           onViewDetails={(item: any) => setSelectedWorkshop(item)}
                           onRegister={handleRegister}
                        />
                        <RecommendedCard
                           title="Frontend for Designers"
                           stats="4.9 ★ • 8 Modules • ~3h"
                           category="Technical"
                           accent="blue"
                           mentor="Minh Dang"
                           onViewDetails={(item: any) => setSelectedWorkshop(item)}
                           onRegister={handleRegister}
                        />
                        <RecommendedCard
                           title="Stakeholder Communication"
                           stats="4.7 ★ • 6 Modules • ~2h"
                           category="Soft Skill"
                           accent="orange"
                           mentor="Sarah Chen"
                           onViewDetails={(item: any) => setSelectedWorkshop(item)}
                           onRegister={handleRegister}
                        />
                        <RecommendedCard
                           title="Performance Optimization"
                           stats="4.9 ★ • 10 Modules • ~5h"
                           category="Technical"
                           accent="green"
                           mentor="John Doe"
                           onViewDetails={(item: any) => setSelectedWorkshop(item)}
                           onRegister={handleRegister}
                        />
                     </div>
                  </section>
               </div>
            </div>

            {/* WORKSHOP DETAILS MODAL */}
            <AnimatePresence>
               {selectedWorkshop && (
                  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10">
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedWorkshop(null)}
                        className="absolute inset-0 bg-[#0F1F3D]/80 backdrop-blur-sm"
                     />

                     <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[500px]"
                     >
                        <button
                           onClick={() => setSelectedWorkshop(null)}
                           className="absolute top-6 right-6 z-10 size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-[#0F1F3D] transition-all"
                        >
                           <X className="size-5" />
                        </button>

                        {/* Modal Left: Header & Vision */}
                        <div className="flex-[0.45] bg-[#0F1F3D] p-10 lg:p-14 text-white relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C896]/10 rounded-full blur-[100px] -mr-32 -mt-32" />

                           <div className="relative z-10 flex flex-col h-full justify-between">
                              <div>
                                 <div className="px-3 py-1 bg-[#00C896]/20 border border-[#00C896]/30 rounded-full text-[#00C896] text-[9px] font-black uppercase tracking-widest inline-block mb-6">WORKSHOP DETAILS</div>
                                 <h2 className="text-3xl font-black leading-tight mb-8">{selectedWorkshop.title}</h2>

                                 <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                       <div className="size-14 rounded-2xl border-2 border-[#00C896] p-0.5">
                                          <img src={`https://i.pravatar.cc/150?u=${selectedWorkshop.instructor}`} className="size-full rounded-[14px]" />
                                       </div>
                                       <div>
                                          <p className="font-black text-lg">{selectedWorkshop.instructor}</p>
                                          <p className="text-[#00C896] text-xs font-bold uppercase tracking-wide">{selectedWorkshop.role}</p>
                                       </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                       <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                          <p className="text-white/40 text-[9px] font-black uppercase mb-1">Duration</p>
                                          <p className="font-bold text-sm">{selectedWorkshop.duration || '90 min'}</p>
                                       </div>
                                       <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                          <p className="text-white/40 text-[9px] font-black uppercase mb-1">Rating</p>
                                          <p className="font-bold text-sm">{selectedWorkshop.rating} / 5.0</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              <div className="mt-12">
                                 <button
                                    onClick={() => {
                                       handleRegister(selectedWorkshop.title);
                                       setSelectedWorkshop(null);
                                    }}
                                    className="w-full bg-[#00C896] text-[#0F1F3D] py-5 rounded-2xl font-black text-sm shadow-xl shadow-[#00C896]/20 hover:brightness-110 active:scale-95 transition-all"
                                 >
                                    REGISTER THIS SESSION
                                 </button>
                              </div>
                           </div>
                        </div>

                        {/* Modal Right: Details & Prerequisites */}
                        <div className="flex-[0.55] p-10 lg:p-14 bg-white overflow-y-auto">
                           <div className="space-y-10">
                              <section>
                                 <h3 className="text-[#0F1F3D] font-black text-xs uppercase tracking-[0.2em] mb-4">About this Workshop</h3>
                                 <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    {selectedWorkshop.description}
                                 </p>
                              </section>

                              <section>
                                 <h3 className="text-[#0F1F3D] font-black text-xs uppercase tracking-[0.2em] mb-4">Learning Outcomes</h3>
                                 <div className="grid gap-3">
                                    {selectedWorkshop.outcomes.map((item: string, i: number) => (
                                       <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-[#00C896]/30 transition-all">
                                          <div className="size-6 rounded-full bg-[#00C896]/10 flex items-center justify-center text-[#00C896] font-black text-[10px]">{i + 1}</div>
                                          <p className="text-slate-600 text-xs font-bold">{item}</p>
                                       </div>
                                    ))}
                                 </div>
                              </section>

                              <section>
                                 <h3 className="text-[#0F1F3D] font-black text-xs uppercase tracking-[0.2em] mb-4">Location & Logistics</h3>
                                 <div className="flex items-center gap-4 p-5 border border-slate-100 rounded-3xl">
                                    <div className="size-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500">
                                       <MapPin className="size-6" />
                                    </div>
                                    <div>
                                       <p className="text-[#0F1F3D] font-black text-sm">{selectedWorkshop.location}</p>
                                       <p className="text-slate-400 text-[10px] font-bold">Standard HQ Access Required</p>
                                    </div>
                                 </div>
                              </section>
                           </div>
                        </div>
                     </motion.div>
                  </div>
               )}
            </AnimatePresence>

            {/* TOAST NOTIFICATION */}
            <AnimatePresence>
               {toast && (
                  <motion.div
                     initial={{ opacity: 0, y: 50, scale: 0.9 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     style={{ left: '50%', translateX: '-50%' }}
                     className="fixed bottom-10 z-[200] px-8 py-4 bg-[#0F1F3D] text-[#00C896] rounded-full shadow-2xl border border-[#00C896]/20 font-black text-sm flex items-center gap-3 backdrop-blur-md"
                  >
                     <div className="size-6 bg-[#00C896] rounded-full flex items-center justify-center text-[#0F1F3D]">
                        <ChevronRight className="size-4" />
                     </div>
                     {toast}
                  </motion.div>
               )}
            </AnimatePresence>
         </main>
      </div>
   );
}

function RoadmapItem({ date, time, title, instructor, status, category, onViewDetails, onRegister }: any) {
   const isNow = status === 'active';
   const isLater = status === 'later';
   const isUpcoming = status === 'upcoming';

   const itemData = {
      title,
      instructor,
      role: "Expert Instructor",
      rating: "4.8",
      location: "Online Workshop",
      joined: "12/20",
      duration: "60 min",
      tags: [category, 'Skill Growth'],
      description: `Join us for this high-impact session on ${title}. This workshop is designed for intermediate to advanced learners looking to sharpen their expertise in ${category}.`,
      outcomes: [
         "Develop foundational and advanced practical knowledge",
         "Peer-to-peer networking with industry experts",
         "Access to exclusive downloadable resources"
      ]
   };

   return (
      <div className="flex gap-10 group">
         <div className="w-12 shrink-0 flex flex-col items-center">
            <div className={cn(
               "size-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl z-20",
               isNow ? "bg-[#00C896] text-[#0F1F3D] shadow-[#00C896]/30 animate-pulse" :
                  isLater ? "bg-white text-[#00C896] border border-[#00C896]/30" :
                     "bg-white text-slate-300 border border-slate-200"
            )}>
               {isNow ? <Play className="size-5 fill-current" /> :
                  isLater ? <Clock className="size-5" /> :
                     <Calendar className="size-5" />}
            </div>
         </div>

         <div className={cn(
            "flex-1 p-6 rounded-2xl border-l-[4px] transition-all duration-300 hover:translate-x-1",
            isNow ? "bg-white border-[#00C896] shadow-xl shadow-[#0F1F3D]/5" :
               isLater ? "bg-white border-[#94A3B8] shadow-sm" :
                  "bg-[#F8FAFC] border-[#E2E8F0] shadow-none opacity-80"
         )}>
            <div className="flex items-center gap-3 mb-3">
               <span className={cn(
                  "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest",
                  isNow ? "bg-[#00C896]/10 text-[#00C896]" : "bg-slate-100 text-slate-500"
               )}>
                  {isNow && "● "} {date} • {time}
               </span>
               <span className="h-1 w-1 bg-slate-300 rounded-full" />
               <span className={cn(
                  "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest",
                  category === 'Hard Skill' ? "bg-orange-100 text-orange-600" :
                     category === '1-on-1' ? "bg-blue-100 text-blue-600" :
                        "bg-slate-100 text-slate-500"
               )}>{category}</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
               <div>
                  <h4 className="text-lg font-black text-[#0F1F3D] mb-4">{title}</h4>
                  <div className="flex items-center gap-2">
                     <div className="size-8 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-200">
                        <img src={`https://i.pravatar.cc/150?u=${instructor}`} className="size-full object-cover" />
                     </div>
                     <p className="text-xs font-bold text-slate-500">Led by <span className="text-[#0F1F3D]">{instructor}</span></p>
                  </div>
               </div>

               <div className="flex gap-2">
                  <button
                     onClick={() => onRegister(title)}
                     className={cn(
                        "px-8 py-3 rounded-xl text-[10px] font-black transition-all active:scale-95 uppercase tracking-widest",
                        isNow ? "bg-[#00C896] text-[#0F1F3D] hover:brightness-110 shadow-lg shadow-[#00C896]/20" :
                           isLater ? "bg-transparent border border-[#00C896] text-[#00C896] hover:bg-[#00C896]/5" :
                              "bg-transparent text-slate-400 hover:text-slate-600"
                     )}>
                     {isNow ? 'JOIN NOW' : 'REMIND ME'}
                  </button>
                  {!isNow && (
                     <button
                        onClick={() => onViewDetails(itemData)}
                        className="size-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200 transition-colors"
                     >
                        <Info className="size-5" />
                     </button>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

function ActivityItem({ icon: Icon, title, type, color }: any) {
   const colorMap: any = {
      blue: "bg-blue-50 text-blue-500",
      purple: "bg-purple-50 text-purple-500",
      orange: "bg-orange-50 text-orange-500"
   };

   return (
      <div className="flex items-center gap-3 py-3 hover:bg-slate-50 rounded-xl transition-all group cursor-pointer border-b border-slate-50 last:border-0 px-2 -mx-2">
         <div className={cn("size-9 rounded-full flex items-center justify-center shrink-0", colorMap[color])}>
            <Icon className="size-4" />
         </div>
         <div className="flex-1">
            <p className="font-black text-[13px] text-[#0F1F3D] leading-tight">{title}</p>
            <p className="text-[9px] text-slate-400 font-bold mt-0.5 uppercase tracking-tight">{type}</p>
         </div>
         <ChevronRight className="size-3 text-slate-300 group-hover:text-[#00C896] group-hover:translate-x-1 transition-all" />
      </div>
   );
}

function TrendingTag({ label, count, heat }: any) {
   return (
      <div className={cn(
         "px-3 py-2 rounded-lg border flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95",
         heat === 'hot' ? "bg-orange-50 border-orange-100 text-orange-600" :
            heat === 'rising' ? "bg-[#00C896]/5 border-[#00C896]/10 text-[#00C896]" :
               "bg-slate-50 border-slate-100 text-slate-500"
      )}>
         <span className="text-[9px] font-black uppercase tracking-tight">{label}</span>
         <span className="h-3 w-px bg-current opacity-20" />
         <span className="text-[9px] font-bold">{count}</span>
      </div>
   );
}

function RecommendedCard({ title, stats, category, accent, mentor, onViewDetails, onRegister }: any) {
   const accentMap: any = {
      blue: "bg-blue-500",
      orange: "bg-orange-500",
      green: "bg-[#00C896]"
   };

   const itemData = {
      title,
      instructor: mentor,
      role: "Expert Mentor",
      rating: "4.9",
      location: "Online Course",
      joined: "128/150",
      duration: "4h",
      tags: [category, 'Top Rated'],
      description: `Master the principles of ${title} with our expert-led course. Includes hands-on projects, downloadable templates, and a recognized certificate of completion.`,
      outcomes: [
         "Practical application of modern methodologies",
         "Access to world-class mentoring network",
         "Certification of expertise upon completion"
      ]
   };

   return (
      <div className="min-w-[320px] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
         <div className={cn("absolute top-0 left-0 right-0 h-1", accentMap[accent])} />

         <div className="flex items-center justify-between mb-6">
            <span className={cn(
               "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest",
               accent === 'blue' ? "bg-blue-50 text-blue-600" :
                  accent === 'orange' ? "bg-orange-50 text-orange-600" :
                     "bg-[#00C896]/10 text-[#00C896]"
            )}>{category}</span>
            <button className="size-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors">
               <Star className="size-4" />
            </button>
         </div>

         <h4 className="text-xl font-black text-[#0F1F3D] leading-tight mb-4 min-h-[3.5rem] line-clamp-2">{title}</h4>

         <div className="flex items-center gap-2 mb-6">
            <div className="size-6 rounded-full bg-slate-100 overflow-hidden">
               <img src={`https://i.pravatar.cc/150?u=${mentor}`} className="size-full object-cover" />
            </div>
            <p className="text-[10px] font-bold text-slate-400 capitalize">{mentor}</p>
         </div>

         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">{stats}</p>

         <div className="flex gap-2">
            <button
               onClick={() => onRegister(title)}
               className="flex-1 bg-[#00C896] text-[#0F1F3D] py-4 rounded-xl text-[10px] font-black hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#00C896]/10 uppercase tracking-widest"
            >
               ENROLL NOW
            </button>
            <button
               onClick={() => onViewDetails(itemData)}
               className="px-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-100 transition-colors"
            >
               <Info className="size-4" />
            </button>
         </div>
      </div>
   );
}
