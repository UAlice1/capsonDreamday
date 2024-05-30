import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Booking() {
  const [bookings, setBookings] = useState([]);

  const handleFetch = async () => {
    try {
      const response = await axios.get('https://dream-day-rentals-16.onrender.com/weeding/booking/list');
      console.log('API response:', response.data);
      if (Array.isArray(response.data.getBooking)) {
        setBookings(response.data.getBooking);
      } else {
        console.error('Expected an array but got:', response.data.getBooking);
        setBookings([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className='container mx-auto px-4  bg-gray-100'>
      <div className='flex flex-col justify-center items-center w-full mx-[5vh]'>
        <p className="text-3xl mt-10 font-sans italic text-center">Bookings</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 w-full'>
          {Array.isArray(bookings) && bookings.length > 0 ? (
            bookings.map((booking) => (
              <div key={booking.id} className='bg-white p-4 rounded-lg shadow-md'>
                <img
                  className='w-full h-48 object-cover rounded-t-lg'
                  src={booking.profile.url}
                  alt={booking.title}
                />
                <div className='mt-2'>
                  <h3 className='text-xl font-semibold'>{booking.title}</h3>
                  <p className='mt-2 text-gray-600'>{booking.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center col-span-full'>No Bookings Available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Booking;

