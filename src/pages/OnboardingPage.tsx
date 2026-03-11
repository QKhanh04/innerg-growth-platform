import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Edit2, Search, Plus, Check, X, Zap, PartyPopper } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else navigate('/dashboard');
  };

  return (
    <div className="bg-background-light min-h-screen font-sans text-slate-900">
      <header className="flex items-center justify-between border-b border-primary/10 px-10 py-4 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-slate-900 shadow-sm">
            <Zap className="size-6 fill-current" />
          </div>
          <h2 className="text-xl font-black tracking-tight">InnerG</h2>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-slate-400 hover:text-slate-600 font-bold text-sm transition-colors">Skip</button>
          <button 
            onClick={nextStep}
            className="flex min-w-[120px] items-center justify-center rounded-xl h-12 px-8 bg-primary text-slate-900 text-sm font-black shadow-lg shadow-primary/20 hover:brightness-105 active:scale-95 transition-all"
          >
            {step === 3 ? 'Finish' : 'Next'}
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center py-16 px-4">
        <div className="max-w-[680px] w-full flex flex-col gap-10">
          {/* Progress Indicator */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-primary text-xs font-black uppercase tracking-widest">Step {step} of 3</span>
                <h1 className="text-3xl font-black mt-1">
                  {step === 1 && "Tell us about you"}
                  {step === 2 && "Add your expertise 🧠"}
                  {step === 3 && "What's on your learning list? 📚"}
                </h1>
              </div>
              <p className="text-slate-400 text-sm font-bold">{Math.round((step / 3) * 100)}% Complete</p>
            </div>
            <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(step / 3) * 100}%` }}
                className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(19,236,182,0.5)]"
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {step === 1 && <StepOne />}
              {step === 2 && <StepTwo />}
              {step === 3 && <StepThree />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function StepOne() {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-10">
      <div className="flex flex-col items-center gap-6">
        <div className="relative group cursor-pointer">
          <div className="size-40 rounded-full bg-slate-50 border-2 border-dashed border-primary/40 flex items-center justify-center overflow-hidden transition-all hover:border-primary">
            <Camera className="size-12 text-slate-300 group-hover:text-primary transition-colors" />
          </div>
          <div className="absolute bottom-2 right-2 bg-primary text-slate-900 rounded-full p-2.5 shadow-lg border-4 border-white">
            <Edit2 className="size-4" />
          </div>
        </div>
        <div className="text-center">
          <p className="font-black text-lg">Upload Profile Photo</p>
          <p className="text-sm text-slate-400 font-medium mt-1">JPG, PNG up to 5MB</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InputGroup label="Full Name" placeholder="Alex Rivera" />
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-700">Department</label>
          <select className="w-full h-14 rounded-2xl border-slate-200 bg-slate-50 px-4 focus:border-primary focus:ring-primary font-medium outline-none transition-all">
            <option>Product Design</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
        </div>
        <InputGroup label="Job Title" placeholder="Senior Designer" />
        <div className="flex flex-col gap-2 relative">
          <label className="text-sm font-bold text-slate-700">Reporting Manager</label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
            <input 
              className="w-full h-14 pl-12 rounded-2xl border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary font-medium outline-none transition-all" 
              placeholder="Search manager..." 
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StepTwo() {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-10">
      <div className="flex flex-wrap gap-4">
        <SkillTag label="UI Design" level={2} />
        <SkillTag label="User Research" level={3} />
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Suggested for you</p>
        <div className="flex flex-wrap gap-3">
          {['Figma', 'Prototyping', 'Workshop Facilitation', 'Design Systems', 'React'].map(skill => (
            <button key={skill} className="px-6 py-2.5 rounded-full border border-slate-200 text-sm font-bold hover:border-primary hover:text-primary transition-all">
              + {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepThree() {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6">
      <div className="relative">
        <Plus className="absolute left-4 top-1/2 -translate-y-1/2 size-6 text-slate-400" />
        <input 
          className="w-full h-16 pl-14 rounded-2xl border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary font-bold text-lg outline-none transition-all" 
          placeholder="Add a skill you want to learn..." 
          type="text"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        {['Creative Coding', 'Web3 Design', 'Cinema 4D', 'Public Speaking'].map(skill => (
          <div key={skill} className="flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-xl font-bold border border-primary/20">
            {skill}
            <X className="size-4 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-slate-700">{label}</label>
      <input 
        className="w-full h-14 rounded-2xl border-slate-200 bg-slate-50 px-4 focus:border-primary focus:ring-primary font-medium outline-none transition-all" 
        placeholder={placeholder} 
        type="text"
      />
    </div>
  );
}

function SkillTag({ label, level }: { label: string, level: number }) {
  return (
    <div className="flex items-center gap-4 bg-primary/10 border border-primary/30 px-6 py-3 rounded-2xl">
      <span className="font-black text-slate-900">{label}</span>
      <div className="flex gap-1.5">
        {[1, 2, 3].map(i => (
          <div key={i} className={cn("size-2.5 rounded-full", i <= level ? "bg-primary" : "bg-slate-300")} />
        ))}
      </div>
      <X className="size-4 text-slate-400 cursor-pointer hover:text-red-500 transition-colors" />
    </div>
  );
}
