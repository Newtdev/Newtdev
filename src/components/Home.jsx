import React from 'react'
import Resume from '../assets/pdfs/THOMAS EJEMBI RESUME.pdf'

export default function Home() {


    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up">
                Thomas Ejembi
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-grey-lighter max-w-2xl mx-auto mb-6 md:mb-8 animate-fade-in-up delay-100">
                Web & Mobile Software Engineer
            </p>

            <p className="text-base sm:text-lg md:text-xl text-grey-lighter max-w-3xl mx-auto mb-8 md:mb-12 animate-fade-in-up delay-200">
                Building exceptional digital experiences with modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up delay-300">
                <a
                    download
                    href={Resume}

                    className="primary_btn px-6 py-3 sm:px-8 sm:py-4 rounded text-[#CCD6F6] border-2 border-secondary-light hover:bg-secondary-light/20 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-offset-4 focus:ring-offset-primary animate-pulse "
                    aria-label="Contact via email (opens new window)"
                >
                    Hire Me
                </a>
                <a
                    href="https://github.com/NewtDev"
                    target="_blank"
                    className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-[#CCD6F6] border-2 border-secondary-light hover:bg-secondary-light/50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-light focus:ring-offset-4 focus:ring-offset-secondary-light"
                    aria-label="View GitHub profile (opens new window)"
                >
                    View GitHub
                </a>
            </div>
        </div>
    )
}
