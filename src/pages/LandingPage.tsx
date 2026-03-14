import React from 'react';
import { Search, Users, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import logo from '@/src/assets/logo.png';
import mascot from '@/src/assets/mascot.png';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row bg-white">
      {/* Left Section: Hero */}
      <div className="relative hidden w-full items-center justify-center p-12 lg:flex lg:w-[55%] subtle-gradient overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl relative z-10"
        >
          <div className="mb-12 flex justify-center">
            <div className="h-80 w-full flex items-center justify-center">
              <img
                src={mascot}
                alt="InnerG Mascot"
                className="h-full object-contain"
              />
            </div>
          </div>

          <h1 className="mb-6 text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Unlock the knowledge <br />
            <span className="text-primary">within your team</span>
          </h1>
          <p className="mb-10 text-xl leading-relaxed text-slate-600 font-medium">
            Empower your workforce with AI-driven insights and seamless collaboration. InnerG centralizes your enterprise intelligence so you can move faster.
          </p>

          <div className="grid gap-8">
            <FeatureItem
              icon={Search}
              title="Knowledge Discovery"
              description="Find answers instantly across all your company documents and silos."
            />
            <FeatureItem
              icon={Users}
              title="Team Synergy"
              description="Bridge the gap between departments with shared, searchable intelligence."
            />
            <FeatureItem
              icon={ShieldCheck}
              title="Secure Insights"
              description="Enterprise-grade security protocols ensuring your data remains private."
            />
          </div>
        </motion.div>

        {/* Background Decorations */}
        <div className="absolute -top-24 -left-24 size-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 size-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Right Section: Login Form */}
      <div className="flex w-full flex-col items-center justify-center bg-white px-6 py-12 lg:w-[45%] lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[440px]"
        >
          {/* Logo */}
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg border border-slate-100 p-2">
              <img src={logo} alt="InnerG Logo" className="size-full object-contain" />
            </div>
            <h2 className="text-3xl tracking-tight text-slate-900">
              <span className="font-black">Inner</span><span className="font-black text-primary">G</span>
            </h2>
          </div>

          <div className="mb-10">
            <h3 className="text-4xl font-black text-slate-900">Welcome back 👋</h3>
            <p className="mt-3 text-slate-500 text-lg font-medium">Sign in to your company workspace</p>
          </div>

          {/* SSO Buttons */}
          <div className="flex flex-col gap-4">
            <SSOButton
              icon="https://www.google.com/favicon.ico"
              label="Continue with Google"
            />
            <SSOButton
              icon="https://www.microsoft.com/favicon.ico"
              label="Continue with Microsoft"
            />
          </div>

          <div className="my-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-100"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">or use email</span>
            <div className="h-px flex-1 bg-slate-100"></div>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700" htmlFor="email">Work Email</label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-4 focus:border-primary focus:ring-primary transition-all outline-none"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-bold text-slate-700" htmlFor="password">Password</label>
                <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-4 focus:border-primary focus:ring-primary transition-all outline-none"
              />
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary">
                  <ShieldCheck className="size-4" />
                </div>
                <span className="text-sm font-bold text-slate-600">Enable 2FA login</span>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20"></div>
              </label>
            </div>

            <Link
              to="/onboarding"
              className="flex w-full items-center justify-center rounded-2xl bg-primary py-4 text-center font-black text-slate-900 shadow-xl shadow-primary/20 transition-all hover:brightness-105 active:scale-[0.98]"
            >
              Sign In
            </Link>
          </form>

          <p className="mt-10 text-center text-sm text-slate-500 font-medium">
            Don't have an account?
            <a href="#" className="ml-1 font-black text-primary hover:underline">Contact Sales</a>
          </p>

          <div className="mt-16 flex justify-center gap-8">
            <a href="#" className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureItem({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary shadow-inner">
        <Icon className="size-7" />
      </div>
      <div>
        <h3 className="text-xl font-black text-slate-900 mb-1">{title}</h3>
        <p className="text-slate-600 font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function SSOButton({ icon, label }: { icon: string, label: string }) {
  return (
    <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white py-4 px-4 font-bold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98]">
      <img src={icon} alt={label} className="h-5 w-5" referrerPolicy="no-referrer" />
      <span>{label}</span>
    </button>
  );
}
