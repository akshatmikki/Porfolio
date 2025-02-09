import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Resume from "./pages/Resume";
import Home from "./pages/Home";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
          <Route
            path="/resume"
            element={
              <Resume isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
