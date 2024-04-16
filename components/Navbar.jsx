import Image, {ImageProps} from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose,AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6'
import { useRouter } from "next/router";

const Navbar = () => {
    const [Nav, setNav] = useState(false)
    // this useState is for adding a shadow to the navbar when it is been scroll up
    const [shadow, setShadow] = useState(false)
    // this useState is used to add background layer for the navbar section
    const [navBg, setNavBg] = useState('#ecf0f3')
    // this useState is used for setting colors for the link tags
    const [linkColor, setlinkColor] = useState('#1f2937')
    const router = useRouter()

    // setting the useEffect state for the code above

    useEffect(()=>{
        if(
            router.asPath === '/property' ||
            router.asPath === '/crypto' ||
            router.asPath === '/netflix' ||
            router.asPath === '/twitch' 
        ){
            setNavBg['transparent']
            setlinkColor('#ecf0f3')
        }else{
            setNavBg('#ecf0f3')
            setlinkColor('#1f2937')
        }
    },[router])


    const handleNav = () => {
        setNav(!Nav);
    };

    // for the navbar shadow when scrolling

    useEffect(() => {
        const handleShadow = () =>{
            if (window.scrollY >= 90) {
                setShadow(true)
            }else{
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow );
    }, []   
    );
    
    return (
        <div style={{backgroundColor: `${navBg}`}} className={shadow ? "fixed w-full h-20 shadow-xl z-[100]"
         : 'fixed w-full h-20 z-[100]'}>
            
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href='/'>
                {/* <Image src="/3.png" alt="Logo" width={125} height={50} /> */}
                
                {/* <img src="/110.png" alt="logo" width={125} height={50} />git */}
                
                </Link>
                <div>
                    <ul style={{color: `${linkColor}`}} className="hidden md:flex">
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            
        {/* this is a section for the menu-icon on small screen, the right section  */}
            <div className={Nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={Nav ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md-w[45] h-screen bg-[#ecf0f3] p-10 ease-in duration=500" :
                                     'fixed left-[-100%] top-0 p-10 ease-in duration=500'}>
        
                    {/* this is a section for the menu-icon on small screen, the left section  */}
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href='/'>
                            <img src="/110.png" alt="Logo" width={125} height={50} />
                            </Link>
                            
                            <div onClick={handleNav} className="rounded-full shadow-lg shadwo-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md-w py-4">Let's build something legendary together</p>
                        </div>
                    </div>
                    <div className="py-4 flex-col">
                        <ul className="uppercase">
                            <Link href='/'>
                            <li onClick={()=> setNav(false)} className="py-4 text-sm">Home</li>
                            </Link>
                            <Link href='/#about'>
                            <li onClick={()=> setNav(false)} className="py-4 text-sm">About</li>
                            </Link>
                            <Link href='/#skills'>
                            <li onClick={()=> setNav(false)} className="py-4 text-sm">Skills</li>
                            </Link>
                            <Link href='/#projects'>
                            <li onClick={()=> setNav(false)} className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href='/#contact'>
                            <li onClick={()=> setNav(false)} className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>

                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">LET'S BUILD</p>
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
            </div>
        </div>
    );
};

 
export default Navbar;