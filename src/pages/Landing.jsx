/*import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import logo from "../assets/logo.png";
const Landing = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-8 w-8 rounded-xl gradient-primary">
            <img
              src="https://via.placeholder.com/100"
              alt="CareerForge Logo"
              className="h-9 w-9 object-contain"
            />
          </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                CareerForge
              </p>
              <p className="text-sm font-semibold text-slate-900">CareerForge Pro</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <Link to="/pricing" className="hover:text-slate-900">
              Pricing
            </Link>
            <Link to="/login" className="hover:text-slate-900">
              Login
            </Link>
            <Link to="/signup">
              <Button className="px-4 py-2 text-xs">Get Started</Button>
            </Link>
          </nav>
          <Link
            to="/signup"
            className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 md:hidden"
          >
            Get Started
          </Link>
        </div>
      </header>

      
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50/80">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-6 md:py-20">
            <div className="flex flex-col justify-center">
              <span className="inline-flex max-w-fit items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 shadow-sm">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Built for modern ATS systems
              </span>
              <h1 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
                Build ATS-Proof Resumes
                <span className="block text-transparent bg-clip-text gradient-primary">
                  That Actually Get You Hired.
                </span>
              </h1>
              <p className="mt-4 text-sm text-slate-600 md:text-base">
                CareerForge Pro rewrites your resume with AI, analyzes job descriptions, and
                optimizes your content for Applicant Tracking Systems—so you stand out to real
                recruiters, not just algorithms.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link to="/signup">
                  <Button className="px-6 py-3 text-sm">Get Started — it&apos;s free</Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="px-5 py-3 text-sm">
                    View Demo
                  </Button>
                </Link>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                No credit card required · Export to PDF anytime · Designed with recruiters
              </p>
            </div>

            <div className="flex items-center">
              <div className="card-xl w-full space-y-4 bg-white/90">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      Live Preview
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      Senior Product Designer · Figma
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    ATS Score · 86
                  </span>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-0 bg-slate-50/80 shadow-none">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                      AI Rewrite
                    </p>
                    <p className="mt-2 text-xs text-slate-600">
                      &ldquo;Redesigned project management workflows that reduced delivery time by
                      24% and improved cross-team collaboration.&rdquo;
                    </p>
                  </Card>
                  <Card className="border-0 bg-slate-50/80 shadow-none">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                      JD Match
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-slate-600">
                      <li>• Strong match on product discovery</li>
                      <li>• Missing: design systems, accessibility</li>
                    </ul>
                  </Card>
                </div>
                <div className="grid gap-3 md:grid-cols-4">
                  <div className="rounded-lg bg-slate-50 px-3 py-3 text-xs">
                    <p className="text-[11px] font-medium text-slate-500">JD Analysis</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">92%</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-3 text-xs">
                    <p className="text-[11px] font-medium text-slate-500">ATS Score</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">86</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-3 text-xs">
                    <p className="text-[11px] font-medium text-slate-500">Keyword Match</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">78%</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-3 text-xs">
                    <p className="text-[11px] font-medium text-slate-500">Time Saved</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">4h / week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Features
              </p>
              <h2 className="mt-1 text-xl font-semibold text-slate-900">
                Everything you need to pass ATS and impress humans.
              </h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                title: 'JD Analysis',
                desc: 'Paste a job description and instantly see what your resume is missing.'
              },
              {
                title: 'AI Rewrite',
                desc: 'Transform responsibilities into quantified, recruiter-friendly bullet points.'
              },
              {
                title: 'ATS Score',
                desc: 'Understand how Applicant Tracking Systems see your resume before you apply.'
              },
              {
                title: 'PDF Export',
                desc: 'Download clean, typography-focused resumes that render well everywhere.'
              }
            ].map((item) => (
              <Card key={item.title} className="h-full">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-xs text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        
        <section className="border-y border-slate-200 bg-slate-50/60">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Pricing
                </p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900">
                  Start free. Upgrade when you&apos;re ready.
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  CareerForge Pro is built for students, job switchers, and senior candidates who
                  need polished, ATS-proof applications—without spending weeks in design tools.
                </p>
                <Link to="/pricing">
                  <Button variant="outline" className="mt-4 px-5 py-2.5 text-sm">
                    View full pricing
                  </Button>
                </Link>
              </div>
              <Card className="relative overflow-hidden border-brand-100 bg-white">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-500/10 to-purple-500/10" />
                <div className="relative">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-600">
                    Pro Plan
                  </p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <p className="text-3xl font-semibold text-slate-900">$12</p>
                    <p className="text-xs text-slate-500">/ month</p>
                  </div>
                  <p className="mt-2 text-xs text-slate-600">
                    Unlimited resumes, cover letters, and ATS analyses. Built for serious job
                    searches.
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
                    <li>• Unlimited resume versions</li>
                    <li>• AI rewrites & bullet suggestions</li>
                    <li>• Advanced ATS scoring & keyword insights</li>
                    <li>• Priority product access</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} CareerForge Pro. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-slate-700">Privacy</button>
            <button className="hover:text-slate-700">Terms</button>
            <button className="hover:text-slate-700">Status</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;*/

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import logo from "../assets/logo.png";

