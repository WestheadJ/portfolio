import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollNavigation } from '@hooks/useScrollNavigation'

export default function AppleMusicToSpotify() {
    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'technical-approach', label: 'Technical Approach' },
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'current-status', label: 'Current Status' },
        { id: 'what-learned', label: 'What I Learned' },
        { id: 'future-plans', label: 'What I\'d Do Differently' }
    ]

    const {
        activeSection,
        scrollContainerRef,
        contentRefs,
        navRefs,
        scrollToSection,
        goToPrev,
        goToNext,
        canGoPrev,
        canGoNext
    } = useScrollNavigation(sections)

    return (
        <div className='w-full h-screen pt-16 flex flex-col lg:flex-row text-white overflow-hidden'>
            {/* Mobile horizontal scrollable nav */}
            <div className='lg:hidden w-full border-b border-gray-700 px-4 '>
                <div className='flex items-center justify-between mb-2'>
                    <h2 className='font-bold text-sm'>Contents</h2>
                    <div className='flex gap-2'>
                        <button
                            onClick={goToPrev}
                            disabled={!canGoPrev}
                            className='p-1 hover:bg-gray-700 rounded disabled:opacity-30 disabled:cursor-not-allowed'
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={goToNext}
                            disabled={!canGoNext}
                            className='p-1 hover:bg-gray-700 rounded disabled:opacity-30 disabled:cursor-not-allowed'
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
                <div className='flex gap-2 overflow-x-auto pb-2 scrollbar-hide'>
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            ref={el => navRefs.current[section.id] = el}
                            onClick={() => scrollToSection(section.id)}
                            className={`px-4 py-2 rounded whitespace-nowrap text-sm transition-colors ${activeSection === section.id
                                ? 'bg-amber-100 text-black'
                                : 'bg-gray-800 hover:bg-gray-700'
                                }`}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Desktop sidebar */}
            <div className='hidden lg:block w-[20%] h-full overflow-y-auto px-8 border-r border-gray-700'>
                <h1 className='font-bold text-xl mb-4'>Contents:</h1>
                <ul className='space-y-2'>
                    {sections.map((section) => (
                        <li
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`cursor-pointer transition-colors ${activeSection === section.id
                                ? 'text-amber-100 font-semibold'
                                : 'hover:text-amber-100'
                                }`}
                        >
                            {section.label}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Content area */}
            <div ref={scrollContainerRef} className='w-full lg:w-[80%] h-full overflow-y-auto px-4 lg:px-8 pt-8'>
                <div className='flex-col w-full justify-center leading-7'>
                    <section id='title'>
                        <h1 className='text-3xl lg:text-4xl font-bold pb-2'>Apple Music to Spotify Playlist Converter</h1>
                        <h3 className='text-base lg:text-lg font-thin italic'>Built to solve a real problem - transferring playlists between platforms</h3>
                        <section className='pt-2'>
                            <h3 className='text-base lg:text-lg'><span className='font-bold'>Status: </span><span className='text-green-500'>Completed (Core Functionality)</span></h3>
                            <h3 className='text-base lg:text-lg'><span className='font-bold'>Tech Stack: </span><span>Python | Spotipy | Beautiful Soup | Spotify API</span></h3>
                            <h3 className='text-base lg:text-lg'>
                                <span className='font-bold'>GitHub: </span>
                                <a
                                    href='https://github.com/WestheadJ/AppleMusic-to-Spotify-Converter-Python'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-amber-400 text-blue-200 transition-colors" hover:text--300 underline'
                                >
                                    View Repository
                                </a>
                            </h3>
                        </section>
                    </section>
                    <br />
                    <div className='max-w-[72ch]'>
                        <section ref={el => contentRefs.current['overview'] = el} id='overview'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Overview</h2>
                            <p className='mb-3'>A CLI tool that converts Apple Music playlists to Spotify playlists. Paste an Apple Music playlist URL, authenticate with Spotify, and the tool automatically recreates the playlist in your Spotify account.</p>
                            <p>Built because a friend shared an Apple Music playlist and I wanted an easy way to add those songs to Spotify without using sketchy online converters.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['technical-approach'] = el} id='technical-approach'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Technical Approach</h2>
                            <p className='mb-3'><strong>Web Scraping Strategy</strong> - Since Apple Music requires a paid developer license for API access, I used Beautiful Soup to scrape playlist data directly from the Apple Music web interface. The tool makes HTTP requests to fetch the playlist page HTML, then parses it to extract song titles and artist names.</p>
                            <p className='mb-3'><strong>Spotify Integration</strong> - Uses Spotipy library to authenticate users via OAuth and interact with the Spotify API. Creates playlists and adds tracks programmatically.</p>
                            <p><strong>Song Matching Challenge</strong> - The trickiest part was matching songs between platforms. Song titles aren't always identical across Apple Music and Spotify (different formatting, featured artists, remixes). Built a search system that queries Spotify's API with the scraped artist and song name, then validates results. Songs that can't be matched are logged to a timestamped text file to prevent duplicates and allow manual review.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['how-it-works'] = el} id='how-it-works'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>How It Works</h2>
                            <ol className='list-decimal pl-6 space-y-2'>
                                <li>User provides Apple Music playlist URL</li>
                                <li>Scrapes HTML to extract song/artist data from div elements</li>
                                <li>Authenticates user with Spotify API via OAuth</li>
                                <li>Prompts for new playlist details (title, description, privacy)</li>
                                <li>Searches Spotify for each song using artist + title</li>
                                <li>Creates playlist and adds matched songs</li>
                                <li>Logs unmatched songs to file for review</li>
                            </ol>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['current-status'] = el} id='current-status'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Current Status</h2>
                            <ul className='list-none space-y-2'>
                                <li>✅ Core functionality complete and working</li>
                                <li>✅ Handles authentication and playlist creation</li>
                                <li>✅ Song matching with fallback logging</li>
                                <li>📋 Future: Support for 100+ song playlists (current Spotify API limit)</li>
                                <li>📋 Future: Web interface version</li>
                            </ul>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['what-learned'] = el} id='what-learned'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>What I Learned</h2>
                            <p className='mb-3'><strong>API workarounds</strong> - Sometimes you can't access the data you need through official APIs. Web scraping filled the gap, though it's more fragile since it breaks if Apple changes their HTML structure.</p>
                            <p className='mb-3'><strong>Fuzzy matching is hard</strong> - Exact string matching fails constantly with music metadata. Different platforms format track names differently (parentheses for features, "feat." vs "ft.", remaster info). Would explore fuzzy string matching libraries or Spotify's audio fingerprinting in v2.</p>
                            <p><strong>User experience in CLI tools</strong> - Added colored terminal output and clear progress indicators to make the CLI feel more polished than just raw print statements.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['future-plans'] = el} id='future-plans'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>What I'd Do Differently</h2>
                            <p className='mb-3'>Convert it to a web app with a proper UI. A CLI is functional but limits who can use it - non-technical users won't install Python dependencies and run terminal commands. A web version would reach more people and allow for better error handling and visual feedback during the conversion process.</p>
                            <p>Could also explore using Spotify's audio analysis features to match songs by actual audio characteristics rather than just text metadata, which would handle edge cases better.</p>
                        </section>
                        <div className='h-20'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}