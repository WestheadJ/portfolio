// Terminal configuration variables
const terminalConfig = {
    prompt: "$Visitor@JamesWestheadPortfolio > $ ~/",
    typingSpeed: getRandomIntInclusive(20, 70), // ms per character
    linePause: getRandomIntInclusive(500, 1500),   // ms before next line
    sections: [
        {
            type: "welcome",
            content: "Hello! I am James Westhead. Welcome to my portfolio."
        },
        {
            type: "graduation",
            content: "I am a recent Software Engineering graduate from Sheffield Hallam University, graduating with a 2:1."
        },
        {
            type: "skills",
            content: "Skills: JavaScript, React, Node.js, Python, CSS, HTML"
        },
        {
            type: "contact",
            content: "Contact: james@example.com | GitHub: @jameswesthead"
        }
    ]
};

const terminalContainer = document.getElementById("terminal-container");

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

class TerminalAnimator {
    constructor(container, config) {
        this.container = container;
        this.config = config;
        this.currentSection = 0;
        this.isTyping = false;
        this.skipped = false;
        this.skipInstruction = document.getElementById('skip-instruction');
    }

    async typeText(element, text) {
        element.textContent = '';
        this.isTyping = true;

        // Disable cursor blink while typing
        const cursor = document.querySelector('.terminal-cursor');
        if (cursor) cursor.classList.remove('idle');
        if (cursor) cursor.classList.add('typing');

        // Check if mobile - disable typing animation for better performance
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            element.textContent = text;
            // Small delay for effect
            await new Promise(resolve => setTimeout(resolve, 300));
        } else {
            // Desktop typing animation
            for (let i = 0; i < text.length; i++) {
                if (this.skipped) {
                    element.textContent = text;
                    break;
                }
                element.textContent += text[i];

                // Add random delay for realistic typing
                const delay = text[i] === ' ' ?
                    this.config.typingSpeed :
                    this.config.typingSpeed + getRandomIntInclusive(-20, 20);

                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }

        // Re-enable cursor blink
        if (cursor) cursor.classList.remove('typing');
        if (cursor) cursor.classList.add('idle');
        this.isTyping = false;
    }

    async createTerminalSection(section, index) {
        // Create section element
        const sectionElement = document.createElement("div");
        sectionElement.classList.add("terminal-section");
        sectionElement.style.opacity = "0";

        // Add to container
        this.container.appendChild(sectionElement);

        // Wait a bit before starting
        await new Promise(resolve => setTimeout(resolve, 200));

        // Make it visible
        sectionElement.style.opacity = "1";
        sectionElement.classList.add("terminal-typing");

        // Type the content
        const fullText = this.config.prompt + " " + section.content;
        await this.typeText(sectionElement, fullText);

        // Remove typing class when done
        sectionElement.classList.remove("terminal-typing");

        // Pause before next section
        await new Promise(resolve => setTimeout(resolve, this.config.linePause));
    }

    skip() {
        this.skipped = true;
        this.hideSkipInstruction();
        
        // Clear any existing sections that might have been partially created
        const existingSections = this.container.querySelectorAll('.terminal-section');
        existingSections.forEach(section => section.remove());
        
        // Show all sections from the beginning
        this.config.sections.forEach(section => {
            const sectionElement = document.createElement("div");
            sectionElement.classList.add("terminal-section");
            sectionElement.style.opacity = "1"; // Make immediately visible
            sectionElement.textContent = this.config.prompt + " " + section.content;
            this.container.appendChild(sectionElement);
        });
        
        // Re-enable cursor
        const cursor = document.querySelector('.terminal-cursor');
        if (cursor) {
            cursor.classList.remove('typing');
            cursor.classList.add('idle');
        }
        
        // Reset typing state
        this.isTyping = false;
    }

    hideSkipInstruction() {
        if (this.skipInstruction) {
            this.skipInstruction.classList.add('hidden');
        }
    }

    async start() {
        for (let i = 0; i < this.config.sections.length; i++) {
            this.currentSection = i;
            if (this.skipped) break;
            await this.createTerminalSection(this.config.sections[i], i);
            
            // Check if skipped during the section creation
            if (this.skipped) break;
        }
        
        // Hide skip instruction when animation completes
        if (!this.skipped) {
            this.hideSkipInstruction();
        }
    }
}

// Initialize and start the terminal animation
document.addEventListener('DOMContentLoaded', () => {
    const animator = new TerminalAnimator(terminalContainer, terminalConfig);

    // Add skip functionality
    const skipInstruction = document.getElementById('skip-instruction');
    
    // Skip on Enter key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && animator.isTyping) {
            e.preventDefault();
            animator.skip();
        }
    });

    // Skip on click/tap
    if (skipInstruction) {
        skipInstruction.addEventListener('click', () => {
            if (animator.isTyping) {
                animator.skip();
            }
        });

        // Also skip on clicking the terminal container
        terminalContainer.addEventListener('click', (e) => {
            if (animator.isTyping && e.target !== skipInstruction) {
                animator.skip();
            }
        });
    }

    // Start typing after a short delay
    setTimeout(() => {
        animator.start();
    }, 1000);
});