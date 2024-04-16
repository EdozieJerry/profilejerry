import React from 'react'
import Image from 'next/image'
import HospitalImg from '../public/assets/projects/style2.jpg';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

const Hospital = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className="absolute z-1" layout="fill" objectFit='cover' src={HospitalImg} />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Hospital Finder in Owerri</h2>
                <h3>HTML / CSS / BOOSTRAP / JAVASCRIPT</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
            <div className='col-span-4'>
                <p className='uppercase text-[#5156e1]'>project</p>
                 <h2>Overview</h2>
                 <p className='text-justify'> <i>Josman, </i>just like the name goes its a project i built in 
                    2019 during my I.T training at APTECH EDUCATION in Owerri, 
                    the project is all about hospital booking system  where people 
                    can search for hospital close to them, using <i>(Owerri)</i> as a case study.
                    <br />
                    it was built using HTML, CSS, BOOSTRAP CLASSES and JAVASCRIPT.
                    Actually it was really fun building this great stuff. During the 
                    course of this project i learnt so many stuffs about web design,
                    feel free to checkout out the code base on my github repository.
                </p>
                <a href="https://github.com/EdozieJerry/hospital-booking-systems">
                <button className='px-3 py-2 mt-4 mr-8'>Code</button>
                </a>
                <a href="https://hospitalbooking.netlify.app/">
                <button className='px-3 py-2 mt-4'>Demo</button>
                </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Html</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Css</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Bootstrap</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Javascript</p>
                    </div>
                </div>
            </div>
            <Link href='/'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>
    </div>
   
  );
}

export default Hospital