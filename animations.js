/* ====================================
   NEZ ANIME
   animations.js
==================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------
       Floating Particles
    ----------------------------- */

    const particles = document.getElementById("particles");

    if (particles) {

        for (let i = 0; i < 80; i++) {

            const particle = document.createElement("div");

            particle.classList.add("particle");

            particle.style.left = Math.random() * 100 + "%";

            particle.style.top = Math.random() * 100 + "%";

            particle.style.width = Math.random() * 8 + 2 + "px";

            particle.style.height = particle.style.width;

            particle.style.animationDuration =
                Math.random() * 10 + 5 + "s";

            particle.style.animationDelay =
                Math.random() * 5 + "s";

            particles.appendChild(particle);

        }

    }

    /* -----------------------------
       Fade In Sections
    ----------------------------- */

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {

        section.classList.add("hidden-section");

        observer.observe(section);

    });

    /* -----------------------------
       Hero Animation
    ----------------------------- */

    const hero = document.querySelector(".hero-content");

    if (hero) {

        hero.animate([
            {
                opacity: 0,
                transform: "translateY(100px)"
            },
            {
                opacity: 1,
                transform: "translateY(0px)"
            }
        ], {
            duration: 1200,
            easing: "ease-out"
        });

    }

    /* -----------------------------
       Mouse Glow
    ----------------------------- */

    const glow = document.createElement("div");

    glow.id = "cursorGlow";

    document.body.appendChild(glow);

    document.addEventListener("mousemove", e => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });

    /* -----------------------------
       Button Hover Pop
    ----------------------------- */

    document.querySelectorAll("button").forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.animate([
                {
                    transform: "scale(1)"
                },
                {
                    transform: "scale(1.08)"
                }
            ], {
                duration: 180,
                fill: "forwards"
            });

        });

        button.addEventListener("mouseleave", () => {

            button.animate([
                {
                    transform: "scale(1.08)"
                },
                {
                    transform: "scale(1)"
                }
            ], {
                duration: 180,
                fill: "forwards"
            });

        });

    });

    /* -----------------------------
       Card Hover Effect
    ----------------------------- */

    document.addEventListener("mouseover", e => {

        if (e.target.closest(".anime-card")) {

            const card = e.target.closest(".anime-card");

            card.style.transform =
                "translateY(-12px) scale(1.03)";

            card.style.boxShadow =
                "0 0 40px rgba(140,82,255,.5)";

        }

    });

    document.addEventListener("mouseout", e => {

        if (e.target.closest(".anime-card")) {

            const card = e.target.closest(".anime-card");

            card.style.transform = "";

            card.style.boxShadow = "";

        }

    });

    /* -----------------------------
       Animated Title
    ----------------------------- */

    const title = document.querySelector("h1");

    if (title) {

        setInterval(() => {

            title.style.textShadow =
                `0 0 ${
                    Math.random() * 25 + 10
                }px #a855f7`;

        }, 600);

    }

});

console.log("Animations Loaded");
