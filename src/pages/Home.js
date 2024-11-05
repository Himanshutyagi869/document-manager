// src/pages/Home.js
import React, { useState } from 'react';
import FolderList from '../components/FolderList';

const Home = () => {
    const [folders] = useState([
        { id: 1, name: 'Projects' },
        { id: 2, name: 'Reports' },
        { id: 3, name: 'Invoices' },
    ]);

    return (
        <div className="home">
            <h2>Your Folders</h2>
            <FolderList folders={folders} />
        </div>
    );
};

export default Home;
