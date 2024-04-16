import Image  from 'next/image';
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <img src="/html.png" alt="Logo" width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto'>
                        <img src="/css.png" alt="Logo" width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto'>
                        <img src="/bootstrap.png" alt="Logo" width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>BOOTSTRAP</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto'>
                        <img src="/javas.png" alt="Logo" width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JAVASCRIPT</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto'>
                        <img src="/react.png" alt="Logo" width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>REACT</h3>
                        </div>
                    </div>
                </div>
{/* 
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto'>
                        <img src="/nextjs.png" alt="Logo" width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NEXT.JS</h3>
                        </div>
                    </div>
                </div> */}

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto'>
                        <img src="/tailwind.png" alt="Logo" width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TAILWIND</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto'>
                        <img src="/php.png" alt="Logo" width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>PHP</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto'>
                        <img src="/wordpress.png" alt="Logo" width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>WORDPRES</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className=' m-auto'>
                        <img src="/github.png" alt="Logo" width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GITHUB</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills;