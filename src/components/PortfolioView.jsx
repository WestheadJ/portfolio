import React from "react";
import Hero from "./Hero";

export default function PortfolioView() {
    return (
        <div className="m-4">

            <Hero />

            <section className=" items-center justify-center">
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-[60%] h-px my-8 bg-white-100 border-1" />
                    <span className="absolute px-16 font-medium text-heading -translate-x-1/2 bg-neutral-950 left-1/2"><p className="text-xl">ABOUT</p></span>


                </div>
                <div className="flex w-full items-center justify-center text-center">
                    <p className="w-[75ch]">Hello there! I am James, and I recently graduated from Sheffield Hallam University. I have had a strong passion for building application that solve real world problems and control complex systems seeing watch my Dad work from home doing Embedded Systems Engineering. </p>
                </div>
            </section>
            <section id="projects">
                <h2 className="text-3xl font-bold mb-2">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 border rounded shadow hover:shadow-lg transition">Project 1</div>
                    <div className="p-4 border rounded shadow hover:shadow-lg transition">Project 2</div>
                    <div className="p-4 border rounded shadow hover:shadow-lg transition">Project 3</div>
                    <div className="p-4 border rounded shadow hover:shadow-lg transition">Project 4</div>
                </div>
            </section>

            <section id="contact">
                <h2 className="text-3xl font-bold mb-2">Contact</h2>
                <p>Email: james@example.com</p>
            </section>
        </div>
    );
}