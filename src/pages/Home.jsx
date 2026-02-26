import React from 'react';
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

export default Home;

