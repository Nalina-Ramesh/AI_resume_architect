import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const pageTitles = {
  '/app': 'Home',
  '/app/home': 'Home',
  '/app/dashboard': 'Dashboard',
  '/app/resume-builder': 'Resume Builder',
  '/app/ats-score': 'ATS Score',
  '/app/cover-letter': 'Cover Letter Generator',
  '/pricing': 'Pricing',
  '/app/profile': 'Profile'
};

const Navbar = () => {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Dashboard';

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Overview
          </p>
          <h1 className="text-lg font-semibold text-slate-900 md:text-xl">{title}</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/pricing"
            className="hidden rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 md:inline-flex"
          >
            Upgrade
          </Link>
          <Link to="/app/profile" className="flex items-center gap-3">
            <div className="text-right text-xs">
              <p className="font-medium text-slate-900">Alex Candidate</p>
              <p className="text-slate-500">Product Designer</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-brand-500 to-purple-500 text-xs font-semibold text-white">
              AC
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;