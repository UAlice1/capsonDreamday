import React, { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiMapPin, FiPhone } from 'react-icons/fi';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dream-day-rentals-16.onrender.com/weeding/contact/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setNotification({ message: 'Form submitted successfully!', type: 'success' });
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setNotification({ message: 'Failed to submit the form.', type: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      setNotification({ message: 'An error occurred while submitting the form.', type: 'error' });
    }
  };

  return (
    <div className='max-w-5xl w-full mx-auto p-8 md:p-16 bg-white rounded-lg shadow-md'>
      <h2 className='text-3xl text-center text-gray-800 font-bold mb-6'>Contact Us</h2>
      <div className='flex flex-col md:flex-row md:space-x-16'>
        <div className='w-full md:w-1/2 p-4'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='flex items-center text-gray-800 text-sm font-semibold mb-2' htmlFor="name">
                <FiUser className='mr-2'/>
                Your Name
              </label>
              <input
                placeholder=''
                className='w-full px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500'
                required
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='mb-4'>
              <label className='flex items-center text-gray-800 text-sm font-semibold mb-2' htmlFor="email">
                <FiMail className='mr-2'/>
                Your Email
              </label>
              <input
                placeholder='nina@gmail.com'
                className='w-full px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500'
                required
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='mb-4'>
              <label className='flex items-start text-gray-800 text-sm font-semibold mb-2' htmlFor="message">
                <FiMessageSquare className='mr-2 mt-1.5' />
                Message
              </label>
              <textarea
                placeholder=''
                className='w-full px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500'
                required
                rows={4}
                id="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className='flex justify-center'>
              <button className='bg-[#7596CE] hover:bg-[#7596CE] text-white font-semibold py-2 px-4 rounded-lg'>
                Submit
              </button>
            </div>
          </form>
          {notification.message && (
            <div className={`mt-4 p-4 rounded-lg ${notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {notification.message}
            </div>
          )}
        </div>
        <div className='w-full md:w-1/2 p-4 bg-gray-100 rounded-lg mt-8 md:mt-0'>
          <h3 className='text-xl text-gray-800 font-bold mb-4'>Our Location</h3>
          <p className='flex items-center text-gray-600 mb-4'>
            <FiMapPin className='mr-2' />
            1234 Street Name,<br />
            City, State, Zip Code
          </p>
          <h3 className='text-xl text-gray-800 font-bold mb-4'>Contact Information</h3>
          <p className='flex items-center text-gray-600 mb-2'>
            <FiMail className='mr-2' />
            contact@company.com
          </p>
          <p className='flex items-center text-gray-600'>
            <FiPhone className='mr-2' />
            (123) 456-7890
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
