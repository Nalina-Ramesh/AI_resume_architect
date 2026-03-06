/*import React from 'react';
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

      
      <div className="grid gap-5 lg:grid-cols-3">
        
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

        { ATS overview + upgrade }
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

export default Dashboard;*/

import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import ATSProgressCircle from '../components/ATSProgressCircle';
import API from '../api/api';
import { readStoredUser } from '../utils/authUser';

const Dashboard = () => {
  const [user, setUser] = useState(() => readStoredUser());
  const [recentResumes, setRecentResumes] = useState([]);
  const [loadingResumes, setLoadingResumes] = useState(true);

  useEffect(() => {
    const syncUser = () => setUser(readStoredUser());
    window.addEventListener('auth-user-updated', syncUser);
    window.addEventListener('storage', syncUser);
    return () => {
      window.removeEventListener('auth-user-updated', syncUser);
      window.removeEventListener('storage', syncUser);
    };
  }, []);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        setLoadingResumes(true);
        const res = await API.get('/my-resumes');
        const list = Array.isArray(res?.data) ? res.data : [];
        setRecentResumes(list);
      } catch {
        setRecentResumes([]);
      } finally {
        setLoadingResumes(false);
      }
    };

    fetchResumes();
  }, []);

  const getScoreColor = (score) => {
    if (score >= 85) return 'text-emerald-400';
    if (score >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  const toRelativeDate = (value) => {
    if (!value) return 'Updated recently';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 'Updated recently';

    const diffMs = Date.now() - date.getTime();
    const day = 24 * 60 * 60 * 1000;
    const days = Math.max(0, Math.floor(diffMs / day));

    if (days === 0) return 'Updated today';
    if (days === 1) return 'Updated yesterday';
    if (days < 7) return `Updated ${days} days ago`;
    const weeks = Math.floor(days / 7);
    if (weeks < 5) return `Updated ${weeks} week${weeks > 1 ? 's' : ''} ago`;
    return `Updated ${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? 's' : ''} ago`;
  };

  const firstName = useMemo(() => {
    const displayName = user?.fullName || user?.name || user?.username || 'there';
    return displayName.split(' ')[0];
  }, [user]);

  const dashboardStats = useMemo(() => {
    const total = recentResumes.length;
    const withScores = recentResumes.filter((item) => typeof item?.atsScore === 'number');
    const avgScore = withScores.length
      ? Math.round(withScores.reduce((sum, item) => sum + item.atsScore, 0) / withScores.length)
      : 0;
    const topScore = withScores.length
      ? Math.max(...withScores.map((item) => item.atsScore))
      : 0;

    return {
      totalResumes: total,
      avgScore,
      topScore,
    };
  }, [recentResumes]);

  return (
    <div className="relative text-white space-y-10">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-indigo-600/20 blur-[160px] rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-purple-600/20 blur-[160px] rounded-full" />

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <h1 className="text-2xl font-semibold">
            Welcome back, {firstName}
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Here’s a live overview of your resume activity and ATS performance.
          </p>
        </div>

        <div className="flex gap-4">
          <Link to="/app/resume-builder">
            <Button className="px-6 py-2 text-sm bg-gradient-to-r from-indigo-500 to-purple-600 border-0 hover:scale-105 transition">
              Create Resume
            </Button>
          </Link>

          <Link to="/app/ats-score">
            <Button
              variant="outline"
              className="px-6 py-2 text-sm border-white/20 text-gray-300 hover:bg-white/10"
            >
              Run ATS Analysis
            </Button>
          </Link>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid gap-8 lg:grid-cols-3">

        <Card className="lg:col-span-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Total resumes</p>
              <p className="mt-2 text-2xl font-semibold text-white">{dashboardStats.totalResumes}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Average ATS</p>
              <p className={`mt-2 text-2xl font-semibold ${getScoreColor(dashboardStats.avgScore)}`}>
                {dashboardStats.avgScore || '--'}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Top score</p>
              <p className={`mt-2 text-2xl font-semibold ${getScoreColor(dashboardStats.topScore)}`}>
                {dashboardStats.topScore || '--'}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Profile plan</p>
              <p className="mt-2 text-2xl font-semibold text-white">Basic</p>
            </div>
          </div>
        </Card>

        {/* RECENT RESUMES */}
        <Card className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm uppercase tracking-[0.25em] text-indigo-400">
              Recent Resumes
            </h2>
            <button className="text-xs text-gray-400 hover:text-white transition">
              View all
            </button>
          </div>

          <div className="space-y-4">
            {loadingResumes && (
              <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-6 text-sm text-gray-400">
                Loading your resumes...
              </div>
            )}

            {!loadingResumes && recentResumes.length === 0 && (
              <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-6 text-sm text-gray-400">
                No resumes yet. Create your first resume to see activity here.
              </div>
            )}

            {!loadingResumes && recentResumes.slice(0, 5).map((resume) => (
              <div
                key={resume._id || resume.title || resume.createdAt}
                className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-5 py-4 hover:bg-white/10 transition-all duration-300 hover:shadow-lg"
              >
                <div>
                  <p className="font-medium text-white truncate max-w-[380px]">
                    {resume.headline || resume.title || 'Untitled Resume'}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {toRelativeDate(resume.updatedAt || resume.createdAt)}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`text-sm font-semibold ${getScoreColor(Number(resume.atsScore || 0))}`}
                  >
                    {typeof resume.atsScore === 'number' ? resume.atsScore : '--'}
                  </span>

                  <Link
                    to="/app/resume-builder"
                    className="px-4 py-1.5 text-xs rounded-full border border-white/20 text-gray-300 hover:bg-white/10 transition"
                  >
                    Open
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* ATS OVERVIEW */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">

            <h2 className="text-sm uppercase tracking-[0.25em] text-purple-400">
              ATS Overview
            </h2>

            <div className="mt-6 flex items-center gap-6">

              <ATSProgressCircle score={82} />
              

              <div className="space-y-3 text-sm text-gray-300">
                <p className="font-semibold text-white">
                  {dashboardStats.avgScore >= 75
                    ? "You're performing above average"
                    : 'You have room to improve'}
                </p>

                <p className="text-gray-400">
                  {dashboardStats.avgScore
                    ? `Your current average ATS is ${dashboardStats.avgScore}. Keep optimizing keyword match and impact bullets.`
                    : 'Run ATS analysis on your resume to see personalized insights here.'}
                </p>

                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Strong keyword density</li>
                  <li>• Clear formatting</li>
                  <li>• Improve measurable impact statements</li>
                </ul>
              </div>

            </div>

          </Card>

          {/* UPGRADE CARD */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">

            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/30 blur-[100px] rounded-full" />

            <h3 className="text-sm uppercase tracking-[0.25em] text-indigo-300">
              Upgrade to Pro
            </h3>

            <p className="mt-4 text-white font-semibold">
              Unlock AI rewriting & unlimited ATS scans.
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Pro users are 3.1× more likely to reach final interview rounds.
            </p>

            <Link to="/pricing">
              <Button className="mt-6 w-full py-2.5 text-sm bg-gradient-to-r from-indigo-500 to-purple-600 border-0 hover:scale-105 transition">
                See Pricing
              </Button>
            </Link>

          </Card>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;
