import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Editor } from './pages/Editor.jsx';
import { AuthProvider } from "./context/AuthContext.jsx";
import { Signup } from './pages/Signup.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path = "login" element={<Login />} />
          <Route path = "editor" element={<Editor />} />
          <Route path = "signup" element={<Signup/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
