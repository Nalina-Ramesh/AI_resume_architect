import React from 'react';
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

export default Profile;