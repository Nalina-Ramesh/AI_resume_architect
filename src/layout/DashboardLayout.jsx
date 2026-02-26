import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const DashboardLayout = () => {
  return (
    <div className="app-shell flex min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto px-4 py-6 md:px-8">
          <section className="cf-page">
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;