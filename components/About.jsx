import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className='w-full  md:h-screen p-2 flex items-center py-16 '>
        <div className='max-w-[1240px] m-auto mt--40 md:grid grid-cols-3 gap-0'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>// <i> I am not your normal developer</i></p>

                <p  className='py-2 text-gray-600 text-justify'>
                    I started my career journey into programming when i gained admission
                    into the University to study  computer-science, it was quiet challenging when i started 
                   learning coding but i kept pushing on.
                     I started with basic HTML, CSS & BOOTSTRAP CLASSES to make some
                    minor projects.
                </p>
                <p  className='py-2 text-gray-600 text-justify'>
                    2019 I did my I.T training at APTECH Computer Education in owerri, where i 
                    developed my skills on Web-Development using HTML, CSS, BOOTSTRAP and JAVASCRIPT, 
                    it was really fun because i 
                    had the oppurtunity of learning from other programmers and developers, during my
                     learning process I also Built a
                     project which is an (Hospital-Booking-system) in owerri-city.

                </p>
                <p className='py-2 text-gray-600 text-justify'>
                    Fascintated on how intricate programming can be, I was quickly drawn to learn more.
                    I started learning more about Javascript and was even more enthudes with making
                    websites interactive. I am now spending my time building projects on React JS, NextJS, Tailwind and 
                    learning new technologies.
                </p>
                <p  className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
                </div>
                <div className='shadow-xl ml-10 shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl w-full h-auto' src="/new-2.jpg" alt="Logo" width="900"  />
                </div>
        </div>      
    </div>
  );
};

export default About;