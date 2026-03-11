import React, { useState } from 'react';
import { Header } from '@/src/components/Header';
import { Sidebar } from '@/src/components/Sidebar';
import {
  ArrowLeft,
  Plus,
  Image as ImageIcon,
  Calendar,
  Clock,
  Users,
  FileText,
  X,
  Check,
  Zap,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useNavigate, Link } from 'react-router-dom';

export default function CreateClassPage() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="flex min-h-screen bg-background-light">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            {/* Navigation Header */}
            <div className="flex items-center justify-between mb-12">
              <Link to="/mentor" className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-bold text-sm">
                <ArrowLeft className="size-4" />
                Back to Dashboard
              </Link>
              <div className="flex items-center gap-4">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Step {step} of 4</span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={cn("h-1.5 w-8 rounded-full transition-all", i <= step ? "bg-primary" : "bg-slate-200")} />
                  ))}
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-10"
              >
                {step === 1 && <StepOne onNext={nextStep} />}
                {step === 2 && <StepTwo onNext={nextStep} onPrev={prevStep} />}
                {step === 3 && <StepThree onNext={nextStep} onPrev={prevStep} />}
                {step === 4 && <StepFour onPrev={prevStep} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}

function StepOne({ onNext }: any) {
  return (
    <div className="bg-white rounded-[40px] p-10 border border-slate-200 shadow-xl shadow-slate-200/50 space-y-10">
      <div className="space-y-2">
        <h2 className="text-3xl font-black tracking-tight">Basic Information</h2>
        <p className="text-slate-500 font-medium">Start with the essentials of your new class</p>
      </div>

      <div className="space-y-8">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-slate-700">Class Title</label>
          <input
            type="text"
            placeholder="e.g. Advanced Figma Auto-Layout"
            className="w-full h-16 rounded-2xl border-slate-200 bg-slate-50 px-6 focus:border-primary focus:ring-primary font-bold text-lg outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-slate-700">Category</label>
            <select className="w-full h-16 rounded-2xl border-slate-200 bg-slate-50 px-6 focus:border-primary focus:ring-primary font-bold outline-none transition-all">
              <option>Design</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Product</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-slate-700">Difficulty Level</label>
            <select className="w-full h-16 rounded-2xl border-slate-200 bg-slate-50 px-6 focus:border-primary focus:ring-primary font-bold outline-none transition-all">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-slate-700">Description</label>
          <textarea
            placeholder="What will students learn in this class?"
            className="w-full h-40 rounded-2xl border-slate-200 bg-slate-50 p-6 focus:border-primary focus:ring-primary font-medium outline-none transition-all resize-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-slate-700">Cover Image</label>
          <div className="h-48 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all group">
            <div className="size-12 rounded-xl bg-white flex items-center justify-center text-slate-400 group-hover:text-primary shadow-sm transition-colors">
              <ImageIcon className="size-6" />
            </div>
            <p className="text-sm font-bold text-slate-400 group-hover:text-primary transition-colors">Click to upload or drag and drop</p>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-primary text-slate-900 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:brightness-105 transition-all active:scale-95"
      >
        Continue to Schedule
      </button>
    </div>
  );
}

function StepTwo({ onNext, onPrev }: any) {
  return (
    <div className="bg-white rounded-[40px] p-10 border border-slate-200 shadow-xl shadow-slate-200/50 space-y-10">
      <div className="space-y-2">
        <h2 className="text-3xl font-black tracking-tight">Schedule & Capacity</h2>
        <p className="text-slate-500 font-medium">When and how many students can join?</p>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-slate-700">Start Date</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
              <input type="date" className="w-full h-16 pl-12 pr-6 rounded-2xl border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary font-bold outline-none transition-all" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-slate-700">Start Time</label>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
              <input type="time" className="w-full h-16 pl-12 pr-6 rounded-2xl border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary font-bold outline-none transition-all" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-slate-700">Duration (minutes)</label>
            <input type="number" placeholder="60" className="w-full h-16 rounded-2xl border-slate-200 bg-slate-50 px-6 focus:border-primary focus:ring-primary font-bold outline-none transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-slate-700">Student Capacity</label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
              <input type="number" placeholder="20" className="w-full h-16 pl-12 pr-6 rounded-2xl border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary font-bold outline-none transition-all" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-4">
            <div className="size-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
              <Zap className="size-5" />
            </div>
            <div>
              <p className="text-sm font-black text-slate-900">Recurring Session</p>
              <p className="text-xs text-slate-500 font-bold">Repeat this class weekly</p>
            </div>
          </div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" className="peer sr-only" />
            <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20"></div>
          </label>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={onPrev} className="flex-1 bg-slate-50 text-slate-500 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all active:scale-95">Back</button>
        <button onClick={onNext} className="flex-[2] bg-primary text-slate-900 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:brightness-105 transition-all active:scale-95">Continue</button>
      </div>
    </div>
  );
}

