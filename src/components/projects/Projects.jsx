import React from "react";
import { ExternalLink } from "lucide-react";
import { DiPython } from "react-icons/di";
import { PiFileCSharpBold } from "react-icons/pi";
import { RiJavascriptFill, RiSvelteFill } from "react-icons/ri";
import { FaHtml5, FaRaspberryPi, FaCss3Alt, FaFigma } from "react-icons/fa";
import { SiArduino, SiNetlify, SiTailwindcss } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { Link, NavLink } from "react-router";


export default function Projects() {
    return (
        <section className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-6">


                {/* ===================== CURRENT PROJECTS ===================== */}
                <h2 className="text-2xl font-bold mb-5 text-center">CURRENT PROJECTS</h2>

                <div className="grid grid-cols-1 place-items-center gap-y-6 mb-12">
                    <div
                        title="Click for more information..."
                        className="group w-full max-w-md p-4 border border-solid rounded hover:border-amber-100 hover:shadow-md hover:scale-[1.02] transition-transform duration-200"
                    >
                        <NavLink to="/projects/sales-to-stocks">
                            <div className="flex justify-between gap-2 mb-2">
                                <div>
                                    <h3 className="
  relative inline-block text-2xl font-bold
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-full
  after:bg-amber-100
  after:origin-left
  after:scale-x-0
  after:transition-transform after:duration-300 after:ease-out
  group-hover:after:scale-x-100
">
                                        Sales to Stock Tracker
                                    </h3>
                                    <p className="font-extralight italic text-gray-300 mt-2">CLI Tool</p>
                                </div>
                                <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-amber-100 transition-colors duration-200" />
                            </div>

                            <p className="mb-3">
                                A Python CLI tool using Spectre Console, Pandas, and DuckDB to analyse
                                sales and trends. Cleans and reshapes complex report exports for fast
                                querying.
                            </p>

                            <div className="flex gap-2">
                                <DiPython className="w-7 h-7 text-blue-400" />
                                <span className="text-xs p-1 border">DuckDB</span>
                                <span className="text-xs p-1 border">Pandas</span>
                                <span className="text-xs p-1 border">Spectre Console</span>
                            </div>
                        </NavLink>
                    </div>
                </div>

                {/* ===================== PAST PROJECTS ===================== */}
                <h2 className="text-2xl font-bold mb-5 text-center">PAST PROJECTS</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 justify-items-center">

                    {/* Apple Music → Spotify */}
                    <div className="group w-full max-w-md mx-auto p-4 border rounded hover:border-amber-100 hover:shadow-md hover:scale-[1.02] transition-transform duration-200">
                        <a href="/projects/apple-music-spotify-converter">
                            <div className="flex justify-between mb-2">
                                <div>
                                    <h3 className="
  relative inline-block text-2xl font-bold
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-full
  after:bg-amber-100
  after:origin-left
  after:scale-x-0
  after:transition-transform after:duration-300 after:ease-out
  group-hover:after:scale-x-100
">Apple Music to Spotify</h3>
                                    <p className="italic text-gray-300 mt-2">Python Tool</p>
                                </div>
                                <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-amber-100 transition-colors duration-200" />
                            </div>

                            <p className="mb-3">
                                Converts Apple Music playlists to Spotify using web scraping and
                                the Spotify Web API with logging for unmatched tracks.
                            </p>

                            <div className="flex gap-2">
                                <DiPython className="w-7 h-7 text-blue-400" />
                                <span className="text-xs p-1 border">BeautifulSoup</span>
                                <span className="text-xs p-1 border">Spotify API</span>
                                <span className="text-xs p-1 border">requests</span>
                            </div>
                        </a>
                    </div>

                    {/* Exception Analysis Tool */}
                    <div className="group w-full max-w-md mx-auto p-4 border rounded hover:border-amber-100 hover:shadow-md hover:scale-[1.02] transition-transform duration-200">
                        <a href="/projects/exception-analysis-tool">
                            <div className="flex justify-between mb-2">
                                <div>
                                    <h3 className="
  relative inline-block text-2xl font-bold
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-full
  after:bg-amber-100
  after:origin-left
  after:scale-x-0
  after:transition-transform after:duration-300 after:ease-out
  group-hover:after:scale-x-100
">Exception Analysis Tool</h3>
                                    <p className="italic text-gray-300 mt-2">Final Year Project - C# CLI</p>
                                </div>
                                <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-amber-100 transition-colors duration-200" />
                            </div>

                            <p className="mb-3">
                                A C# tool surfacing unhandled and potential runtime exceptions
                                before deployment using .NET reflection.
                            </p>

                            <div className="flex gap-2">
                                <PiFileCSharpBold className="w-7 h-7 text-violet-400" />
                                <span className="text-xs p-1 border">.NET</span>
                                <span className="text-xs p-1 border">Reflection</span>
                            </div>
                        </a>
                    </div>

                    {/* Raytheon Project */}
                    <div className="group w-full max-w-md mx-auto p-4 border rounded hover:border-amber-100 hover:shadow-md hover:scale-[1.02] transition-transform duration-200">
                        <a href="/projects/raytheon-map-tool">
                            <div className="flex justify-between mb-2">
                                <div>
                                    <h3 className="
  relative inline-block text-2xl font-bold
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-full
  after:bg-amber-100
  after:origin-left
  after:scale-x-0
  after:transition-transform after:duration-300 after:ease-out
  group-hover:after:scale-x-100
">Raytheon Map Intelligence</h3>
                                    <p className="italic text-gray-300 mt-2">University Client Project</p>
                                </div>
                                <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-amber-100 transition-colors duration-200" />
                            </div>

                            <p className="mb-3">
                                Client-facing mapping tool using Raytheon APIs with interactive
                                visualisations and spatial analysis.
                            </p>

                            <div className="flex gap-2">
                                <RiJavascriptFill className="w-7 h-7 text-yellow-300" />
                                <RiSvelteFill className="w-7 h-7 text-orange-500" />
                                <SiTailwindcss className="w-7 h-7 text-cyan-500" />
                                <span className="text-xs p-1 border">MapLibre</span>
                                <span className="text-xs p-1 border">Turf.js</span>
                                <span className="text-xs p-1 border">Vercel</span>
                                <span className="text-xs p-1 border">Vite.js Testing</span>


                            </div>
                        </a>
                    </div>

                    <div className="group w-full max-w-md mx-auto p-4 border rounded hover:border-amber-100 hover:shadow-md hover:scale-[1.02] transition-transform duration-200">
                        <a href="/projects/raytheon-map-tool">
                            <div className="flex justify-between mb-2">
                                <div>
                                    <h3 className="
  relative inline-block text-2xl font-bold
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-full
  after:bg-amber-100
  after:origin-left
  after:scale-x-0
  after:transition-transform after:duration-300 after:ease-out
  group-hover:after:scale-x-100
">93FT Job Technical Test - Dakota Hotels</h3>
                                    <p className="italic text-gray-300 mt-2">Front-end Website</p>
                                </div>
                                <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-amber-100 transition-colors duration-200" />
                            </div>

                            <p className="mb-3">
                                A front-end showcase of my skills from a design given to me!
                            </p>

                            <div className="flex gap-2">
                                <FaHtml5 className="w-7 h-7 text-orange-500" />
                                <FaCss3Alt className="w-7 h-7 text-cyan-500" />
                                <SiNetlify className="w-7 h-7 text-teal-300" />
                                <FaFigma className="w-7 h-7 text-purple-500" />

                            </div>
                        </a>
                    </div>

                    <div className="group w-full max-w-md mx-auto p-4 border rounded hover:border-amber-100 hover:shadow-md hover:scale-[1.02] transition-transform duration-200">
                        <a href="/projects/raytheon-map-tool">
                            <div className="flex justify-between mb-2">
                                <div>
                                    <h3 className="
  relative inline-block text-2xl font-bold
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-full
  after:bg-amber-100
  after:origin-left
  after:scale-x-0
  after:transition-transform after:duration-300 after:ease-out
  group-hover:after:scale-x-100
">WinForms Folder Sorter</h3>
                                    <p className="italic text-gray-300 mt-2">WinForms Desktop Application</p>
                                </div>
                                <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-amber-100 transition-colors duration-200" />
                            </div>

                            <p className="mb-3">
                                Desktop application to organise folders with photos.
                            </p>

                            <div className="flex gap-2">
                                <PiFileCSharpBold className="w-7 h-7 text-violet-400" />
                                <span className="text-xs p-1 border">.NET</span>
                                <span className="text-xs p-1 border">WinForms</span>
                                <span className="text-xs p-1 border">Directories</span>
                            </div>
                        </a>
                    </div>

                    <div className="group w-full max-w-md mx-auto p-4 border rounded hover:border-amber-100 hover:shadow-md hover:scale-[1.02] transition-transform duration-200">
                        <a href="/projects/raytheon-map-tool">
                            <div className="flex justify-between mb-2">
                                <div>
                                    <h3 className="
  relative inline-block text-2xl font-bold
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-full
  after:bg-amber-100
  after:origin-left
  after:scale-x-0
  after:transition-transform after:duration-300 after:ease-out
  group-hover:after:scale-x-100
">Elastic Band Desk Defence System - Vex Robot</h3>
                                    <p className="italic text-gray-300 mt-2">Year 3 Semester 2 Module</p>
                                </div>
                                <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-amber-100 transition-colors duration-200" />
                            </div>

                            <p className="mb-3">
                                Desktop application to organise folders with photos.
                            </p>

                            <div className="flex gap-2">
                                <FaRaspberryPi className="w-7 h-7 text-red-400" />
                                <SiArduino className="w-7 h-7 text-cyan-400" />
                                <DiPython className="w-7 h-7 text-blue-400" />
                                <FaHtml5 className="w-7 h-7 text-orange-500" />
                                <span className="text-xs p-1 border">VexRobotics</span>
                                <span className="text-xs p-1 border">Flask</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}