/*import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import ATSProgressCircle from '../components/ATSProgressCircle';
import Button from '../components/Button';

const ATSPage = () => {
  const matchedKeywords = ['Product discovery', 'Design systems', 'Stakeholder management'];
  const missingKeywords = ['A/B testing', 'Accessibility', 'Journey mapping'];

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
      
      <Card>
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex-1">
            <Link
              to="/app/home"
              className="mb-2 inline-flex items-center text-xs text-slate-500 hover:text-slate-800"
            >
              <span className="mr-1">&#8592;</span> Back to home
            </Link>
            <h2 className="text-sm font-semibold text-slate-900">
              ATS score for &quot;Senior Product Designer · Figma&quot;
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              This is a simulated view. Plug in your backend to calculate real scores based on JD
              analysis.
            </p>
            <div className="mt-4 grid gap-3 text-xs text-slate-700 md:grid-cols-2">
              <div className="rounded-lg bg-slate-50 px-3 py-3">
                <p className="text-[11px] font-medium text-slate-500">
                  Overall match quality
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Strong match · Above average
                </p>
                <p className="mt-1 text-slate-600">
                  Your experience aligns well with the responsibilities and required skills.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 px-3 py-3">
                <p className="text-[11px] font-medium text-slate-500">
                  Screening likelihood
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Likely to be seen by a recruiter
                </p>
                <p className="mt-1 text-slate-600">
                  Strengthen missing keywords to increase your chances even more.
                </p>
              </div>
            </div>
            <Button className="mt-4 px-4 py-2 text-xs">Re-run analysis</Button>
          </div>
          <div className="flex items-center justify-center">
            <ATSProgressCircle score={84} />
          </div>
        </div>
      </Card>

      
      <div className="space-y-4">
        <Card>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Keyword match
          </h3>
          <p className="mt-1 text-xs text-slate-600">
            These skills and phrases appear in both the resume and the job description.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {matchedKeywords.map((kw) => (
              <span
                key={kw}
                className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
              >
                {kw}
              </span>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Missing keywords
          </h3>
          <p className="mt-1 text-xs text-slate-600">
            Consider weaving these concepts into your bullet points where they&apos;re accurate.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {missingKeywords.map((kw) => (
              <span
                key={kw}
                className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700"
              >
                {kw}
              </span>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Suggestions
          </h3>
          <ul className="mt-2 space-y-2 text-xs text-slate-700">
            <li>
              • Add at least one quantified metric related to experimentation (e.g., &quot;A/B
              tests&quot; or &quot;conversion uplift&quot;).
            </li>
            <li>
              • Call out accessibility considerations in at least one project (WCAG, inclusive
              design, etc.).
            </li>
            <li>
              • Mention cross-functional work (PM, Eng, Research) in 2–3 bullets to mirror the JD.
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default ATSPage;*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import ATSProgressCircle from '../components/ATSProgressCircle';
import Button from '../components/Button';

const ATSPage = () => {
  const [score, setScore] = useState(84);
  const [loading, setLoading] = useState(false);

  const matchedKeywords = ['Product discovery', 'Design systems', 'Stakeholder management'];
  const missingKeywords = ['A/B testing', 'Accessibility', 'Journey mapping'];

  const rerunAnalysis = () => {
    setLoading(true);

    setTimeout(() => {
      const newScore = Math.floor(Math.random() * 20) + 70;
      setScore(newScore);
      setLoading(false);
    }, 1200);
  };

  const scoreColor =
    score >= 85
      ? 'text-emerald-400'
      : score >= 75
      ? 'text-yellow-400'
      : 'text-red-400';

  return (
    <div className="relative text-white space-y-8">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-indigo-600/20 blur-[160px] rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-purple-600/20 blur-[160px] rounded-full" />

      {/* HEADER */}
      <div>
        <Link
          to="/app/home"
          className="inline-flex items-center text-xs text-gray-400 hover:text-white transition"
        >
          ← Back to home
        </Link>

        <h1 className="mt-4 text-2xl font-semibold">
          ATS Analysis Report
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Detailed breakdown for <span className="text-indigo-400">Senior Product Designer · Figma</span>
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">

        {/* LEFT PANEL */}
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Score Section */}
            <div className="flex flex-col items-center md:items-start gap-4">

              <ATSProgressCircle score={score} />

              <p className={`text-3xl font-bold ${scoreColor}`}>
                {score} / 100
              </p>

              <Button
                onClick={rerunAnalysis}
                disabled={loading}
                className="px-6 py-2 text-xs bg-gradient-to-r from-indigo-500 to-purple-600 border-0 hover:scale-105 transition disabled:opacity-60"
              >
                {loading ? 'Re-running...' : 'Re-run analysis'}
              </Button>

            </div>

            {/* Summary Cards */}
            <div className="grid gap-4 text-xs md:w-[60%]">

              <div className="rounded-xl bg-white/5 border border-white/10 backdrop-blur p-4">
                <p className="text-[11px] uppercase tracking-wider text-indigo-400">
                  Overall match quality
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Strong alignment with job description
                </p>
                <p className="mt-1 text-gray-400">
                  Your experience reflects core responsibilities and skill expectations.
                </p>
              </div>

              <div className="rounded-xl bg-white/5 border border-white/10 backdrop-blur p-4">
                <p className="text-[11px] uppercase tracking-wider text-purple-400">
                  Screening likelihood
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  High probability of recruiter visibility
                </p>
                <p className="mt-1 text-gray-400">
                  Improve keyword density to push score above 90.
                </p>
              </div>

            </div>
          </div>
        </Card>

        {/* RIGHT PANEL */}
        <div className="space-y-6">

          {/* Matched Keywords */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xs uppercase tracking-[0.25em] text-emerald-400">
              Keyword match
            </h3>

            <div className="mt-4 flex flex-wrap gap-3 text-xs">
              {matchedKeywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1 text-emerald-400 font-medium"
                >
                  {kw}
                </span>
              ))}
            </div>
          </Card>

          {/* Missing Keywords */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xs uppercase tracking-[0.25em] text-amber-400">
              Missing keywords
            </h3>

            <div className="mt-4 flex flex-wrap gap-3 text-xs">
              {missingKeywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1 text-amber-400 font-medium"
                >
                  {kw}
                </span>
              ))}
            </div>
          </Card>

          {/* Suggestions */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xs uppercase tracking-[0.25em] text-indigo-400">
              Improvement suggestions
            </h3>

            <ul className="mt-4 space-y-3 text-xs text-gray-300">
              <li>• Add quantified experimentation metrics (A/B tests, conversion uplift).</li>
              <li>• Highlight accessibility practices (WCAG, inclusive design).</li>
              <li>• Mention cross-functional collaboration in 2–3 bullets.</li>
            </ul>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default ATSPage;