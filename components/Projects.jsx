import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HospitalImg from '../public/assets/projects/style3.jpg';
import MultimediaImg from '../public/assets/projects/style4.jpg';
import MovieImg from '../public/assets/projects/spider-man.png';
import netflixImg from '../public/assets/projects/tt.jpg';
import Projectitem from './Projectitem';

const Projects = () => {
  return (
    <div id='projects' className='w-fulll'>
        <div className='max-w-[1240px] mx-auto ml-40 px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <Projectitem title='Hospital Finder' 
                backgroundImg={HospitalImg} 
                projectUrl='/Hospital' />

                <Projectitem title='Multimedia-App' 
                backgroundImg={MultimediaImg} 
                projectUrl='/multimedia' />

                <Projectitem title='movie world' 
                backgroundImg={MovieImg} 
                projectUrl='/movie' />

                <Projectitem title='Netflix-App' 
                backgroundImg={netflixImg} 
                projectUrl='/netflix' />

            </div>
        </div>
    </div>
  )
}

export default Projects;