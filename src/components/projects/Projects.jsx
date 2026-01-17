import React from "react";
import { ExternalLink } from "lucide-react";
import { DiPython } from "react-icons/di";
import { PiFileCSharpBold } from "react-icons/pi";
import { RiJavascriptFill, RiSvelteFill } from "react-icons/ri";

export default function Projects() {
    return (
        <section className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-6">

                <h1 className="text-3xl font-bold mb-4 text-center">Projects</h1>

                {/* ===================== CURRENT PROJECTS ===================== */}
                <h2 className="text-2xl font-bold mb-4 text-center">Current Projects</h2>

                <div className="grid grid-cols-1 place-items-center gap-y-6 mb-12">
                    <div
                        title="Click for more information..."
                        className="group w-full max-w-md p-4 border border-solid rounded hover:border-amber-100 hover:shadow-md hover:scale-[1.02] transition-transform duration-200"
                    >
                        <a href="/projects/apple-music-spotify-converter">
                            <div className="flex justify-between gap-2 mb-2">
                                <div>
                                    <h3 className="relative inline-block text-2xl font-bold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-amber-100 after:transition-all after:duration-300 group-hover:after:w-full">
                                        Sales to Stock Tracker
                                    </h3>
                                    <p className="font-extralight italic text-gray-300">CLI Tool</p>
                                </div>
                                <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-amber-100 transition-colors duration-200" />
                            </div>

                            <p className="mb-3">
                                A Python CLI tool using Spectre Console, Pandas, and DuckDB to analyse
                                sales and trends. Cleans and reshapes complex report exports for fast
                                querying.
                            </p>

                            <div className="flex gap-2">
                                <DiPython className="w-7 h-7 text-blue-700" />
                                <span className="text-xs p-1 border">BeautifulSoup</span>
                                <span className="text-xs p-1 border">Spotify API</span>
                                <span className="text-xs p-1 border">requests</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* ===================== PAST PROJECTS ===================== */}
                <h2 className="text-2xl font-bold mb-4 text-center">Past Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 justify-items-center">

                    {/* Apple Music → Spotify */}
                    <div className="group w-full max-w-md mx-auto p-4 border rounded hover:border-amber-100 hover:shadow-md hover:scale-[1.02] transition-transform duration-200">
                        <a href="/projects/apple-music-spotify-converter">
                            <div className="flex justify-between mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold">Apple Music to Spotify</h3>
                                    <p className="italic text-gray-300">Python Tool</p>
                                </div>
                                <ExternalLink className="w-6 h-6" />
                            </div>

                            <p className="mb-3">
                                Converts Apple Music playlists to Spotify using web scraping and
                                the Spotify Web API with logging for unmatched tracks.
                            </p>

                            <div className="flex gap-2">
                                <DiPython className="w-7 h-7 text-blue-700" />
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
                                    <h3 className="text-2xl font-bold">Exception Analysis Tool</h3>
                                    <p className="italic text-gray-300">Final Year Project – C# CLI</p>
                                </div>
                                <ExternalLink className="w-6 h-6" />
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
                                    <h3 className="text-2xl font-bold">Raytheon Map Intelligence</h3>
                                    <p className="italic text-gray-300">University Client Project</p>
                                </div>
                                <ExternalLink className="w-6 h-6" />
                            </div>

                            <p className="mb-3">
                                Client-facing mapping tool using Raytheon APIs with interactive
                                visualisations and spatial analysis.
                            </p>

                            <div className="flex gap-2">
                                <RiJavascriptFill className="w-7 h-7 text-yellow-300" />
                                <RiSvelteFill className="w-7 h-7 text-orange-500" />
                                <span className="text-xs p-1 border">Tailwind</span>
                                <span className="text-xs p-1 border">MapLibre</span>
                            </div>
                        </a>
                    </div>

                    {/* Placeholder */}
                    <div className="w-full max-w-md mx-auto p-4 border rounded">
                        Project 4
                    </div>

                </div>
            </div>
        </section>
    );
}