import React, { useMemo, useState } from 'react';

const historyData = [
  {
    id: 1,
    title: 'Resume Optimization Session',
    preview: 'Improved impact bullets and ATS keyword density for product roles.',
    date: 'Today · 14:32',
    bucket: 'Today',
    count: 18,
  },
  {
    id: 2,
    title: 'ATS Keyword Analysis',
    preview: 'Identified missing skills and improved resume-job alignment score.',
    date: 'Yesterday · 18:05',
    bucket: 'Yesterday',
    count: 11,
  },
  {
    id: 3,
    title: 'Cover Letter Rewrite',
    preview: 'Generated concise role-specific opening and stronger closing CTA.',
    date: '2 days ago · 09:10',
    bucket: 'Older',
    count: 9,
  },
  {
    id: 4,
    title: 'Interview Prep Questions',
    preview: 'Created tailored Q&A set from job description and resume context.',
    date: '3 days ago · 20:45',
    bucket: 'Older',
    count: 14,
  },
  {
    id: 5,
    title: 'Headline & Summary Refresh',
    preview: 'Refined positioning statement for senior PM applications.',
    date: 'Yesterday · 11:20',
    bucket: 'Yesterday',
    count: 7,
  },
  {
    id: 6,
    title: 'Application Strategy Sprint',
    preview: 'Prioritized roles and generated tailored task checklist.',
    date: 'Today · 09:50',
    bucket: 'Today',
    count: 16,
  },
];

const filters = ['All', 'Today', 'Yesterday', 'Older'];

const History = () => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredHistory = useMemo(() => {
    return historyData.filter((item) => {
      const matchesFilter = activeFilter === 'All' || item.bucket === activeFilter;
      const matchesQuery =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.preview.toLowerCase().includes(query.toLowerCase());

      return matchesFilter && matchesQuery;
    });
  }, [query, activeFilter]);

  return (
    <div className="relative text-white">
      <div className="pointer-events-none absolute -top-32 -right-32 h-[450px] w-[450px] rounded-full bg-indigo-600/20 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[160px]" />

      <div className="relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Chat History</h1>
          <p className="mt-2 text-sm text-gray-400">
            Revisit AI sessions, refine ideas faster, and continue from where you left off.
          </p>
        </div>

        <div className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search conversations..."
                className="h-11 w-full rounded-full border border-white/15 bg-[#0f0f13]/80 px-4 text-sm text-white outline-none transition focus:border-indigo-400/50"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const active = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                      active
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                        : 'border border-white/15 bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredHistory.map((item, index) => (
            <article
              key={item.id}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-indigo-400/35 hover:shadow-[0_0_35px_rgba(99,102,241,0.2)]"
              style={{ animation: `cf-fade-in-up 420ms ease-out ${index * 70}ms both` }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-indigo-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">AI Session</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                  ✨
                </div>
              </div>

              <p className="relative z-10 mt-3 text-sm text-gray-300">{item.preview}</p>

              <div className="relative z-10 mt-5 flex items-center justify-between text-xs text-gray-400">
                <span>{item.date}</span>
                <span>{item.count} messages</span>
              </div>
            </article>
          ))}
        </div>

        {filteredHistory.length === 0 && (
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-sm text-gray-400 backdrop-blur-xl">
            No history found for this filter. Try another keyword or filter.
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
