/*import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const plans = [
  {
    name: 'Free',
    price: '$0',
    badge: 'Starter',
    description: 'Ideal for students and early-career candidates.',
    features: [
      '1 active resume',
      'Basic ATS score preview',
      'PDF export',
      'Community templates'
    ],
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$12',
    badge: 'Most popular',
    description: 'Unlimited resumes and ATS insights for active job searches.',
    features: [
      'Unlimited resumes & cover letters',
      'Full ATS scoring & keyword insights',
      'AI rewrite suggestions',
      'Priority template access'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    badge: 'Teams',
    description: 'For career centers, bootcamps, and recruiting teams.',
    features: [
      'Team workspaces',
      'Centralized templates & branding',
      'Usage analytics',
      'Dedicated support'
    ],
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl gradient-primary" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                CareerForge
              </p>
              <p className="text-sm font-semibold text-slate-900">CareerForge Pro</p>
            </div>
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <Link to="/app" className="hidden text-slate-600 hover:text-slate-900 md:inline">
              Back to app
            </Link>
            <Link to="/login" className="text-slate-600 hover:text-slate-900">
              Login
            </Link>
            <Link to="/signup">
              <Button className="px-4 py-2 text-xs">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Pricing
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
            Simple, transparent pricing for serious searches.
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Start free. Upgrade when you&apos;re running real interview loops.
          </p>
        </div>

        <div className="mt-6 flex justify-center md:hidden">
          <Link to="/app" className="text-xs text-slate-600 hover:text-slate-900 underline">
            Back to app
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex h-full flex-col ${
                plan.highlighted
                  ? 'border-brand-100 bg-white shadow-soft'
                  : 'bg-slate-50/60 shadow-none'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute right-4 top-4 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Recommended
                </span>
              )}
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                {plan.badge}
              </p>
              <h2 className="mt-2 text-sm font-semibold text-slate-900">{plan.name}</h2>
              <div className="mt-2 flex items-baseline gap-1">
                <p className="text-2xl font-semibold text-slate-900">{plan.price}</p>
                {plan.price !== 'Let’s talk' && (
                  <p className="text-xs text-slate-500">/ month</p>
                )}
              </div>
              <p className="mt-2 text-xs text-slate-600">{plan.description}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <Button
                className={`mt-5 w-full py-2.5 text-xs ${
                  plan.highlighted ? '' : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact sales' : 'Start with ' + plan.name}
              </Button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pricing;*/

import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import logo from '../assets/logo.png';

const plans = [
  {
    name: 'Free',
    price: '$0',
    badge: 'Starter',
    description: 'Ideal for students and early-career candidates.',
    features: [
      '1 active resume',
      'Basic ATS score preview',
      'PDF export',
      'Community templates'
    ],
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$12',
    badge: 'Most popular',
    description: 'Unlimited resumes and ATS insights for active job searches.',
    features: [
      'Unlimited resumes & cover letters',
      'Full ATS scoring & keyword insights',
      'AI rewrite suggestions',
      'Priority template access'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    badge: 'Teams',
    description: 'For career centers, bootcamps, and recruiting teams.',
    features: [
      'Team workspaces',
      'Centralized templates & branding',
      'Usage analytics',
      'Dedicated support'
    ],
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <div className="relative min-h-screen bg-[#0f0f13] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 blur-[160px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full" />

      {/* HEADER */}
      <header className="relative border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">

          <Link to="/" className="flex items-center gap-3">
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600">
              <img
                src={logo}
                alt="CareerForge Logo"
                className="h-9 w-9 rounded-xl bg-black object-contain"
              />
            </div>
            <span className="text-sm font-semibold tracking-wide">
              CareerForge Pro
            </span>
          </Link>

          <div className="flex items-center gap-4 text-sm">
            <Link to="/app" className="hidden text-gray-400 hover:text-white md:inline">
              Back to app
            </Link>
            <Link to="/login" className="text-gray-400 hover:text-white">
              Login
            </Link>
            <Link to="/signup">
              <Button className="px-5 py-2 text-xs bg-gradient-to-r from-indigo-500 to-purple-600 border-0">
                Get Started
              </Button>
            </Link>
          </div>

        </div>
      </header>

      {/* MAIN */}
      <main className="relative mx-auto max-w-6xl px-6 py-16">

        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
            Pricing
          </p>

          <h1 className="mt-4 text-3xl font-semibold">
            Simple pricing for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              serious job searches.
            </span>
          </h1>

          <p className="mt-4 text-sm text-gray-400">
            Start free. Upgrade when you're actively interviewing.
          </p>
        </div>

        {/* PRICING GRID */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 backdrop-blur-xl border shadow-2xl transition duration-300 hover:scale-105 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-indigo-500/40'
                  : 'bg-white/5 border-white/10'
              }`}
            >

              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-lg">
                  Most Popular
                </span>
              )}

              <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                {plan.badge}
              </p>

              <h2 className="mt-3 text-xl font-semibold text-white">
                {plan.name}
              </h2>

              <div className="mt-4 flex items-baseline gap-2">
                <p className="text-4xl font-bold">
                  {plan.price}
                </p>
                {plan.price !== 'Let’s talk' && (
                  <span className="text-sm text-gray-400">/ month</span>
                )}
              </div>

              <p className="mt-4 text-sm text-gray-400">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-300 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 py-3 text-sm ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 border-0'
                    : 'bg-white/10 border border-white/20 hover:bg-white/20'
                }`}
              >
                {plan.name === 'Enterprise'
                  ? 'Contact Sales'
                  : 'Start with ' + plan.name}
              </Button>

            </Card>
          ))}

        </div>
      </main>
    </div>
  );
};

export default Pricing;