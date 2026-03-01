import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import UserDropdown from './UserDropdown';

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
    <header className="relative sticky top-0 z-40">

      {/* Background blur layer */}
      <div className="absolute inset-0 bg-[#0f0f13]/80 backdrop-blur-xl border-b border-white/10" />

      {/* Subtle glow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-indigo-600/10 blur-[80px]" />

      <div className="relative flex items-center justify-between px-6 py-4 md:px-10">

        {/* LEFT TITLE SECTION */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
            Overview
          </p>

          <h1 className="mt-1 text-xl md:text-2xl font-semibold text-white tracking-tight">
            {title}
          </h1>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-6">

          {/* Upgrade Button */}
          <Link
            to="/pricing"
            className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium rounded-full 
                       bg-gradient-to-r from-indigo-500 to-purple-600 
                       hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Upgrade
          </Link>

          {/* User Dropdown */}
          <UserDropdown />

        </div>

      </div>
    </header>
  );
};

export default Navbar;