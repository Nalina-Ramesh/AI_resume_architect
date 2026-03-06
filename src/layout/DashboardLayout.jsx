import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#0f0f13] text-white overflow-x-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex flex-1 flex-col min-h-screen overflow-x-hidden">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-10">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;
