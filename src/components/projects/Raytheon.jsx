import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollNavigation } from '@hooks/useScrollNavigation'

export default function RaytheonMapIntelligence() {
    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'context', label: 'Project Context' },
        { id: 'problem', label: 'The Problem' },
        { id: 'technical-approach', label: 'Technical Approach' },
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'teamwork', label: 'Teamwork & My Role' },
        { id: 'challenges', label: 'Challenges' },
        { id: 'what-learned', label: 'What I Learned' },
        { id: 'reflection', label: 'Reflection' },
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
            <div
                ref={scrollContainerRef}
                className='w-full lg:w-[80%] h-full overflow-y-auto px-4 lg:px-8 pt-24 lg:pt-8'
            >
                <div className='flex-col w-full justify-center leading-7'>
                    <section id='title'>
                        <h1 className='text-3xl lg:text-4xl font-bold pb-2'>
                            Raytheon Map Intelligence Tool
                        </h1>
                        <h3 className='text-base lg:text-lg font-thin italic'>
                            Client-Facing Group Project - Spatial Data & Decision Support
                        </h3>

                        <section className='pt-2'>
                            <h3 className='text-base lg:text-lg'>
                                <span className='font-bold'>Status: </span>
                                <span className='text-yellow-500'>University Group Project</span>
                            </h3>
                            <h3 className='text-base lg:text-lg'>
                                <span className='font-bold'>Tech Stack: </span>
                                <span>
                                    JavaScript | Mapping APIs | Web Technologies | Data Visualisation
                                </span>
                            </h3>
                            <h3 className='text-base lg:text-lg'>
                                <span className='font-bold'>Links: </span>
                                <a
                                    href="https://github.com/isaac238/PSP-RaytheonA"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-amber-400 text-blue-200 underline transition-colors'
                                >
                                    GitHub Repository
                                </a>
                                {' | '}
                                <span className='italic'>Demo Video Available</span>
                            </h3>
                        </section>
                    </section>

                    <br />

                    <div className='max-w-[72ch]'>
                        <section
                            ref={(el) => (contentRefs.current['overview'] = el)}
                            id='overview'
                        >
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Overview</h2>
                            <p className='mb-3'>
                                This project was developed as part of a university group assignment in
                                collaboration with Raytheon, focusing on building an interactive map-based
                                intelligence tool.
                            </p>
                            <p>
                                The goal was to visualise complex data in a way that supports decision-making,
                                allowing users to explore, filter, and interpret geographic information
                                effectively rather than relying on raw data alone.
                            </p>
                        </section>

                        <br />

                        <section
                            ref={(el) => (contentRefs.current['context'] = el)}
                            id='context'
                        >
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Project Context</h2>
                            <p className='mb-3'>
                                Raytheon provided a high-level problem space rather than a fixed specification.
                                This meant we had to interpret requirements, ask the right questions, and
                                iteratively refine the solution based on feedback.
                            </p>
                            <p>
                                The project simulated real industry constraints: ambiguous requirements,
                                limited time, multiple stakeholders, and the need to communicate technical
                                ideas clearly to non-technical audiences.
                            </p>
                        </section>

                        <br />

                        <section
                            ref={(el) => (contentRefs.current['problem'] = el)}
                            id='problem'
                        >
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>The Problem</h2>
                            <p className='mb-3'>
                                Raw spatial data on its own is difficult to reason about. Tables, logs, or
                                static reports make it hard to identify patterns, relationships, or emerging
                                risks.
                            </p>
                            <p>
                                The challenge was to transform that data into an interactive map-based
                                interface that allowed users to quickly understand what was happening,
                                where it was happening, and why it mattered.
                            </p>
                        </section>

                        <br />

                        <section
                            ref={(el) => (contentRefs.current['technical-approach'] = el)}
                            id='technical-approach'
                        >
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Technical Approach</h2>
                            <p className='mb-3'>
                                We designed the system as a web-based application centred around an interactive
                                map. The focus was on clarity, responsiveness, and ease of exploration.
                            </p>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>Layered map views to represent different data dimensions</li>
                                <li>Dynamic filtering to reduce noise and highlight relevant information</li>
                                <li>Clear visual cues to communicate priority and significance</li>
                                <li>A modular structure to allow future expansion</li>
                            </ul>
                            <p>
                                Throughout development, we balanced technical ambition with usability, ensuring
                                the tool remained intuitive rather than overwhelming.
                            </p>
                        </section>

                        <br />

                        <section
                            ref={(el) => (contentRefs.current['how-it-works'] = el)}
                            id='how-it-works'
                        >
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>How It Works</h2>
                            <ol className='list-decimal pl-6 space-y-2 mb-3'>
                                <li>Data is loaded and processed into structured geographic formats</li>
                                <li>The map renders key locations, regions, or events visually</li>
                                <li>Users interact with layers and filters to explore specific scenarios</li>
                                <li>Contextual information is displayed to support interpretation</li>
                            </ol>
                            <p>
                                This flow ensures users move from high-level overview to detailed insight
                                without losing context.
                            </p>
                        </section>

                        <br />

                        <section
                            ref={(el) => (contentRefs.current['teamwork'] = el)}
                            id='teamwork'
                        >
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Teamwork & My Role</h2>
                            <p className='mb-3'>
                                This was a collaborative effort involving multiple developers, each contributing
                                across design, implementation, and presentation.
                            </p>
                            <p>
                                I was actively involved in translating requirements into technical solutions,
                                implementing core functionality, and ensuring the final system aligned with
                                stakeholder expectations. Regular communication and coordination were essential
                                to keep the project on track.
                            </p>
                        </section>

                        <br />

                        <section
                            ref={(el) => (contentRefs.current['challenges'] = el)}
                            id='challenges'
                        >
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Challenges</h2>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>Ambiguous and evolving requirements</li>
                                <li>Balancing technical complexity with usability</li>
                                <li>Coordinating work across a team under time pressure</li>
                                <li>Ensuring the visualisations remained meaningful, not misleading</li>
                            </ul>
                            <p>
                                These challenges closely mirrored real-world software development rather than
                                typical academic exercises.
                            </p>
                        </section>

                        <br />

                        <section
                            ref={(el) => (contentRefs.current['what-learned'] = el)}
                            id='what-learned'
                        >
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>What I Learned</h2>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>How to work effectively with incomplete requirements</li>
                                <li>The importance of visual clarity in data-driven tools</li>
                                <li>Communicating technical decisions to non-technical stakeholders</li>
                                <li>Collaborating and compromising within a development team</li>
                            </ul>
                        </section>

                        <br />

                        <section
                            ref={(el) => (contentRefs.current['reflection'] = el)}
                            id='reflection'
                        >
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Reflection</h2>
                            <p className='mb-3'>
                                This project felt much closer to industry work than most university assignments.
                                There was no single "correct" answer, only trade-offs and informed decisions.
                            </p>
                            <p>
                                It reinforced the idea that good software is not just about code, but about
                                understanding users, communicating clearly, and adapting as new information
                                emerges.
                            </p>
                        </section>

                        <div className='h-20'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}