import React from 'react';

const ResumePreview = ({ data, selectedTemplate = 'classic', activeStep = -1 }) => {
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

  const sectionText = (value, fallback, sectionIndex) => {
    if (value && value.trim()) return value;
    if (activeStep === sectionIndex) return '';
    return fallback;
  };

  const previewData = {
    fullName: sectionText(fullName, 'Alex Candidate', 0),
    headline: sectionText(headline, 'Product Designer', 0),
    email: sectionText(email, 'alex.candidate@email.com', 0),
    phone: sectionText(phone, '+1 (555) 555-0100', 0),
    location: sectionText(location, 'Remote · Anywhere', 0),
    summary: sectionText(
      summary,
      'Product designer with 5+ years of experience building thoughtful, user-centered SaaS products. Comfortable collaborating with cross-functional teams and shipping fast in ambiguous environments.',
      0
    ),
    experience: sectionText(experience, '', 1),
    education: sectionText(education, 'B.Sc. in Human-Computer Interaction', 2),
    skills: sectionText(
      skills,
      'Product Design, UX Research, Interaction Design, Figma, Design Systems, Prototyping, User Testing',
      3
    ),
    projects: sectionText(projects, '', 4)
  };

  const templateStyles = {
    classic: {
      wrapper: 'bg-slate-100',
      card: 'rounded-lg bg-white p-8 text-sm leading-relaxed shadow-sm',
      header: 'border-b border-slate-200 pb-4',
      name: 'text-2xl font-semibold text-slate-900',
      title: 'text-sm font-medium text-brand-600',
      meta: 'mt-2 text-xs text-slate-600',
      sectionTitle: 'text-xs font-semibold uppercase tracking-[0.18em] text-slate-500',
      body: 'text-slate-700'
    },
    modern: {
      wrapper: 'bg-[#eef2ff]',
      card: 'rounded-2xl border border-indigo-200 bg-white p-8 text-sm leading-relaxed shadow-md',
      header: 'border-b-2 border-indigo-200 pb-4',
      name: 'text-2xl font-bold text-indigo-950',
      title: 'text-sm font-semibold text-indigo-600',
      meta: 'mt-2 text-xs text-indigo-800',
      sectionTitle: 'text-xs font-bold uppercase tracking-[0.22em] text-indigo-500',
      body: 'text-slate-800'
    },
    minimal: {
      wrapper: 'bg-white',
      card: 'rounded-none border border-slate-200 bg-white p-10 text-sm leading-relaxed shadow-none',
      header: 'border-b border-slate-300 pb-4',
      name: 'text-[28px] font-light text-slate-900',
      title: 'text-sm font-medium text-slate-700',
      meta: 'mt-2 text-xs text-slate-500',
      sectionTitle: 'text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500',
      body: 'text-slate-700'
    }
  };

  const styles = templateStyles[selectedTemplate] || templateStyles.classic;

  return (
    <div className="card-xl h-full overflow-hidden">
      <div className={`h-full overflow-y-auto p-4 scrollbar-thin ${styles.wrapper}`}>
        <div className={`mx-auto max-w-[800px] ${styles.card}`}>
          <header className={styles.header}>
            <h2 className={styles.name}>
              {previewData.fullName || ' '}
            </h2>
            <p className={styles.title}>
              {previewData.headline || ' '}
            </p>
            <p className={styles.meta}>
              {previewData.email || ' '} · {previewData.phone || ' '} · {previewData.location || ' '}
            </p>
          </header>

          <section className="mt-5">
            <h3 className={styles.sectionTitle}>
              Summary
            </h3>
            <p className={`mt-1 whitespace-pre-line ${styles.body}`}>
              {previewData.summary || ' '}
            </p>
          </section>

          <section className="mt-5">
            <h3 className={styles.sectionTitle}>
              Experience
            </h3>
            <div className={`mt-2 space-y-3 whitespace-pre-line ${styles.body}`}>
              {previewData.experience || ' '}
            </div>
          </section>

          <section className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className={styles.sectionTitle}>
                Education
              </h3>
              <div className={`mt-2 text-sm whitespace-pre-line ${styles.body}`}>
                <p className="font-semibold">
                  {previewData.education || ' '}
                </p>
              </div>
            </div>
            <div>
              <h3 className={styles.sectionTitle}>
                Skills
              </h3>
              <p className={`mt-2 text-sm whitespace-pre-line ${styles.body}`}>
                {previewData.skills || ' '}
              </p>
            </div>
          </section>

          <section className="mt-5">
            <h3 className={styles.sectionTitle}>
              Projects
            </h3>
            <div className={`mt-2 text-sm whitespace-pre-line ${styles.body}`}>
              {previewData.projects || ' '}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
