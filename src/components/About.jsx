import React from 'react';
import HeroImg from '../../assets/feza_hero.jpg';

export const About = () => {
    return (
        <section id="about" className="py-24 px-4">
            <div className="container">
                <p className="text-sm text-center text-[#CCB465]">Get to know more</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-center mt-1 mb-8">
                    <span className="text-[#FF5841]">About</span>
                    <span className=""> Me.</span>
                </h2>
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[640px] relative">
                    <div className="flex items-center justify-center">
                        <img src={HeroImg} alt="About Me" className="w-1/2 h-auto rounded-lg shadow-lg" />
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start space-y-4 pr-0 md:pl-12">
                        <p className="text-md font-light">
                            Hello! I'm Feza, a passionate web developer and college student at Politeknik Negeri Semarang. 
                            I love creating beautiful and functional websites that provide great user experiences. 
                            My journey in web development has been driven by a strong desire to learn and improve continuously.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}