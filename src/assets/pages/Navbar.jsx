import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-white fixed w-full z-40 flex flex-col lg:flex-row items-center justify-between'>
      <div className='flex items-center justify-between w-full lg:w-auto px-4 py-3 lg:py-0'>
        <img
          src='/lasttttt-removebg-preview.png'
          className='w-[15vh] h-[10vh] mt-[5vh] ml-[5vh]'
          alt="Logo"
        />
        <button
          className='block lg:hidden px-4 py-2 text-[#A6C1EE] hover:text-[#87ACEC]'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </button>
      </div>
      <nav className={`lg:flex lg:flex-row lg:items-center w-full lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col lg:flex-row lg:gap-10 justify-around w-full lg:w-auto mr-[5vh]'>
          <li><a href='/' style={{ fontWeight: 500 }} className='hover:text-gray-500 font-sans'>Home</a></li>
          <li><a href='/About' style={{ fontWeight: 500 }} className='hover:text-gray-500 font-sans'>About</a></li>
          <li><a href='/Service' style={{ fontWeight: 600 }} className='hover:text-gray-500 font-sans'>Service</a></li>
          <li><a href='/Available' style={{ fontWeight: 600 }} className='hover:text-gray-500 font-sans hover:underline'>Available</a></li>
          <li><a href='/Contact' style={{ fontWeight: 600 }} className='hover:text-gray-500 font-sans'>Contact</a></li>
          <li><a href='/' style={{ fontWeight: 600 }} className='hover:text-gray-500 font-sans'>Bookings</a></li>
          <li>
            <button className='bg-[#A6C1EE] text-white font-sans py-2 px-4 rounded hover:bg-[#87ACEC] ml-4 lg:ml-0'>
              <Link to="/SignUp">Register</Link>
            </button>
          </li>
          <li>
            <button className='bg-[#A6C1EE] font-sans text-white py-2 px-4 rounded hover:bg-[#87ACEC] ml-4 lg:ml-0'>
              <Link to="/Signin">Login</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;