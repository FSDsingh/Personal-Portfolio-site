import React, { useState } from 'react'
import bannerImage from "../assets/roundedPic.jpeg"

const About = () => {
    const [data, setData] = useState({
        image:bannerImage,
        title:"JavaScript Developer & Font-end Develope",
        desc1:`A JavaScript developer writes code to create interactive web features, enhancing user experience with dynamic content.`,
        desc2:`A front-end developer designs and implements user interfaces for websites and web applications, focusing on creating engaging, responsive layouts and ensuring a seamless user experience.`,

        actionButton:{
            title: "Read More",
            link: "/readmore"
        }
    })

    return (
        <div className='main-container py-16 border bg-gray-100'>
            <h1 className='text-center pb-16 text-5xl font-bold underline'>About Me</h1>

            <div className='flex items-center'>

                {/* Image */}
                <div className='w-full flex jutify-center'>
                    <img className="w-fit" src={data.image} alt="sandeep singh" />
                </div>


                {/* Text */}
                <div className='w-full flex justify-center'>
                    <div className='space-y-5 w-2/3'>
                    <h1 className='text-5xl  font-semibol '>{data.title}r</h1>
                    <p>{data.desc1}</p>
                    <p>{data.desc2}</p>
                    <button className='bg-orange-500 px-3 py-2 text-2xl rounded-full shadow'>{data.actionButton.title}</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About
