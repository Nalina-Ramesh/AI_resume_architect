
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { clearStoredAuth, readStoredUser, userInitial } from '../utils/authUser';
import API from '../api/api';

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

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get('/profile');
        const profileUser = res?.data?.user;

        if (profileUser) {
          const merged = {
            ...readStoredUser(),
            ...profileUser,
          };
          localStorage.setItem('user', JSON.stringify(merged));
          setUser(merged);
          window.dispatchEvent(new Event('auth-user-updated'));
        }
      } catch {
        // Keep local stored fallback if profile fetch fails
      }
    };

    fetchProfile();
  }, []);

  const userMeta = useMemo(() => {
    const name =
      user?.fullName?.trim() ||
      user?.name?.trim() ||
      user?.username?.trim() ||
      user?.email?.split('@')?.[0]?.trim() ||
      'My Account';
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
                  Basic · Standard
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Included with your account · No billing required
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
