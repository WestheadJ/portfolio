import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollNavigation } from '@hooks/useScrollNavigation'

export default function VexDeskDefence() {
    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'the-brief', label: 'The Brief' },
        { id: 'what-we-built', label: 'What We Built' },

        { id: 'my-role', label: 'My Role' },
        { id: 'technical-implementation', label: 'Technical Details' },
        { id: 'challenges', label: 'Engineering Challenges' },
        { id: 'what-worked', label: 'What Worked' },
        { id: 'what-didnt', label: 'What Didn\'t Work' },
        { id: 'reflection', label: 'Reflection' }
    ]

    const {
        activeSection,
        visibleSections,
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
            {/* Mobile nav */}
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
                    {sections.map(section => (
                        <button
                            key={section.id}
                            ref={el => navRefs.current[section.id] = el}
                            onClick={() => scrollToSection(section.id)}
                            className={`px-4 py-2 rounded whitespace-nowrap text-sm transition-colors ${(visibleSections && visibleSections.includes(section.id)) || activeSection === section.id
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
                            className={`cursor-pointer transition-colors ${(visibleSections && visibleSections.includes(section.id)) || activeSection === section.id
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
            <div ref={scrollContainerRef} className='w-full lg:w-[80%] h-full overflow-y-auto px-4 lg:px-8'>
                <div className='flex-col w-full justify-center leading-7'>
                    <section id='title'>
                        <h1 className='text-3xl lg:text-4xl font-bold pb-2'>VEX Desk Defence System</h1>
                        <h3 className='text-base lg:text-lg font-thin italic'>University Robotics Module - Team Project</h3>
                        <section className='pt-2'>
                            <h3 className='text-base lg:text-lg'><span className='font-bold'>Status: </span><span className='text-green-500'>Completed (One of My Favorite Modules)</span></h3>
                            <h3 className='text-base lg:text-lg'><span className='font-bold'>Tech Stack: </span><span>Python | VEX Robotics Kit | Raspberry Pi | OpenCV | UART Communication</span></h3>
                            <h3 className='text-base lg:text-lg'>
                                <span className='font-bold'>Links: </span>
                                <a
                                    href='https://github.com/JohnWebb26/Vex-Desk-Defence-System'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-blue-400 hover:text-blue-300 underline'
                                >
                                    GitHub Repository
                                </a>
                                {' | '}
                                <a
                                    href='https://youtu.be/AipaEo7NmS0'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-blue-400 hover:text-blue-300 underline'
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
                            <p className='mb-3'>For our university robotics module, my team (myself and a teammate, John) built a rubber band launcher turret using the VEX Robotics kit. The project required us to design and build a functional robot, program its behavior, and think about the ethical implications of automated systems. Then presenting it in a showcase event, where we were judged by other computing students. lecturers were invited and some company representatives were there</p>
                            <p className='mb-3'>We created two versions: one controlled via VEX remote, and an ambitious Raspberry Pi version with facial tracking capabilities. I worked on the robot design, hardware build, electronics integration, and the Raspberry Pi facial tracking system.</p>
                            <p>Despite working part-time and juggling my dissertation project, this became one of my favorite modules because of the hands-on building, electronics work, and seeing something physical come to life.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['the-brief'] = el} id='the-brief'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>The Brief</h2>
                            <p className='mb-3'>Build a robot using the VEX Robotics kit to solve either a problem we identified or an existing challenge. Requirements:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>Design and construct a functional robot</li>
                                <li>Program the robot's behavior</li>
                                <li>Demonstrate the robot in action</li>
                            </ul>
                            <p>We chose to build a "Desk Defence System" - a playful take on automated turrets with serious engineering challenges behind it.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['what-we-built'] = el} id='what-we-built'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>What We Built</h2>

                            <h3 className='text-lg font-semibold mt-4 mb-2' >Version 1: Remote Control</h3>
                            <p className='mb-3'>A desk-mounted turret that launches rubber bands up to 2 meters using a gear-based firing mechanism. Controlled via VEX remote:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-4'>
                                <li><strong>Left joystick</strong> - Horizontal rotation (X-axis)</li>
                                <li><strong>Right joystick</strong> - Vertical aiming (Y-axis)</li>
                                <li><strong>A button</strong> - Fire (single shot or hold for full auto)</li>
                            </ul>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Version 2: Facial Tracking (Attempted)</h3>
                            <p className='mb-3'>An autonomous version using a Raspberry Pi with a camera to detect faces and automatically aim the turret. This was the ambitious stretch goal that taught us a lot about hardware integration challenges.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Physical Design</h3>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>3-motor system: X-axis rotation, Y-axis elevation, firing mechanism</li>
                                <li>Gear-based rubber band launcher with adjustable tension</li>
                                <li>Full range of motion across desktop workspace</li>
                                <li>Safety boundaries to prevent wire damage or self-destruction</li>
                            </ul>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['my-role'] = el} id='my-role'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>My Role</h2>
                            <p className='mb-3'>I was heavily involved across multiple aspects of the project:</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Robot Design</h3>
                            <p className='mb-3'>Worked on the overall system architecture - figuring out motor placement, range of motion, and how to mount everything without it falling apart mid-demo.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Hardware Build</h3>
                            <p className='mb-3'>Helped assemble the physical turret, mount the motors, build the gear-based firing mechanism, and manage all the wiring.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Electronics Integration</h3>
                            <p className='mb-3'>This was my favorite part - connecting the VEX Brain, motors, sensors, and power systems. Making sure everything communicated properly and didn't short out.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Raspberry Pi Facial Tracking</h3>
                            <p className='mb-3'>Built the Python code for face detection using OpenCV, tried multiple approaches to get the Raspberry Pi talking to the VEX Brain, and debugged why data wasn't passing through in time.</p>

                            <p><strong>Context:</strong> I was working part-time during this module AND doing my dissertation project simultaneously, so time was extremely tight. That made the successes feel even better and the failures more frustrating.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['technical-implementation'] = el} id='technical-implementation'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Technical Details</h2>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Motor Control</h3>
                            <p className='mb-2'>Programmed in Python using VEXcode:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-4'>
                                <li>Low motor velocity settings to reduce inertia and prevent mechanical instability</li>
                                <li>Built-in boundaries to limit rotation and prevent wire damage</li>
                                <li>Joystick response scaling for better control</li>
                            </ul>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Firing Mechanism</h3>
                            <p className='mb-2'>Gear-based tension system:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-4'>
                                <li>Getting the tension right was trial and error</li>
                                <li>Achieves ~2 meter range</li>
                                <li>Single fire or full auto modes</li>
                                <li>Requires manual reload (unavoidable with the kit constraints)</li>
                            </ul>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Facial Tracking System</h3>
                            <p className='mb-2'>Raspberry Pi + OpenCV + VEX Brain communication:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>Raspberry Pi runs OpenCV to detect faces in camera feed</li>
                                <li>Calculates face position relative to frame center</li>
                                <li>Attempts to send position data to VEX Brain via UART</li>
                                <li>VEX Brain should adjust turret position accordingly</li>
                            </ul>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['challenges'] = el} id='challenges'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Engineering Challenges</h2>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Firing Mechanism Tension</h3>
                            <p className='mb-4'>Getting a rubber band launcher to work reliably with limited parts was harder than expected. Too much tension and it jammed, too little and it wouldn't launch. We went through dozens of test fires to dial it in.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Motor Boundaries</h3>
                            <p className='mb-4'>Had to carefully limit how far the turret could rotate. Go too far and wires would unplug or get tangled. The motors also needed low velocity to prevent the arm from wobbling or breaking itself from momentum.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>VEX Brain ↔ Raspberry Pi Communication</h3>
                            <p className='mb-3'>This was the main technical limitation encountered during the project. Initial plan:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>Use USB-C port on VEX Brain for communication</li>
                                <li>Simple serial data transfer</li>
                            </ul>
                            <p className='mb-3'>Reality:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-4'>
                                <li>USB-C communication not achievable with this VEX Brain model</li>
                                <li>Had to use 3-wire expansion port instead</li>
                                <li>VEX Brain has limited serial I/O - plain UART text data didn't work</li>
                                <li>Tried bit-banging method for communication</li>
                                <li>Single signal tests worked, but streaming live position data failed</li>
                            </ul>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Camera Mounting</h3>
                            <p className='mb-4'>The Raspberry Pi and camera weren't mounted on the turret itself - they were stationary. This meant the visual display of where the turret was aiming was offset from where it actually pointed. With access to 3D modeling and printing, we could've designed a proper mount, but we didn't have that capability.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Time Constraints</h3>
                            <p>Working part-time plus juggling my dissertation meant we couldn't spend as much time debugging the Raspberry Pi integration as it needed. The remote control version worked great, but the autonomous facial tracking needed more development time we didn't have.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['what-worked'] = el} id='what-worked'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>What Worked</h2>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Remote Control Version</h3>
                            <p className='mb-3'>Performed flawlessly in the demo. Smooth, responsive control with good accuracy. The firing mechanism reliably launched rubber bands about 2 meters. Single fire and full auto both worked.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Face Detection</h3>
                            <p className='mb-3'>The Raspberry Pi successfully detected faces in the camera feed. OpenCV performed reliably for face detection, identifying the presence and approximate location of a face in the frame, but the resulting data could not be transmitted to the VEX Brain quickly enough to be useful.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Camera Feed Integration</h3>
                            <p className='mb-3'>
                                The Raspberry Pi successfully streamed the live camera feed to the web interface, allowing us to visually confirm face detection and system behaviour in real time.
                            </p>
                            <p className='mb-3'>
                                This provided a full end-to-end pipeline: camera input, OpenCV processing, and visual output in the browser, which was extremely useful for debugging and demonstration.
                            </p>
                            <p>
                                The achievable framerate was noticeably low. Based on testing, this was most likely due to hardware limitations of the Raspberry Pi camera module combined with the computational overhead of real-time frame processing and streaming in Python. With more time, this could be improved through lower-level camera access, frame throttling, or use of a more performance-oriented runtime for the video pipeline.
                            </p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Physical Build Quality</h3>
                            <p className='mb-3'>The turret was solid. Motors were positioned well, wiring was clean, range of motion was excellent. Nothing fell apart or broke during demos.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Safety Features</h3>
                            <p>Motor boundaries prevented self-destruction, low velocity prevented instability. The system was reliable and safe to operate.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['what-didnt'] = el} id='what-didnt'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>What Didn't Work</h2>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Raspberry Pi Communication</h3>
                            <p className='mb-3'>The big failure. We could detect faces, but we couldn't send position data to the VEX Brain fast enough or reliably enough to make the turret track targets. The communication bottleneck killed the autonomous version.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Facial Recognition</h3>
                            <p className='mb-3'>We got face detection working (generic "there's a face"), but actual facial recognition (identifying specific people) never got implemented. Time ran out before we could tackle it.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Camera Offset Issue</h3>
                            <p className='mb-3'>Since the camera was stationary and the turret moved, there was a parallax problem. The camera didn't see what the turret was actually aiming at. A 3D-printed mount would've solved this, but we didn't have access to that technology.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Manual Reload</h3>
                            <p>You had to manually load rubber bands onto the firing gear. Not really a "failure" since it was a kit limitation, but it meant we couldn't have a fully autonomous system even if the tracking had worked.</p>
                        </section>
                        <br />

                        <section ref={el => contentRefs.current['reflection'] = el} id='reflection'>
                            <h2 className='text-xl lg:text-2xl font-bold mb-3'>Reflection</h2>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>Why This Was My Favorite Module</h3>
                            <p className='mb-3'>Despite the time pressure and the facial tracking not working, this module was incredibly satisfying. Here's why:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-4'>
                                <li><strong>Hands-on building</strong> - Actually assembling hardware, running wires, mounting motors. So much better than just writing code.</li>
                                <li><strong>Electronics work</strong> - Getting motors, sensors, controllers, and brains all talking to each other felt like real engineering.</li>
                                <li><strong>Seeing it move</strong> - There's something uniquely rewarding about code making a physical object move in the real world.</li>
                                <li><strong>Team collaboration</strong> - Working with John on design, build, and demo was great. We complemented each other's skills.</li>
                                <li><strong>Creative freedom</strong> - We got to decide what to build, how to build it, and what challenges to take on.</li>
                            </ul>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>What I Learned</h3>
                            <p className='mb-3'><strong>Hardware integration is hard.</strong> Getting two different systems (Raspberry Pi + VEX Brain) to communicate reliably is way harder than it sounds. Protocols, timing, bandwidth - all matter.</p>
                            <p className='mb-3'><strong>Know your constraints early.</strong> If we'd tested the USB-C communication earlier, we would've known it wouldn't work and could've pivoted sooner.</p>
                            <p className='mb-3'><strong>Iteration is key.</strong> The firing mechanism took dozens of test fires to get right. The motor boundaries needed constant tweaking. Physical systems need trial and error.</p>
                            <p className='mb-3'><strong>Perfect is the enemy of good.</strong> The remote control version worked great. The facial tracking was ambitious and didn't pan out. We still delivered a functional, impressive robot.</p>

                            <h3 className='text-lg font-semibold mt-4 mb-2'>If I Had More Time</h3>
                            <p className='mb-3'>With the time constraints from part-time work and dissertation, we couldn't fully realize the autonomous version. Given more time:</p>
                            <ul className='list-disc pl-6 space-y-1 mb-3'>
                                <li>Properly debug the UART bit-banging communication</li>
                                <li>Maybe use a different communication method entirely</li>
                                <li>3D print a camera mount on the turret itself</li>
                                <li>Implement actual facial recognition, not just detection</li>
                                <li>Add predictive aiming (lead the target's movement)</li>
                            </ul>

                            <p className='mb-3'><strong>But here's the thing:</strong> Even with the facial tracking not working, this project demonstrated core robotics principles - motor control, sensor integration, system design, and team collaboration. The remote version worked flawlessly and was fun to operate.</p>

                            <p>This module reminded me why I love engineering: building things, solving problems, and seeing your work literally move in the real world. That's way more satisfying than any grade.</p>
                        </section>
                        <div className='h-20'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}