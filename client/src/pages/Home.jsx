import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-3xl font-bold mb-4">Welcome to Carpool System</h2>
        <div className="space-x-4">
          <Link
            to="/upload"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Upload
          </Link>
          <Link
            to="/search"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  )
}
