import React from 'react'

function ContactUs() {
  return (
    <div name='contact' className='h-screen bg-gradient-to-b from-orange-100 to-white w-full p-4 text-black'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>You can reach out to me with this form</p>
            </div>

        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/d80ed8e5-fde8-4188-87b3-8f1e5918ee4c" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" 
                name="name" 
                placeholder='Enter your name' 
                className='p-2 bg-transparent border-2 border-gray-500 rounded-md white-text focus:outline-none' />
                <input type="text" 
                name="email" 
                placeholder='Enter your email adress' 
                className='my-4 p-2 bg-transparent border-2 border-gray-500 rounded-md white-text focus:outline-none' />
                <textarea name="message" 
                placeholder='Enter your message'
                rows="10" 
                className='p-2 bg-transparent border-2 border-gray-500 rounded-md white-text focus:outline-none'></textarea>
                <button className='text-white bg-gradient-to-b from-red-600 to-red-400 
                px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Send</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default ContactUs