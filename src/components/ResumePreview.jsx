import React from 'react';

const ResumePreview = ({ data }) => {
  const {
    fullName,
    headline,
    email,
    phone,
    location,
    summary,
    experience,
    education,
    skills,
    projects
  } = data;

  return (
    <div className="card-xl h-full overflow-hidden">
      <div className="h-full overflow-y-auto bg-slate-100 p-4 scrollbar-thin">
        <div className="mx-auto max-w-[800px] rounded-lg bg-white p-8 text-sm leading-relaxed shadow-sm">
          <header className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              {fullName || 'Alex Candidate'}
            </h2>
            <p className="text-sm font-medium text-brand-600">
              {headline || 'Product Designer'}
            </p>
            <p className="mt-2 text-xs text-slate-600">
              {email || 'alex.candidate@email.com'} ·{' '}
              {phone || '+1 (555) 555-0100'} · {location || 'Remote · Anywhere'}
            </p>
          </header>

          <section className="mt-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Summary
            </h3>
            <p className="mt-1 text-slate-700">
              {summary ||
                'Product designer with 5+ years of experience building thoughtful, user-centered SaaS products. Comfortable collaborating with cross-functional teams and shipping fast in ambiguous environments.'}
            </p>
          </section>

          <section className="mt-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Experience
            </h3>
            <div className="mt-2 space-y-3 text-slate-700">
              <div>
                <p className="font-semibold">Senior Product Designer · Linear</p>
                <p className="text-xs text-slate-500">2021 – Present · Remote</p>
                <ul className="mt-1 list-disc pl-4 text-sm">
                  <li>
                    Led end-to-end design of workflow automation features adopted by 10k+
                    engineering teams.
                  </li>
                  <li>
                    Collaborated with PM and Eng to ship improvements that reduced cycle time by
                    18%.
                  </li>
                </ul>
              </div>
              {experience && (
                <div className="whitespace-pre-line text-sm">{experience}</div>
              )}
            </div>
          </section>

          <section className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Education
              </h3>
              <div className="mt-2 text-sm text-slate-700">
                <p className="font-semibold">
                  {education || 'B.Sc. in Human-Computer Interaction'}
                </p>
                <p className="text-xs text-slate-500">University of Design · 2017</p>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Skills
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                {skills ||
                  'Product Design, UX Research, Interaction Design, Figma, Design Systems, Prototyping, User Testing'}
              </p>
            </div>
          </section>

          <section className="mt-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Projects
            </h3>
            <div className="mt-2 text-sm text-slate-700">
              {projects ? (
                <p className="whitespace-pre-line">{projects}</p>
              ) : (
                <ul className="list-disc pl-4">
                  <li>
                    <span className="font-semibold">CareerForge Pro</span> – Designed an ATS-proof
                    resume builder that blends AI-assisted content with recruiter-friendly layouts.
                  </li>
                  <li>
                    <span className="font-semibold">Inbox Zero</span> – Simplified email triage tool
                    that helped power users save 4+ hours per week.
                  </li>
                </ul>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;