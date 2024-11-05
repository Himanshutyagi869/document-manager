
import React from 'react';

const DocumentList = ({ documents, onDelete }) => (
    <div className="document-list">
        {documents.map((doc) => (
            <div key={doc.id} className="document">
                <h3>{doc.name}</h3>
                <p>Type: {doc.type}</p>
                <button onClick={() => onDelete(doc.id)}>Delete</button>
            </div>
        ))}
    </div>
);

export default DocumentList;
