import React from "react";
import "../Styles/Sidebar.css"; // Make sure you have your styles

const Sidebar = ({ onClick }) => {
  return (
    <aside>
      <ul>
        <li><button onClick={() => onClick('dashboard')}>Dashboard</button></li> {/* Trigger Dashboard */}
        <li><button onClick={() => onClick('tasks')}>Tasks</button></li> {/* Trigger Tasks */}
        <li><button onClick={() => onClick('teams')}>Teams</button></li> {/* Trigger Teams */}
        <li><button onClick={() => onClick('calendar')}>Calendar</button></li> {/* Trigger Calendar */}
        <li><button onClick={() => onClick('settings')}>Settings</button></li> {/* Trigger Settings */}
      </ul>
    </aside>
  );
};

export default Sidebar;
