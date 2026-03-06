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
                      Growth Marketing Manager · SaaS
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    ATS Score · 88
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-indigo-500/25 blur-2xl animate-cf-float-slow" />
                  <div className="pointer-events-none absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-purple-500/25 blur-2xl animate-cf-float-fast" />

                  <div className="relative z-10 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
                    <div className="rounded-2xl border border-white/10 bg-[#141428]/80 p-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400">Before</p>
                      <div className="mt-2 space-y-2">
                        <div className="h-2.5 w-20 rounded bg-gray-500/30" />
                        <div className="h-2 w-full rounded bg-gray-500/25" />
                        <div className="h-2 w-[88%] rounded bg-gray-500/20" />
                        <div className="h-2 w-[72%] rounded bg-gray-500/20" />
                      </div>
                      <div className="mt-3 inline-flex rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 text-[11px] text-amber-300">
                        ATS 62
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 px-1">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500/10 text-base animate-pulse">
                        🤖
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300">AI Optimize</span>
                      <svg viewBox="0 0 42 18" className="h-5 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9h34m0 0-6-5m6 5-6 5" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cf-dash-flow" />
                      </svg>
                    </div>

                    <div className="rounded-2xl border border-indigo-400/30 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 p-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-indigo-200">After</p>
                      <div className="mt-2 space-y-2">
                        <div className="h-2.5 w-24 rounded bg-indigo-300/60" />
                        <div className="h-2 w-full rounded bg-indigo-300/45" />
                        <div className="h-2 w-[92%] rounded bg-indigo-300/35" />
                        <div className="h-2 w-[85%] rounded bg-indigo-300/35" />
                      </div>
                      <div className="mt-3 inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] text-emerald-300">
                        ATS 88
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full border border-indigo-400/25 bg-indigo-500/10 px-2.5 py-1 text-indigo-200">AI-guided rewrite</span>
                    <span className="rounded-full border border-purple-400/25 bg-purple-500/10 px-2.5 py-1 text-purple-200">Keyword alignment</span>
                    <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-1 text-emerald-200">Higher ATS readiness</span>
                  </div>
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
