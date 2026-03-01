/*import React, { useState } from 'react';
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

export default Sidebar;*/
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const navItems = [
  { name: 'Dashboard', path: '/app/dashboard' },
  { name: 'Resume Builder', path: '/app/resume-builder' },
  { name: 'ATS Score', path: '/app/ats-score' },
  { name: 'Cover Letter', path: '/app/cover-letter' },
  { name: 'Profile', path: '/app/profile' }
];

const Sidebar = () => {
  return (
    <div className="relative w-64 bg-[#0f0f13] border-r border-white/10 text-white flex flex-col px-6 py-8 overflow-hidden">

      {/* Glow background */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-indigo-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-80px] right-[-60px] w-60 h-60 bg-purple-600/20 blur-[120px] rounded-full" />

      {/* Logo Section */}
      <div className="relative z-10 flex items-center gap-3 mb-12">

        <div className="p-[2px] rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600">
          <img
            src={logo}
            alt="CareerForge Logo"
            className="h-9 w-9 rounded-xl bg-black object-contain"
          />
        </div>

        <span className="text-lg font-semibold tracking-wide">
          CareerForge Pro
        </span>

      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex flex-col gap-3 text-sm">

        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `group relative px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border border-indigo-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex items-center justify-between">

                <span className="font-medium">
                  {item.name}
                </span>

                {/* Active indicator dot */}
                {isActive && (
                  <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                )}

              </div>
            )}
          </NavLink>
        ))}

      </nav>

      {/* Bottom subtle footer */}
      <div className="relative z-10 mt-auto text-xs text-gray-500 pt-10">
        © {new Date().getFullYear()} CareerForge
      </div>

    </div>
  );
};

export default Sidebar;