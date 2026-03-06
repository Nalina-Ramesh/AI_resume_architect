import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearStoredAuth, readStoredUser, userInitial } from '../utils/authUser';

const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const syncUserFromStorage = () => {
    const nextUser = readStoredUser();
    setUser(nextUser);

    if (import.meta.env.DEV) {
      console.log('[Auth] User dropdown synced:', nextUser?.email || 'guest');
    }
  };

  useEffect(() => {
    syncUserFromStorage();

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleAuthUpdate = () => {
      syncUserFromStorage();
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('auth-user-updated', handleAuthUpdate);
    window.addEventListener('storage', handleAuthUpdate);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('auth-user-updated', handleAuthUpdate);
      window.removeEventListener('storage', handleAuthUpdate);
    };
  }, []);

  const handleLogout = () => {
    clearStoredAuth();
    navigate('/login');
  };

  const displayName = user?.name?.trim() || 'My Account';
  const displayEmail = user?.email?.trim() || 'Email not available';
  const avatarLetter = userInitial(displayName);

  const MenuItem = ({ label, onClick, danger }) => (
    <button
      onClick={() => {
        setOpen(false);
        onClick();
      }}
      className={`group w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-all duration-200
        ${
          danger
            ? 'text-red-400 hover:bg-red-500/10'
            : 'text-gray-300 hover:bg-white/5'
        }`}
    >
      <span>{label}</span>
      <span className="opacity-0 group-hover:opacity-100 transition text-xs">
        →
      </span>
    </button>
  );

  return (
    <div className="relative" ref={dropdownRef}>
      
      {/* Avatar Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative h-11 w-11 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center font-semibold text-white shadow-xl transition-all duration-300 hover:scale-110"
      >
        {avatarLetter}

        {/* Online dot */}
        <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#0f0f13]" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-5 w-64 z-50 animate-dropdown">

          {/* Glow behind */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 blur-2xl rounded-2xl" />

          <div className="relative rounded-2xl bg-[#16161c]/95 backdrop-blur-xl border border-white/10 shadow-2xl p-2 overflow-hidden">

            {/* Header */}
            <div className="px-4 py-4 border-b border-white/10">
              <p className="text-sm font-semibold text-white">
                {displayName}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {displayEmail}
              </p>
            </div>

            {/* Menu */}
            <div className="py-2 space-y-1">

              <MenuItem
                label="My Profile"
                onClick={() => navigate('/app/profile')}
              />

                <MenuItem
                label="AI Chatbot"
                onClick={() => navigate('/app/chatbot')}
                />

                <MenuItem
                label="History"
                onClick={() => navigate('/app/history')}
                />

              <div className="my-2 border-t border-white/10" />

              <MenuItem
                label="Settings"
                onClick={() => navigate('/app/profile')}
              />

              <MenuItem
                label="Go to Home"
                onClick={() => navigate('/app/home')}
              />

              <div className="my-2 border-t border-white/10" />

              <MenuItem
                label="Logout"
                onClick={handleLogout}
                danger
              />

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
