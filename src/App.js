import './App.css';
import './components/Navbar/Navbar.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import NotHome from './NotHome';
import Navbar from './components/Navbar/Navbar.js';
function App() {
return (
<Navbar></Navbar>
);
}

export default App;