import React from 'react'
import { ReactTyped } from 'react-typed';


const Hero = () => {
  return (
    <div className='text-white'>

    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto justify-center flex flex-col items-center'>
      <p className='font-bold p-2' >
      HR - Prodigy InfoTech
      Providing World Class E-Learning Experince with Real world Internships</p>
      <h1 className='md:text-7xl sm:text-6xl font-blod md:py-6 text-[#00df9a] ' > HR - Prodigy InfoTech</h1>
      <div className='flex justify-center items-center'>

       <p className='md:text-5xl sm:text-4xl font-blod py-2 px-1 '>The Developer Name is =    </p> 
         <ReactTyped className='md:text-5xl sm:text-4xl font-blod'
          strings={["Haile", "Michael", "Eshetu"]}
          typeSpeed={20}
          backSpeed={30}
          loop
          />
      </div>
   <p className='md:text-2xl text-xl text-gray-500'>Transforming the Way People Learn</p>
   <button className='bg-green-500 w-[200px]  font-medium rounded-md my-6 mx-auto py-3 '>get started</button>
    </div>
    </div>
        
  )
}

export default Hero
