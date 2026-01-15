import React from "react";
import { ExternalLink } from "lucide-react";
import { DiPython } from "react-icons/di";

export default function Projects() {
    return (<>
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group p-4 border border-solid hover:border-amber-100 rounded  hover:shadow-md hover:scale-[1.02] transition-transform duration-200">                <a href="/projects/apple-music-spotify-converter">
                <div className="card-top flex flex-row gap-2 justify-between">                    <div>
                    <h2 className="
  relative inline-block
  text-2xl font-bold
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-amber-100
  after:transition-all after:duration-300
  group-hover:after:w-full mb-2
">Apple Music to Spotify Converter</h2>
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
                <div><DiPython className="w-7 h-7      " /></div>
            </a>
            </div>
            <div className="p-4 border rounded shadow hover:shadow-lg transition">Project 2</div>
            <div className="p-4 border rounded shadow hover:shadow-lg transition">Project 3</div>
            <div className="p-4 border rounded shadow hover:shadow-lg transition">Project 4</div>
        </div>
    </>)
}