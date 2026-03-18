import React from 'react';
import { Header } from '@/src/components/Header';
import { Sidebar } from '@/src/components/Sidebar';
import { 
  Zap, 
  Award, 
  Trophy, 
  ShoppingBag, 
  ChevronRight, 
  ArrowUpRight, 
  Clock, 
  Star,
  Gift,
  Search,
  Filter,
  History
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function PointsPage() {
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
                <h2 className="text-4xl font-black tracking-tight">Points & Rewards</h2>
                <p className="text-slate-500 text-lg font-medium mt-2">Redeem your hard-earned points for exclusive company perks</p>
              </div>
              <div className="bg-slate-900 text-white p-6 rounded-[32px] flex items-center gap-8 shadow-2xl shadow-slate-900/20">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Balance</span>
                  <div className="flex items-end gap-2 mt-1">
                    <span className="text-4xl font-black">1,240</span>
                    <span className="text-primary font-black mb-1">pts</span>
                  </div>
                </div>
                <div className="h-12 w-px bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Lifetime Earned</span>
                  <span className="text-xl font-black mt-1">12,450</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-10">
              {/* Main Content: Rewards Store */}
              <div className="flex-1 space-y-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black tracking-tight">Rewards Store</h3>
                  <div className="flex items-center gap-4">
                    <FilterButton label="All" active />
                    <FilterButton label="Vouchers" />
                    <FilterButton label="Swag" />
                    <FilterButton label="Experiences" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <RewardItem 
                    title="Amazon Gift Card" 
                    price="500" 
                    image="https://picsum.photos/seed/amazon/600/400" 
                    tag="Voucher"
                  />
                  <RewardItem 
                    title="InnerG Hoodie (Limited)" 
                    price="1,200" 
                    image="https://picsum.photos/seed/hoodie/600/400" 
                    tag="Swag"
                  />
                  <RewardItem 
                    title="1-on-1 with CEO" 
                    price="5,000" 
                    image="https://picsum.photos/seed/ceo/600/400" 
                    tag="Experience"
                  />
                  <RewardItem 
                    title="Starbucks Voucher" 
                    price="250" 
                    image="https://picsum.photos/seed/coffee/600/400" 
                    tag="Voucher"
                  />
                </div>
              </div>

              {/* Sidebar: Leaderboard & History */}
              <aside className="w-full xl:w-96 space-y-8 shrink-0">
                {/* Leaderboard */}
                <div className="bg-white rounded-[40px] p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-black text-lg flex items-center gap-2">
                      <Trophy className="size-5 text-amber-500" />
                      Leaderboard
                    </h3>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">This Month</span>
                  </div>
                  <div className="space-y-6">
                    <LeaderboardItem rank={1} name="Tran Thu Ha" points="4,250" img="https://picsum.photos/seed/ha/100/100" />
                    <LeaderboardItem rank={2} name="Duong Khanh Hoa" points="3,890" img="https://picsum.photos/seed/alex/100/100" isUser />
                    <LeaderboardItem rank={3} name="Le Van Hai" points="3,420" img="https://picsum.photos/seed/hai/100/100" />
                    <LeaderboardItem rank={4} name="Nguyen Thanh Mai" points="3,100" img="https://picsum.photos/seed/mai/100/100" />
                  </div>
                  <button className="w-full mt-8 py-4 border-2 border-slate-100 rounded-2xl text-sm font-black text-slate-400 hover:border-primary/30 hover:text-primary transition-all">
                    View Full Rankings
                  </button>
                </div>

                {/* Recent Transactions */}
                <div className="bg-white rounded-[40px] p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-black text-lg flex items-center gap-2">
                      <History className="size-5 text-primary" />
                      History
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <TransactionItem title="Class Completion" date="2h ago" points="+250" type="earn" />
                    <TransactionItem title="Amazon Voucher" date="Yesterday" points="-500" type="redeem" />
                    <TransactionItem title="Daily Streak Bonus" date="2 days ago" points="+50" type="earn" />
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

function FilterButton({ label, active }: any) {
  return (
    <button className={cn(
      "px-5 py-2 rounded-xl text-xs font-black transition-all",
      active 
        ? "bg-primary text-slate-900 shadow-lg shadow-primary/20" 
        : "bg-white border border-slate-200 text-slate-500 hover:border-primary/30 hover:text-primary"
    )}>
      {label}
    </button>
  );
}

function RewardItem({ title, price, image, tag }: any) {
  return (
    <div className="bg-white rounded-[40px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all group">
      <div className="h-48 relative overflow-hidden">
        <img src={image} alt={title} className="size-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-black bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full uppercase tracking-widest border border-white/30">
            {tag}
          </span>
        </div>
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">{title}</h4>
          <div className="flex items-center gap-1.5">
            <Zap className="size-4 text-primary fill-current" />
            <span className="text-lg font-black text-slate-900">{price}</span>
          </div>
        </div>
        <button className="w-full bg-slate-50 text-slate-900 py-4 rounded-2xl text-sm font-black hover:bg-primary transition-all active:scale-95">
          Redeem Now
        </button>
      </div>
    </div>
  );
}

function LeaderboardItem({ rank, name, points, img, isUser }: any) {
  return (
    <div className={cn(
      "flex items-center justify-between p-3 rounded-2xl transition-all",
      isUser ? "bg-primary/10 border border-primary/20" : "hover:bg-slate-50"
    )}>
      <div className="flex items-center gap-4">
        <span className={cn(
          "text-sm font-black w-6 text-center",
          rank === 1 ? "text-amber-500" : (rank === 2 ? "text-slate-400" : (rank === 3 ? "text-amber-700" : "text-slate-300"))
        )}>
          {rank}
        </span>
        <img src={img} alt={name} className="size-10 rounded-full object-cover border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
        <p className={cn("text-sm font-black", isUser ? "text-slate-900" : "text-slate-700")}>{name}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-black text-slate-900">{points}</p>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">pts</p>
      </div>
    </div>
  );
}

function TransactionItem({ title, date, points, type }: any) {
  return (
    <div className="flex items-center justify-between group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className={cn(
          "size-10 rounded-xl flex items-center justify-center transition-colors",
          type === 'earn' ? "bg-emerald-50 text-emerald-500 group-hover:bg-emerald-100" : "bg-red-50 text-red-500 group-hover:bg-red-100"
        )}>
          {type === 'earn' ? <ArrowUpRight className="size-5" /> : <ShoppingBag className="size-5" />}
        </div>
        <div>
          <p className="text-sm font-black text-slate-900">{title}</p>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{date}</p>
        </div>
      </div>
      <span className={cn(
        "text-sm font-black",
        type === 'earn' ? "text-emerald-500" : "text-red-500"
      )}>
        {points}
      </span>
    </div>
  );
}
