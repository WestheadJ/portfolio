import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import me from "../assets/photos/me.webp";

export default function Hero() {
    return (


        <section className="min-h-screen flex items-center justify-center w-full">
            <div className="max-w-68 flex">
                <div className="w-1/2 space-y-4 mr-8 mt-[80px]">
                    <p className="font-extralight italic">Software Engineer</p>
                    <h1 className="text-5xl font-bold underline underline-offset-[8px] ">   James Westhead    </h1>
                    <p className="text-lg max-w-2xl">
                        Recent Graduate BEng Software Engineering with a passion for building full-stack web applications and back-end services.
                    </p>

                    <div className="flex w-full max-w-md justify-between">
                        <div className="flex items-center gap-2 hover:scale-110 hover:cursor-pointer transition-transform duration-200">
                            <Mail className="text-blue-500" />
                            <p className="bg-blue-500 bg-clip-text text-transparent">
                                Email
                            </p>
                        </div>
                        <div className="flex items-center gap-2 hover:scale-110 hover:cursor-pointer transition-transform duration-200">
                            <Github className="text-green-500" />
                            <p className="bg-gradient-to-r from-green-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                                GitHub
                            </p>
                        </div>
                        <div className="flex items-center gap-2 hover:scale-110 hover:cursor-pointer transition-transform duration-200"><Linkedin className="text-white" /><p className="text-blue-600">LinkedIn</p></div>
                    </div>
                    <div className="flex items-center gap-2 cursor-default"><MapPin /><p>Oldham, UK · Open to relocation/remote working</p></div>
                </div>
                <div className="w-1/2 flex justify-center">
                    <div className="border-2 border-zinc-800 rounded-lg p-3 shadow-lg">
                        <div className="border-2 border-zinc-800 rounded-lg p-3 shadow-lg">
                            <img src={me} alt="James Westhead graduation headshot" className="rounded-lg shadow-lg  mx-auto max-h-80 grayscale hover:grayscale-0" />
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
}