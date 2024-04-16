import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import {AiOutlineMail} from "react-icons/ai";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6'
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp} from "react-icons/hi"

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 
                            ease-in duration-300' src="/latop1.jpg" alt="logo" 
                            width={400} height={1200} />
                        </div>
                     
                        <div>
                            <h2 className='text-[#5651e5]'>Let's Link Up</h2>
                            <p>Front-End Developer</p> 
                            <p>I am available for freelance and full-time postions.
                                Contact me and let's talk</p>
                        </div> 
                    
                    <div>
                        <p className="uppercse pt-8 text-[#5651e5]">Connect with me</p>
                        <div className="flex items-center justify-between py-4">
                            
                            <a href="https://www.linkedin.com/in/osuchukwu-chidozie-jeremiah/">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn />
                            </div>
                            </a>
                            
                            <a href="https://github.com/EdozieJerry/">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub />
                            </div>
                            </a>
                            
                            <a href="#">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail />
                            </div>
                            </a>

                            <a href="https://twitter.com/Edoziejerry">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaXTwitter />
                            </div>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* right  */}

                <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                    <div className="p-4">
                    {/* <img src="/laptop2.jpg" alt="" shadow-xl rounded-xl className='rounded-xl hover:scale-105 
                            ease-in duration-300'/> */}
                       
                                               {/*  learning new stuffs */}
                    <div className='relative h-auto w-full  p-4 group hover:bg-gradient-to-r from-[#49b352d3] to-[#709dff]'>
                    <img src="/laptop2.jpg" alt="/"  className='group-hover:opacity-10 ease-in duration-300 rounded-xl hover:scale-105' />            
                    
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>Let's Connect</h3>
                    
                    </div>
    </div>
                      
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        < HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                    </div>
                </Link>
            </div>

            {/* checkingout new stuffs */}

            {/* <div>
                <div>
                <img src="/laptop2.jpg" alt=""  className='bg-scroll  hover:bg-fixed'/>
                </div>
                <div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, 
                    magnam dicta eaque facere aperiam corrupti quae. Sequi dolorum 
                    sit suscipit doloremque deserunt
                     perferendis delectus nam itaque. Porro atque eum molestias.
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, 
                    magnam dicta eaque facere aperiam corrupti quae. Sequi dolorum 
                    sit suscipit doloremque deserunt
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, 
                    magnam dicta eaque facere aperiam corrupti quae. Sequi dolorum 
                    sit suscipit doloremque deserunt
                     perferendis delectus nam itaque. Porro atque eum molestias.
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, 
                    magnam dicta eaque facere aperiam corrupti quae. Sequi dolorum 
                    sit suscipit doloremque deserunt
                     perferendis delectus nam itaque. Porro atque eum molestias.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto, commodi saepe fugiat modi
                      temporibus. Perspiciatis tempora soluta explicabo aliquam quam tempore
                      laboriosam quas minus laborum perferendis quibusdam, vitae incidunt.
                </p>
            </div>
                
            </div> */}

            {/* checking out new stuffs */}
            
        </div>
    </div>
  )
}

export default Contact;