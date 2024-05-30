import React from 'react';
import { format, isValid } from 'date-fns';
import { Link } from 'react-router-dom';

const RecentHallsData = [
  {
    id: '1',
    vendor_id: '4324',
    vendor_name: 'Shirley A. Lape',
    booking_date: '2022-05-17T03:24:00',
    total_bookings: '200',
    hall_address: 'Cottage Grove, OR 97424'
  },
  {
    id: '7',
    vendor_id: '7453',
    vendor_name: 'Ryan Carroll',
    booking_date: '2022-05-14T05:24:00',
    total_bookings: '960',
    hall_address: 'Los Angeles, CA 90017'
  },
  {
    id: '2',
    vendor_id: '5434',
    vendor_name: 'Mason Nash',
    booking_date: '2022-05-17T07:14:00',
    total_bookings: '836',
    hall_address: 'Westminster, CA 92683'
  },
  {
    id: '3',
    vendor_id: '9854',
    vendor_name: 'Luke Parkin',
    booking_date: '2022-05-16T12:40:00',
    total_bookings: '453',
    hall_address: 'San Mateo, CA 94403'
  },
  {
    id: '4',
    vendor_id: '8763',
    vendor_name: 'Anthony Fry',
    booking_date: '2022-05-14T03:24:00',
    total_bookings: '876',
    hall_address: 'San Mateo, CA 94403'
  },
  {
    id: '5',
    vendor_id: '5627',
    vendor_name: 'Ryan Carroll',
    booking_date: '2022-05-14T05:24:00',
    total_bookings: '100',
    hall_address: 'Los Angeles, CA 90017'
  }
];

export default function RecentHalls() {
  return (
    <div className="bg-white px-6 py-4 rounded-lg shadow-md border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium text-xl">Recent Halls</strong>
      <div className="mt-4">
        <table className="w-full text-gray-700 table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Vendor ID</th>
              <th className="px-4 py-2">Vendor Name</th>
              <th className="px-4 py-2">Booking Date</th>
              <th className="px-4 py-2">Total Bookings</th>
              <th className="px-4 py-2">Hall Address</th>
            </tr>
          </thead>
          <tbody>
            {RecentHallsData.map((hall, index) => {
              const bookingDate = new Date(hall.booking_date);
              const formattedDate = isValid(bookingDate) ? format(bookingDate, 'dd MMM yyyy') : 'Invalid date';

              return (
                <tr key={hall.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border px-4 py-2 text-center">
                    <Link to={`/vendor/${hall.vendor_id}`} className="text-blue-600 hover:underline">#{hall.id}</Link>
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <Link to={`/vendor/${hall.vendor_id}`} className="text-blue-600 hover:underline">#{hall.vendor_id}</Link>
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <Link to={`/vendor/${hall.vendor_id}`} className="text-blue-600 hover:underline">{hall.vendor_name}</Link>
                  </td>
                  <td className="border px-4 py-2 text-center">{formattedDate}</td>
                  <td className="border px-4 py-2 text-center">{hall.total_bookings}</td>
                  <td className="border px-4 py-2 text-center">{hall.hall_address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
