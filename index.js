// ===== Sticky Navbar Logic =====
const navbar = document.getElementById("navbar");
const hero = document.querySelector(".hero");
const heroHeight = hero.offsetHeight;
const spacer = document.getElementById("nav-spacer");
const line = document.getElementById("line")

window.addEventListener("scroll", () => {
    if (window.scrollY >= heroHeight) {
        navbar.classList.add("sticky");
        spacer.classList.add("active");
    } else {
        navbar.classList.remove("sticky");
        spacer.classList.remove("active");
    }
});

// ===== Scroll Button Logic =====
const circle = document.getElementById("circle");
const content = document.getElementById("about-me-content");

// Easing function (slow → fast → slow)
function easeInOut(t) {
    return t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

circle.addEventListener("click", () => {
    const navHeight = navbar.offsetHeight;
    const extraSpace = 80; // extra space above content
    const target =
        content.getBoundingClientRect().top +
        window.pageYOffset -
        navHeight - extraSpace;

    const start = window.pageYOffset;
    const distance = target - start;
    const duration = 1100;
    let startTime = null;

    function animateScroll(time) {
        if (!startTime) startTime = time;

        const progress = Math.min((time - startTime) / duration, 1);
        const eased = easeInOut(progress);

        window.scrollTo(0, start + distance * eased);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
});

const underline = document.getElementById("tab-underline");
const personalTab = document.getElementById("projects-tab-personal");
const universityTab = document.getElementById("projects-tab-university");
const personalTabContainer = document.getElementById("personal-projects-container");
const universityTabContainer = document.getElementById("university-projects-container");

function moveUnderline(tab) {
    const rect = tab.getBoundingClientRect();
    const containerRect = tab.parentElement.getBoundingClientRect();
    const left = rect.left - containerRect.left; // relative to tab bar
    const width = rect.width;

    underline.style.left = left + "px";
    underline.style.width = width + "px";
}

moveUnderline(personalTab); // Initialize underline position

function showPersonal() {
    personalTabContainer.classList.remove("slide-out-left");
    personalTabContainer.classList.add("slide-in-right");

    universityTabContainer.classList.remove("slide-in-right");
    universityTabContainer.classList.add("slide-out-left");
}

function showUniversity() {
    personalTabContainer.classList.remove("slide-in-right");
    personalTabContainer.classList.add("slide-out-left");

    universityTabContainer.classList.remove("slide-out-left");
    universityTabContainer.classList.add("slide-in-right");
}

personalTab.addEventListener("click", () => {
    moveUnderline(personalTab);
    showPersonal();
});

universityTab.addEventListener("click", () => {
    moveUnderline(universityTab);
    showUniversity();
});