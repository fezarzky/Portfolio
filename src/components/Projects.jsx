import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Laundryeah Mobile App',
    description: 'This is a brief description of the Laundryeah mobile app.',
    image: '/projects/image1.jpg',
    tags: ['Flutter', 'Firebase'],
    demoUrl:"#",
    githubUrl: "#"
  },
  {
    id: 1,
    title: 'Laundryeah Mobile App',
    description: 'This is a brief description of the Laundryeah mobile app.',
    image: '/projects/image1.jpg',
    tags: ['Flutter', 'Firebase'],
    demoUrl:"#",
    githubUrl: "#"
  },
  {
    id: 1,
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                  <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">
                    <div className="h-48 overflow-hidden">
                      <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </section>
  )
}




