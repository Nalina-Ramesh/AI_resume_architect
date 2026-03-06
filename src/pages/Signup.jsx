import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import logo from "../assets/logo.png";
import API from '../api/api';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match. Please re-check both fields.');
      setLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long.');
      setLoading(false);
      return;
    }

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      await API.post('/auth/register', payload, { skipAuthRedirect: true });
      // After successful registration, redirect to login
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
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

          {error && <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-sm text-red-200">{error}</div>}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            <Input
              label="Full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />

            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a secure password"
              autoComplete="new-password"
              required
            />

            <Input
              label="Confirm password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
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
              <button
                type="button"
                disabled
                className="cursor-not-allowed flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-gray-500"
              >
                Google (soon)
              </button>

              <button
                type="button"
                disabled
                className="cursor-not-allowed flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-gray-500"
              >
                LinkedIn (soon)
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
