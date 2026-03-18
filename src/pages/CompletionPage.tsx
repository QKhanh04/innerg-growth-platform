import React, { useState } from 'react';
import { Header } from '@/src/components/Header';
import { Sidebar } from '@/src/components/Sidebar';
import {
  Trophy,
  Star,
  ChevronRight,
  Zap,
  Award,
  Share2,
  Download,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

export default function CompletionPage() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex min-h-screen bg-background-light">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-10"
                >
                  {/* Celebration Header */}
                  <div className="text-center space-y-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
                      className="inline-block"
                    >
                      <div className="size-32 bg-primary rounded-[40px] flex items-center justify-center text-slate-900 shadow-2xl shadow-primary/40 relative">
                        <Trophy className="size-16" />
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-0 border-4 border-dashed border-slate-900/20 rounded-[40px]"
                        />
                      </div>
                    </motion.div>
                    <div className="space-y-2">
                      <h2 className="text-5xl font-black tracking-tight">Congratulations, Minh!</h2>
                      <p className="text-slate-500 text-xl font-medium">You've successfully completed <span className="text-slate-900 font-black">Mastering Figma Auto-Layout</span></p>
                    </div>
                  </div>

                  {/* Rewards Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <RewardCard
                      icon={Zap}
                      value="+250"
                      label="Points Earned"
                      color="primary"
                    />
                    <RewardCard
                      icon={Award}
                      value="Design Guru"
                      label="Badge Unlocked"
                      color="blue"
                    />
                  </div>

                  {/* Feedback Form */}
                  <div className="bg-white rounded-[40px] p-10 border border-slate-200 shadow-xl shadow-slate-200/50 space-y-10">
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-black">How was your experience?</h3>
                      <p className="text-slate-500 font-medium">Your feedback helps Nguyen Van Minh improve his teaching</p>
                    </div>

                    {/* Star Rating */}
                    <div className="flex justify-center gap-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setRating(star)}
                          className="transition-transform hover:scale-125 active:scale-95"
                        >
                          <Star
                            className={cn(
                              "size-12 transition-colors",
                              star <= rating ? "text-amber-500 fill-current" : "text-slate-200"
                            )}
                          />
                        </button>
                      ))}
                    </div>

                    {/* Text Feedback */}
                    <div className="space-y-4">
                      <label className="text-sm font-black text-slate-400 uppercase tracking-widest">Write a review (Optional)</label>
                      <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="What did you like most about this class?"
                        className="w-full h-40 rounded-3xl bg-slate-50 border-slate-100 p-6 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => setSubmitted(true)}
                        className="flex-1 bg-primary text-slate-900 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:brightness-105 transition-all active:scale-95"
                      >
                        Submit Feedback
                      </button>
                      <button className="flex-1 bg-slate-50 text-slate-500 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all active:scale-95">
                        Skip for now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-10 py-20"
                >
                  <div className="size-24 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto shadow-2xl shadow-emerald-500/20">
                    <CheckCircle2 className="size-12" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-4xl font-black">Feedback Submitted!</h2>
                    <p className="text-slate-500 text-lg font-medium max-w-md mx-auto">Thank you for your review. Your points have been added to your balance.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                    <Link to="/dashboard" className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-slate-800 transition-all active:scale-95">
                      Back to Dashboard
                    </Link>
                    <Link to="/explore" className="w-full sm:w-auto px-12 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all active:scale-95">
                      Explore More Classes
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}

function RewardCard({ icon: Icon, value, label, color }: any) {
  return (
    <div className="bg-white rounded-[40px] p-8 border border-slate-200 shadow-sm flex items-center gap-8 group hover:border-primary/30 transition-all">
      <div className={cn(
        "size-20 rounded-3xl flex items-center justify-center shrink-0 transition-colors",
        color === 'primary' ? "bg-primary/10 text-primary" : "bg-blue-50 text-blue-500"
      )}>
        <Icon className="size-10" />
      </div>
      <div>
        <h4 className="text-3xl font-black text-slate-900">{value}</h4>
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">{label}</p>
      </div>
    </div>
  );
}
