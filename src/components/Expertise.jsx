import React from 'react'
import bannerImage from '../assets/london.jpeg';
import bannerBackground from '../assets/backImg2.jpeg'


const Expertise = () => {
  return (
    <>
      <div className='mt-3'>
        <h1 className='mb-16 text-5xl font-bold underline text-center'>My Expertise</h1>
        {/* box section */}

        <div style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
        }} className='box-container flex py-16' >
        <div className='flex text-white justify-center  '>
            {/* text container */}
            <div className='w-2/3 text-center space-y-4'>
            <h1 className='text-4xl font-bold '>I love this technologies</h1>
            <p>I love working with backend technologies, focusing on server-side logic, database management, and efficient API integration for robust applications.</p>
            <button className='text-2xl mt-3 px-4 py-2 bg-orange-500 rounded-full shadow-lg'>Hire me</button>
            </div>
        </div>

        <div className='`flex justify-center'>
            {/* skill container */}
            <div className='flex justify-center w-2/3 h-fit space-x-3 mt-1 flex-wrap'>
            <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointer'>Core java</p>
            {/* <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointe'>J2EE</p> */}
            <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointe'>Hibernate(ORM Tool)</p>
            <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointe'>Spring</p>
            <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointe'>Spring Framework</p>
            <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointe'>Tailwind</p>
            <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointe'>JavaScript</p>
            <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointe'>HTML</p>
            <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointe'>CSS</p>
            <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointe'>REACT.JS</p>
            <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointe'>C++</p>
            <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointe'>Python</p>
            <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointe'>Node.JS</p>
            <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointe'>MongoDB</p>
            <p className='bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-400 cursor-pointe'>Express.JS</p>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Expertise
