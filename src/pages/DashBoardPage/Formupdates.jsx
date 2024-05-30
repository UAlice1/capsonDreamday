import React from 'react';

const ProfileForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile Form</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="profile" className="block text-gray-700 mb-2">Profile</label>
            <input type="text" id="profile" name="profile" className="w-full p-3 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="availability" className="block text-gray-700 mb-2">Availability</label>
            <input type="text" id="availability" name="availability" className="w-full p-3 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 mb-2">Category</label>
            <select id="category" name="category" className="w-full p-3 border border-gray-300 rounded" required>
              <option value="">Select a category</option>
              <option value="Category1">Category 1</option>
              <option value="Category2">Category 2</option>
              <option value="Category3">Category 3</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 mb-2">Description</label>
            <textarea id="description" name="description" className="w-full p-3 border border-gray-300 rounded" required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
            <input type="text" id="location" name="location" className="w-full p-3 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="w-full p-3 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="altPhoneNumber" className="block text-gray-700 mb-2">Alternate Phone Number</label>
            <input type="tel" id="altPhoneNumber" name="altPhoneNumber" className="w-full p-3 border border-gray-300 rounded" />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
