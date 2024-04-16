import React from 'react'
import Image from 'next/image'
import HospitalImg from '../public/assets/projects/9.png';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

const netflix = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className="absolute z-1" layout="fill" objectFit='cover' src={HospitalImg} />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Netflix World</h2>
                <h3>Html / CSS / Bootstrap / Javascript</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
            <div className='col-span-4'>
                <p className='uppercase text-[#5156e1]'>Animation</p>
                 <h2>Overview</h2>
                 <p> This project is an ANIMATION i built during my intern at <br />
                 APTECH EDUCATION, it was fun builing this project , i really spent <br />
                 time on research on how to go about the project. <br /> During the process i 
                 was closely supervised by my instructor, <br /> he made sure i execute the project
                 rightly. <br />
                 
                </p>
                <a href="https://github.com/EdozieJerry/animation">
                <button className='px-3 py-2 mt-4 mr-8'>Code</button>
                </a>
                <button className='px-3 py-2 mt-4'>Demo</button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />html</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />css</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />bootstrap</p>
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

export default netflix