function StepThree({ onNext, onPrev }: any) {
  return (
    <div className="bg-white rounded-[40px] p-10 border border-slate-200 shadow-xl shadow-slate-200/50 space-y-10">
      <div className="space-y-2">
        <h2 className="text-3xl font-black tracking-tight">Syllabus & Resources</h2>
        <p className="text-slate-500 font-medium">Outline your course and add materials</p>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <label className="text-sm font-black text-slate-700">Course Syllabus</label>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="size-8 bg-white rounded-lg flex items-center justify-center text-xs font-black text-slate-400">01</span>
              <input type="text" placeholder="Introduction" className="flex-1 bg-transparent border-none outline-none font-bold text-slate-900" />
              <X className="size-5 text-slate-300 cursor-pointer hover:text-red-500" />
            </div>
            <button className="flex items-center justify-center gap-2 w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-sm font-black text-slate-400 hover:border-primary hover:text-primary transition-all">
              <Plus className="size-4" />
              Add Module
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-black text-slate-700">Learning Materials</label>
          <div className="grid grid-cols-2 gap-4">
            <ResourceUpload icon={FileText} label="PDF Guide" />
            <ResourceUpload icon={Zap} label="Figma File" />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={onPrev} className="flex-1 bg-slate-50 text-slate-500 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all active:scale-95">Back</button>
        <button onClick={onNext} className="flex-[2] bg-primary text-slate-900 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:brightness-105 transition-all active:scale-95">Review Class</button>
      </div>
    </div>
  );
}

function StepFour({ onPrev }: any) {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-[40px] p-10 border border-slate-200 shadow-xl shadow-slate-200/50 space-y-10">
      <div className="text-center space-y-4">
        <div className="size-24 bg-primary/10 rounded-[32px] flex items-center justify-center text-primary mx-auto mb-6">
          <Check className="size-12" />
        </div>
        <h2 className="text-4xl font-black tracking-tight">Ready to Publish?</h2>
        <p className="text-slate-500 font-medium max-w-md mx-auto">Review your class details one last time. Once published, it will be visible to all employees in the Explore section.</p>
      </div>

      <div className="bg-slate-50 rounded-3xl p-8 space-y-6">
        <div className="flex justify-between items-center pb-6 border-b border-slate-200">
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Class Title</p>
            <p className="text-xl font-black text-slate-900 mt-1">Advanced Figma Auto-Layout</p>
          </div>
          <button onClick={onPrev} className="text-primary text-sm font-bold hover:underline">Edit</button>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Schedule</p>
            <p className="font-bold text-slate-900 mt-1">Sep 20, 10:00 AM</p>
          </div>
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Capacity</p>
            <p className="font-bold text-slate-900 mt-1">20 Students</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={onPrev} className="flex-1 bg-slate-50 text-slate-500 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all active:scale-95">Back</button>
        <button
          onClick={() => navigate('/mentor')}
          className="flex-[2] bg-primary text-slate-900 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:brightness-105 transition-all active:scale-95"
        >
          Publish Class
        </button>
      </div>
    </div>
  );
}

function ResourceUpload({ icon: Icon, label }: any) {
  return (
    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/30 cursor-pointer transition-all group">
      <div className="size-10 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary shadow-sm transition-colors">
        <Icon className="size-5" />
      </div>
      <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{label}</span>
    </div>
  );
}
