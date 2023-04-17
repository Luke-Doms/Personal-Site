import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import {Link} from 'react-scroll'


const Home = () => {
    return (
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-white to-orange-100"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-black md:ph-0 ph-200">
              I'm a Full Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
            I have 5 years of experience programming and designing software.
            My current focus is on building web applications, mainly using the MERN stack.
            </p>
  
            <div>
            <Link to="projects" smooth duration={500}  className=" group text-white w-fit px-6 py-3 my-2 flex items-center 
                    rounded-md bg-gradient-to-r from-red-600 to-red-400 cursor-pointer">
                        Projects 
                        <span className="group-hover:rotate-90 duration-300">
                            <MdKeyboardArrowRight size={20} className="ml-2"></MdKeyboardArrowRight>
                        </span>
                    </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Home