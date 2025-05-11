import React, { useState } from "react";
import "../Styles/Settings.css"

const Settings = () => {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    darkMode: false,
  });

  const handleToggle = (setting) => {
    setPreferences((prevState) => ({
      ...prevState,
      [setting]: !prevState[setting],
    }));
  };

  return (
    <div>
      <h1>Settings</h1>
      <p>Manage your preferences.</p>

      <div className="settings-container">
        <h2>Notification Preferences</h2>
        <div className="setting-option">
          <label>
            Email Notifications:
            <input
              type="checkbox"
              checked={preferences.emailNotifications}
              onChange={() => handleToggle("emailNotifications")}
            />
          </label>
        </div>

        <h2>Theme Preferences</h2>
        <div className="setting-option">
          <label>
            Dark Mode:
            <input
              type="checkbox"
              checked={preferences.darkMode}
              onChange={() => handleToggle("darkMode")}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
