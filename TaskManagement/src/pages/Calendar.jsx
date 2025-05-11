import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Styles/Calendar.css";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([
    { date: "10-05-2025", title: "Project Meeting", description: "Discuss Q2 goals" },
    { date: "11-05-2025", title: "Code Review", description: "Review feature branch" },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Convert Date object to DD-MM-YYYY format
  const formattedDate = date
    .toLocaleDateString("en-GB") // Use the "en-GB" locale to get the date in DD/MM/YYYY format
    .replace(/\//g, "-"); // Replace slashes with hyphens to match the format "DD-MM-YYYY"

  const selectedEvents = events.filter(event => event.date === formattedDate);

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    const newEvent = {
      date: formattedDate,
      title: title.trim(),
      description: description.trim(),
    };

    setEvents([...events, newEvent]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="calendar-container">
      <h1>Calendar</h1>
      <p>Select a date to view or add events.</p>

      <div className="calendar">
        <Calendar onChange={setDate} value={date} />
      </div>

      <div className="add-event-form">
        <h3>Add Event on {formattedDate}</h3>
        <form onSubmit={handleAddEvent}>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add Event</button>
        </form>
      </div>

      <div className="events-list">
        <h3>Events on {formattedDate}</h3>
        {selectedEvents.length > 0 ? (
          selectedEvents.map((event, index) => (
            <div key={index} className="event-card">
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          ))
        ) : (
          <p>No events for this date.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
