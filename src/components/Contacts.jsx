import React from 'react'
import { Instagram, Linkedin, Mail } from 'lucide-react';

export const Contacts = () => {
return (
    <section id='contacts' className='py-20 px-4'>
            <div className="container">
                    <p className='text-sm text-center text-[#CCB465]'>Get in Touch</p>
                    <h2 className='text-3xl lg:text-4xl font-bold text-center mt-1 mb-8'>
                            <span className='text-[#FF5841]'>Contact</span>
                            <span> Me.</span>
                    </h2>
                    <div className='flex justify-center px-4 md:px-8'>
                            <div className='w-auto max-w-full md:max-w-4xl bg-transparent border border-[#CCB465] rounded-4xl px-6 py-8'>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center'>
                                    <a className='flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 w-full hover:text-[#CCB465] transition-colors duration-300' 
                                        href="mailto:fezarpp@gmail.com">
                                        <Mail size={45}/>
                                        <span className='text-xl'>Email</span>
                                    </a>

                                    <a className='flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 w-full hover:text-[#CCB465] transition-colors duration-300' 
                                       href="https://linkedin.com/in/fezarzky" 
                                       target="_blank">
                                        <Linkedin size={45}/>
                                        <span className='text-xl'>Linkedin</span>
                                    </a>

                                    <a className='flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 w-full hover:text-[#CCB465] transition-colors duration-300' 
                                       href="https://instagram.com/fezarzky" 
                                       target="_blank">
                                        <Instagram size={45}/>
                                        <span className='text-xl'>Instagram</span>
                                    </a>
                                </div>
                            </div>
                    </div>
                    <div className='text-center mt-5 p-2 pb-5'>
                        <p className='text-sm font-extralight'>Feel free to reach out for collaborations, projects, or just a friendly chat!</p>
                    </div>
            </div>
    </section>
)
}
