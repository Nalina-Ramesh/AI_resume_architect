import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const navItems = [
  { name: 'Dashboard', path: '/app/dashboard' },
  { name: 'Resume Builder', path: '/app/resume-builder' },
  { name: 'ATS Score', path: '/app/ats-score' },
  { name: 'Cover Letter', path: '/app/cover-letter' },
  { name: 'Profile', path: '/app/profile' },
  { name: 'AI Chatbot', path: '/app/chatbot' },
  { name: 'Chat History', path: '/app/history' }
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