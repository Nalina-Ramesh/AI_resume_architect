import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import ATSProgressCircle from '../components/ATSProgressCircle';
import Button from '../components/Button';

const ATSPage = () => {
  const matchedKeywords = ['Product discovery', 'Design systems', 'Stakeholder management'];
  const missingKeywords = ['A/B testing', 'Accessibility', 'Journey mapping'];

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
      {/* Score + summary */}
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

      {/* Keywords */}
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

export default ATSPage;