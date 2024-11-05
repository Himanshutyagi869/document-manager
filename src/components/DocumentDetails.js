
import React from 'react';

const DocumentDetails = ({ document }) => (
    <div className="document-details">
        <h2>{document.name}</h2>
        <p>Type: {document.type}</p>
        <p>Size: {document.size} MB</p>
        <p>Created: {document.created}</p>
        <button>Download</button>
    </div>
);

export default DocumentDetails;
