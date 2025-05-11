import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../Styles/HomePage.css"; 

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in

  useEffect(() => {
    // You can check if the user is logged in by checking for a token or session
    // For example, check localStorage or sessionStorage for a saved token or user information
    const token = localStorage.getItem('authToken'); // Assuming you store the auth token in localStorage
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const openContact = () => {
    const whatsappUrl = "https://wa.me/1234567890"; // Replace with your WhatsApp number
    const telegramUrl = "https://t.me/username";  // Replace with your Telegram username
    window.open(whatsappUrl, "_blank");
  };

  const handleGetStarted = () => {
    if (!isLoggedIn) {
      alert('You must log in first!');
      navigate('/login'); // Redirect to login page
    } else {
      navigate('/dashboard'); // If logged in, proceed to dashboard
    }
  };

  return (
    <div className="page-container">
      <Navbar />

      <div className="content-container">
        <header className="card header-card">
          <h1>Task Management System</h1>
          <p>Your personal workspace to organize and prioritize tasks efficiently.</p>
        </header>

        <section className="card about-card">
          <h2>About</h2>
          <p>
            This system allows users to create and manage tasks, assign deadlines,
            categorize them into projects, and collaborate with team members.
          </p>
        </section>

        <section className="card features-card">
          <h2>Features</h2>
          <ul>
            <li>Create Tasks and Assign Deadlines</li>
            <li>Categorize Tasks into Projects</li>
            <li>Get Notifications for Upcoming Deadlines</li>
            <li>Track Task Progress</li>
            <li>Mark Tasks as Complete</li>
            <li>Collaborative Task Sharing</li>
            <li>Drag-and-Drop Scheduling</li>
          </ul>
          <img src="features-image.jpg" alt="Features" className="features-img" />
        </section>

        <section className="card how-it-works-card">
          <h2>How It Works</h2>
          <ol>
            <li>Register or log in to your account</li>
            <li>Create projects and tasks</li>
            <li>Assign deadlines and track status</li>
            <li>Collaborate with your team</li>
          </ol>
        </section>

        <section className="card get-started-card">
          <h2>Ready to Boost Your Productivity?</h2>
          <button onClick={handleGetStarted}>Get Started</button>
        </section>

        <section className="card team-collaboration-card">
          <h2>Team Collaboration</h2>
          <p>
            Collaborating with a team has never been easier. You can assign tasks to team members, set deadlines,
            and monitor progress in real-time. Stay connected and productive, no matter where your team is located.
          </p>
          <img src="team-collaboration.jpg" alt="Team Collaboration" className="team-img" />
        </section>

        <section className="card task-management-tools-card">
          <h2>Task Management Tools</h2>
          <p>
            Our task management tools include time tracking, task prioritization, and project boards. Visualize your tasks 
            and see what needs to be done at a glance with our easy-to-use interface.
          </p>
          <img src="task-management-tools.jpg" alt="Task Management Tools" className="tools-img" />
        </section>

        <section className="card upcoming-features-card">
          <h2>Upcoming Features</h2>
          <p>
            We're constantly improving the system to make it even more powerful. Some of the upcoming features include:
            <ul>
              <li>AI-based task prioritization</li>
              <li>Automated task assignment</li>
              <li>Advanced reporting and analytics</li>
            </ul>
          </p>
        </section>

        <section className="card testimonials-card">
          <h2>Testimonials</h2>
          <blockquote>
            "This system has transformed the way I manage tasks. It's intuitive, fast, and has made my work so much more organized." - John Doe
          </blockquote>
          <blockquote>
            "The task assignment and collaboration features are fantastic! It helps me stay on top of my projects and deadlines." - Jane Smith
          </blockquote>
        </section>

        <section className="card contact-us-card">
          <h2>Contact Us</h2>
          <p>
            Have questions or need support? Feel free to reach out to our team anytime. We're here to help you!
          </p>
          <button onClick={openContact}>Contact Support</button>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
