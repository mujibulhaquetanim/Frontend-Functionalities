import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";
import Home from "./components/nav-components/Home.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Blogs from "./components/nav-components/Blogs.tsx";
import AboutMe from "./components/Home-components/AboutMe.tsx";
import Frontend from "./components/Projects/Frontend.tsx";
import Backend from "./components/Projects/Backend.tsx";
import Updates from "./components/Updates.tsx";
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import UpcomingProjectPage from "./components/Projects/Upcoming-project.tsx";
import NotFound from "./components/not-found.tsx";
import TechStacksPage from "./components/nav-components/TechPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />}>
                <Route index element={<Frontend />} />
                <Route path="code-samples" element={<Backend />} />
                {/* Old tab URLs, kept so existing links still work */}
                <Route
                  path="frontend"
                  element={<Navigate to="/projects" replace />}
                />
                <Route
                  path="fullstack"
                  element={<Navigate to="/projects" replace />}
                />
                <Route
                  path="backend"
                  element={<Navigate to="/projects/code-samples" replace />}
                />
              </Route>
              <Route path="blogs" element={<Blogs />} />
              <Route path="work-updates" element={<Updates />} />
              <Route path="about" element={<AboutMe />} />
              <Route path="coming-soon" element={<UpcomingProjectPage />} />
              <Route path="tech-stack" element={<TechStacksPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </HelmetProvider>
  </React.StrictMode>,
);
