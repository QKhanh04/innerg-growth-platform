import React from 'react';
import { Header } from '@/src/components/Header';
import { Sidebar } from '@/src/components/Sidebar';
import { 
  FolderOpen, 
  Search, 
  Filter, 
  Plus, 
  FileText, 
  Video, 
  Image as ImageIcon, 
  FileSpreadsheet, 
  MoreVertical,
  Download,
  Share2,
  Star,
  Clock,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function ResourceHubPage() {
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
                <h2 className="text-4xl font-black tracking-tight">Resource Hub</h2>
                <p className="text-slate-500 text-lg font-medium mt-2">Access company guides, training materials, and shared knowledge</p>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-black shadow-sm hover:bg-slate-50 transition-all">
                  <FolderOpen className="size-5" />
                  New Folder
                </button>
                <button className="flex items-center justify-center gap-3 bg-primary text-slate-900 px-8 py-4 rounded-2xl font-black shadow-xl shadow-primary/20 hover:brightness-105 active:scale-95 transition-all">
                  <Plus className="size-5" />
                  Upload File
                </button>
              </div>
            </div>

            {/* Categories / Folders */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black tracking-tight">Browse Categories</h3>
                <button className="text-primary text-sm font-bold hover:underline">View All</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <FolderCard name="Onboarding" count={24} color="blue" />
                <FolderCard name="Design Systems" count={156} color="primary" />
                <FolderCard name="Engineering" count={89} color="emerald" />
                <FolderCard name="Marketing" count={42} color="amber" />
              </div>
            </section>

            {/* Recent Files Table */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black tracking-tight">Recent Files</h3>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Search files..." 
                      className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-primary transition-colors">
                    <Filter className="size-5" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-100">
                      <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Name</th>
                      <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Type</th>
                      <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Size</th>
                      <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Last Modified</th>
                      <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    <FileRow 
                      name="Brand Guidelines 2023.pdf" 
                      icon={FileText} 
                      type="PDF Document" 
                      size="4.2 MB" 
                      date="2h ago" 
                      isStarred={true}
                    />
                    <FileRow 
                      name="Product Demo Video.mp4" 
                      icon={Video} 
                      type="Video" 
                      size="128.5 MB" 
                      date="5h ago" 
                    />
                    <FileRow 
                      name="UI Kit Components.fig" 
                      icon={ImageIcon} 
                      type="Figma File" 
                      size="12.8 MB" 
                      date="Yesterday" 
                      isStarred={true}
                    />
                    <FileRow 
                      name="Budget Projections Q4.xlsx" 
                      icon={FileSpreadsheet} 
                      type="Spreadsheet" 
                      size="1.1 MB" 
                      date="2 days ago" 
                    />
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function FolderCard({ name, count, color }: any) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
      <div className={cn(
        "size-16 rounded-2xl flex items-center justify-center mb-6 transition-colors",
        color === 'blue' && "bg-blue-50 text-blue-500 group-hover:bg-blue-100",
        color === 'primary' && "bg-primary/10 text-primary group-hover:bg-primary/20",
        color === 'emerald' && "bg-emerald-50 text-emerald-500 group-hover:bg-emerald-100",
        color === 'amber' && "bg-amber-50 text-amber-500 group-hover:bg-amber-100"
      )}>
        <FolderOpen className="size-8" />
      </div>
      <h4 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">{name}</h4>
      <p className="text-sm text-slate-500 font-bold mt-1">{count} items</p>
    </div>
  );
}

function FileRow({ name, icon: Icon, type, size, date, isStarred }: any) {
  return (
    <tr className="group hover:bg-slate-50 transition-colors cursor-pointer">
      <td className="px-8 py-5">
        <div className="flex items-center gap-4">
          <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
            <Icon className="size-5" />
          </div>
          <span className="font-bold text-slate-900 group-hover:text-primary transition-colors">{name}</span>
          {isStarred && <Star className="size-3 text-amber-500 fill-current" />}
        </div>
      </td>
      <td className="px-8 py-5 text-sm text-slate-500 font-medium">{type}</td>
      <td className="px-8 py-5 text-sm text-slate-500 font-medium">{size}</td>
      <td className="px-8 py-5 text-sm text-slate-500 font-medium">{date}</td>
      <td className="px-8 py-5 text-right">
        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 text-slate-400 hover:text-primary transition-colors">
            <Download className="size-4" />
          </button>
          <button className="p-2 text-slate-400 hover:text-primary transition-colors">
            <Share2 className="size-4" />
          </button>
          <button className="p-2 text-slate-400 hover:text-primary transition-colors">
            <MoreVertical className="size-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
