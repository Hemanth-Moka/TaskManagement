import React, { useState } from "react";

import "../Styles/Teams.css"; // Add your custom styles for Teams

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "John Doe", role: "Developer" },
    { id: 2, name: "Jane Smith", role: "Designer" },
    { id: 3, name: "Sam Wilson", role: "Project Manager" },
  ]);

  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
  });

  const handleAddMember = () => {
    if (newMember.name && newMember.role) {
      const newId = teamMembers.length + 1;
      setTeamMembers([...teamMembers, { id: newId, ...newMember }]);
      setNewMember({ name: "", role: "" });
    }
  };

  const handleRemoveMember = (id) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  return (
    <div>
      
      <div className="teams-container">
        <h1>Teams</h1>
        <p>Manage team members and assignments.</p>

        <div className="add-member">
          <h3>Add New Team Member</h3>
          <input
            type="text"
            placeholder="Name"
            value={newMember.name}
            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            value={newMember.role}
            onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
          />
          <button onClick={handleAddMember}>Add Member</button>
        </div>

        <div className="team-list">
          <h3>Team Members</h3>
          {teamMembers.length > 0 ? (
            <ul>
              {teamMembers.map((member) => (
                <li key={member.id}>
                  <strong>{member.name}</strong> - {member.role}
                  <button onClick={() => handleRemoveMember(member.id)}>Remove</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No team members added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teams;
