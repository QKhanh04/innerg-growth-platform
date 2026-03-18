import React from 'react';
import { Header } from '@/src/components/Header';
import { Sidebar } from '@/src/components/Sidebar';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  ChevronRight, 
  Play, 
  BookOpen, 
  Mic,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen bg-background-light">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                    <Sparkles className="size-6" />
                  </div>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Discovery</span>
                </div>
                <h2 className="text-5xl font-black tracking-tight leading-tight">What do you want to <br /> <span className="text-primary">learn today?</span></h2>
              </div>
              
              <div className="flex-1 max-w-md w-full">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search classes, skills, or mentors..." 
                    className="w-full h-16 pl-14 pr-6 bg-white border border-slate-200 rounded-2xl text-lg font-medium outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <FilterButton label="All Categories" active />
              <FilterButton label="Design" />
              <FilterButton label="Engineering" />
              <FilterButton label="Marketing" />
              <FilterButton label="Leadership" />
              <FilterButton label="Soft Skills" />
              <div className="h-8 w-px bg-slate-200 mx-2"></div>
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-black text-slate-600 hover:border-primary transition-all">
                <Filter className="size-4" />
                More Filters
              </button>
            </div>

            {/* Featured Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black tracking-tight">Featured Classes</h3>
                <div className="flex gap-2">
                  <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-primary transition-colors">
                    <ChevronRight className="size-5 rotate-180" />
                  </button>
                  <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-primary transition-colors">
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ClassCard 
                  title="Mastering Figma Auto-Layout"
                  mentor="Duong Khanh Hoa"
                  mentorImg="https://picsum.photos/seed/alex/100/100"
                  rating="4.9"
                  students="1.2k"
                  duration="2h 30m"
                  image="https://picsum.photos/seed/figma/800/600"
                  tag="Design"
                />
                <ClassCard 
                  title="Advanced React Patterns"
                  mentor="Sarah Chen"
                  mentorImg="https://picsum.photos/seed/sarah/100/100"
                  rating="4.8"
                  students="856"
                  duration="4h 15m"
                  image="https://picsum.photos/seed/react/800/600"
                  tag="Engineering"
                />
                <ClassCard 
                  title="The Art of Public Speaking"
                  mentor="Michael Scott"
                  mentorImg="https://picsum.photos/seed/michael/100/100"
                  rating="5.0"
                  students="2.4k"
                  duration="1h 45m"
                  image="https://picsum.photos/seed/speaking/800/600"
                  tag="Soft Skills"
                />
              </div>
            </section>

            {/* Popular Mentors */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black tracking-tight">Top Mentors</h3>
                <button className="text-primary text-sm font-bold hover:underline">View All Mentors</button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                <MentorAvatar name="D. Khanh Hoa" img="https://picsum.photos/seed/alex/200/200" role="Design" />
                <MentorAvatar name="Sarah C." img="https://picsum.photos/seed/sarah/200/200" role="Eng" />
                <MentorAvatar name="David K." img="https://picsum.photos/seed/david/200/200" role="Product" />
                <MentorAvatar name="Elena M." img="https://picsum.photos/seed/elena/200/200" role="Marketing" />
                <MentorAvatar name="James W." img="https://picsum.photos/seed/james/200/200" role="Sales" />
                <MentorAvatar name="Lisa P." img="https://picsum.photos/seed/lisa/200/200" role="HR" />
              </div>
            </section>

            {/* All Classes Grid */}
            <section>
              <h3 className="text-2xl font-black tracking-tight mb-8">Explore All Classes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <ClassCardSmall 
                    key={i}
                    title={`Class Title ${i + 1}`}
                    mentor="John Doe"
                    rating="4.7"
                    image={`https://picsum.photos/seed/class${i}/400/300`}
                  />
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <button className="px-12 py-4 bg-white border-2 border-slate-100 rounded-2xl text-sm font-black text-slate-400 hover:border-primary/30 hover:text-primary transition-all">
                  Load More Classes
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function FilterButton({ label, active }: any) {
  return (
    <button className={cn(
      "px-6 py-3 rounded-xl text-sm font-black transition-all",
      active 
        ? "bg-primary text-slate-900 shadow-lg shadow-primary/20" 
        : "bg-white border border-slate-200 text-slate-500 hover:border-primary/30 hover:text-primary"
    )}>
      {label}
    </button>
  );
}

function ClassCard({ title, mentor, mentorImg, rating, students, duration, image, tag }: any) {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all group">
      <div className="h-56 relative overflow-hidden">
        <img src={image} alt={title} className="size-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-black bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full uppercase tracking-widest border border-white/30">
            {tag}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <img src={mentorImg} alt={mentor} className="size-8 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
          <span className="text-xs font-bold text-white">{mentor}</span>
        </div>
      </div>
      <div className="p-8">
        <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">{title}</h4>
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Star className="size-4 text-amber-500 fill-current" />
              <span className="text-xs font-black text-slate-700">{rating}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="size-4 text-slate-400" />
              <span className="text-xs font-bold text-slate-500">{students}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
            <Clock className="size-4" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MentorAvatar({ name, img, role }: any) {
  return (
    <div className="flex flex-col items-center gap-4 group cursor-pointer">
      <div className="size-24 rounded-full p-1 border-2 border-transparent group-hover:border-primary transition-all duration-500">
        <img src={img} alt={name} className="size-full rounded-full object-cover shadow-lg" referrerPolicy="no-referrer" />
      </div>
      <div className="text-center">
        <p className="font-black text-slate-900 group-hover:text-primary transition-colors">{name}</p>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{role}</p>
      </div>
    </div>
  );
}

function ClassCardSmall({ title, mentor, rating, image }: any) {
  return (
    <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer">
      <div className="h-40 rounded-2xl overflow-hidden mb-4">
        <img src={image} alt={title} className="size-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
      </div>
      <h4 className="font-black text-slate-900 group-hover:text-primary transition-colors line-clamp-1">{title}</h4>
      <div className="flex items-center justify-between mt-3">
        <p className="text-xs text-slate-500 font-bold">{mentor}</p>
        <div className="flex items-center gap-1">
          <Star className="size-3 text-amber-500 fill-current" />
          <span className="text-xs font-black text-slate-700">{rating}</span>
        </div>
      </div>
    </div>
  );
}
