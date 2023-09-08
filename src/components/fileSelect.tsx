import React, { useState } from "react";

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Here, you can send the selectedFile to your server or perform any client-side processing.
    if (selectedFile) {
      // You can use the File API to access file properties and contents.
      console.log("Selected File:", selectedFile);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
