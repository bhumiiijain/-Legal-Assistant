// UploadDocuments.js
import React, { useState } from 'react';


const UploadDocuments = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    // Implement your upload logic here
    console.log("Uploading files:", selectedFiles);
    // You can send the selectedFiles to your server for further processing
  };

  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">  </h1>
      <div className="upload-container">
        <p className="lead">
          Upload your documents securely.
        </p>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="form-control mb-3"
        />
        <button
          onClick={handleUpload}
          className="btn btn-primary"
          disabled={selectedFiles.length === 0}
        >
          Upload
        </button>
        {selectedFiles.length > 0 && (
          <div className="selected-files mt-3">
            <h5>Selected Files:</h5>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadDocuments;