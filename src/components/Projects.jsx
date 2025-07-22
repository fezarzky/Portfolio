import React from 'react'
import laundryeahThumbnail from '/projects/laundryeah-thumbnail.png'
import { ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Laundryeah Mobile App',
    description: 'This is a brief description of the Laundryeah mobile app.',
    image: laundryeahThumbnail,
    tags: ['Flutter', 'Firebase'],
    demoUrl:"#",
    githubUrl: "https://github.com/fezarzky/Laundryeah"
  },
  {
    id: 2,
    title: 'Laundryeah Mobile App',
    description: 'This is a brief description of the Laundryeah mobile app.',
    image: '/projects/image1.jpg',
    tags: ['Flutter', 'Firebase'],
    demoUrl:"#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: 'Laundryeah Mobile App',
    description: 'This is a brief description of the Laundryeah mobile app.',
    image: '/projects/image1.jpg',
    tags: ['Flutter', 'Firebase'],
    demoUrl:"#",
    githubUrl: "#"
  },
];


export const Projects = () => {
  return (
    <section id='projects'>
        <div className="container">
            <p className="text-sm text-center text-[#CCB465]">Let me show you</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-center mt-1 mb-8">
                    <span className="">My</span>
                    <span className="text-[#FF5841]"> Projects.</span>
                </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2 py-5">
                {projects.map((project, key) => (
                  <div key={key} className="group rounded-lg overflow-hidden shadow-xs card-hover bg-white/5 backdrop-blur-md border border-white/10">
                    <div className="h-48 overflow-hidden">
                      <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 hover:scale-110' />
                    </div>

                    <div className='p-6'>
                      <div className='flex flex-wrap gap-2 mb-3 '>
                        {project.tags.map((tag) => (
                          <span className='px-2 py-1 text-sm font-regular rounded-full bg-[#0A1828]/30 border border-[#CCB465]/50 backdrop-blur-sm'>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className='text-lg font-semibold mb-1 text-[#CCB465]'>{project.title}</h3>
                    <p className='text-sm font-light mb-4 p-5'>{project.description}</p>
                    <div className='flex justify-between items-center'>
                      <div className='flex space-x-3 w-full items-center justify-center pb-4'>
                        {/* <a href={project.demoUrl} className='text-white/80 hover:text-[#CCB465] transition-colors duration-300'>
                          <ExternalLink />
                        </a> */}
                        <a href={project.githubUrl} className='text-white/80 hover:text-[#CCB465] transition-colors duration-300'
                           target="_blank">
                          <Github />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </section>
  )
}




