import React from "react";
import { ExternalLink } from "lucide-react";
import { DiPython } from "react-icons/di";
import { PiFileCSharpBold } from "react-icons/pi";
import { RiJavascriptFill, RiSvelteFill } from "react-icons/ri";


export default function Projects() {
    return (<div>
        <h1 className="text-3xl font-bold mb-2 text-center">Projects</h1>
        <h2 className="text-2xl font-bold mb-2 text-center">Current Projects</h2>
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 justify-center">
                <div title="Click for more information..." className="group w-[75%]  p-4 border border-solid hover:border-amber-100 rounded  hover:shadow-md hover:scale-[1.02] transition-transform duration-200 ">
                    <a href="/projects/apple-music-spotify-converter">
                        <div className="card-top flex flex-row gap-2 ">
                            <div>
                                <h3 className=" relative inline-block text-2xl font-bold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-amber-100 after:transition-all after:duration-300 group-hover:after:w-full mb-2">Sales to Stock Tracker</h3>
                                <p className="font-extralight italic text-gray-300">CLI Tool</p>
                            </div>
                            <div className=" w-6 h-6 text-muted-foreground hover:scale-110 hover:cursor-pointer transition-transform duration-200 ">
                                <ExternalLink
                                    id="proj-1"
                                    className="w-6 h-6 text-muted-foreground group-hover:text-amber-100 transition-colors duration-200"
                                />
                            </div>
                        </div>
                        <p>A Python CLI tool using Spectre Console, Pandas, and DuckDB to analyse sales and trends. Cleans and reshapes complex report exports, enabling fast querying for data-driven decisions.</p>
                        <div className="flex p-2 gap-2"><DiPython className="w-7 h-7 text-blue-700" aria-label="Python Logo" /> <a className="text-xs p-1 border border-rose-50 text-muted-foreground ">BeautifulSoup</a><a className="text-xs p-1 border border-rose-50 text-muted-foreground ">Spotify API</a><a className="text-xs p-1 border border-rose-50 text-muted-foreground ">requests</a></div>
                    </a>
                </div>

            </div>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center">Past Projects</h2>
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 justify-center">
                <div className="group w-[78%] p-4 border border-solid hover:border-amber-100 rounded hover:shadow-md hover:scale-[1.02] transition-transform duration-200">
                    <a href="/projects/apple-music-spotify-converter">
                        <div className="card-top flex flex-row gap-2 justify-between">
                            <div>
                                <h3 className="relative inline-block text-2xl font-bold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-amber-100 after:transition-all after:duration-300 group-hover:after:w-full mb-2">Apple Music to Spotify Converter</h3>
                                <p className="font-extralight italic text-gray-300">Python Tool</p>
                            </div>
                            <div className=" w-6 h-6 text-muted-foreground hover:scale-110 hover:cursor-pointer transition-transform duration-200 ">
                                <ExternalLink
                                    id="proj-1"
                                    className="w-6 h-6 text-muted-foreground group-hover:text-amber-100 transition-colors duration-200"
                                />
                            </div>
                        </div>
                        <p>Converts Apple Music playlists to Spotify using web scraping and the Spotify Web API. Uses BeautifulSoup for parsing and implements logging for unmatched tracks.</p>
                        <div className="flex p-2 gap-2"><DiPython className="w-7 h-7 text-blue-700" aria-label="Python Logo" /> <a className="text-xs p-1 border border-rose-50 text-muted-foreground ">BeautifulSoup</a><a className="text-xs p-1 border border-rose-50 text-muted-foreground ">Spotify API</a><a className="text-xs p-1 border border-rose-50 text-muted-foreground ">requests</a></div>
                    </a>
                </div>
                <div className="group p-4 border border-solid hover:border-amber-100 rounded  hover:shadow-md hover:scale-[1.02] transition-transform duration-200 ">
                    <a href="/projects/apple-music-spotify-converter">
                        <div className="card-top flex flex-row gap-2 justify-between">
                            <div>
                                <h3 className=" relative inline-block text-2xl font-bold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-amber-100 after:transition-all after:duration-300 group-hover:after:w-full mb-2">Exception Analysis Tool</h3>
                                <p className="font-extralight italic text-gray-300">Final Year Project - C# CLI tool</p>
                            </div>
                            <div className=" w-6 h-6 text-muted-foreground hover:scale-110 hover:cursor-pointer transition-transform duration-200 ">
                                <ExternalLink
                                    id="proj-2"
                                    className="w-6 h-6 text-muted-foreground group-hover:text-amber-100 transition-colors duration-200"
                                />
                            </div>
                        </div>
                        <p>A C# tool designed to surface unhandled and potential runtime exceptions before deployment. Explored .NET reflection and exception metadata for production error reduction.</p>
                        <div className="flex p-2 gap-2"><PiFileCSharpBold className="w-7 h-7 text-violet-400" aria-label="C#" /> <a className="text-xs p-1 border border-rose-50 text-muted-foreground ">.Net</a><a className="text-xs p-1 border border-rose-50 text-muted-foreground ">Reflection</a></div>
                    </a>
                </div>
                <div className="group p-4 border border-solid hover:border-amber-100 rounded  hover:shadow-md hover:scale-[1.02] transition-transform duration-200 ">
                    <a href="/projects/apple-music-spotify-converter">
                        <div className="card-top flex flex-row justify-between">
                            <div>
                                <h2 className=" relative inline-block text-2xl font-bold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-amber-100 after:transition-all after:duration-300 group-hover:after:w-full mb-2">Raytheon Map Intelligence Tool</h2>
                                <p className="font-extralight italic text-gray-300">Year 2 Semester 1 University Module</p>
                            </div>
                            <div className="  w-6 h-6 text-muted-foreground hover:scale-110 hover:cursor-pointer transition-transform duration-200 ">
                                <ExternalLink
                                    id="proj-3"
                                    className="w-6 h-6 text-muted-foreground group-hover:text-amber-100 transition-colors duration-200"
                                />
                            </div>
                        </div>
                        <p>Helped lead a team to build a web application calculating area occupancy using Raytheon's test API. Implemented interactive maps and data visualisations, presented directly to Raytheon engineers reflecting working with real-world clients and real-world dev teams.</p>
                        <div className="flex pt-4  gap-2"><RiJavascriptFill className="w-7 h-7 text-yellow-300" aria-label="JavaScript Icon" /> <RiSvelteFill className="w-7 h-7 text-orange-500" /><a className="text-xs p-1 border border-rose-50 text-muted-foreground ">Turf.js</a><a className="text-xs p-1 border border-rose-50 text-muted-foreground ">Chart.js</a><a className="text-xs p-1 border border-rose-50 text-muted-foreground ">TailwindCSS</a><a className="text-xs p-1 border border-rose-50 text-muted-foreground ">MapLibre</a><a className="text-xs p-1 border border-rose-50 text-muted-foreground ">Daisy UI</a></div>
                    </a>
                </div>
                <div className="p-4 border rounded shadow hover:shadow-lg transition">Project 4</div>
            </div>
        </div>
    </div>)
}