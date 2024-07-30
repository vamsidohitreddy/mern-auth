import React from 'react';
import UploadForm from '../components/UploadForm';

function Upload() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Upload Carpool Information</h2>
      <UploadForm />
    </div>
  );
}

export default Upload;
