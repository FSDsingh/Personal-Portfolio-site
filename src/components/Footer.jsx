import React from 'react'

const Footer = () => {
  return (
    <>
     <div className='py-3 border bg-gray-100 flex justify-between px-72'>
        <div>
            <p>@2024 Sandeep Singh <span>All Right Reserved</span></p>
            
        </div>
    
     <div className='space-x-5'>
        <a href="/about" className='hover:underline'>About</a>   
        <a href="/privacy" className='hover:underline'>PrivacycPolicy</a>   
        <a href="/licencing" className='hover:underline'>Licencing</a>   
        <a href="/contact" className='hover:underline'>Contact</a>   
     </div> 
     </div>
    </>
  )
}

export default Footer
