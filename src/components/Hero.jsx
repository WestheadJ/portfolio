import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import me from "../assets/photos/me.webp";

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
                    <div className="flex  sm:flex-row w-full justify-center gap-4 sm:gap-1 mt-4">
                        <div className="flex items-center gap-2 hover:scale-110 hover:cursor-pointer transition-transform duration-200">
                            <Mail className="text-blue-500" />
                            <p className="bg-blue-500 bg-clip-text text-transparent">Email</p>
                        </div>
                        <div className="flex items-center gap-2 hover:scale-110 hover:cursor-pointer transition-transform duration-200">
                            <Github className="text-green-500" />
                            <p className="bg-gradient-to-r from-green-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">GitHub</p>
                        </div>
                        <div className="flex items-center gap-2 hover:scale-110 hover:cursor-pointer transition-transform duration-200">
                            <Linkedin className="text-blue-600" />
                            <p className="text-blue-600">LinkedIn</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 justify-center sm:justify-center mt-4 text-sm sm:text-base">
                        <MapPin />
                        <p>Oldham, UK · Open to relocation/remote working</p>
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