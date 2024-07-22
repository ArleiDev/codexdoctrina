// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />
      
      </Routes>
    </Router>
  );
};

export default App;
