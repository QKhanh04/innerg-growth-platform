import React from 'react';
import { Header } from '@/src/components/Header';
import { Sidebar } from '@/src/components/Sidebar';
import { 
  BarChart3, 
  Users, 
  GraduationCap, 
  Clock, 
  TrendingUp, 
  TrendingDown, 
  ChevronRight,
  Download,
  Filter,
  Search,
  Award,
  Zap,
  Target,
  ShieldCheck,
  Star
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-background-light">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 bg-slate-900 rounded-xl flex items-center justify-center text-primary shadow-sm">
                    <BarChart3 className="size-6" />
                  </div>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Admin Insights</span>
                </div>
                <h2 className="text-4xl font-black tracking-tight">HR Analytics Dashboard</h2>
                <p className="text-slate-500 text-lg font-medium mt-2">Monitor company-wide learning progress and skill development</p>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-black shadow-sm hover:bg-slate-50 transition-all">
                  <Download className="size-5" />
                  Export Report
                </button>
                <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
                  <button className="px-6 py-2.5 text-xs font-black bg-slate-100 rounded-xl">Monthly</button>
                  <button className="px-6 py-2.5 text-xs font-black text-slate-400 hover:text-slate-600 transition-colors">Quarterly</button>
                </div>
              </div>
            </div>

            {/* High-Level Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnalyticsStatCard 
                label="Total Classes" 
                value="156" 
                trend="+12%" 
                isUp={true} 
                icon={GraduationCap} 
                color="blue" 
              />
              <AnalyticsStatCard 
                label="Active Learners" 
                value="2,450" 
                trend="+8%" 
                isUp={true} 
                icon={Users} 
                color="primary" 
              />
              <AnalyticsStatCard 
                label="Learning Hours" 
                value="12.8k" 
                trend="-2%" 
                isUp={false} 
                icon={Clock} 
                color="amber" 
              />
              <AnalyticsStatCard 
                label="Cost Saved" 
                value="$45.2k" 
                trend="+24%" 
                isUp={true} 
                icon={ShieldCheck} 
                color="emerald" 
              />
            </div>

            <div className="flex flex-col xl:flex-row gap-10">
              {/* Main Content: Charts & Activity */}
              <div className="flex-1 space-y-10">
                {/* Learning Activity Chart */}
                <div className="bg-white rounded-[40px] p-10 border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-10">
                    <div>
                      <h3 className="text-2xl font-black tracking-tight">Learning Activity</h3>
                      <p className="text-sm font-medium text-slate-500 mt-1 flex items-center gap-2">
                        <TrendingUp className="size-4 text-primary" />
                        +14.2% growth compared to last month
                      </p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <div className="size-3 rounded-full bg-primary shadow-[0_0_8px_rgba(19,236,182,0.4)]"></div>
                        <span className="text-xs font-bold text-slate-500">Skills Learned</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-3 rounded-full bg-slate-200"></div>
                        <span className="text-xs font-bold text-slate-500">Classes Attended</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-72 w-full mt-4 group">
                    {/* Y-Axis Labels */}
                    <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] font-black text-slate-300 pointer-events-none">
                      <span>100%</span>
                      <span>75%</span>
                      <span>50%</span>
                      <span>25%</span>
                      <span>0%</span>
                    </div>

                    {/* Grid Lines */}
                    <div className="absolute left-10 right-0 top-0 bottom-8 flex flex-col justify-between pointer-events-none">
                      {[0, 25, 50, 75, 100].map((_, i) => (
                        <div key={i} className="h-px w-full bg-slate-50" />
                      ))}
                    </div>

                    {/* Chart Area */}
                    <div className="absolute left-10 right-0 top-0 bottom-8 flex items-end justify-between gap-3 px-2 pt-4">
                      {[35, 55, 42, 85, 65, 95, 75, 90, 50, 70, 60, 80].map((h, i) => (
                        <div key={i} className="flex-1 h-full relative group/bar">
                          {/* Background Bar */}
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.05, duration: 0.8, ease: "easeOut" }}
                            className="absolute bottom-0 left-0 right-0 bg-slate-50 group-hover/bar:bg-slate-100 transition-colors rounded-t-lg"
                          />
                          {/* Main Bar */}
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${h * 0.7}%` }}
                            transition={{ delay: (i * 0.05) + 0.2, duration: 0.8, ease: "easeOut" }}
                            className="absolute bottom-0 left-0 right-0 bg-primary/20 group-hover/bar:bg-primary/30 transition-colors rounded-t-lg overflow-hidden"
                          >
                             <div className="absolute top-0 left-0 right-0 h-1 bg-primary/40" />
                          </motion.div>
                          
                          {/* Indicator line on hover */}
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-all pointer-events-none z-20">
                            {h}%
                          </div>
                        </div>
                      ))}

                      {/* Line Chart Path (SVG Overlay) */}
                      <svg className="absolute inset-x-0 bottom-0 w-full h-full pointer-events-none z-10 overflow-visible">
                        <motion.path
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          d="M 12 180 L 45 130 L 78 150 L 111 60 L 144 110 L 177 30 L 210 80 L 243 45 L 276 130 L 309 90 L 342 110 L 375 70"
                          fill="none"
                          stroke="url(#lineGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="drop-shadow-[0_4px_8px_rgba(19,236,182,0.3)]"
                        />
                        <defs>
                          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#13ecb6" />
                            <stop offset="100%" stopColor="#6366f1" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* X-Axis Labels */}
                    <div className="absolute left-10 right-0 bottom-0 h-6 flex justify-between px-2">
                       {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                         <span key={m} className="flex-1 text-center text-[10px] font-black text-slate-400 uppercase tracking-tighter self-center">{m}</span>
                       ))}
                    </div>
                  </div>
                </div>

                {/* Top Mentors Table */}
                <div className="bg-white rounded-[40px] p-10 border border-slate-200 shadow-sm overflow-hidden text-center sm:text-left">
                  <div className="flex items-center justify-between mb-10">
                    <h3 className="text-2xl font-black tracking-tight">Top Mentors</h3>
                    <button className="text-primary text-sm font-bold hover:underline">View All</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="border-b border-slate-100">
                          <th className="pb-6 text-xs font-black text-slate-400 uppercase tracking-widest">Mentor</th>
                          <th className="pb-6 text-xs font-black text-slate-400 uppercase tracking-widest">Department</th>
                          <th className="pb-6 text-xs font-black text-slate-400 uppercase tracking-widest text-center">Classes</th>
                          <th className="pb-6 text-xs font-black text-slate-400 uppercase tracking-widest text-center">Rating</th>
                          <th className="pb-6 text-xs font-black text-slate-400 uppercase tracking-widest text-center">Points</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        <MentorRow name="Alex Rivera" dept="Design" classes={12} rating="4.9" points="8,450" />
                        <MentorRow name="Sarah Chen" dept="Engineering" classes={8} rating="4.8" points="6,200" />
                        <MentorRow name="David Kim" dept="Product" classes={15} rating="5.0" points="12,100" />
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Company Skill Density Map */}
                <div className="bg-white rounded-[40px] p-10 border border-slate-200 shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between mb-10">
                    <h3 className="text-2xl font-black tracking-tight">Company Skill Map</h3>
                    <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase">
                      <span>Low Density</span>
                      <div className="flex gap-1">
                        <div className="size-3 bg-primary/10 rounded-sm" />
                        <div className="size-3 bg-primary/30 rounded-sm" />
                        <div className="size-3 bg-primary/60 rounded-sm" />
                        <div className="size-3 bg-primary/100 rounded-sm" />
                      </div>
                      <span>High Density</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {/* Headers */}
                    <div />
                    {['Design', 'Eng.', 'Product', 'Sales', 'HR'].map(d => (
                      <div key={d} className="text-center text-[10px] font-black text-slate-400 uppercase py-2">{d}</div>
                    ))}
                    
                    {/* Rows */}
                    {['Figma', 'React', 'Node.js', 'Stats', 'Agile'].map((skill, ridx) => (
                      <React.Fragment key={skill}>
                        <div className="text-right text-[10px] font-black text-slate-400 uppercase py-2 pr-4">{skill}</div>
                        {[1, 2, 3, 4, 5].map((cidx) => {
                          const opacity = (ridx + cidx) % 4;
                          return (
                            <motion.div
                              key={cidx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: (ridx * 5 + cidx) * 0.02 }}
                              className={cn(
                                "aspect-square rounded-lg border border-white shadow-inner flex items-center justify-center text-[10px] font-black",
                                opacity === 0 && "bg-primary/10 text-primary/40",
                                opacity === 1 && "bg-primary/30 text-primary/60",
                                opacity === 2 && "bg-primary/60 text-white",
                                opacity === 3 && "bg-primary text-white"
                              )}
                            >
                               {Math.floor(Math.random() * 20) + 5}%
                            </motion.div>
                          );
                        })}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar: Skills & Coverage */}
              <aside className="w-full xl:w-96 space-y-8 shrink-0">
                {/* Skill Coverage */}
                <div className="bg-slate-900 text-white rounded-[40px] p-8 shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                      <Target className="size-6 text-primary" />
                      Skill Coverage
                    </h3>
                    <div className="space-y-6">
                      <CoverageItem label="Product Design" percent={85} />
                      <CoverageItem label="Frontend Dev" percent={62} />
                      <CoverageItem label="Data Science" percent={45} />
                      <CoverageItem label="Leadership" percent={78} />
                    </div>
                    <button className="w-full mt-10 bg-primary text-slate-900 py-4 rounded-2xl text-sm font-black hover:brightness-110 transition-all active:scale-95">
                      Identify Skill Gaps
                    </button>
                  </div>
                  <div className="absolute -bottom-10 -right-10 size-40 bg-primary/10 rounded-full blur-3xl"></div>
                </div>

                {/* Departmental Progress */}
                <div className="bg-white rounded-[40px] p-8 border border-slate-200 shadow-sm">
                  <h3 className="font-black text-lg mb-8 flex items-center gap-2">
                    <BarChart3 className="size-5 text-primary" />
                    Dept. Performance
                  </h3>
                  <div className="space-y-8">
                    <div className="relative size-48 mx-auto flex items-center justify-center">
                      <svg className="size-full -rotate-90">
                        <circle cx="96" cy="96" r="80" fill="none" stroke="#f1f5f9" strokeWidth="20" />
                        <motion.circle 
                          cx="96" cy="96" r="80" 
                          fill="none" stroke="#13ecb6" strokeWidth="20" 
                          strokeDasharray="502"
                          initial={{ strokeDashoffset: 502 }}
                          animate={{ strokeDashoffset: 502 * (1 - 0.72) }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          strokeLinecap="round"
                        />
                        <motion.circle 
                          cx="96" cy="96" r="80" 
                          fill="none" stroke="#6366f1" strokeWidth="20" 
                          strokeDasharray="502"
                          initial={{ strokeDashoffset: 502 }}
                          animate={{ strokeDashoffset: 502 * (1 - 0.35) }}
                          transition={{ duration: 1.5, delay: 0.8 }}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute text-center">
                         <p className="text-3xl font-black text-slate-900">72%</p>
                         <p className="text-[10px] font-black text-slate-400 uppercase">Avg. Growth</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="flex items-center gap-2">
                          <div className="size-2 rounded-full bg-primary" />
                          <span className="text-[10px] font-black text-slate-600 uppercase">Eng: 72%</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <div className="size-2 rounded-full bg-indigo-500" />
                          <span className="text-[10px] font-black text-slate-600 uppercase">Design: 85%</span>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Top Requested Skills */}
                <div className="bg-white rounded-[40px] p-8 border border-slate-200 shadow-sm">
                  <h3 className="font-black text-lg mb-8 flex items-center gap-2">
                    <Zap className="size-5 text-primary fill-current" />
                    Hot Skills (Gaps)
                  </h3>
                  <div className="space-y-6">
                    <RequestedSkillItem title="Generative AI" count={128} trend="+15%" />
                    <RequestedSkillItem title="Public Speaking" count={94} trend="+8%" />
                    <RequestedSkillItem title="React Native" count={76} trend="+22%" />
                    <RequestedSkillItem title="UX Strategy" count={65} trend="+4%" />
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

function AnalyticsStatCard({ label, value, trend, isUp, icon: Icon, color }: any) {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm group hover:border-primary/30 transition-all">
      <div className="flex items-center justify-between mb-6">
        <div className={cn(
          "size-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors",
          color === 'blue' && "bg-blue-50 text-blue-500",
          color === 'primary' && "bg-primary/10 text-primary",
          color === 'amber' && "bg-amber-50 text-amber-500",
          color === 'emerald' && "bg-emerald-50 text-emerald-500"
        )}>
          <Icon className="size-7" />
        </div>
        <div className={cn(
          "flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
          isUp ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
        )}>
          {isUp ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
          {trend}
        </div>
      </div>
      <p className="text-4xl font-black text-slate-900">{value}</p>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{label}</p>
    </div>
  );
}

function MentorRow({ name, dept, classes, rating, points }: any) {
  return (
    <tr className="group hover:bg-slate-50 transition-colors cursor-pointer">
      <td className="py-5">
        <div className="flex items-center gap-4">
          <img src={`https://picsum.photos/seed/${name}/100/100`} alt={name} className="size-10 rounded-full object-cover border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
          <span className="font-bold text-slate-900 group-hover:text-primary transition-colors">{name}</span>
        </div>
      </td>
      <td className="py-5 text-sm text-slate-500 font-bold">{dept}</td>
      <td className="py-5 text-sm text-slate-900 font-black">{classes}</td>
      <td className="py-5">
        <div className="flex items-center gap-1.5">
          <Star className="size-4 text-amber-500 fill-current" />
          <span className="text-sm font-black text-slate-900">{rating}</span>
        </div>
      </td>
      <td className="py-5 text-sm text-primary font-black">{points}</td>
    </tr>
  );
}

function CoverageItem({ label, percent }: any) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-xs font-black uppercase tracking-widest">
        <span>{label}</span>
        <span className="text-primary">{percent}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(19,236,182,0.5)]"
        />
      </div>
    </div>
  );
}

function RequestedSkillItem({ title, count, trend }: any) {
  return (
    <div className="flex items-center justify-between group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
          <ChevronRight className="size-5" />
        </div>
        <div>
          <p className="text-sm font-black text-slate-900 group-hover:text-primary transition-colors">{title}</p>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{count} Requests</p>
        </div>
      </div>
      <span className="text-xs font-black text-emerald-500">{trend}</span>
    </div>
  );
}
