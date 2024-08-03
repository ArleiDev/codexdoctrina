import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from './components/Login';
import Dashboard from './components/Home';
import Register from './components/Register';
import VideoAula from './components/VideoAula';
import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import Mobile from "./components/Mobile";

const App = () => {
  // State to manage highlighted courses

  return (
    <Router>
   
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/video-aula/:videoId"
          element={
            <ProtectedRoute>
              <VideoAula />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cursos/frontend"
          element={
            <ProtectedRoute>
              <Frontend  />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cursos/backend"
          element={
            <ProtectedRoute>
              <Backend  />
            </ProtectedRoute>
          }
        />
         <Route
          path="/cursos/mobile"
          element={
            <ProtectedRoute>
              <Mobile  />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
