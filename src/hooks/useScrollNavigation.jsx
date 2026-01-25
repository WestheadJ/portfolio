import { useState, useEffect, useRef } from 'react'

export function useScrollNavigation(sections) {
    const [activeSection, setActiveSection] = useState(sections[0]?.id || '')
    const scrollContainerRef = useRef(null)
    const contentRefs = useRef({})
    const navRefs = useRef({})
    const isManualClick = useRef(false)
    const scrollTimeout = useRef(null)

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

            // Special case: at the very top, always show first section
            if (scrollTop < 50) {
                setActiveSection(sections[0].id)
                return
            }

            // Special case: at the very bottom, always show last section
            if (scrollTop >= scrollHeight - 50) {
                setActiveSection(sections[sections.length - 1].id)
                return
            }

            // Find the section whose top is closest to the viewport top (with offset)
            // This ensures even short sections get highlighted
            const viewportTop = 150 // offset for when section becomes "active"
            let closestSection = sections[0].id
            let closestDistance = Infinity

            sections.forEach(section => {
                const element = contentRefs.current[section.id]
                if (!element) return

                const rect = element.getBoundingClientRect()
                const containerRect = scrollContainer.getBoundingClientRect()

                // Distance from section top to our activation point
                const distance = Math.abs(rect.top - containerRect.top - viewportTop)

                // Only consider sections that are currently in or entering the viewport
                if (rect.top <= containerRect.bottom && rect.bottom >= containerRect.top) {
                    if (distance < closestDistance) {
                        closestDistance = distance
                        closestSection = section.id
                    }
                }
            })

            setActiveSection(closestSection)
        }

        const scrollContainer = scrollContainerRef.current
        if (scrollContainer) {
            // Run immediately on mount to set initial state
            handleScroll()
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