import React from "react";
import Hero from "./Hero";
import Projects from "./projects/Projects"

export default function PortfolioView() {
    return (
        <div className="m-4">

            <Hero />

            <section className=" items-center justify-center">
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-[60%] h-px my-8 bg-white-100 border-1" />
                    <span className="absolute px-16 font-medium text-heading -translate-x-1/2 bg-neutral-950 left-1/2"><p className="text-xl">ABOUT</p></span>
                </div>
                <div className="flex flex-col w-full items-center justify-center text-center">
                    <div className="w-[71ch] mt-8 text-muted-foreground leading-relaxed">
                        <p >Hello there! I am James, and I recently graduated from Sheffield Hallam University with a 2:1 in Software Engineering. I love building projects in my spare time (when I'm not working!).   </p>
                        <p>With a focus using <span className="bg-gray-800 text-yellow-500 rounded-lg p-[2px] pr-0 font-extralight" >JavaScript </span>with frameworks like <span className="bg-gray-800 text-cyan-500 rounded-lg p-[2px] pr-0 font-extralight" >React.Js</span>  and <span className="bg-gray-800 text-blue-600 rounded-lg p-[2px] pr-0 font-extralight" >{"Python"}</span> for projects
                            I have used and played around with many languages and frameworks with the likes of <span className="bg-gray-800 text-purple-500 rounded-lg p-[2px] pr-0 font-extralight" >{"C#"}</span> and <span className="bg-gray-800 text-orange-600 rounded-lg p-[2px] pr-0 font-extralight" >SvelteKit.</span></p>
                        <p>I am comfortable working in project teams, working with stakeholders, for example my project which was client-facing, creating an intelligence mapping tool built for Raytheon as a part of a University module.</p>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center justify-center text-center">
                    <div className="w-[71ch] mt-8 text-muted-foreground leading-relaxed">

                    </div>
                </div>
            </section>
            <section id="projects" >
                <Projects />
            </section>

            <section id="contact">
                <h2 className="text-3xl font-bold mb-2">Contact</h2>
                <p>Email: james@example.com</p>
            </section>
        </div>
    );
}