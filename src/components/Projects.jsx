import React from 'react'
import Semiphi from "../assets/semiphi.png";
import TSP from "../assets/tsp.png";

function Projects() {

    const portfolio = [
        {
            id:1, 
            title:"Semiphi",
            src:Semiphi
        }, 
        {
            id:2, 
            title:"TSP Solution",
            src:TSP
        }
        ]

    return (
        <div name="projects" className="bg-gradient-to-b from-white to-orange-100 w-full text-black 
        md:h-screen">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div>
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                        <p className="py-6">You can check out some of my projects here</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0">
                        {
                            portfolio.map(({id, title, src}) => (
                            <div key={id} 
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://github.com/Luke-Doms/Rubiks-Cube';
                                    }} 
                                className="text-center">
                                <div className="shadow-md shadow-red-600 rounded-lg duration-200 hover:scale-105">
                                    <img src={src} alt="" className="rounded-md"/>
                                    <div className="flex flex-col items-center justify-center">
                                        <p className="my-4 font-bold text-2xl">{title}</p>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects