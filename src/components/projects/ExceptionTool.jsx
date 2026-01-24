import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollNavigation } from '@hooks/useScrollNavigation'

export default function ExceptionChecker() {
    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'problem', label: 'The Problem' },
        { id: 'approach', label: 'My Approach' },
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'results', label: 'What I Achieved' },
        { id: 'challenges', label: 'What Went Wrong' },
        { id: 'reflection', label: 'Honest Reflection' },
        { id: 'if-i-could-redo', label: 'What I\'d Do Differently' }
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
            <div ref={scrollContainerRef} className='w-full lg:w-[80%] h-full overflow-y-auto px-4 lg:px-8 pt-6'>
                <div className='flex-col w-full justify-center leading-7'>
                    <section id='title'>
                        <h1 className='text-3xl lg:text-4xl font-bold pb-2'>ExceptionChecker: Finding Hidden Errors in C# Code</h1>
                        <h3 className='text-base lg:text-lg font-thin italic'>Final Year University Project - A Learning Journey</h3>
                        <section className='pt-2'>
                            <h3 className='text-base lg:text-lg'><span className='font-bold'>Status: </span><span className='text-yellow-500'>University Research Project</span></h3>
                            <h3 className='text-base lg:text-lg'><span className='font-bold'>Tech Stack: </span><span>C# | Roslyn (Microsoft's Compiler) | .NET</span></h3>
                            <h3 className='text-base lg:text-lg'>
                                <span className='font-bold'>Links: </span>
                                <a
                                    href='https://github.com/WestheadJ/Development_Project'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-amber-400 text-blue-200 transition-colors" hover:text--300 underline'
                                >
                                    GitHub Repository
                                </a>
                                {' | '}
                                <a
                                    href='https://youtu.be/epOWvI7N98E'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-amber-400 text-blue-200 transition-colors" hover:text--300 underline'
                                >
                                    Demo Video
                                </a>
                            </h3>
                        </section>
                    </section>
                    <br />
                    <div className='max-w-[72ch]'>
                        <section ref={el => contentRefs.current['overview'] = el} id='overview'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Overview</h2>
                            <p className='mb-3'>For my final year at university, instead of writing a traditional dissertation, I had to build something. I chose to tackle a problem I'd experienced firsthand: not knowing which errors (called "exceptions") a piece of code might throw until it crashes at runtime.</p>
                            <p className='mb-3'>I built a tool that reads C# code and tells you: "Hey, this function could crash here because of X error, and you're not handling it." The idea was to catch potential crashes before they happen.</p>
                            <p>Full transparency: This was way harder than I expected. I jumped into a topic I knew nothing about, my research was probably too narrow, and the planning wasn't great. But I kept going, figured things out through trial and error, and learned a massive amount in the process.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['problem'] = el} id='problem'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>The Problem I Wanted to Solve</h2>
                            <p className='mb-3'>When you call a function in C#, it might throw an error (exception). For example, if you try to open a file that doesn't exist, you'll get a "FileNotFoundException". If you don't catch that error, your entire program crashes.</p>
                            <p className='mb-3'>The annoying part: you often don't know what errors a function might throw until you either:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>Read the documentation (if it exists)</li>
                                <li>Your program crashes and you debug it</li>
                                <li>You have experience with that library and just know</li>
                            </ul>
                            <p className='mb-3'>I thought: "Wouldn't it be cool if a tool could automatically scan your code and tell you all the potential crashes before you run it?"</p>
                            <p>That's what I tried to build.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['approach'] = el} id='approach'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>My Approach</h2>

                            <p className='mb-3'><strong>The Tool I Used: Roslyn</strong></p>
                            <p className='mb-3'>Instead of just reading code like text, I used something called "Roslyn" - Microsoft's C# compiler. This is the same tool that Visual Studio uses to understand your code. It can:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>Break code down into a tree structure (like a family tree, but for code)</li>
                                <li>Tell you what each piece of code actually means</li>
                                <li>Find where functions are called and what they do</li>
                            </ul>

                            <p className='mb-3'><strong>Reading Documentation Tags</strong></p>
                            <p className='mb-3'>.NET libraries have hidden documentation files that list what errors functions can throw:</p>
                            <div className='bg-gray-900 p-4 rounded mb-3 overflow-x-auto'>
                                <pre className='text-sm'>
                                    <code>{`/// <exception cref="System.IO.IOException">
/// Thrown when file cannot be accessed
/// </exception>`}</code>
                                </pre>
                            </div>
                            <p className='mb-3'>My tool reads these tags to find out what could go wrong.</p>

                            <p className='mb-3'><strong>Following the Chain</strong></p>
                            <p className='mb-3'>If Function A calls Function B, and Function B can throw an error, then Function A can also throw that error (unless it catches it). I tried to follow these chains through multiple layers of function calls.</p>

                            <p><strong>Checking What's Caught</strong></p>
                            <p>Finally, the tool checks if you have try-catch blocks to handle those errors.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['how-it-works'] = el} id='how-it-works'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>How It Works</h2>

                            <p className='mb-3'>You run it from the command line and point it at your code:</p>
                            <div className='bg-gray-900 p-4 rounded mb-3 overflow-x-auto'>
                                <pre className='text-sm'>
                                    <code>{`ExceptionChecker --solution MyProject.sln
ExceptionChecker --files Calculator.cs`}</code>
                                </pre>
                            </div>

                            <p className='mb-3'>Then it:</p>
                            <ol className='list-decimal pl-6 space-y-2 mb-3'>
                                <li><strong>Reads your code</strong> using Roslyn to understand the structure</li>
                                <li><strong>Finds all function calls</strong> like File.OpenRead() or Console.WriteLine()</li>
                                <li><strong>Looks up what errors those functions can throw</strong> from documentation</li>
                                <li><strong>Checks if you're catching those errors</strong> with try-catch blocks</li>
                                <li><strong>Follows the chain</strong> - if you call a function that calls another function that throws an error, it tracks that</li>
                                <li><strong>Generates a report</strong> showing what's caught and what isn't</li>
                            </ol>

                            <p className='mb-3'><strong>Example Output:</strong></p>
                            <div className='bg-gray-900 p-4 rounded mb-3 overflow-x-auto'>
                                <pre className='text-sm'>
                                    <code>{`=== File.OpenRead ===
Invocations: 1
Exceptions possible:
  - System.IO.IOException (Caught)
  - System.UnauthorizedAccessException (Uncaught)
  - System.IO.FileNotFoundException (Uncaught)
At Calculator.cs:15, locally caught:
  * System.IO.IOException`}</code>
                                </pre>
                            </div>
                            <p>This tells you: "You're calling File.OpenRead on line 15. You're catching IOException, but you're not catching FileNotFoundException or UnauthorizedAccessException."</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['results'] = el} id='results'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>What I Actually Achieved</h2>

                            <p className='mb-3'>The tool did work on my test files:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>Found function calls correctly</li>
                                <li>Read exception documentation from .NET libraries</li>
                                <li>Identified which errors were caught and which weren't</li>
                                <li>Showed line numbers where problems existed</li>
                                <li>Ran pretty fast (about 2 seconds on my test code)</li>
                            </ul>

                            <p className='mb-3'>It successfully detected real issues. For example, when I tested it on code that read files, it correctly warned: "You're catching IOException but not FileNotFoundException - if the file doesn't exist, your program will crash."</p>

                            <p>That validation felt good - the core concept worked.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['challenges'] = el} id='challenges'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>What Went Wrong</h2>

                            <p className='mb-3'><strong>1. Too Many False Warnings</strong></p>
                            <p className='mb-3'>When I ran it on Console.WriteLine (just printing text to the screen), it reported 10+ potential errors including file system crashes. That's technically possible but realistically never happens. The tool was reporting every theoretical error, making the output overwhelming and useless.</p>

                            <p className='mb-3'><strong>2. Missed Obvious Errors</strong></p>
                            <p className='mb-3'>When someone tested it on a calculator that divides numbers, it completely missed "DivideByZeroException" - one of the most common errors in programming. Why? Because division isn't documented the same way as function calls, and I didn't account for that.</p>

                            <p className='mb-3'><strong>3. Everything Looked The Same</strong></p>
                            <p className='mb-3'>Looking at my output, completely different functions were reporting identical lists of 10+ exceptions. That was clearly wrong - Random.Next() shouldn't have the same errors as File.OpenRead(). My error-tracking logic was spreading exceptions everywhere they shouldn't go.</p>

                            <p className='mb-3'><strong>4. Didn't Work on Other People's Computers</strong></p>
                            <p className='mb-3'>When test users tried to run it, it kept breaking. I'd hardcoded assumptions about where .NET files live on a computer, and that varies between different setups. Classic "works on my machine" problem.</p>

                            <p><strong>5. Custom Errors Were Ignored</strong></p>
                            <p>If developers created their own custom exceptions, my tool often missed them entirely.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['reflection'] = el} id='reflection'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Honest Reflection</h2>

                            <p className='mb-3'><strong>I Jumped In Too Deep, Too Fast</strong></p>
                            <p className='mb-3'>I picked this topic because it sounded interesting, but I had zero background in compiler theory, static analysis, or how exception handling actually works under the hood. I was learning everything as I went.</p>

                            <p className='mb-3'><strong>My Research Was Too Narrow</strong></p>
                            <p className='mb-3'>I read a handful of academic papers about static analysis tools like SonarQube and FindBugs. That gave me some ideas, but honestly, it wasn't enough. I should have:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>Talked to developers who've built similar tools</li>
                                <li>Looked at open-source analyzers to see how they solve these problems</li>
                                <li>Tested existing tools more thoroughly to understand their limitations</li>
                                <li>Built smaller proof-of-concepts before diving into the full tool</li>
                            </ul>

                            <p className='mb-3'><strong>Small Sample Size</strong></p>
                            <p className='mb-3'>I only tested on a few files I wrote myself. I should have tested on real open-source projects, asked classmates to test their code, or run it against well-known C# libraries. My "it works!" moment was based on very limited data.</p>

                            <p className='mb-3'><strong>Planning? What Planning?</strong></p>
                            <p className='mb-3'>I kind of just... started coding. No proper design phase, no clear architecture plan, no list of "if these things go wrong, here's how I'll handle them." I was figuring it out as I went, which meant constantly rewriting things when they didn't work.</p>

                            <p className='mb-3'><strong>But I Kept Going</strong></p>
                            <p>Here's the thing though: when it wasn't working, when the output was wrong, when test users couldn't run it - I didn't give up. I kept debugging, kept trying different approaches, kept asking "why is this happening?" I was relentless about figuring it out, even when I had no idea what I was doing. That determination to push through is something I'm genuinely proud of.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['if-i-could-redo'] = el} id='if-i-could-redo'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>What I'd Do Differently</h2>

                            <p className='mb-3'><strong>Start Smaller</strong></p>
                            <p className='mb-3'>Instead of "build a full exception analyzer," I'd start with: "Can I just find one type of uncaught exception in one file?" Then build up from there. Baby steps.</p>

                            <p className='mb-3'><strong>Actually Research Properly</strong></p>
                            <p className='mb-3'>Talk to people. Look at real code. Test existing tools extensively. Read more than just academic papers - find blog posts from developers who've tried this, GitHub issues from similar projects, Stack Overflow discussions about exception analysis.</p>

                            <p className='mb-3'><strong>Test Early, Test Often, Test Widely</strong></p>
                            <p className='mb-3'>Get other people's code from day one. Don't wait until the end to discover it doesn't work on anyone else's machine. Test on Windows, Mac, Linux. Test on .NET 6, 7, 8. Test on code I didn't write.</p>

                            <p className='mb-3'><strong>Accept I Don't Know Everything</strong></p>
                            <p className='mb-3'>Ask for help earlier. Talk to my supervisor more. Find someone who's done static analysis before and pick their brain. I tried to figure everything out alone, which was both brave and stupid.</p>

                            <p className='mb-3'><strong>Focus on One Problem</strong></p>
                            <p className='mb-3'>Instead of trying to catch all exceptions everywhere, maybe just focus on file operations, or just database calls, or just one specific type of error. Do that one thing really well before expanding.</p>

                            <p className='mb-3'><strong>What I Learned That Actually Matters</strong></p>
                            <p className='mb-3'>This project taught me more about problem-solving, persistence, and learning on the fly than any tutorial or textbook could. I learned:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>How compilers actually work (Roslyn was my crash course)</li>
                                <li>That "just make it work" is different from "make it work well"</li>
                                <li>Reading research papers vs building actual software are very different skills</li>
                                <li>The importance of testing on different environments</li>
                                <li>That being stubborn and refusing to quit can get you surprisingly far</li>
                            </ul>

                            <p>Would I have done things differently if I could go back? Absolutely. But I'm weirdly proud of the messy, imperfect thing I built while stumbling through the dark.</p>
                        </section>
                        <div className='h-20'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}