import React, { useState } from 'react'

const Servies = () => {
    const [data, setData] = useState({
        id:"1",
        title:"Web Development",
        descrption: "",
        actionButton:{
            title: "",
            link: " ",

        }
    })
  return (
    <>
     <div className="main-container py-16">
        <h1 className='text-5xl font-bold text-center underline'>My Servies</h1>
        <div className="serices-container space-x-5 px-10 flex mt-12 ">
        <div className='cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-4'>
        <i class="text-5xl fa-solid fa-microchip"></i>
                <h1 className='text-4xl'>Web Development</h1>
                <p>Web development encompasses the creation and maintenance of websites and web applications, focusing on front-end (design and user experience) and back-end (server-side functionality).</p>
                <button className='px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg'>Check</button>
            </div>
            <div className='cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-4'>
            <i class="text-5xl fa-solid fa-mobile"></i>
                <h1 className='text-4xl'>Android developer</h1>
                <p>An Android developer designs and builds applications for Android devices, focusing on user interfaces, functionality, performance optimization, and ensuring compatibility across various Android versions and devices.</p>
                <button className='px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg'>Check</button>
            </div>
            <div className='cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-4'>
            <i class="text-5xl fa-solid fa-server"></i>
                <h1 className='text-4xl'>Back-end Development</h1>
                <p>A backend developer focuses on server-side logic, database management, and API integration, ensuring the application's server, database, and APIs function seamlessly and efficiently.</p>
                <button className='px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg'>Check</button>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Servies
