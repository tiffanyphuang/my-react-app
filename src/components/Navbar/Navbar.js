import '../../App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../../Home.js';
import NotHome from '../../NotHome.js';
function App() {
return (
<Router>
  <nav>
    <p>My Website</p>
    <div id = "tags">
      <Link to="/">Home</Link>
      <Link to="/NotHome"> Not Home</Link>
    </div>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/NotHome" element={<NotHome />} />
  </Routes>
</Router>
);
}

export default App;