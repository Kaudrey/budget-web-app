import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./signup";
import Login from "./login";
function App() {
  return (
<Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
