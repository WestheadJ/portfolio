import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollNavigation } from '@hooks/useScrollNavigation'

export default function FolderWizard() {
    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'problem', label: 'The Problem' },
        { id: 'motivation', label: 'Why I Built It' },
        { id: 'approach', label: 'My Approach' },
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'results', label: 'What It Does Well' },
        { id: 'challenges', label: 'Challenges' },
        { id: 'reflection', label: 'Reflection' }
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
            {/* Mobile nav */}
            <div className='lg:hidden w-full border-b border-gray-700 px-4'>
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
                    {sections.map(section => (
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
                    {sections.map(section => (
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

            {/* Content */}
            <div ref={scrollContainerRef} className='w-full lg:w-[80%] h-full overflow-y-auto px-4 lg:px-8 pt-8'>
                <div className='flex-col w-full justify-center leading-7'>
                    <section id='title'>
                        <h1 className='text-3xl lg:text-4xl font-bold pb-2'>
                            FolderWizard: Cleaning Up a Messy File System
                        </h1>
                        <h3 className='text-base lg:text-lg font-thin italic'>
                            Personal Utility Project
                        </h3>
                        <section className='pt-2'>
                            <h3 className='text-base lg:text-lg'>
                                <span className='font-bold'>Status: </span>
                                <span className='text-green-400'>Personal Project</span>
                            </h3>
                            <h3 className='text-base lg:text-lg'>
                                <span className='font-bold'>Tech Stack: </span>
                                <span>C# | WinForms | .NET | Windows File System</span>
                            </h3>
                            <h3 className='text-base lg:text-lg'>
                                <span className='font-bold'>Links: </span>
                                <a
                                    href='https://github.com/WestheadJ/FolderWizard'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-amber-400 text-blue-200 underline transition-colors'
                                >
                                    GitHub Repository
                                </a>
                            </h3>
                        </section>
                    </section>

                    <br />

                    <div className='max-w-[72ch]'>
                        <section ref={el => contentRefs.current['overview'] = el} id='overview'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Overview</h2>
                            <p className='mb-3'>
                                FolderWizard is a small Windows desktop tool I built to help organise messy folders.
                                It scans directories, finds duplicate files, and helps sort things into a cleaner structure.
                            </p>
                            <p>
                                It's intentionally simple, fast to use, and designed for real-life mess rather than
                                perfectly organised demo data.
                            </p>
                        </section>

                        <br />

                        <section ref={el => contentRefs.current['problem'] = el} id='problem'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>The Problem</h2>
                            <p className='mb-3'>
                                Over time, my folders became a complete mess. Files were copied, moved, renamed,
                                and downloaded multiple times. I knew there were duplicates, but I had no idea where.
                            </p>
                            <p>
                                Manually checking hundreds (or thousands) of files just wasn't realistic.
                                I needed something that could do the boring work for me.
                            </p>
                        </section>

                        <br />

                        <section ref={el => contentRefs.current['motivation'] = el} id='motivation'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Why I Built It</h2>
                            <p className='mb-3'>
                                This project came directly from frustration. I didn't want a heavy, overcomplicated
                                tool — just something that could quickly tell me:
                            </p>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>What files look like duplicates</li>
                                <li>Where they are</li>
                                <li>How old they are</li>
                            </ul>
                            <p>
                                So instead of searching for the "perfect" tool, I built one that fit exactly what I needed.
                            </p>
                        </section>

                        <br />

                        <section ref={el => contentRefs.current['approach'] = el} id='approach'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>My Approach</h2>
                            <p className='mb-3'>
                                I used C# with Windows Forms to keep things lightweight and familiar on Windows.
                                The focus was on clarity and usability rather than flashy UI.
                            </p>
                            <p className='mb-3'>
                                To detect duplicates, the tool compares:
                            </p>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>File names</li>
                                <li>Date created metadata</li>
                            </ul>
                            <p>
                                This approach is fast, easy to understand, and works well for the kind of folder chaos
                                I was dealing with.
                            </p>
                        </section>

                        <br />

                        <section ref={el => contentRefs.current['how-it-works'] = el} id='how-it-works'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>How It Works</h2>
                            <ol className='list-decimal pl-6 space-y-2 mb-3'>
                                <li>Select a folder to scan</li>
                                <li>The app walks through the file system</li>
                                <li>Files are grouped by name and creation date</li>
                                <li>Potential duplicates are flagged</li>
                                <li>The user can review and organise files safely</li>
                            </ol>
                            <p>
                                Everything happens locally, with no background services or external dependencies.
                            </p>
                        </section>

                        <br />

                        <section ref={el => contentRefs.current['results'] = el} id='results'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>What It Does Well</h2>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>Quickly finds duplicate files</li>
                                <li>Easy-to-understand interface</li>
                                <li>No setup or configuration needed</li>
                                <li>Direct interaction with the Windows file system</li>
                            </ul>
                        </section>

                        <br />

                        <section ref={el => contentRefs.current['challenges'] = el} id='challenges'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Challenges</h2>
                            <p className='mb-3'>
                                Handling file system edge cases was the hardest part — things like locked files,
                                permissions, and unexpected folder structures.
                            </p>
                            <p>
                                It also reinforced how careful you need to be when building tools that can affect user data.
                            </p>
                        </section>

                        <br />

                        <section ref={el => contentRefs.current['reflection'] = el} id='reflection'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Reflection</h2>
                            <p className='mb-3'>
                                FolderWizard isn't trying to be perfect — it's practical. It solved a real problem
                                I was dealing with and gave me solid experience working with WinForms and the file system.
                            </p>
                            <p>
                                If I were to extend it, I'd look at deeper file comparisons and more automation,
                                but as a focused utility, it does exactly what I wanted.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}