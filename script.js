document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust if navbar is fixed
                behavior: "smooth"
            });
        }
    });
});

document.querySelector(".logo-link").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutMeSection = document.querySelector(".about-me-section");

    function revealOnScroll() {
        const sectionTop = aboutMeSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) { // When section enters view
            aboutMeSection.classList.add("visible");
        }
    }

    // Listen for scroll event
    window.addEventListener("scroll", revealOnScroll);

    // Trigger once in case it's already visible on page load
    revealOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const myportfoliosection = document.querySelector(".my-portfolio-section");

    function revealOnScroll() {
        const sectionTop = myportfoliosection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) { // When section enters view
            myportfoliosection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Check immediately on load
});

document.addEventListener("DOMContentLoaded", function () {
    const contactsection = document.querySelector(".contact-section");

    function revealOnScroll() {
        const sectionTop = contactsection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) { // When section enters view
            contactsection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Check immediately on load
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Thank you! Your message has been sent.");
                form.reset();
            } else {
                alert("Oops! Something went wrong.");
            }
        })
        .catch(() => alert("Error! Please try again later."));
    });
});