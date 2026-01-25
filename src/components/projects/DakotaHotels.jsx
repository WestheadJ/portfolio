import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollNavigation } from '@hooks/useScrollNavigation'

export default function DakotaHotels() {
    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'the-brief', label: 'The Brief' },
        { id: 'my-approach', label: 'My Approach' },
        { id: 'what-i-built', label: 'What I Built' },
        { id: 'technical-implementation', label: 'Technical Details' },
        { id: 'what-went-well', label: 'What Went Well' },
        { id: 'reflection', label: 'Why I Didn\'t Get It' },
        { id: 'what-i-learned', label: 'What I Learned' }
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
            <div className='lg:hidden w-full border-b border-gray-700 px-4 py-3'>
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
                        <h1 className='text-3xl lg:text-4xl font-bold pb-2'>Dakota Hotels: Figma to Code Challenge</h1>
                        <h3 className='text-base lg:text-lg font-thin italic'>Job Application Technical Assessment</h3>
                        <section className='pt-2'>
                            <h3 className='text-base lg:text-lg'><span className='font-bold'>Status: </span><span className='text-yellow-500'>Completed (Did Not Progress)</span></h3>
                            <h3 className='text-base lg:text-lg'><span className='font-bold'>Tech Stack: </span><span>HTML | CSS | Vanilla JavaScript</span></h3>
                            <h3 className='text-base lg:text-lg'>
                                <span className='font-bold'>Links: </span>
                                <a
                                    href='https://dakotahotels.netlify.app'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-blue-400 hover:text-blue-300 underline'
                                >
                                    Live Demo
                                </a>
                                {' | '}
                                <a
                                    href='https://github.com/WestheadJ/93FT-Dakota-Website'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-blue-400 hover:text-blue-300 underline'
                                >
                                    GitHub Repository
                                </a>
                                {' | '}
                                <a
                                    href='https://www.figma.com/design/lym1qXkiglfAFNVlmbDhwt/Untitled?node-id=0-1&t=kJ9fdIUG9lPbBnY7-1'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-blue-400 hover:text-blue-300 underline'
                                >
                                    Figma Design
                                </a>
                            </h3>
                        </section>
                    </section>
                    <br />
                    <div className='max-w-[72ch]'>
                        <section ref={el => contentRefs.current['overview'] = el} id='overview'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Overview</h2>
                            <p className='mb-3'>This was a technical assessment for a Junior Web Developer position at 93FT, a digital agency. They sent me a Figma design for the Dakota Hotels homepage and asked me to build it using HTML and CSS, focusing on design accuracy rather than backend functionality.</p>
                            <p className='mb-3'>I submitted my work, didn't get the job, but learned a huge amount about translating high-fidelity designs into code and what agencies actually look for in candidates.</p>
                            <p>Spoiler: 93FT actually built the real Dakota Hotels website, so I was essentially competing against their own production work.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['the-brief'] = el} id='the-brief'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>The Brief</h2>
                            <p className='mb-3'>The instructions were straightforward:</p>
                            <div className='bg-gray-900 p-4 rounded mb-3'>
                                <p className='italic'>"It'd be great if you can build the frontend for the homepage using HTML and CSS. Our primary focus is on how accurately the design is translated into the build, so please don't worry about any backend functionality. Feel free to add your own creative touches."</p>
                            </div>
                            <p className='mb-3'>Key requirements:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>Translate the Figma design accurately</li>
                                <li>Use HTML and CSS (they didn't specify frameworks)</li>
                                <li>No backend needed</li>
                                <li>Creative touches encouraged</li>
                            </ul>
                            <p>They gave me the Figma file with the complete homepage design - a luxury hotel website with cream, gold, and dark color palette, sophisticated typography, and lots of imagery.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['my-approach'] = el} id='my-approach'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>My Approach</h2>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Vanilla HTML & CSS</h3>
                            <p className='mb-3'>I chose not to use any frameworks. The brief said "HTML and CSS" without mentioning React or anything else, so I stuck to fundamentals. This meant writing everything from scratch - no Bootstrap, no Tailwind, just custom CSS.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Responsive Design</h3>
                            <p className='mb-3'>The Figma only showed desktop, but I knew a luxury hotel site needs to work on mobile. I created a separate mobile stylesheet (mobile_index.css) with media queries to handle smaller screens. Probably should have used mobile-first approach, but I matched the desktop design first then adapted down.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Typography Matching</h3>
                            <p className='mb-3'>Downloaded and included the exact fonts from Figma - GT America Trial and Newsreader. Getting the font weights, letter spacing, and line heights right was crucial for matching that luxury brand feel.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>My "Creative Touches"</h3>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>Added a packages page (packages.html) - not in the brief, but hotels need this</li>
                                <li>Created hover states for interactive elements</li>
                                <li>Added smooth scrolling behavior</li>
                                <li>Built a dropdown navigation for the hotel locations</li>
                            </ul>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Iterative Development</h3>
                            <p>38 commits to the repo show I didn't just bang it out in one go. I kept refining spacing, adjusting colors, fixing alignment issues, and testing on different screen sizes.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['what-i-built'] = el} id='what-i-built'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>What I Built</h2>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Homepage Structure</h3>
                            <ul className='list-disc pl-6 space-y-1 mb-4'>
                                <li><strong>Hero section</strong> with full-width background image and booking form overlay</li>
                                <li><strong>Location showcase</strong> - Six hotel locations with images and CTAs</li>
                                <li><strong>Brand messaging</strong> - "Bold Design. Warm Hospitality." section with imagery</li>
                                <li><strong>Amenities grid</strong> - Sleep in Style, Dine at the Grill, Drink at the Bar</li>
                                <li><strong>Rooms & Suites</strong> - Featured section with large imagery</li>
                                <li><strong>Meetings & Events</strong> - Business service showcase</li>
                                <li><strong>Additional features</strong> - Packages, gift vouchers, festive dining cards</li>
                                <li><strong>Newsletter signup</strong> - Email capture form</li>
                                <li><strong>Footer</strong> - Multi-column with locations, links, social media</li>
                            </ul>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Booking Form</h3>
                            <p className='mb-2'>The sticky booking form at the top was tricky:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-4'>
                                <li>Location selector with dropdown</li>
                                <li>Date picker placeholders (Check In / Check Out)</li>
                                <li>Guest selector</li>
                                <li>Promo code field</li>
                                <li>Styled "Check Availability" button in that gold color</li>
                            </ul>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Navigation</h3>
                            <p>Custom dropdown menu for "Explore our hotels" with all seven locations. Made it functional with CSS hover states, though in hindsight JavaScript would've been smoother.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['technical-implementation'] = el} id='technical-implementation'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Technical Details</h2>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>File Structure</h3>
                            <div className='bg-gray-900 p-4 rounded mb-4 overflow-x-auto'>
                                <pre className='text-sm'>
                                    <code>{`/
├── index.html
├── packages.html
├── index.css
├── mobile_index.css
├── /fonts
│   ├── GTAmericaTrial-Lt.otf
│   └── Newsreader-VariableFont.ttf
└── /statics
    └── [all images]`}</code>
                                </pre>
                            </div>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>CSS Architecture</h3>
                            <p className='mb-2'>Used a component-based approach even without frameworks:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-4'>
                                <li>CSS variables for colors (cream: #FFF8EE, gold: #D3BF89, dark: #141317)</li>
                                <li>Flexbox for layout - no CSS Grid (probably should have used it)</li>
                                <li>Absolute positioning from the Figma CSS (copied those measurements)</li>
                                <li>Custom button styles matching the brand</li>
                            </ul>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Responsive Strategy</h3>
                            <p className='mb-2'>Separate stylesheet loaded with media queries:</p>
                            <div className='bg-gray-900 p-4 rounded mb-4 overflow-x-auto'>
                                <pre className='text-sm'>
                                    <code>{`<link rel="stylesheet" href="index.css">
<link rel="stylesheet" href="mobile_index.css" 
      media="screen and (max-width: 768px)">`}</code>
                                </pre>
                            </div>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Image Optimization</h3>
                            <p>Used high-quality images from Figma but didn't optimize file sizes. They're large - probably should have compressed them or used WebP format.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['what-went-well'] = el} id='what-went-well'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>What Went Well</h2>

                            <p className='mb-3'><strong>Design Accuracy</strong></p>
                            <p className='mb-3'>I nailed the visual translation. The color palette, typography, spacing, and overall aesthetic matched the Figma design closely. That luxury hotel vibe came through - cream backgrounds, gold accents, sophisticated typography.</p>

                            <p className='mb-3'><strong>Typography</strong></p>
                            <p className='mb-3'>Getting the fonts right made a huge difference. GT America Trial for headings with that specific letter-spacing and uppercase treatment, Newsreader for body text - it all matched. Used the exact font weights from the design.</p>

                            <p className='mb-3'><strong>Layout Precision</strong></p>
                            <p className='mb-3'>I copied the absolute positioning values straight from Figma's CSS export, which gave me pixel-perfect placement for many elements. The sections lined up correctly, images were positioned properly, and the grid of hotel locations worked well.</p>

                            <p className='mb-3'><strong>Functional Navigation</strong></p>
                            <p className='mb-3'>The dropdown menu worked smoothly, hover states felt right, and I even added a second page (packages) to show I could handle multi-page structure.</p>

                            <p className='mb-3'><strong>Mobile Responsiveness</strong></p>
                            <p>Even though it wasn't required, I made sure it worked on mobile. Not perfect, but functional and maintaining the brand feel on smaller screens.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['reflection'] = el} id='reflection'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Why I Probably Didn't Get The Job</h2>

                            <p className='mb-3'><strong>They Built the Real Site</strong></p>
                            <p className='mb-3'>Looking at the actual Dakota Hotels website, 93FT were the developers (says so in the footer: "Site by 93FT"). So they were comparing my work to their own production site. That's... intimidating. I was essentially being tested on whether I could match the quality of work their team already produced.</p>

                            <p className='mb-3'><strong>Absolute Positioning Everywhere</strong></p>
                            <p className='mb-3'>I copied a lot of absolute positioning from Figma's CSS export. This worked for desktop but made responsive design a nightmare. The real site uses proper flexbox/grid layouts that adapt naturally. Mine required tons of overrides in the mobile stylesheet because absolutely positioned elements don't reflow.</p>

                            <p className='mb-3'><strong>No Modern Build Tools</strong></p>
                            <p className='mb-3'>I delivered raw HTML/CSS files. No build process, no optimization, no minification. Their production site likely uses a modern framework (probably React or Vue), has optimized assets, lazy-loaded images, and all the performance optimizations. Mine just... loads everything at once.</p>

                            <p className='mb-3'><strong>Images Not Optimized</strong></p>
                            <p className='mb-3'>The Figma had high-res images. I used them as-is without compression. Page load was probably slow. The real site uses next-gen formats (WebP), responsive images with srcset, and CDN delivery. I just dumped PNGs in a static folder.</p>

                            <p className='mb-3'><strong>Limited Interactivity</strong></p>
                            <p className='mb-3'>The real site has smooth animations, parallax effects, image carousels, date pickers that actually work, and proper form validation. Mine has... hover states. I could've added more JavaScript to show I understand interactivity, but stuck too close to "HTML and CSS only."</p>

                            <p className='mb-3'><strong>Accessibility Overlooked</strong></p>
                            <p className='mb-3'>I didn't think about screen readers, keyboard navigation, ARIA labels, or semantic HTML structure as much as I should have. Looking at the real site's code, they have proper heading hierarchy, alt text for all images, and accessible form labels. Mine works visually but probably fails accessibility audits.</p>

                            <p className='mb-3'><strong>Missing the "Agency Workflow" Mindset</strong></p>
                            <p className='mb-3'>Agencies care about maintainability, scalability, and collaboration. My code was functional but not organized for a team. No clear naming conventions, no BEM or other CSS methodology, comments were minimal. They probably wanted to see code that their team could take over and extend.</p>

                            <p className='mb-3'><strong>The Figma vs Reality Gap</strong></p>
                            <p>Comparing the Figma to their actual site, they made tons of practical decisions I missed: simplified layouts for better mobile experience, performance optimizations that affect design choices, interactive elements that enhance UX. I translated the design literally without thinking about real-world implementation trade-offs.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['what-i-learned'] = el} id='what-i-learned'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>What I Learned</h2>

                            <p className='mb-3'><strong>Pixel-Perfect Isn't Everything</strong></p>
                            <p className='mb-3'>I focused so hard on matching the Figma exactly that I forgot to think about whether those design decisions worked in a browser. Absolute positioning everywhere looked great on desktop but was a mess on mobile. Sometimes you need to adapt the design for the medium.</p>

                            <p className='mb-3'><strong>Performance Matters From Day One</strong></p>
                            <p className='mb-3'>I should have optimized images, used lazy loading, and thought about page load times. These aren't "nice to haves" - they're expected. Agencies know clients care about site speed, and they want developers who build fast sites by default.</p>

                            <p className='mb-3'><strong>Modern Tooling Is Standard</strong></p>
                            <p className='mb-3'>Even for a "simple" HTML/CSS project, using a build tool (webpack, Vite, even just a task runner) shows you understand modern development workflows. Minification, optimization, and asset management aren't optional in 2024.</p>

                            <p className='mb-3'><strong>Accessibility Isn't Optional</strong></p>
                            <p className='mb-3'>I learned this the hard way. Good agencies prioritize accessible websites because it's the right thing to do and often a legal requirement for clients. I should have used semantic HTML, proper ARIA labels, and tested with screen readers.</p>

                            <p className='mb-3'><strong>Code for Collaboration</strong></p>
                            <p className='mb-3'>My code worked but wasn't organized for other developers to read and extend. Using a methodology like BEM, writing clear comments, and following consistent patterns matters more in team environments than solo projects.</p>

                            <p className='mb-3'><strong>Think Beyond the Brief</strong></p>
                            <p className='mb-3'>The brief said "don't worry about backend" but adding form validation, demonstrating API integration (even fake data), or showing state management would've proven I understand the full picture. I played it too safe.</p>

                            <p className='mb-3'><strong>Research the Company</strong></p>
                            <p>I should have looked at 93FT's portfolio before submitting. If I'd seen they built the actual Dakota site, I would have approached it differently - maybe even asked questions about their tech stack or development philosophy. Showing you've researched the company demonstrates genuine interest.</p>
                        </section>
                        <div className='h-20'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}