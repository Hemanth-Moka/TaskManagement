import axios from "axios";

// Base URL for your backend API (Spring Boot)
const API_URL = "http://localhost:8080/api";

// Axios instance for making requests
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response.data;  // Return the response data (success message, etc.)
  } catch (error) {
    console.error("Registration error:", error);
    throw error.response ? error.response.data : error.message; // Handle error message
  }
};

// Login a user
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    return response.data;  // Expect a token or authentication data
  } catch (error) {
    console.error("Login error:", error);
    throw error.response ? error.response.data : error.message; // Handle error message
  }
};
