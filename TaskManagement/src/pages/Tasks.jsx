import React, { useState } from "react";
import Reports from "./Reports"; // Import the Reports component
import "../Styles/Tasks.css";

const Tasks = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [viewReports, setViewReports] = useState(false);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const initialTasks = [
    {
      id: 1,
      title: "Complete Project Report",
      description: "Finalize and submit the project report by Friday.",
      details: "This task requires gathering data from all departments and creating a comprehensive report.",
      date: "2025-02-15",
      time: "17:00",
      day: "Wednesday",
    },
    {
      id: 2,
      title: "Team Meeting",
      description: "Attend the project meeting at 10:00 AM.",
      details: "Agenda includes sprint review, retrospective, and resource allocation.",
      date: "2025-02-16",
      time: "10:00",
      day: "Thursday",
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    details: "",
    date: "",
    time: "",
    day: "",
  });

  const handleViewDetails = (task) => {
    setSelectedTask(task);
    setEditedTask(null);
  };

  const handleEditTask = () => {
    setEditedTask({ ...selectedTask });
  };

  const handleChange = (e, isEdit = false) => {
    const { name, value } = e.target;
    isEdit
      ? setEditedTask({ ...editedTask, [name]: value })
      : setNewTask({ ...newTask, [name]: value });
  };

  const handleSaveChanges = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    setSelectedTask(editedTask);
    setEditedTask(null);
  };

  const handleToggleReports = () => {
    setViewReports(!viewReports);
  };

  const handleAddTask = () => {
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const taskToAdd = { id: newId, ...newTask };
    setTasks([...tasks, taskToAdd]);
    setNewTask({
      title: "",
      description: "",
      details: "",
      date: "",
      time: "",
      day: "",
    });
    setShowAddTaskModal(false);
  };

  return (
    <div>
      <div className="tasks-container">
        <h1>Tasks</h1>

        {viewReports ? (
          <Reports tasks={tasks} />
        ) : (
          <div className="task-grid">
            {tasks.map((task) => (
              <div key={task.id} className="task-card">
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <button onClick={() => handleViewDetails(task)}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}

        {/* View Task Details */}
        {selectedTask && !editedTask && (
          <div className="modal-overlay" onClick={() => setSelectedTask(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>{selectedTask.title}</h3>
              <p>{selectedTask.details}</p>
              <p><strong>Date:</strong> {selectedTask.date}</p>
              <p><strong>Time:</strong> {selectedTask.time}</p>
              <p><strong>Day:</strong> {selectedTask.day}</p>
              <div>
                <button onClick={() => setSelectedTask(null)}>Close</button>
                <button onClick={handleEditTask}>Edit Task</button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Task Modal */}
        {editedTask && (
          <div className="modal-overlay" onClick={() => setEditedTask(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>Edit Task</h3>
              {["title", "description", "details", "date", "time", "day"].map((field) => (
                <div key={field}>
                  <label>
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                    {field === "description" || field === "details" ? (
                      <textarea name={field} value={editedTask[field]} onChange={(e) => handleChange(e, true)} />
                    ) : (
                      <input
                        type={field === "date" ? "date" : field === "time" ? "time" : "text"}
                        name={field}
                        value={editedTask[field]}
                        onChange={(e) => handleChange(e, true)}
                      />
                    )}
                  </label>
                </div>
              ))}
              <div>
                <button onClick={handleSaveChanges}>Save Changes</button>
                <button onClick={() => setEditedTask(null)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Add Task Modal */}
        {showAddTaskModal && (
          <div className="modal-overlay" onClick={() => setShowAddTaskModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>Add Task</h3>
              {["title", "description", "details", "date", "time", "day"].map((field) => (
                <div key={field}>
                  <label>
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                    {field === "description" || field === "details" ? (
                      <textarea name={field} value={newTask[field]} onChange={handleChange} />
                    ) : (
                      <input
                        type={field === "date" ? "date" : field === "time" ? "time" : "text"}
                        name={field}
                        value={newTask[field]}
                        onChange={handleChange}
                      />
                    )}
                  </label>
                </div>
              ))}
              <div>
                <button onClick={handleAddTask}>Add Task</button>
                <button onClick={() => setShowAddTaskModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {!viewReports && (
          <>
            <button onClick={() => setShowAddTaskModal(true)}>Add Task</button>
            <button onClick={handleToggleReports}>View Reports</button>
          </>
        )}
        {viewReports && (
          <button onClick={handleToggleReports}>Back to Tasks</button>
        )}
      </div>
    </div>
  );
};

export default Tasks;
