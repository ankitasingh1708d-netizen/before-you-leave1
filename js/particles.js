/* ==========================================================
   BEFORE YOU LEAVE ❤️
   particles.js
========================================================== */

"use strict";

/* ----------------------------------------------------------
   Elements
---------------------------------------------------------- */

const starsLayer =
    document.getElementById("stars-layer");

const particlesLayer =
    document.getElementById("particles-layer");


/* ----------------------------------------------------------
   Configuration
---------------------------------------------------------- */

const particleConfig = {

    stars: 90,

    particles: 35,

    shootingStarInterval: 4500

};


/* ----------------------------------------------------------
   Random Helper
---------------------------------------------------------- */

function randomValue(min, max) {

    return Math.random() * (max - min) + min;

}


/* ----------------------------------------------------------
   Create Star
---------------------------------------------------------- */

function createStar() {

    if (!starsLayer) {
        return;
    }


    const star =
        document.createElement("span");


    star.className =
        "background-star";


    const size =
        randomValue(1, 3.5);


    star.style.position =
        "absolute";

    star.style.left =
        randomValue(0, 100) + "vw";

    star.style.top =
        randomValue(0, 100) + "vh";

    star.style.width =
        size + "px";

    star.style.height =
        size + "px";

    star.style.borderRadius =
        "50%";

    star.style.background =
        "rgba(255,255,255,.95)";

    star.style.boxShadow =
        "0 0 8px rgba(255,255,255,.8)";

    star.style.opacity =
        randomValue(.2, .9);

    star.style.pointerEvents =
        "none";


    const duration =
        randomValue(2, 6);


    star.style.animation =
        `twinkle ${duration}s ease-in-out infinite`;


    star.style.animationDelay =
        randomValue(0, 5) + "s";


    starsLayer.appendChild(star);

}


/* ----------------------------------------------------------
   Create Small Glow Particle
---------------------------------------------------------- */

function createParticle() {

    if (!particlesLayer) {
        return;
    }


    const particle =
        document.createElement("span");


    particle.className =
        "glow-particle";


    const size =
        randomValue(2, 5);


    particle.style.position =
        "absolute";

    particle.style.left =
        randomValue(0, 100) + "vw";

    particle.style.top =
        randomValue(0, 100) + "vh";

    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";

    particle.style.borderRadius =
        "50%";

    particle.style.background =
        "rgba(255,137,180,.8)";

    particle.style.boxShadow =
        "0 0 14px rgba(255,77,141,.8)";

    particle.style.opacity =
        randomValue(.15, .6);

    particle.style.pointerEvents =
        "none";


    const duration =
        randomValue(5, 12);


    particle.style.animation =
        `floating ${duration}s ease-in-out infinite`;


    particle.style.animationDelay =
        randomValue(0, 5) + "s";


    particlesLayer.appendChild(
        particle
    );

}


/* ----------------------------------------------------------
   Create Shooting Star
---------------------------------------------------------- */

function createShootingStar() {

    if (!starsLayer) {
        return;
    }


    const shootingStar =
        document.createElement("span");


    shootingStar.className =
        "shooting-star";


    shootingStar.style.position =
        "fixed";

    shootingStar.style.left =
        randomValue(50, 95) + "vw";

    shootingStar.style.top =
        randomValue(0, 35) + "vh";

    shootingStar.style.width =
        "2px";

    shootingStar.style.height =
        randomValue(70, 130) + "px";

    shootingStar.style.background =
        "linear-gradient(to bottom, rgba(255,255,255,0), #ffffff)";

    shootingStar.style.borderRadius =
        "999px";

    shootingStar.style.opacity =
        "0";

    shootingStar.style.transform =
        "rotate(-45deg)";

    shootingStar.style.transformOrigin =
        "top center";

    shootingStar.style.filter =
        "drop-shadow(0 0 6px rgba(255,255,255,.9))";

    shootingStar.style.pointerEvents =
        "none";

    shootingStar.style.zIndex =
        "1";


    starsLayer.appendChild(
        shootingStar
    );


    requestAnimationFrame(() => {

        shootingStar.style.transition =
            "transform 1.2s ease-out, opacity .25s ease-in-out";

        shootingStar.style.opacity =
            "1";

        shootingStar.style.transform =
            "rotate(-45deg) translateY(260px)";

    });


    setTimeout(() => {

        shootingStar.style.opacity =
            "0";

    }, 900);


    setTimeout(() => {

        shootingStar.remove();

    }, 1500);

}


/* ----------------------------------------------------------
   Initialize Stars
---------------------------------------------------------- */

function initializeStars() {

    if (!starsLayer) {
        return;
    }


    starsLayer.innerHTML = "";


    for (
        let i = 0;
        i < particleConfig.stars;
        i++
    ) {

        createStar();

    }

}


/* ----------------------------------------------------------
   Initialize Particles
---------------------------------------------------------- */

function initializeParticles() {

    if (!particlesLayer) {
        return;
    }


    particlesLayer.innerHTML = "";


    for (
        let i = 0;
        i < particleConfig.particles;
        i++
    ) {

        createParticle();

    }

}


/* ----------------------------------------------------------
   Shooting Star Loop
---------------------------------------------------------- */

let shootingStarTimer = null;


function startShootingStars() {

    if (shootingStarTimer) {
        return;
    }


    shootingStarTimer =
        setInterval(
            createShootingStar,
            particleConfig.shootingStarInterval
        );

}


/* ----------------------------------------------------------
   Stop Shooting Stars
---------------------------------------------------------- */

function stopShootingStars() {

    if (!shootingStarTimer) {
        return;
    }


    clearInterval(
        shootingStarTimer
    );

    shootingStarTimer = null;

}


/* ----------------------------------------------------------
   Visibility Handling
---------------------------------------------------------- */

document.addEventListener(
    "visibilitychange",
    () => {

        if (document.hidden) {

            stopShootingStars();

        } else {

            startShootingStars();

        }

    }
);


/* ----------------------------------------------------------
   Responsive Regeneration
---------------------------------------------------------- */

let resizeTimer = null;


window.addEventListener(
    "resize",
    () => {

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(() => {

                initializeStars();

                initializeParticles();

            }, 300);

    }
);


/* ----------------------------------------------------------
   Initialization
---------------------------------------------------------- */

window.addEventListener(
    "load",
    () => {

        initializeStars();

        initializeParticles();

        startShootingStars();

    }
);