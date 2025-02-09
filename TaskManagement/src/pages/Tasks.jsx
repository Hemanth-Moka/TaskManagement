import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import React from "react";

// Ensure this path is correct

const Tasks = () => {
  return (
    <div>
      <Navbar /> {/* Ensure Navbar is included */}
      <h1>Tasks</h1>
      <p>Manage all your tasks here.</p>
      <div>
      <Footer/>
      </div>
    </div>
    
  );
};

export default Tasks;
