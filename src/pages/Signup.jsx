/*import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only placeholder – fake signup flow
    navigate('/app/home');
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="flex w-full items-center justify-center px-4 py-10 sm:px-6 lg:w-1/2 lg:px-10">
        <div className="w-full max-w-md">
          <Link to="/" className="mb-6 inline-flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl gradient-primary" />
            <span className="text-sm font-semibold text-slate-900">CareerForge Pro</span>
          </Link>

          <h2 className="text-xl font-semibold text-slate-900">Create your account</h2>
          <p className="mt-1 text-sm text-slate-500">
            Build ATS-optimized resumes and cover letters in minutes.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Input label="Full name" placeholder="Alex Candidate" required />
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="Create a secure password"
              autoComplete="new-password"
              required
            />
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <input type="checkbox" className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300" />
              <span>
                I agree to the{' '}
                <button type="button" className="text-slate-800 underline">
                  Terms
                </button>{' '}
                and{' '}
                <button type="button" className="text-slate-800 underline">
                  Privacy Policy
                </button>
                .
              </span>
            </div>
            <Button type="submit" className="w-full py-2.5 text-sm">
              Get started for free
            </Button>
          </form>

          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-3 text-[11px] text-slate-400">
              <div className="h-px flex-1 bg-slate-200" />
              or sign up with
              <div className="h-px flex-1 bg-slate-200" />
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50">
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50">
                <span>LinkedIn</span>
              </button>
            </div>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-brand-600 hover:text-brand-700">
              Log in
            </Link>
          </p>
        </div>
      </div>

      <div className="relative hidden w-1/2 items-center justify-center bg-gradient-to-br from-brand-500 via-purple-500 to-slate-900 p-10 text-white lg:flex">
        <div className="max-w-md space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Job search, simplified
          </p>
          <h1 className="text-3xl font-semibold leading-tight">
            Ship applications that feel tailored, not templated.
          </h1>
          <p className="text-sm text-white/80">
            CareerForge Pro helps you match each job posting with the right wording, skills, and
            structure—without losing your voice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;*/
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import logo from "../assets/logo.png";
const Signup = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulated signup
    setTimeout(() => {
      setLoading(false);
      navigate('/app/home');
    }, 1200);
  };

  return (
    <div className="relative flex min-h-screen bg-[#0f0f13] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full" />

      {/* LEFT FORM SECTION */}
      <div className="relative flex w-full items-center justify-center px-6 py-12 lg:w-1/2">

        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">

        <Link to="/" className="mb-8 inline-flex items-center gap-3">
  <div className="p-[2px] rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600">
    <img
      src={logo}
      alt="CareerForge Logo"
      className="h-9 w-9 rounded-xl bg-black object-contain"
    />
  </div>
  <span className="text-sm font-semibold text-white">
    CareerForge Pro
  </span>
</Link>

          <h2 className="text-2xl font-semibold">
            Create your account
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Build ATS-optimized resumes and cover letters in minutes.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            <Input
              label="Full name"
              placeholder="Alex Candidate"
              required
            />

            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a secure password"
              autoComplete="new-password"
              required
            />

            <div className="flex items-start gap-2 text-xs text-gray-400">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-white/20 bg-transparent"
                required
              />
              <span>
                I agree to the{' '}
                <button type="button" className="text-indigo-400 hover:text-purple-400 transition underline">
                  Terms
                </button>{' '}
                and{' '}
                <button type="button" className="text-indigo-400 hover:text-purple-400 transition underline">
                  Privacy Policy
                </button>.
              </span>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-sm bg-gradient-to-r from-indigo-500 to-purple-600 border-0 hover:scale-105 transition duration-300 disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Get started for free"}
            </Button>

          </form>

          {/* Divider */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-[11px] text-gray-500">
              <div className="h-px flex-1 bg-white/10" />
              or sign up with
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-gray-300 hover:bg-white/10 transition backdrop-blur">
                Google
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-gray-300 hover:bg-white/10 transition backdrop-blur">
                LinkedIn
              </button>
            </div>
          </div>

          <p className="mt-8 text-xs text-gray-400">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-indigo-400 hover:text-purple-400 transition"
            >
              Log in
            </Link>
          </p>

        </div>
      </div>

      {/* RIGHT PREMIUM INFO PANEL */}
      <div className="relative hidden w-1/2 items-center justify-center bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-transparent p-12 lg:flex">

        <div className="max-w-md space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
            Job search, simplified
          </p>

          <h1 className="text-4xl font-semibold leading-tight">
            Ship applications that feel
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              tailored, not templated.
            </span>
          </h1>

          <p className="text-sm text-gray-400">
            CareerForge Pro helps you match each job posting with the right wording,
            skills, and structure—without losing your voice.
          </p>

          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 text-xs shadow-xl">
            <p className="font-medium text-white">
              Join 12,000+ candidates improving their interview success rate.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Signup;