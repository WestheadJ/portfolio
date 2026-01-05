const navbar = document.getElementById("navbar");
const heroHeight = document.querySelector(".hero").offsetHeight;

window.addEventListener("scroll", () => {
    if (window.scrollY >= heroHeight) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});