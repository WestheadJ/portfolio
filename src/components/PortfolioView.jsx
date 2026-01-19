import React from "react";
import Hero from "./Hero";
import Projects from "./projects/Projects"
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import mypdf from "../assets/pdfs/mypdf.pdf"

export default function PortfolioView() {
    return (
        <div className="m-4">

            <Hero />

            <section id="about" className=" items-center justify-center">
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-[60%] h-px my-8 bg-white-100 border-1" />
                    <span className="absolute px-16 font-medium text-heading -translate-x-1/2 bg-neutral-950 left-1/2"><p className="text-xl">ABOUT</p></span>
                </div>
                <div className="flex flex-col w-full items-center justify-center text-center">
                    <div className="max-w-[71ch] mt-8 text-muted-foreground leading-relaxed">
                        <p >Hello there! I am James, and I recently graduated from Sheffield Hallam University with a 2:1 in Software Engineering. I'm passionate about building projects that combine creativity and functionality.  </p>
                        <p>With a focus using <span className="bg-gray-800 text-yellow-500 rounded-lg p-[2px] pr-0 font-extralight" >JavaScript </span>with frameworks like <span className="bg-gray-800 text-cyan-500 rounded-lg p-[2px] pr-0 font-extralight" >React.Js</span>  and <span className="bg-gray-800 text-blue-600 rounded-lg p-[2px] pr-0 font-extralight" >{"Python"}</span> for projects
                            or exploring  <span className="bg-gray-800 text-purple-500 rounded-lg p-[2px] pr-0 font-extralight" >{"C#"}</span> and <span className="bg-gray-800 text-orange-600 rounded-lg p-[2px] pr-0 font-extralight" >SvelteKit.</span></p>
                        <p>I enjoy working in teams and bringing ideas to life. like a client-facing intelligence mapping tool I developed for Raytheon during university. I'm always up for learning new skills, experimenting with frameworks, and turning complex problems into elegant solutions.</p>
                        <p>I'd have to say my love of programming would stem from primary school IT lessons, secondary school IT lessons, however much more of it was looking at my Father who is an embedded systems and micro controller software engineer. It got me into thinking about what I can do and what I could build, so I signed up for GCSE computer science, to A Level Computer Science, to my BEng Software Engineering degree. </p>
                        <p>I speradically build projects, ideas that would help me from every day to day, or little tasks to help me learn and better my understanding of the langauges I use</p>
                        <p>Other than that, I am a big fan of the gym, climbing and music!</p>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center justify-center text-center">
                    <div className="w-[71ch] mt-8 text-muted-foreground leading-relaxed">

                    </div>
                </div>
            </section>
            <section id="projects" >
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-[60%] h-px my-8 bg-white-100 border-1" />
                    <span className="absolute px-16 font-medium text-heading -translate-x-1/2 bg-neutral-950 left-1/2"><p className="text-xl">PROJECTS</p></span>
                </div>
                <Projects />
            </section>

            <section id="CV" className="flex flex-col items-center justify-center w-full">
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-[60%] h-px my-8 bg-white-100 border-1" />
                    <span className="absolute px-16 font-medium text-heading -translate-x-1/2 bg-neutral-950 left-1/2"><p className="text-xl">CV/Resume</p></span>
                </div>
                <a
                    href={mypdf}
                    download="jameswesthead-cv.pdf"
                    aria-label="Download James Westhead CV"
                    className="inline-flex items-center px-6 py-3 bg-amber-100 text-black font-semibold rounded-lg shadow hover:bg-amber-200 transition-colors duration-200"
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
            </section>

            <section id="contact">
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-[60%] h-px my-8 bg-white-100 border-1" />
                    <span className="absolute px-16 font-medium text-heading -translate-x-1/2 bg-neutral-950 left-1/2"><p className="text-xl">CONTACT</p></span>
                </div>
                <div className="flex w-full justify-center text-center">
                    <p className="text-center w-[70ch] text-lg"> Want to work together? Talk about my projects? Send me an email <a href="mailto:james_westhead@outlook.com?subject=Query" className="inline-block hover:border-amber-100 hover:shadow-md  underline"><Mail className="w-4 h-4 inline-block mr-1" />: james_westhead@outlook.com </a> or message me on <a href="" className="underline hover:border-amber-100 hover:shadow-md "><Linkedin className="w-4 h-4 inline-block mr-1" />: LinkedIn</a> </p>
                </div>
            </section>
        </div>
    );
}