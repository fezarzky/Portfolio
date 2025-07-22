import React from 'react';
import HeroImg from '../../assets/feza_hero.jpg';
import CV from '../../assets/CV_Feza Rizky Putra Pratama.pdf';
import {motion} from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const  HeroSection = () => {
    return (
        <section id="hero" className="pt-20">
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[640px] relative">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center md:text-left space-y-4 pr-0 md:pl-12">
                        <h1 className="text-4xl font-bold lg:text-5xl !leading-tight">
                            <span className="opacity-0 animate-fade-in">Hi! I'm</span>
                            <span className="text-[#FF5841] text-glow opacity-0 animate-fade-in-delay-1"> Feza!</span>
                        </h1>
                        <p className="opacity-0 animate-fade-in-delay-2">
                            I'm a Web Developer College Student
                            with a strong will to improve!</p>
                        <button className="primary-button mt-5 opacity-0 animate-fade-in-delay-3">
                            <a href={CV} download='CV'>
                                Download CV
                            </a>
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <motion.img src={HeroImg} alt="Hero" className="w-1/2 h-auto" 
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }} />
                </div>
                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-[#CCB465] text-glow">Scroll</span>
                    <ArrowDown className="w-5 h-5 text-[#CCB465]"></ArrowDown>
                </div>

            </div>
        </section>
    )
}