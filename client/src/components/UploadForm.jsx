import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
  const [formData, setFormData] = useState({
    fromCity: '',
    toCity: '',
    travelDate: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/carpools/upload', formData);
      alert('Carpool information uploaded successfully!');
      setFormData({
        fromCity: '',
        toCity: '',
        travelDate: '',
        phoneNumber: '',
      });
    } catch (error) {
      console.error('Error uploading carpool information:', error.message);
      alert('Failed to upload carpool information');
    }
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fromCity">
        From City
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="fromCity"
        type="text"
        placeholder="Enter From City"
        name="fromCity"
        value={formData.fromCity}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toCity">
        To City
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="toCity"
        type="text"
        placeholder="Enter To City"
        name="toCity"
        value={formData.toCity}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="travelDate">
        Travel Date
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="travelDate"
        type="date"
        placeholder="Enter Travel Date"
        name="travelDate"
        value={formData.travelDate}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
        Phone Number
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="phoneNumber"
        type="tel"
        placeholder="Enter Phone Number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Upload
      </button>
    </div>
  </form>
  );
}

export default UploadForm;
