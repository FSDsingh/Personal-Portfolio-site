import React, { useEffect, useRef } from 'react';
// import bannerImage from '../assets/home.jpeg';
import bannerImage from '../assets/london.jpeg';
import bannerBackground from '../assets/backImg2.jpeg'
import Typed from 'typed.js';


const Banner = () => {
    const el= useRef(null);
    
    useEffect(() => {
        const typed = new Typed(el.current,{
            strings: ["Android Developer", "Front-end Developer", "Back-end Developer", "UI Developer"],  //string to display in output
            //Speed settings, try diffrent values untill you get good results 
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backroying: 100,
            loop:true  //continuous strings changing
        });
    
        //Destropying
        return()=>{
            typed.destroy();
        };
    }, [])
    return (
        <div style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
        }} className='main-container flex items-center'>
            {/* First Box */}
            <div  className=' w-full flex items-center justify-center items-center text-white mt-2 p-4'>
                <div className=' w-2/3  ms-10 '>
                    {/* mt are the margin top */}
                    <h3 className='mt-3 text-3xl font-semibold'>Hi, I am </h3>
                    <h1 className='mt-3 text-5xl font-bold'>Sandeep Singh</h1>
                    <h2 className='mt-3 text-2xl'>And as a <span className='font-bold underline' ref={el}></span></h2>
                    <p className='mt-4'>Dedicated MCA student with a keen interest in front-end development.Through my academic journey, I have gained proficiency in HTML, CSS, JavaScript, and React.js. I am seeking an opportunity to leverage my education and enthusiasm for front-end development to contribute to innovative projects.</p>
                    <div className=' icons-container flex space-x-5'>
                        <a  className='px-3 py-4 w-14 h-14 hover:bg-orange-500 rounded-full cursor-pointer  flex justify-center items-center'>
                        <i class="fa-brands text-3xl fa-facebook"></i>
                        </a>
                        <a  className='px-3 py-4 w-14 h-14 hover:bg-orange-500 rounded-full cursor-pointer  flex justify-center items-center'>
                        <i class="fa-brands text-3xl fa-instagram"></i>     
                        </a>
                        <a  className='px-3 py-4 w-14 h-14 hover:bg-orange-500 rounded-full cursor-pointer  flex justify-center items-center'>
                        <i class="fa-brands text-3xl fa-youtube"></i>    
                        </a>
                        <a className='px-3 py-4 w-14 h-14 hover:bg-orange-500 rounded-full cursor-pointer  flex justify-center items-center'><i class="fa-brands text-3xl fa-linkedin"></i> </a>
                    </div>
                    <br />
                    <a className=' text-1.5xl px-6 py-2 bg-orange-600 rounded-full shadow-lg' href="/contact">Contact Me</a>
                </div>
            </div>

            {/* Second Box */}
            <div className=' w-full flex justify-center items-center'>
                <img
                    style={{ height: '350px', width: '300px' }}
                    src={bannerImage}
                    className='rounded-full'
                    alt="Banner"
                />
            </div>
        </div>
    );
}

export default Banner;
