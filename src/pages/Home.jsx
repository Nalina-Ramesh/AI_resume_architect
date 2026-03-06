/*import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="space-y-6">
      <Card className="flex flex-col items-start justify-between gap-4 md:flex-row">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Welcome
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Hey Alex, ready to ship your next application?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Start with a fresh ATS-proof resume, run an analysis on an existing one, or generate a
            tailored cover letter in minutes.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <Link to="/app/dashboard">
              <Button className="px-5 py-2.5 text-xs">Go to dashboard</Button>
            </Link>
            <Link to="/app/resume-builder">
              <Button variant="outline" className="px-5 py-2.5 text-xs">
                Create a resume
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-3 grid gap-3 text-xs text-slate-700 md:mt-0 md:w-64">
          <div className="rounded-lg bg-slate-50 px-3 py-3">
            <p className="text-[11px] font-medium text-slate-500">Next best action</p>
            <p className="mt-1 font-semibold text-slate-900">
              Finish your &quot;Figma · Senior Product Designer&quot; application.
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 px-3 py-3">
            <p className="text-[11px] font-medium text-slate-500">Quick stats</p>
            <p className="mt-1">3 active resumes · 5 ATS runs · 2 cover letters</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-slate-50/70">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            1 · Build
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-900">
            Craft an ATS-ready resume
          </p>
          <p className="mt-1 text-xs text-slate-600">
            Use the multi-step builder to organize your story with clean, recruiter-friendly
            sections.
          </p>
          <Link to="/app/resume-builder">
            <Button variant="outline" className="mt-3 px-4 py-2 text-xs">
              Open resume builder
            </Button>
          </Link>
        </Card>
        <Card className="bg-slate-50/70">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            2 · Analyze
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-900">
            Run an ATS score check
          </p>
          <p className="mt-1 text-xs text-slate-600">
            Compare your resume against real job descriptions and see what&apos;s missing.
          </p>
          <Link to="/app/ats-score">
            <Button variant="outline" className="mt-3 px-4 py-2 text-xs">
              View ATS insights
            </Button>
          </Link>
        </Card>
        <Card className="bg-slate-50/70">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            3 · Apply
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-900">
            Generate a cover letter
          </p>
          <p className="mt-1 text-xs text-slate-600">
            Turn job descriptions into structured, personalized cover letters you can fine-tune.
          </p>
          <Link to="/app/cover-letter">
            <Button variant="outline" className="mt-3 px-4 py-2 text-xs">
              Open cover letter tool
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Home;*/

import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="relative space-y-10 text-white">

      {/* Background Glow Layers */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-indigo-600/20 blur-[150px] rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full" />

      {/* HERO CARD */}
      <Card className="relative flex flex-col items-start justify-between gap-6 md:flex-row bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8 overflow-hidden">

        {/* subtle internal glow */}
        <div className="absolute -right-20 -top-20 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full" />

        <div className="relative">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-indigo-400">
            Welcome
          </p>

          <h2 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight">
            Welcome back,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Ready to ship your next application?
            </span>
          </h2>

          <p className="mt-4 text-sm text-gray-400 max-w-xl">
            Start with a fresh ATS-proof resume, run an analysis on an existing one,
            or generate a tailored cover letter in minutes.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs">
            <Link to="/app/dashboard">
              <Button className="px-6 py-3 text-xs bg-gradient-to-r from-indigo-500 to-purple-600 border-0 shadow-lg hover:scale-105 transition">
                Go to dashboard
              </Button>
            </Link>

            <Link to="/app/resume-builder">
              <Button
                variant="outline"
                className="px-6 py-3 text-xs border-white/20 text-gray-300 hover:bg-white/10"
              >
                Create a resume
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Info Cards */}
        <div className="relative mt-4 grid gap-4 text-xs md:mt-0 md:w-72">

          <div className="rounded-xl bg-white/5 border border-white/10 backdrop-blur px-4 py-4 shadow-lg hover:bg-white/10 transition">
            <p className="text-[11px] font-medium text-indigo-400 uppercase tracking-wider">
              Next best action
            </p>
            <p className="mt-2 font-semibold text-white">
              Tailor your resume for your highest-priority role this week.
            </p>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 backdrop-blur px-4 py-4 shadow-lg hover:bg-white/10 transition">
            <p className="text-[11px] font-medium text-purple-400 uppercase tracking-wider">
              Quick stats
            </p>
            <p className="mt-2 text-gray-300">
              Your recent resume, ATS, and cover-letter activity appears here.
            </p>
          </div>

        </div>
      </Card>

      {/* ACTION GRID */}
      <div className="grid gap-6 md:grid-cols-3">

        {/* Build */}
        <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-105 transition duration-300 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-indigo-600/20 blur-[80px] rounded-full" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
            1 · Build
          </p>

          <p className="mt-3 text-sm font-semibold text-white">
            Craft an ATS-ready resume
          </p>

          <p className="mt-2 text-xs text-gray-400">
            Use the multi-step builder to organize your story with clean,
            recruiter-friendly sections.
          </p>

          <Link to="/app/resume-builder">
            <Button
              variant="outline"
              className="mt-4 px-5 py-2 text-xs border-white/20 text-gray-300 hover:bg-white/10"
            >
              Open resume builder
            </Button>
          </Link>
        </Card>

        {/* Analyze */}
        <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-105 transition duration-300 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-purple-600/20 blur-[80px] rounded-full" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
            2 · Analyze
          </p>

          <p className="mt-3 text-sm font-semibold text-white">
            Run an ATS score check
          </p>

          <p className="mt-2 text-xs text-gray-400">
            Compare your resume against real job descriptions and see what's missing.
          </p>

          <Link to="/app/ats-score">
            <Button
              variant="outline"
              className="mt-4 px-5 py-2 text-xs border-white/20 text-gray-300 hover:bg-white/10"
            >
              View ATS insights
            </Button>
          </Link>
        </Card>

        {/* Apply */}
        <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-105 transition duration-300 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-pink-600/20 blur-[80px] rounded-full" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-400">
            3 · Apply
          </p>

          <p className="mt-3 text-sm font-semibold text-white">
            Generate a cover letter
          </p>

          <p className="mt-2 text-xs text-gray-400">
            Turn job descriptions into structured, personalized cover letters
            you can fine-tune.
          </p>

          <Link to="/app/cover-letter">
            <Button
              variant="outline"
              className="mt-4 px-5 py-2 text-xs border-white/20 text-gray-300 hover:bg-white/10"
            >
              Open cover letter tool
            </Button>
          </Link>
        </Card>

      </div>
    </div>
  );
};

export default Home;
