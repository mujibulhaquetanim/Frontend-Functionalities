import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";
import Home from "./components/nav-components/Home.tsx";
import Projects from "./components/Projects.tsx";
import Blogs from "./components/Blogs.tsx";
import DashBoard from "./components/DashBoard.tsx";
import AboutMe from "./components/Home-components/AboutMe.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="about" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
