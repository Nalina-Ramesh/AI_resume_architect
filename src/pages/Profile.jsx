/*import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Profile = () => {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.05fr)]">
      <Card>
        <Link
          to="/app/home"
          className="mb-3 inline-flex items-center text-xs text-slate-500 hover:text-slate-800"
        >
          <span className="mr-1">&#8592;</span> Back to home
        </Link>
        <h2 className="text-sm font-semibold text-slate-900">Profile</h2>
        <p className="mt-1 text-xs text-slate-500">
          Manage your account details and subscription.
        </p>
        <div className="mt-5 grid gap-4 text-sm md:grid-cols-2">
          <div>
            <p className="text-xs font-medium text-slate-500">Name</p>
            <p className="mt-1 text-slate-900">Alex Candidate</p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Email</p>
            <p className="mt-1 text-slate-900">alex.candidate@example.com</p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Role</p>
            <p className="mt-1 text-slate-900">Product Designer</p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Timezone</p>
            <p className="mt-1 text-slate-900">GMT+5:30</p>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <Button variant="outline" className="px-4 py-2 text-xs">
            Edit profile
          </Button>
          <Button
            variant="outline"
            className="px-4 py-2 text-xs border-red-200 text-red-600 hover:bg-red-50"
          >
            Logout
          </Button>
        </div>
      </Card>

      <div className="space-y-4">
        <Card>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Subscription
          </h3>
          <div className="mt-3 flex items-center justify-between text-sm">
            <div>
              <p className="font-semibold text-slate-900">Pro · Monthly</p>
              <p className="mt-1 text-xs text-slate-500">
                Renews on March 28, 2026 · Billed via Stripe
              </p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              Active
            </span>
          </div>
          <div className="mt-4 flex gap-2">
            <Button variant="outline" className="px-4 py-2 text-xs">
              Manage billing
            </Button>
            <Button
              variant="outline"
              className="px-4 py-2 text-xs border-amber-200 text-amber-700 hover:bg-amber-50"
            >
              Cancel plan
            </Button>
          </div>
        </Card>
        <Card>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Account activity
          </h3>
          <ul className="mt-3 space-y-2 text-xs text-slate-700">
            <li>• Last login: 2 hours ago · Chrome on Windows</li>
            <li>• 3 resumes edited this week</li>
            <li>• 5 ATS analyses and 2 cover letters generated</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Profile;*/
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { clearStoredAuth, readStoredUser, userInitial } from '../utils/authUser';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => readStoredUser());

  useEffect(() => {
    const syncUser = () => setUser(readStoredUser());

    window.addEventListener('auth-user-updated', syncUser);
    window.addEventListener('storage', syncUser);

    return () => {
      window.removeEventListener('auth-user-updated', syncUser);
      window.removeEventListener('storage', syncUser);
    };
  }, []);

  const userMeta = useMemo(() => {
    const name = user?.name?.trim() || 'My Account';
    const email = user?.email?.trim() || 'Email not available';
    return {
      name,
      email,
      initial: userInitial(name, 'A'),
    };
  }, [user]);

  const handleLogout = () => {
    clearStoredAuth();
    navigate('/login');
  };

  return (
    <div className="relative text-white space-y-8">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-indigo-600/20 blur-[160px] rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-purple-600/20 blur-[160px] rounded-full" />

      {/* Header */}
      <div>
        <Link
          to="/app/home"
          className="inline-flex items-center text-xs text-gray-400 hover:text-white transition"
        >
          ← Back to home
        </Link>

        <h1 className="mt-4 text-2xl font-semibold">
          Account Settings
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Manage your profile, subscription, and activity.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">

        {/* LEFT PROFILE CARD */}
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

          <h2 className="text-sm uppercase tracking-[0.25em] text-indigo-400">
            Profile Details
          </h2>

          <div className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-sm font-semibold text-white">
            {userMeta.initial}
          </div>

          <div className="mt-6 grid gap-6 text-sm md:grid-cols-2">

            <div>
              <p className="text-xs text-gray-400">Name</p>
              <p className="mt-1 text-white font-medium">
                {userMeta.name}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Email</p>
              <p className="mt-1 text-white font-medium">
                {userMeta.email}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Role</p>
              <p className="mt-1 text-white font-medium">
                Candidate
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Timezone</p>
              <p className="mt-1 text-white font-medium">
                {Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local timezone'}
              </p>
            </div>

          </div>

          <div className="mt-8 flex gap-4">

            <Button
              variant="outline"
              className="px-5 py-2 text-xs border-white/20 text-gray-300 hover:bg-white/10"
            >
              Edit profile (soon)
            </Button>

            <Button
              type="button"
              onClick={handleLogout}
              className="px-5 py-2 text-xs bg-gradient-to-r from-red-500 to-pink-600 border-0 hover:scale-105 transition"
            >
              Logout
            </Button>

          </div>

        </Card>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Subscription Card */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">

            <h3 className="text-sm uppercase tracking-[0.25em] text-purple-400">
              Subscription
            </h3>

            <div className="mt-5 flex items-center justify-between">

              <div>
                <p className="text-lg font-semibold text-white">
                  Pro · Monthly
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Renews on March 28, 2026 · Billed via Stripe
                </p>
              </div>

              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-4 py-1 text-xs font-medium text-emerald-400">
                Active
              </span>

            </div>

            <div className="mt-6 flex gap-3">

              <Button
                variant="outline"
                className="px-5 py-2 text-xs border-white/20 text-gray-300 hover:bg-white/10"
              >
                Manage billing
              </Button>

              <Button
                variant="outline"
                className="px-5 py-2 text-xs border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
              >
                Cancel plan
              </Button>

            </div>

          </Card>

          {/* Activity Card */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">

            <h3 className="text-sm uppercase tracking-[0.25em] text-indigo-400">
              Account Activity
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              <li>• Last login: Current session</li>
              <li>• Resume and ATS activity will appear here</li>
              <li>• Security events dashboard is coming soon</li>
            </ul>

          </Card>

        </div>
      </div>
    </div>
  );
};

export default Profile;
