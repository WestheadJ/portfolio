import { useState, useEffect, useRef } from 'react'

export function useScrollNavigation(sections) {
    const [activeSection, setActiveSection] = useState(sections[0]?.id || '')
    const scrollContainerRef = useRef(null)
    const contentRefs = useRef({})
    const navRefs = useRef({})
    const isManualClick = useRef(false)
    const scrollTimeout = useRef(null)
    const hasMountedRef = useRef(false)

    // Set initial active section on mount
    useEffect(() => {
        if (!hasMountedRef.current && sections[0]?.id) {
            setActiveSection(sections[0].id)
            hasMountedRef.current = true
        }
    }, [sections])

    useEffect(() => {
        const handleScroll = () => {
            // Clear any existing timeout
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current)
            }

            // Wait 150ms after last scroll event before resuming auto-tracking
            scrollTimeout.current = setTimeout(() => {
                isManualClick.current = false
            }, 150)

            // Don't update active section if user just clicked
            if (isManualClick.current) return

            const scrollContainer = scrollContainerRef.current
            if (!scrollContainer) return

            const scrollTop = scrollContainer.scrollTop
            const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight
            const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0

            // Divide the page into equal segments based on number of sections
            const segmentSize = 100 / sections.length
            const currentSegment = Math.floor(scrollPercent / segmentSize)
            const sectionIndex = Math.min(currentSegment, sections.length - 1)

            setActiveSection(sections[sectionIndex].id)
        }

        const scrollContainer = scrollContainerRef.current
        if (scrollContainer) {
            handleScroll() // Run once on mount
            scrollContainer.addEventListener('scroll', handleScroll)
            return () => {
                scrollContainer.removeEventListener('scroll', handleScroll)
                if (scrollTimeout.current) {
                    clearTimeout(scrollTimeout.current)
                }
            }
        }
    }, [sections])

    // Auto-scroll horizontal nav to active item
    useEffect(() => {
        const activeNavItem = navRefs.current[activeSection]
        if (activeNavItem && activeNavItem.parentElement) {
            activeNavItem.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            })
        }
    }, [activeSection])

    const scrollToSection = (sectionId) => {
        // Set flag to ignore scroll tracking temporarily
        isManualClick.current = true

        // Immediately update active section
        setActiveSection(sectionId)

        const section = contentRefs.current[sectionId]
        const container = scrollContainerRef.current
        if (section && container) {
            const offsetTop = section.offsetTop - 100
            container.scrollTo({ top: offsetTop, behavior: 'smooth' })
        }
    }

    const currentIndex = sections.findIndex(s => s.id === activeSection)
    const canGoPrev = currentIndex > 0
    const canGoNext = currentIndex < sections.length - 1

    const goToPrev = () => {
        if (canGoPrev) scrollToSection(sections[currentIndex - 1].id)
    }

    const goToNext = () => {
        if (canGoNext) scrollToSection(sections[currentIndex + 1].id)
    }

    return {
        activeSection,
        scrollContainerRef,
        contentRefs,
        navRefs,
        scrollToSection,
        goToPrev,
        goToNext,
        canGoPrev,
        canGoNext
    }
}