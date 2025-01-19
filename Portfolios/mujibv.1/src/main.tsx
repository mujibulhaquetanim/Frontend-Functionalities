import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";
import Home from "./components/nav-components/Home.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Blogs from "./components/Blogs.tsx";
import DashBoard from "./components/DashBoard.tsx";
import AboutMe from "./components/Home-components/AboutMe.tsx";
import Frontend from "./components/Projects/Frontend.tsx";
import Backend from "./components/Projects/Backend.tsx";
import FullStack from "./components/Projects/FullStack.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />}>
            {/* default route and redirect */}
            <Route index element={<Navigate to="frontend" replace />} />
            <Route path="frontend" element={<Frontend />} />
            <Route path="backend" element={<Backend />} />
            <Route path="fullstack" element={<FullStack />} />
          </Route>
          <Route path="blogs" element={<Blogs />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="about" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
