import React from 'react';
import About from '../assets/pages/About';
import Service from '../assets/pages/Service';
import Available from '../assets/pages/Available';
import Contact from '../assets/pages/Contact';
import Gallery from '../Components/Gallery';

function Home() {
  return (
    <div>
      <div className="video-background bg-black/75 flex justify-center items-center relative min-h-screen">
        <video autoPlay muted loop id="video-background" className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10"></div> {/* Semi-transparent overlay */}
        <div className="flex flex-col justify-center items-center z-20 w-full p-10 mt-[25vh] animate-slide-up">
          <div className="text-center">
            <h2 className="wlc text-4xl text-white">
            Dream's Day Rentals
            </h2>
            <br />
            <br />
            <p className="text-4xl text-white mb-10">Dream's Day Rentals</p>
          </div>
        </div>
      </div>
      <About />
      <Service />
      <Available />
      <Gallery />
      <Contact />
    </div>
  );
}
export default Home;


