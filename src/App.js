// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import FolderPage from './pages/FolderPage';
import './styles/style.css';

const App = () => (
    <Router>
        <Header />
        <main className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/folder/:id" element={<FolderPage />} />
            </Routes>
        </main>
    </Router>
);

export default App;
