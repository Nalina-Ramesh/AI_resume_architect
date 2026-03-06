import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import logo from "../assets/logo.png";
import API from '../api/api';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await API.post('/auth/login', formData, { skipAuthRedirect: true });
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      window.dispatchEvent(new Event('auth-user-updated'));

      navigate('/app/home');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen bg-[#0f0f13] text-white overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full" />

      {/* Left Premium Section */}
      <div className="relative hidden w-1/2 items-center justify-center bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-transparent p-12 lg:flex">

        <div className="max-w-md space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
            CareerForge Pro
          </p>

          <h1 className="text-4xl font-semibold leading-tight">
            Turn messy experiences into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              clean, ATS-proof narratives.
            </span>
          </h1>

          <p className="text-sm text-gray-400">
            Designers, engineers, and students use CareerForge Pro to ship
            applications that feel thoughtful, measurable, and tailored.
          </p>

          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 text-xs shadow-xl">
            <p className="font-medium text-white">
              “It feels like Notion and Resume.io had a focused baby.”
            </p>
            <p className="mt-2 text-gray-400">
              Senior PM candidate · Hired at Stripe
            </p>
          </div>
        </div>
      </div>

      {/* Right Login Panel */}
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
            Welcome back
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Log in to continue crafting ATS-proof applications.
          </p>

          {error && <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-sm text-red-200">{error}</div>}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

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
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />

            <div className="flex items-center justify-between text-xs text-gray-400">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-transparent"
                />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="hover:text-indigo-400 transition"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-sm bg-gradient-to-r from-indigo-500 to-purple-600 border-0 hover:scale-105 transition duration-300 disabled:opacity-60"
            >
              {loading ? 'Logging in...' : 'Log in'}
            </Button>

          </form>

          {/* Divider */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-[11px] text-gray-500">
              <div className="h-px flex-1 bg-white/10" />
              or continue with
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
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="font-medium text-indigo-400 hover:text-purple-400 transition"
            >
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
