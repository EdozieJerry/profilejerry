import React from 'react'
// import Image from 'next/image'
import MovieImg from '../public/assets/projects/spider-man.png';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';
import Image, {ImageProps} from "next/image";

const movie = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className="absolute z-1" layout="fill" objectFit='cover' src={MovieImg} />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Movie World</h2>
                <h3>React JS / Css / Omdb-API</h3>
            </div>
        </div>h

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
            <div className='col-span-4'>
                <p className='uppercase text-[#5156e1]'>project</p>
                 <h2>Overview</h2>
                 <p className='text-justify'> It is an App i call  "Movie World" which i built
                    on react and also "OMDB API" an app where you search for any movie
                    of your choice and you will get the year
                    it was produced and relase. feel free to check it out
                     Hope you will find it interesting guys.
                </p>
                
                <a href="https://github.com/EdozieJerry/movieland">
                <button className='px-3 py-2 mt-4 mr-8'>Code</button>
                </a>
                <button className='px-3 py-2 mt-4'>Demo</button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Html</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Css</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Javascript</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Omdb API</p>
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

export default movie