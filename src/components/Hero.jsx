import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import me from "@assets/photos/me.webp";
import mypdf from '@assets/pdfs/mypdf.pdf'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-start justify-center w-full px-4 sm:px-6 md:px-0 pt-24 md:pt-32">
            <div className="max-w-6xl flex flex-col md:flex-row items-center md:items-start">

                {/* Left text section */}
                <div className="w-full md:w-1/2 space-y-4 mb-12 md:mb-0 md:mr-8 px-0 md:pl-8 lg:pl-20">
                    <p className="font-extralight italic text-lg sm:text-xl text-center md:text-left">
                        Software Engineer
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold underline underline-offset-8 text-center md:text-left">
                        James Westhead
                    </h1>
                    <p className="text-base sm:text-lg md:text-lg max-w-xl mx-auto md:mx-0 text-center md:text-left">
                        Recent Graduate BEng Software Engineer <span className="italic text-sm">(Summer 2025)</span> with a passion for building projects across the full stack and exploring new languages, frameworks, and libraries.
                    </p>

                    {/* Social links */}
                    <div className="flex  sm:flex-row w-full justify-center gap-8 sm:gap-4 mt-4">
                        <div title='Go to email me!' className="flex items-center gap-2 hover:scale-110 hover:cursor-pointer transition-transform duration-200">
                            <a className="flex gap-2" href="mailto:james_westhead@outlook.com">
                                <Mail className="text-blue-500" />
                                <p className="bg-blue-500 bg-clip-text text-transparent">Email</p>
                            </a>
                        </div>
                        <div title="View my GitHub!" className="flex items-center gap-2 hover:scale-110 hover:cursor-pointer transition-transform duration-200">
                            <a className="flex gap-2" href="https://github.com/WestheadJ">
                                <Github className="text-green-500" />
                                <p className="bg-gradient-to-r from-green-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">GitHub</p>
                            </a>
                        </div>
                        <div title="Check out my LinkedIn" className="flex items-center gap-2 hover:scale-110 hover:cursor-pointer transition-transform duration-200">
                            <Linkedin className="text-blue-600" />
                            <p className="text-blue-600">LinkedIn</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 justify-center  mt-4 text-sm sm:text-base">
                        <MapPin />
                        <p>Oldham, UK · Open to relocation/remote working</p>
                    </div>
                    <div title="Download my CV" className="flex w-full justify-center items-center">
                        <a
                            href={mypdf}
                            download="jameswesthead-cv.pdf"
                            aria-label="Download James Westhead CV"
                            className="inline-flex items-center px-6 py-3 bg-amber-100 text-black font-semibold rounded-lg shadow hover:bg-amber-200 transition-colors duration-200 "
                        >
                            Download CV
                            <svg
                                className="w-5 h-5 ml-2"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right image section */}
                <div className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
                    <div className="border-2 border-zinc-800 rounded-lg p-3 shadow-lg">
                        <div className="border-2 border-zinc-800 rounded-lg p-3 shadow-lg">
                            <img
                                src={me}
                                alt="James Westhead graduation headshot"
                                className="rounded-lg shadow-lg mx-auto max-w-full h-auto max-h-80 grayscale hover:grayscale-0"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}