import React from 'react'
import Image from 'next/image'
import multimediaImg from '../public/assets/projects/style4.jpg';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

const multimedia = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className="absolute z-1" layout="fill" objectFit='cover' src={multimediaImg} />
            
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>MULTI-MEDIA</h2>
                <h3>Html / Css / Bootstrap / Javascript</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
            <div className='col-span-4'>
                <p className='uppercase text-[#5156e1]'>project</p>
                 <h2>Overview</h2>
                 <p className='text-justify'> Multimedia was a project i built during my final 
                    year in the university, it contains all the 
                    components of media (picture, video, text, animation, music)
                    and it contains some historical background on multimedia,
                    i actually learnt a lot of stuff during the time 
                    of building it. feel free to chect it out guys and tell me what 
                    you think.
                </p>
                <a href="https://github.com/EdozieJerry/multimedia">
                <button className='px-3 py-2 mt-4 mr-8'>Code</button>
                </a>
                <a href="https://multimediainfo.netlify.app/">
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

export default multimedia

// import React from 'react'

// const multimedia = () => {
//   return (
//     <div>multimedia</div>
//   )
// }

// export default multimedia