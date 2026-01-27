import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollNavigation } from '@hooks/useScrollNavigation' // adjust path as needed

export default function SalesToStocks() {
    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'technical-approach', label: 'Technical Approach' },
        { id: 'current-status', label: 'Current Status' },
        { id: 'what-learned', label: 'What I Have Learned' },
        { id: 'planned-impact', label: 'Planned Impact' }
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
        <div className='w-full h-screen pt-20 flex flex-col lg:flex-row text-white overflow-hidden'>
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
            <div ref={scrollContainerRef} className='w-full lg:w-[80%] h-full overflow-y-auto px-4 lg:px-8'>
                <div className='flex-col w-full justify-center leading-7'>
                    <section id='title'>
                        <h1 className='text-3xl lg:text-4xl font-bold pb-2'>Sales & Stocks Analysis Tool</h1>
                        <h3 className='text-base lg:text-lg font-thin italic'>Built to solve a real operational problem at my workplace</h3>
                        <section className='pt-2'>
                            <h3 className='text-base lg:text-lg'><span className='font-bold'>Status: </span><span className='text-green-500'>Active Development</span></h3>
                            <h3 className='text-base lg:text-lg'><span className='font-bold'>Tech Stack: </span><span>Python | CLI | DuckDB | Pandas </span></h3>
                            <h3 className='text-base lg:text-lg'>
                                <span className='font-bold'>GitHub: </span>
                                <a
                                    href='https://github.com/WestheadJ/stocks-tracker/tree/main'
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
                            <p>Built to solve inventory and sales visibility problems at my workplace. Sales reports exist but don't easily answer questions like: What sells well? What should we stock more of? How do we prepare for Christmas or summer rushes?</p>
                            <p>Products have complex compositions (multiple ingredients, different portion sizes, varying yields), making it hard to track actual usage from raw sales data.</p>
                        </section>
                        <br />
                        <section ref={el => contentRefs.current['technical-approach'] = el} id='technical-approach'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Technical Approach</h2>
                            <p>Python + DuckDB - Python for data processing and CLI. DuckDB because it's embedded, fast for analytics, and handles time-series aggregations efficiently.</p>
                            <h3 className='text-lg font-bold' >Key Challenges: </h3>
                            <ul className='list-none space-y-2 pl-7'>
                                <li><span className='font-bold'>Data Modeling</span> - Started with a schema that looked good on paper but didn't fit the actual report structure. Products have hierarchical relationships (product → ingredients → portions → yields) that my initial design didn't capture properly. Currently refactoring the schema before building analytics features.</li>
                                <li><span className='font-bold'>Parsing Complexity</span> - Sales reports have inconsistent formatting. Building robust extraction logic to handle edge cases and normalize the data.</li>
                            </ul>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['current-status'] = el} id='current-status'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Current Status</h2>
                            <ul className='list-none space-y-2 pl-1'>
                                <li>✅ Completed: CLI framework and report import working on old database schema</li>
                                <li>🔄 Currently Working on: Redesigning database schema for product-ingredient relationships</li>
                                <li>📋 Next: Analytics queries (top sellers, period comparisons, stock predictions)</li>
                            </ul>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['what-learned'] = el} id='what-learned'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>What I Have Learned So Far</h2>
                            <p>Should've spent more time understanding the data structure before designing the schema. The refactor is teaching me the value of upfront data exploration. Also learned when columnar databases shine - DuckDB's aggregation performance validates the choice.</p>
                            <p>Scope creep hit hard when I realized how complex the product relationships were. Focusing now on core features first, wastage tracking later.</p>
                        </section>
                        <br />
                        <section ref={el => contentRefs.current['planned-impact'] = el} id='planned-impact'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Planned Impact</h2>
                            <ul className='list-disc pl-6 space-y-2'>
                                <li>Identify what to promote and what's underperforming</li>
                                <li>Prevent stock-outs during peak periods</li>
                                <li>Enable data-driven decisions instead of gut feel</li>
                            </ul>
                        </section>
                        <div className='h-20'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}