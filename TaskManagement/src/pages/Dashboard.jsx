import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer"; // ✅ Import Footer
import "../Styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <h1>Dashboard</h1>
          <p>Welcome to your task management dashboard!</p>
          <div className="stats">
            <div className="stat-card">
              <h2>Tasks</h2>
              <p>12 Pending</p>
            </div>
            <div className="stat-card">
              <h2>Teams</h2>
              <p>3 Active</p>
            </div>
            <div className="stat-card">
              <h2>Reports</h2>
              <p>5 Generated</p>
            </div>
          </div>
        </main>
      </div>
      <Footer /> {/* ✅ Added Footer Component */}
    </div>
  );
};

export default Dashboard;
