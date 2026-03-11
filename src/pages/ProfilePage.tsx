import React from 'react';
import { Header } from '@/src/components/Header';
import { Sidebar } from '@/src/components/Sidebar';
import { 
  User, 
  MapPin, 
  Briefcase, 
  Mail, 
  Link as LinkIcon, 
  Edit3, 
  Award, 
  Star, 
  Clock, 
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Share2
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-background-light">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto">
          {/* Profile Header / Banner */}
          <div className="h-64 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,#13ecb6,transparent)]"></div>
            <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-8 lg:px-12 -mt-32 relative z-10 pb-20">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left Column: Info Card */}
              <div className="w-full lg:w-96 shrink-0 space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                  <div className="relative inline-block mb-6">
                    <div className="size-40 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-slate-100">
                      <img 
                        src="https://picsum.photos/seed/alex/400/400" 
                        alt="Profile" 
                        className="size-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute bottom-2 right-2 size-10 bg-primary text-slate-900 rounded-full flex items-center justify-center border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                      <Edit3 className="size-4" />
                    </div>
                  </div>

                  <h2 className="text-3xl font-black tracking-tight">Alex Rivera</h2>
                  <p className="text-slate-500 font-bold mt-1">Senior Product Designer</p>
                  
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="text-[10px] font-black bg-primary/20 text-slate-900 px-3 py-1 rounded-full uppercase tracking-widest">Mentor</span>
                    <span className="text-[10px] font-black bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase tracking-widest">Top Learner</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
                    <div>
                      <p className="text-2xl font-black">1,240</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Points</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black">12</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Badges</p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4 text-left">
                    <InfoItem icon={Briefcase} text="Product Design Team" />
                    <InfoItem icon={MapPin} text="San Francisco, CA" />
                    <InfoItem icon={Mail} text="alex.r@innerg.com" />
                    <InfoItem icon={LinkIcon} text="portfolio.alex.design" />
                  </div>

                  <button className="w-full mt-8 bg-slate-900 text-white py-4 rounded-2xl text-sm font-black hover:bg-slate-800 transition-all active:scale-95">
                    Edit Profile
                  </button>
                </div>

                {/* Skills */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                  <h3 className="font-black text-lg mb-6">Expertise</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Can Teach</p>
                      <div className="flex flex-wrap gap-2">
                        {['UI Design', 'Design Systems', 'Figma'].map(s => (
                          <span key={s} className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-lg border border-primary/20">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Learning</p>
                      <div className="flex flex-wrap gap-2">
                        {['React.js', '3D Modeling', 'Public Speaking'].map(s => (
                          <span key={s} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg border border-slate-100">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Activity & Content */}
              <div className="flex-1 space-y-10">
                {/* About Me */}
                <section className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
                  <h3 className="text-2xl font-black tracking-tight mb-6">About Me</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-lg">
                    Passionate about creating intuitive digital experiences and helping others grow in their design journey. With over 8 years of experience in product design, I specialize in building scalable design systems and mentoring junior designers. Currently focusing on bridging the gap between design and front-end development.
                  </p>
                </section>

                {/* Activity Tabs */}
                <div className="space-y-8">
                  <div className="flex items-center gap-8 border-b border-slate-200">
                    <button className="pb-4 text-sm font-black text-primary border-b-2 border-primary">Activity</button>
                    <button className="pb-4 text-sm font-black text-slate-400 hover:text-slate-600 transition-colors">Teaching</button>
                    <button className="pb-4 text-sm font-black text-slate-400 hover:text-slate-600 transition-colors">Reviews</button>
                    <button className="pb-4 text-sm font-black text-slate-400 hover:text-slate-600 transition-colors">Badges</button>
                  </div>

                  <div className="space-y-6">
                    <ActivityCard 
                      icon={Award}
                      title="Earned 'Design Guru' Badge"
                      time="2 days ago"
                      description="Completed the Advanced Design Systems track with a perfect score."
                    />
                    <ActivityCard 
                      icon={MessageSquare}
                      title="Received a 5-star review"
                      time="1 week ago"
                      description="From Sarah Chen: 'Alex is an incredible mentor. The Figma workshop was a game-changer!'"
                    />
                    <ActivityCard 
                      icon={CheckCircle2}
                      title="Completed 'React for Designers'"
                      time="2 weeks ago"
                      description="Successfully finished the 8-week intensive course."
                    />
                  </div>
                </div>

                {/* Upcoming Teaching */}
                <section>
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-black tracking-tight">Upcoming Teaching</h3>
                    <button className="text-primary text-sm font-bold hover:underline">Manage Classes</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TeachingCard 
                      title="Figma Auto-Layout Masterclass"
                      date="Wed, Sep 20 • 10:00 AM"
                      students={12}
                    />
                    <TeachingCard 
                      title="Design Systems at Scale"
                      date="Fri, Sep 22 • 02:00 PM"
                      students={45}
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function InfoItem({ icon: Icon, text }: any) {
  return (
    <div className="flex items-center gap-3 text-slate-600">
      <Icon className="size-4 text-slate-400" />
      <span className="text-sm font-bold">{text}</span>
    </div>
  );
}

function ActivityCard({ icon: Icon, title, time, description }: any) {
  return (
    <div className="flex gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
      <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
        <Icon className="size-7" />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h4 className="font-black text-lg text-slate-900">{title}</h4>
          <span className="text-xs text-slate-400 font-bold">• {time}</span>
        </div>
        <p className="text-slate-500 font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TeachingCard({ title, date, students }: any) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-primary/30 transition-all group cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Clock className="size-6" />
        </div>
        <div className="flex items-center gap-1.5 text-xs font-black text-slate-400 uppercase tracking-widest">
          <User className="size-3" />
          {students} Students
        </div>
      </div>
      <h4 className="font-black text-lg text-slate-900 group-hover:text-primary transition-colors mb-2">{title}</h4>
      <p className="text-sm text-slate-500 font-bold">{date}</p>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map(i => (
            <img 
              key={i}
              src={`https://picsum.photos/seed/user${i}/100/100`} 
              alt="Student" 
              className="size-8 rounded-full border-2 border-white object-cover"
              referrerPolicy="no-referrer"
            />
          ))}
          <div className="size-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400">
            +{students - 4}
          </div>
        </div>
        <ChevronRight className="size-5 text-slate-300 group-hover:text-primary transition-all group-hover:translate-x-1" />
      </div>
    </div>
  );
}
