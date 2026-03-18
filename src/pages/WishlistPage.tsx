import React from 'react';
import { Header } from '@/src/components/Header';
import { Sidebar } from '@/src/components/Sidebar';
import { 
  Heart, 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Clock, 
  CheckCircle2, 
  Users, 
  ArrowUpRight,
  TrendingUp,
  MessageCircle,
  X,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function WishlistPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [skillName, setSkillName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
      setSkillName('');
      setDescription('');
    }, 2000);
  };

  return (
    <div className="flex min-h-screen bg-background-light">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="size-6 text-red-500 fill-current" />
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Learning Requests</span>
                </div>
                <h2 className="text-4xl font-black tracking-tight">Your Wishlist</h2>
                <p className="text-slate-500 text-lg font-medium mt-2">Track your learning requests and see what's trending in the community</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-3 bg-primary text-slate-900 px-8 py-4 rounded-2xl font-black shadow-xl shadow-primary/20 hover:brightness-105 active:scale-[0.98] transition-all"
              >
                <Plus className="size-5" />
                Request New Skill
              </button>
            </div>

            <div className="flex flex-col xl:flex-row gap-10">
              {/* Main Content: My Requests */}
              <div className="flex-1 space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black tracking-tight">Active Requests</h3>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="Search my requests..." 
                        className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-primary transition-colors">
                      <Filter className="size-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <WishlistItem 
                    title="Advanced React Patterns" 
                    status="Mentor Found" 
                    date="Requested 2 days ago"
                    votes={12}
                    statusColor="emerald"
                    progress={75}
                  />
                  <WishlistItem 
                    title="Product Management for Designers" 
                    status="Reviewed" 
                    date="Requested 1 week ago"
                    votes={45}
                    statusColor="blue"
                    progress={40}
                  />
                  <WishlistItem 
                    title="3D Modeling with Spline" 
                    status="Submitted" 
                    date="Requested 3 weeks ago"
                    votes={8}
                    statusColor="slate"
                    progress={10}
                  />
                </div>
              </div>

              {/* Sidebar: Trending & Community */}
              <aside className="w-full xl:w-96 space-y-8">
                {/* Community Trends */}
                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-black text-lg flex items-center gap-2">
                      <TrendingUp className="size-5 text-primary" />
                      Trending Skills
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <TrendItem title="Generative AI for Business" votes={128} />
                    <TrendItem title="Leadership in Remote Teams" votes={94} />
                    <TrendItem title="Data Visualization with D3" votes={76} />
                  </div>
                  <button className="w-full mt-8 py-4 border-2 border-slate-100 rounded-2xl text-sm font-black text-slate-400 hover:border-primary/30 hover:text-primary transition-all">
                    View All Trends
                  </button>
                </div>

                {/* Mentorship Match */}
                <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="size-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                      <Users className="size-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-black mb-3">Become a Mentor</h3>
                    <p className="text-slate-400 font-medium mb-8 leading-relaxed">Share your expertise and earn 2x points for every session you teach.</p>
                    <button className="w-full bg-primary text-slate-900 py-4 rounded-2xl text-sm font-black hover:brightness-110 transition-all active:scale-95">
                      Apply Now
                    </button>
                  </div>
                  <div className="absolute -top-10 -right-10 size-40 bg-primary/10 rounded-full blur-3xl"></div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        
        {/* REQUEST MODAL */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-lg bg-white rounded-[40px] overflow-hidden shadow-2xl p-10 lg:p-12"
              >
                {!submitted ? (
                  <>
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-8 right-8 z-10 size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-900 transition-all"
                    >
                      <X className="size-5" />
                    </button>

                    <div className="space-y-8">
                      <div className="text-center">
                        <div className="size-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                          <Plus className="size-8" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Request New Skill</h2>
                        <p className="text-slate-500 font-medium mt-2">Tell us what you'd like to learn next!</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Skill Name</label>
                          <input 
                            required
                            type="text" 
                            value={skillName}
                            onChange={(e) => setSkillName(e.target.value)}
                            placeholder="e.g. Advanced Framer Motion, Rust for Design..."
                            className="w-full bg-slate-50 border-slate-100 rounded-2xl p-5 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Why do you want to learn this?</label>
                          <textarea 
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Briefly describe your learning needs..."
                            className="w-full h-32 bg-slate-50 border-slate-100 rounded-2xl p-5 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium resize-none"
                          />
                        </div>

                        <button 
                          type="submit"
                          className="w-full bg-primary text-slate-900 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:brightness-105 active:scale-[0.98] transition-all"
                        >
                          Submit Request
                        </button>
                      </form>
                    </div>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="size-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/20">
                      <CheckCircle2 className="size-10" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900">Request Submitted!</h3>
                    <p className="text-slate-500 font-medium mt-3">We'll look for a suitable mentor for this skill soon.</p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>

  );
}

function WishlistItem({ title, status, date, votes, statusColor, progress }: any) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all group">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4">
            <h4 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">{title}</h4>
            <span className={cn(
              "text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest",
              statusColor === 'emerald' && "bg-emerald-100 text-emerald-700",
              statusColor === 'blue' && "bg-blue-100 text-blue-700",
              statusColor === 'slate' && "bg-slate-100 text-slate-600"
            )}>
              {status}
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500 font-bold">
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="size-4" />
              <span>{votes} people interested</span>
            </div>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className={cn("h-full rounded-full", `bg-${statusColor}-500`)}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-3 bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-all">
            <MessageCircle className="size-5" />
          </button>
          <button className="p-3 bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
            <Heart className="size-5" />
          </button>
          <button className="px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-black hover:bg-slate-800 transition-all active:scale-95">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

function TrendItem({ title, votes }: any) {
  return (
    <div className="flex items-center justify-between group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
          <ArrowUpRight className="size-5" />
        </div>
        <p className="font-bold text-slate-900 group-hover:text-primary transition-colors">{title}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-black text-slate-900">{votes}</p>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Votes</p>
      </div>
    </div>
  );
}
