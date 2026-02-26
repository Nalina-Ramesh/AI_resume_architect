import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

const navItems = [
  { label: 'Home', to: '/app/home' },
  { label: 'Dashboard', to: '/app/dashboard' },
  { label: 'Resume Builder', to: '/app/resume-builder' },
  { label: 'ATS Score', to: '/app/ats-score' },
  { label: 'Cover Letter', to: '/app/cover-letter' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Profile', to: '/app/profile' }
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Mobile top bar toggle */}
      <div className="flex items-center border-b border-slate-200 bg-white px-4 py-3 md:hidden">
        <button
          onClick={() => setOpen((o) => !o)}
          className="mr-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50"
        >
          <HiOutlineMenuAlt2 className="h-5 w-5 text-slate-700" />
        </button>
        <span className="text-sm font-semibold text-slate-900">CareerForge Pro</span>
      </div>

      <aside
        className={`${
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } fixed inset-y-0 z-30 w-64 border-r border-slate-200 bg-white px-4 py-6 shadow-soft transition-transform duration-300 md:static md:block`}
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl gradient-primary" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                CareerForge
              </p>
              <p className="text-sm font-semibold text-slate-900">CareerForge Pro</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-slate-500 hover:text-slate-900"
          >
            ×
          </button>
        </div>

        <nav className="space-y-1 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/app'}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-lg px-3 py-2.5 transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-8 rounded-lg bg-slate-900 px-4 py-4 text-xs text-slate-50">
          <p className="font-semibold">Upgrade to Pro</p>
          <p className="mt-1 text-slate-300">
            Unlock AI rewriting, unlimited resumes, and advanced ATS analytics.
          </p>
          <Link
            to="/pricing"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-xs font-medium text-slate-900 hover:bg-slate-100"
          >
            View Plans
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;