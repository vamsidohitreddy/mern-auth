import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';

function Search() {
  const [carpools, setCarpools] = useState([]);
  const [error, setError] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async (formData) => {
    setSearchPerformed(true);
    try {
      const response = await axios.get('http://localhost:3000/api/carpools/search', { params: formData });
      setCarpools(response.data);
      setError('');
    } catch (error) {
      console.error('Error searching for carpools:', error.message);
      setError('Error searching for carpools');
      setCarpools([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Search for Carpool Information</h2>
      <SearchForm onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      {searchPerformed && (
        carpools.length > 0 ? (
          <div className="w-full max-w-4xl">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">From City</th>
                  <th className="border border-gray-300 px-4 py-2">To City</th>
                  <th className="border border-gray-300 px-4 py-2">Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {carpools.map((carpool) => (
                  <tr key={carpool._id.$oid} className="bg-white">
                    <td className="border border-gray-300 px-4 py-2">{carpool.fromCity}</td>
                    <td className="border border-gray-300 px-4 py-2">{carpool.toCity}</td>
                    <td className="border border-gray-300 px-4 py-2">{carpool.phoneNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
          <span className="font-medium">Sorry! </span>No Rides found.</p>
        )
      )}
    </div>
  );
}

export default Search;
