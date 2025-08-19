"use client"

import { Navigation } from '@/components/navigation';
import React, { useEffect, useRef } from 'react';
import SpotlightCard from '@/components/SpotlightCard';
  
export default function IEEESplinePage() {
  const splineViewerRef = useRef(null);

  useEffect(() => {
    // Load the Spline viewer script if it hasn't been loaded yet
    if (!window.customElements.get('spline-viewer')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.48/build/spline-viewer.js';
      document.head.appendChild(script);

      
    }
  }, []);


  return (
    <>
    <Navigation />
    <div id="home" className="bg-[#E0EAFF] relative w-screen h-screen overflow-hidden font-sans">
      {/* Container for content and spline viewer */}
      <div className="flex flex-col h-full md:flex-row md:items-center">
        {/* Overlay Content */}
        <div className="flex-1 md:w-1/2 flex items-center justify-center p-4 md:p-8">
          <div className="text-black text-center w-full">
            <h2 className="mb-4">
              <span className='font-[Montserrat]' style={{color: 'black', fontWeight: 600, paddingLeft: 20, paddingRight: 20, fontSize: 40, border: '5px solid black'}}>
                IEEE CS/RAS JT SBC CEK
              </span>
            </h2>
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-3 sm:mb-4 md:mb-6 font-[Montserrat]"
            >
              Computer Society and Robotics and Automation Society Joint Student Branch Chapter  College of Engineering, Karunagappally
            </p>
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
              style={{ 
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' 
              }}
            >
            </p>
          </div>
        </div>

        {/* Spline Viewer Background */}
        <div 
          ref={splineViewerRef}
          className="flex-1 w-full h-full md:w-1/2 md:h-full" 
          dangerouslySetInnerHTML={{
            __html: '<spline-viewer loading-anim-type="spinner-small-dark"  url="https://prod.spline.design/qJ1stl9hhvTCVh2O/scene.splinecode"></spline-viewer>'
          }}
        />
      </div>

   
    </div>

          <div className=" bg-[#E0EAFF] flex flex-wrap justify-center items-center p-9"> 
            <SpotlightCard className="w-100 p-12 m-3 custom-spotlight-card shadow-xl text-justify rounded-2xl" >
              <img src="/cs.png" alt="Logo" className="h-15 w-auto mx-auto mt-4 mb-8" />   
The IEEE Computer Society is the premier source for information, inspiration, and collaboration in computer science and engineering. Connecting members worldwide, the Computer Society empowers the people who advance technology by delivering tools for individuals at all stages of their professional careers. Our trusted resources include international conferences, peer-reviewed publications, a robust digital library, globally recognized standards, and continuous learning opportunities.  
          </SpotlightCard>


            <SpotlightCard className="w-100 p-12 m-3 custom-spotlight-card shadow-xl text-justify rounded-2xl " >
              <img src="/ras.png" alt="Logo" className="h-15 w-auto mx-auto mt-4 mb-8" />   
The Robotics and Automation Society is the premier source for information, inspiration, and collaboration in robotics and automation. Connecting members worldwide, the Robotics and Automation Society empowers the people who advance technology by delivering tools for individuals at all stages of their professional careers. Our trusted resources include international conferences, peer-reviewed publications, a robust digital library, globally recognized standards, and continuous learning opportunities. 
         </SpotlightCard>

</div>

     <section id="about" className="min-h-screen bg-[#E0EAFF] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
            <h2 className=" overflow-hidden text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-12 sm:mb-16">About Our Chapter</h2>
          </div>

          
          </section>
        </>

  );
}