const Landing = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0f0f13] text-white overflow-hidden">

      {/* Glow Background Elements */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-600/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-600/20 blur-[140px] rounded-full" />

      {/* HEADER */}
      <header className="relative border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-[2px]">
              <img
                src={logo}
                alt="CareerForge Logo"
                className="h-full w-full object-contain rounded-xl bg-black"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                CareerForge
              </p>
              <p className="text-sm font-semibold text-white">
                CareerForge Pro
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-gray-400 md:flex">
            <Link to="/pricing" className="hover:text-white transition">
              Pricing
            </Link>
            <Link to="/login" className="hover:text-white transition">
              Login
            </Link>
            <Link to="/signup">
              <Button className="px-4 py-2 text-xs bg-gradient-to-r from-indigo-500 to-purple-600 border-0">
                Get Started
              </Button>
            </Link>
          </nav>

          <Link
            to="/signup"
            className="inline-flex items-center rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-gray-300 hover:bg-white/10 md:hidden"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* MAIN */}
      <main className="relative flex-1">

        {/* HERO SECTION */}
        <section className="border-b border-white/10 bg-gradient-to-b from-[#141428] to-[#0f0f13]">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-6 md:py-20">

            <div className="flex flex-col justify-center">
              <span className="inline-flex max-w-fit items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-300 backdrop-blur">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Built for modern ATS systems
              </span>

              <h1 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                Build ATS-Proof Resumes
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  That Actually Get You Hired.
                </span>
              </h1>

              <p className="mt-4 text-sm text-gray-400 md:text-base">
                CareerForge Pro rewrites your resume with AI, analyzes job descriptions, and
                optimizes your content for Applicant Tracking Systems—so you stand out to real
                recruiters, not just algorithms.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link to="/signup">
                  <Button className="px-6 py-3 text-sm bg-gradient-to-r from-indigo-500 to-purple-600 border-0">
                    Get Started — it&apos;s free
                  </Button>
                </Link>

                <Link to="/login">
                  <Button
                    variant="outline"
                    className="px-5 py-3 text-sm border-white/20 text-gray-300 hover:bg-white/10"
                  >
                    View Demo
                  </Button>
                </Link>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                No credit card required · Export to PDF anytime · Designed with recruiters
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="flex items-center">
              <div className="w-full space-y-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                      Live Preview
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Senior Product Designer · Figma
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    ATS Score · 86
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-0 bg-white/5 shadow-none backdrop-blur border border-white/10">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                      AI Rewrite
                    </p>
                    <p className="mt-2 text-xs text-gray-300">
                      “Redesigned project management workflows that reduced delivery time by
                      24% and improved cross-team collaboration.”
                    </p>
                  </Card>

                  <Card className="border-0 bg-white/5 shadow-none backdrop-blur border border-white/10">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                      JD Match
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-gray-300">
                      <li>• Strong match on product discovery</li>
                      <li>• Missing: design systems, accessibility</li>
                    </ul>
                  </Card>
                </div>

                <div className="grid gap-3 md:grid-cols-4">
                  {["JD Analysis", "ATS Score", "Keyword Match", "Time Saved"].map((item, i) => (
                    <div key={i} className="rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-xs backdrop-blur">
                      <p className="text-[11px] font-medium text-gray-400">{item}</p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {i === 0 && "92%"}
                        {i === 1 && "86"}
                        {i === 2 && "78%"}
                        {i === 3 && "4h / week"}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <h2 className="text-xl font-semibold mb-6">
            Everything you need to pass ATS and impress humans.
          </h2>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                title: 'JD Analysis',
                desc: 'Paste a job description and instantly see what your resume is missing.'
              },
              {
                title: 'AI Rewrite',
                desc: 'Transform responsibilities into quantified bullet points.'
              },
              {
                title: 'ATS Score',
                desc: 'Understand how ATS systems see your resume.'
              },
              {
                title: 'PDF Export',
                desc: 'Download clean resumes that render well everywhere.'
              }
            ].map((item) => (
              <Card key={item.title} className="bg-white/5 border border-white/10 backdrop-blur">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-xs text-gray-400">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-white/5 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-gray-400 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} CareerForge Pro. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-white">Privacy</button>
            <button className="hover:text-white">Terms</button>
            <button className="hover:text-white">Status</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;