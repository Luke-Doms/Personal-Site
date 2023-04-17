import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import webgl from "../assets/webgl.png";
import nodejs from "../assets/nodejs.png"
import cplusplus from "../assets/c.png"


const Experience = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-white",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: webgl,
      title: "WebGL",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: nodejs,
      title: "Node JS",
      style: "shadow-gray-400",
    }, 
    {
      id: 10,
      src: cplusplus,
      title: "C++",
      style: "shadow-gray-400",
    }
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-orange-100 to-white w-full text-black 
    md:h-screen">
        
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Experience</p>
            <p className="py-6">Here are some of the tools I'm familiar with</p>
          </div>

          <div className="w-full grid md:grid-cols-5 grid-cols-3 text-center">
            {
              techs.map(({id, src, title, style}) => (
              <div className="p-6">
                <img src={src} alt='' className="w-25 px-4 mx-auto"/>
                <p className="mt-2">{title}</p>
              </div>
              ))
            }
          </div>

        </div>
    </div>
  );
};

export default Experience;