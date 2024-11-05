
import React from 'react';
import { Link } from 'react-router-dom';

const FolderList = ({ folders }) => (
    <div className="folder-list">
        {folders.map((folder) => (
            <Link key={folder.id} to={`/folder/${folder.id}`} className="folder">
                {folder.name}
            </Link>
        ))}
    </div>
);

export default FolderList;
