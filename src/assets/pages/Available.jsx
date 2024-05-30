import React from 'react'
import { Link } from 'react-router-dom';
function Available() {
  return (
<div className="available text-center p-8">
  <h2 className="text-3xl mb-16">Available Halls</h2>
  <div className="flex flex-wrap justify-center gap-4">
    <div className="card bg-white rounded-lg shadow-lg p-4 max-w-sm w-full md:w-1/3">
      <img className="w-full h-56 object-cover rounded-t-lg" src="/des8.jpg" alt="hall1" />
      <div className="mt-4">
        <span className="block text-gray-700">Location: Kigali</span>
        <span className="block text-gray-700">price:frw</span>
        <span className="block text-gray-700">Max: 200 people</span>
        <button className="block mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 text-center">
          
          <Link to="/Bookings">Book now</Link>
          </button>
      </div>
    </div>
    <div className="card bg-white rounded-lg shadow-lg p-4 max-w-sm w-full md:w-1/3">
      <img className="w-full h-56 object-cover rounded-t-lg" src="/des4.jpg" alt="hall1" />
      <div className="mt-4">
        <span className="block text-gray-700">Location: Kigali</span>
        <span className="block text-gray-700">price:frw</span>
        <span className="block text-gray-700">Max: 200 people</span>
        <button className="block mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 text-center">
        <Link to="/Bookings">Book now</Link>
          </button>
      </div>
    </div>
    <div className="card bg-white rounded-lg shadow-lg p-4 max-w-sm w-full md:w-1/3">
      <img className="w-full h-56 object-cover rounded-t-lg" src="/des3.jpg" alt="hall1" />
      <div className="mt-4">
        <span className="block text-gray-700">Location: Kigali</span>
        <span className="block text-gray-700">price:frw</span>
        <span className="block text-gray-700">Max: 200 people</span>
        <button className="block mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 text-center">
        <Link to="/Bookings">Book now</Link>
          </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Available

