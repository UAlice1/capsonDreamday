import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Service() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const handleFetch = async () => {
    try {
      const response = await axios.get('https://dream-day-rentals-16.onrender.com/weeding/service/list');
      console.log('API response:', response.data);
      if (Array.isArray(response.data.getServices)) {
        setServices(response.data.getServices);
        setError(null);
      } else {
        console.error('Expected an array but got:', response.data.getServices);
        setServices([]);
        setError('Unexpected data format');
      }
    } catch (error) {
      console.log('Error fetching data:', error);
      setError('Error fetching data');
    }
  };
  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <div className='mx-[5vh] flex flex-col justify-center items-center w-full p-8'>
      <div className='p-11'>
        <h2 className='text-3xl mt-10 font-sans italic text-center'>Our Services</h2>
        {error ? (
          <p className='text-center col-span-full'>{error}</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-1 sm:p-4'>
            {Array.isArray(services) && services.length > 0 ? (
              services.map((service) => (
                <div key={service.id} className='bg-white p-4 rounded-lg shadow-md'>
                  <img
                    className='w-full h-48 object-cover rounded-t-lg'
                    src={service.image?.url || 'default-image-url.jpg'}
                    alt={service.title}
                  />
                  <div className='mt-2'>
                    <h3 className='text-xl font-semibold'>{service.title}</h3>
                    <p className='mt-2 text-gray-600'>{service.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className='text-center col-span-full'>No services available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default Service;