import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css"

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </aside>
  );
};
export default Sidebar;