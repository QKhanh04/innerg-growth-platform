import React from 'react';
import { Header } from '@/src/components/Header';
import { Sidebar } from '@/src/components/Sidebar';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  FileText, 
  Download, 
  ChevronRight, 
  CheckCircle2, 
  MessageSquare,
  Calendar,
  ArrowLeft,
  Share2,
  Heart,
  MoreHorizontal
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

export default function ClassDetailPage() {
  return (
    <div className="flex min-h-screen bg-background-light">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto">
          {/* Hero Section */}
          <div className="relative h-[500px] bg-slate-900 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/figma/1920/1080" 
              alt="Class Hero" 
              className="absolute inset-0 size-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
                <Link to="/explore" className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8 font-bold text-sm">
                  <ArrowLeft className="size-4" />
                  Back to Explore
                </Link>
                
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                  <div className="max-w-3xl space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black bg-primary text-slate-900 px-3 py-1 rounded-full uppercase tracking-widest">Design</span>
                      <span className="text-[10px] font-black bg-white/20 text-white px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">Intermediate</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">Mastering Figma <br /> Auto-Layout & Variants</h1>
                    <div className="flex flex-wrap items-center gap-8 text-white/80 font-bold">
                      <div className="flex items-center gap-2">
                        <Star className="size-5 text-amber-500 fill-current" />
                        <span className="text-white">4.9</span>
                        <span className="text-white/40">(128 Reviews)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="size-5 text-primary" />
                        <span>1,240 Students enrolled</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="size-5 text-primary" />
                        <span>2h 30m total duration</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button className="p-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl backdrop-blur-md border border-white/20 transition-all">
                      <Share2 className="size-6" />
                    </button>
                    <button className="p-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl backdrop-blur-md border border-white/20 transition-all">
                      <Heart className="size-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-8 lg:px-12 -mt-16 relative z-10 pb-20">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left Column: Content */}
              <div className="flex-1 space-y-12">
                {/* Tabs */}
                <div className="flex items-center gap-10 border-b border-slate-200">
                  <button className="pb-6 text-base font-black text-primary border-b-4 border-primary">Syllabus</button>
                  <button className="pb-6 text-base font-black text-slate-400 hover:text-slate-600 transition-colors">Resources</button>
                  <button className="pb-6 text-base font-black text-slate-400 hover:text-slate-600 transition-colors">Reviews</button>
                  <button className="pb-6 text-base font-black text-slate-400 hover:text-slate-600 transition-colors">Discussion</button>
                </div>

                {/* Syllabus Content */}
                <section className="space-y-6">
                  <h3 className="text-2xl font-black tracking-tight">Course Syllabus</h3>
                  <div className="space-y-4">
                    <SyllabusItem 
                      number="01" 
                      title="Introduction to Auto-Layout" 
                      duration="15:00" 
                      isCompleted={true}
                    />
                    <SyllabusItem 
                      number="02" 
                      title="Understanding Constraints & Resizing" 
                      duration="25:40" 
                      isCompleted={true}
                    />
                    <SyllabusItem 
                      number="03" 
                      title="Building Complex Components" 
                      duration="45:15" 
                      isActive={true}
                    />
                    <SyllabusItem 
                      number="04" 
                      title="Variants & Component Properties" 
                      duration="35:20" 
                    />
                    <SyllabusItem 
                      number="05" 
                      title="Interactive Components & Prototyping" 
                      duration="28:10" 
                    />
                  </div>
                </section>

                {/* Mentor Section */}
                <section className="bg-white rounded-[40px] p-10 border border-slate-200 shadow-sm">
                  <h3 className="text-2xl font-black tracking-tight mb-8">Meet your Mentor</h3>
                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="size-32 rounded-3xl overflow-hidden shrink-0 shadow-xl">
                      <img src="https://picsum.photos/seed/alex/400/400" alt="Mentor" className="size-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-2xl font-black">Duong Khanh Hoa</h4>
                          <p className="text-slate-500 font-bold">Senior Product Designer @ InnerG</p>
                        </div>
                        <button className="px-6 py-3 bg-primary/10 text-primary rounded-xl text-sm font-black hover:bg-primary hover:text-slate-900 transition-all">
                          View Profile
                        </button>
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed mb-6">
                        Duong Khanh Hoa has over 8 years of experience in product design and has built design systems for some of the world's leading tech companies. He's passionate about Figma and helping designers work more efficiently.
                      </p>
                      <div className="flex gap-8">
                        <div className="text-center">
                          <p className="text-xl font-black">4.9</p>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rating</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-black">12k+</p>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Students</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-black">15</p>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Classes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: Sticky Sidebar */}
              <aside className="w-full lg:w-[400px] shrink-0">
                <div className="bg-white rounded-[40px] p-8 border border-slate-200 shadow-2xl sticky top-24">
                  <div className="h-56 rounded-3xl bg-slate-100 mb-8 relative group overflow-hidden cursor-pointer">
                    <img src="https://picsum.photos/seed/figma/800/600" alt="Preview" className="size-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="size-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="size-6 text-slate-900 fill-current ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <p className="text-white text-xs font-black uppercase tracking-widest drop-shadow-md">Preview this course</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-slate-900">Free</span>
                      <span className="text-xs font-black text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest">Corporate Access</span>
                    </div>

                    <button className="w-full bg-primary text-slate-900 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:brightness-105 active:scale-95 transition-all">
                      Enroll Now
                    </button>

                    <div className="space-y-4 pt-6">
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">This course includes:</p>
                      <BenefitItem icon={Play} text="2.5 hours on-demand video" />
                      <BenefitItem icon={FileText} text="12 downloadable resources" />
                      <BenefitItem icon={Calendar} text="Live Q&A session access" />
                      <BenefitItem icon={CheckCircle2} text="Certificate of completion" />
                    </div>

                    <div className="pt-8 border-t border-slate-100">
                      <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                        <div className="size-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                          <Star className="size-5 fill-current" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900">Earn 250 Points</p>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Upon completion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SyllabusItem({ number, title, duration, isCompleted, isActive }: any) {
  return (
    <div className={cn(
      "flex items-center gap-6 p-6 rounded-3xl border transition-all cursor-pointer group",
      isActive ? "bg-primary/5 border-primary shadow-lg shadow-primary/5" : "bg-white border-slate-100 hover:border-primary/30"
    )}>
      <div className={cn(
        "size-12 rounded-2xl flex items-center justify-center text-lg font-black shrink-0",
        isCompleted ? "bg-emerald-100 text-emerald-600" : (isActive ? "bg-primary text-slate-900" : "bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary")
      )}>
        {isCompleted ? <CheckCircle2 className="size-6" /> : number}
      </div>
      <div className="flex-1">
        <h4 className={cn("text-lg font-black", isActive ? "text-slate-900" : "text-slate-700 group-hover:text-primary")}>{title}</h4>
        <p className="text-sm text-slate-400 font-bold mt-1">{duration} mins</p>
      </div>
      <div className="flex items-center gap-4">
        {isActive ? (
          <span className="text-[10px] font-black bg-primary text-slate-900 px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">Now Playing</span>
        ) : (
          <Play className={cn("size-5", isCompleted ? "text-emerald-500" : "text-slate-300 group-hover:text-primary")} />
        )}
      </div>
    </div>
  );
}

function BenefitItem({ icon: Icon, text }: any) {
  return (
    <div className="flex items-center gap-3 text-slate-600">
      <Icon className="size-4 text-primary" />
      <span className="text-sm font-bold">{text}</span>
    </div>
  );
}
