import React from 'react'
import {AiOutlineMail} from "react-icons/ai";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6'
// import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p classname="uppercase text-xl tracking-widest text-gray-600">LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className="text-[#5651e5]">Jerry</span></h1>
                <h1 className="py-2 text-gray-700"> A Front-End Web Developer</h1>
                
                <p className='py-4 text-gray-600 mx-w-[70%] m-auto' >I'm a front-end web developer specializing in building (and
                    ocassionally designing) exceptional digital experience. Currently,
                    I'm focued on building responsive front-end web applicattion while
                    learning back-end technologies.
                </p>
                
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

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
                    
                    <a href="https://gmail.com/jerrycash4@gmail.com">
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
  )
}

export default Main