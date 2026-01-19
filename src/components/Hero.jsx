import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import me from "../assets/photos/me.webp";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center w-full px-4 md:px-0 md:mt-8 sm:mt-14">
            <div className="max-w-6xl flex flex-col md:flex-row items-center md:items-start">

                {/* Left text section */}
                <div className="w-full md:w-1/2 space-y-4 mb-12 md:mb-0 md:mr-8 md:pl-20">
                    <p className="font-extralight italic text-center md:text-left">Software Engineer</p>
                    <h1 className="text-4xl sm:text-5xl font-bold underline underline-offset-[8px] text-center md:text-left">
                        James Westhead
                    </h1>
                    <p className="text-lg max-w-xl mx-auto md:mx-0 text-center md:text-left">
                        Recent Graduate BEng Software Engineer <span className="italic text-sm">(Summer 2025)</span> with a passion for building projects across the full stack and exploring new languages, frameworks, and libraries.
                    </p>

                    {/* Social links */}
                    <div className="flex flex-col sm:flex-row w-full justify-center sm:justify-center gap-4 sm:gap-1 mt-4">
                        <div className="flex items-center gap-2 hover:scale-110 hover:cursor-pointer transition-transform duration-200 justify-center sm:justify-start">
                            <Mail className="text-blue-500" />
                            <p className="bg-blue-500 bg-clip-text text-transparent">Email</p>
                        </div>
                        <div className="flex items-center gap-2 hover:scale-110 hover:cursor-pointer transition-transform duration-200 justify-center sm:justify-start">
                            <Github className="text-green-500" />
                            <p className="bg-gradient-to-r from-green-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">GitHub</p>
                        </div>
                        <div className="flex items-center gap-2 hover:scale-110 hover:cursor-pointer transition-transform duration-200 justify-center sm:justify-start">
                            <Linkedin className="text-blue-600" />
                            <p className="text-blue-600">LinkedIn</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 justify-center  mt-4">
                        <MapPin />
                        <p>Oldham, UK · Open to relocation/remote working</p>
                    </div>
                </div>

                {/* Right image section */}
                <div className="w-full md:w-1/2 flex justify-center">
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