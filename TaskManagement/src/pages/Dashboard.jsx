import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer"; // ✅ Import Footer
import "../Styles/Dashboard.css";
import Tasks from "../pages/Tasks"; // ✅ Import Tasks Component
import Teams from "../pages/Teams"; // You can import more sections if needed.
import Calendar from "react-calendar";
import Reports from "./Reports";
import Settings from "./Settings";

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState('dashboard'); // Default section is 'dashboard'

  const handleSidebarClick = (section) => {
    setSelectedSection(section); // Update the selected section when sidebar link is clicked
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar onClick={handleSidebarClick} /> {/* Pass the handler to Sidebar */}
        <main className="main-content">
          {/* Conditional rendering for the welcome message */}
          {selectedSection === 'dashboard' && (
            <>
              <h1>Dashboard</h1>
              <p>Welcome to your task management dashboard!</p>
            </>
          )}
          
          {/* Conditional Rendering based on selectedSection */}
          {selectedSection === 'tasks' && <Tasks />} {/* Only render Tasks */}
          {selectedSection === 'teams' && <Teams />} {/* Render Teams if needed */}
          {selectedSection === 'calendar' && <Calendar />}
          {selectedSection === 'settings' && <Settings />}

          {/* You can add more sections like 'reports' */}
        </main>
      </div>
      <Footer /> {/* Footer is always rendered at the bottom */}
    </div>
  );
};

export default Dashboard;
