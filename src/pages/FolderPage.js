// src/pages/FolderPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DocumentList from '../components/DocumentList';

const FolderPage = () => {
    const { id } = useParams();
    const [documents, setDocuments] = useState([
        { id: 1, name: 'Project Plan', type: 'PDF', size: 1.2, created: '2024-09-12' },
        { id: 2, name: 'Budget Report', type: 'Excel', size: 0.8, created: '2024-09-10' },
    ]);

    const deleteDocument = (docId) => {
        setDocuments(documents.filter((doc) => doc.id !== docId));
    };

    return (
        <div className="folder-page">
            <h2>Documents in Folder {id}</h2>
            <DocumentList documents={documents} onDelete={deleteDocument} />
        </div>
    );
};

export default FolderPage;
