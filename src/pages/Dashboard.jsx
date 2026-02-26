import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import ATSProgressCircle from '../components/ATSProgressCircle';

const Dashboard = () => {
  const recentResumes = [
    {
      title: 'Senior Product Designer · Figma',
      updatedAt: 'Updated 2 days ago',
      atsScore: 86
    },
    {
      title: 'Product Manager · Stripe',
      updatedAt: 'Updated 1 week ago',
      atsScore: 79
    },
    {
      title: 'UX Researcher · Notion',
      updatedAt: 'Updated 3 weeks ago',
      atsScore: 81
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header row */}
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-slate-600">
            Welcome back. You&apos;re one step closer to shipping a great application.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/app/resume-builder">
            <Button className="px-4 py-2.5 text-xs md:text-sm">Create Resume</Button>
          </Link>
          <Link to="/app/ats-score">
            <Button variant="outline" className="px-4 py-2.5 text-xs md:text-sm">
              Run ATS Analysis
            </Button>
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid gap-5 lg:grid-cols-3">
        {/* Recent resumes */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-900">Recent resumes</h2>
            <button className="text-xs text-slate-500 hover:text-slate-700">
              View all
            </button>
          </div>
          <div className="mt-4 space-y-2">
            {recentResumes.map((resume) => (
              <div
                key={resume.title}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/60 px-4 py-3 text-xs hover:bg-slate-50"
              >
                <div>
                  <p className="font-medium text-slate-900">{resume.title}</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">{resume.updatedAt}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                    ATS · {resume.atsScore}
                  </span>
                  <button className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] text-slate-600 hover:bg-slate-100">
                    Open
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* ATS overview + upgrade */}
        <div className="space-y-4">
          <Card>
            <h2 className="text-sm font-semibold text-slate-900">ATS score overview</h2>
            <p className="mt-1 text-xs text-slate-500">
              Based on your last 5 analyzed resumes.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <ATSProgressCircle score={82} />
              <div className="space-y-2 text-xs text-slate-700">
                <p className="font-medium text-slate-900">You&apos;re above average</p>
                <p className="text-slate-600">
                  Most candidates stay between 55–70. You&apos;re in the top 20% of our users.
                </p>
                <ul className="mt-1 space-y-1 text-slate-600">
                  <li>• Strong keyword coverage</li>
                  <li>• Clear, scannable formatting</li>
                  <li>• Room to improve tailored bullets</li>
                </ul>
              </div>
            </div>
          </Card>
          <Card className="border-dashed border-brand-100 bg-gradient-to-br from-brand-50/70 to-purple-50/40">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
              Upgrade to Pro
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              Unlock AI rewriting & unlimited ATS scans.
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Pro users are 3.1× more likely to reach final interview rounds.
            </p>
            <Link to="/pricing">
              <Button className="mt-3 w-full py-2.5 text-xs">See pricing</Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;