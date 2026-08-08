/* ==========================================================
   BEFORE YOU LEAVE ❤️
   hearts.js
   Part 1
========================================================== */

"use strict";

/* ----------------------------------------------------------
   Elements
---------------------------------------------------------- */

const heartsLayer =
    document.getElementById("hearts-layer");


/* ----------------------------------------------------------
   Heart Collection
---------------------------------------------------------- */

const HEARTS = [
    "❤",
    "💖",
    "💕",
    "💗",
    "💓",
    "💘"
];


/* ----------------------------------------------------------
   Random Number Helper
---------------------------------------------------------- */

function random(min, max) {

    return Math.random() * (max - min) + min;

}
/* ----------------------------------------------------------
   Create Background Heart
---------------------------------------------------------- */

function createHeart() {

    const heart =
        document.createElement("div");


    /* Heart Class */

    heart.className = "bg-heart";


    /* Random Heart */

    heart.textContent =
        HEARTS[
            Math.floor(
                Math.random() * HEARTS.length
            )
        ];


    /* Random Size */

    const size =
        random(14, 34);


    /* ------------------------------------------------------
       Initial Styling
    ------------------------------------------------------ */

    heart.style.position = "absolute";

    heart.style.left =
        random(0, 100) + "vw";

    heart.style.top =
        "110vh";

    heart.style.fontSize =
        size + "px";

    heart.style.opacity =
        random(0.2, 0.9);

    heart.style.pointerEvents =
        "none";

    heart.style.userSelect =
        "none";

    heart.style.filter =
        "drop-shadow(0 0 12px rgba(255,77,141,.5))";

    heart.style.transition =
        "transform linear, opacity linear";


    /* Add To Layer */

    heartsLayer.appendChild(heart);


    /* ------------------------------------------------------
       Floating Animation
    ------------------------------------------------------ */

    requestAnimationFrame(() => {

        const drift =
            random(-120, 120);


        heart.style.transform =
            `translate(${drift}px, -130vh)
             rotate(${random(-360, 360)}deg)`;


        heart.style.opacity =
            "0";


        heart.style.transitionDuration =
            random(8, 16) + "s";

    });


    /* ------------------------------------------------------
       Cleanup
    ------------------------------------------------------ */

    setTimeout(() => {

        heart.remove();

    }, 17000);

}
/* ----------------------------------------------------------
   Heart Generator
---------------------------------------------------------- */

let heartGenerator = null;


/* ----------------------------------------------------------
   Start Generator
---------------------------------------------------------- */

function startHeartGenerator() {

    if (heartGenerator) {
        return;
    }


    heartGenerator =
        setInterval(() => {

            createHeart();

        }, 350);

}


/* ----------------------------------------------------------
   Stop Generator
---------------------------------------------------------- */

function stopHeartGenerator() {

    if (!heartGenerator) {
        return;
    }


    clearInterval(
        heartGenerator
    );


    heartGenerator = null;

}
/* ----------------------------------------------------------
   Page Visibility
---------------------------------------------------------- */

document.addEventListener(
    "visibilitychange",
    () => {

        if (document.hidden) {

            stopHeartGenerator();

        } else {

            startHeartGenerator();

        }

    }
);


/* ----------------------------------------------------------
   Initial Hearts
---------------------------------------------------------- */

window.addEventListener(
    "load",
    () => {

        for (let i = 0; i < 18; i++) {

            setTimeout(
                () => {

                    createHeart();

                },
                i * 120
            );

        }

        startHeartGenerator();

    }
);
/* ----------------------------------------------------------
   Secret Heart Rain
   Shortcut: L
---------------------------------------------------------- */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key.toLowerCase() !== "l"
        ) {
            return;
        }


        for (let i = 0; i < 120; i++) {

            setTimeout(
                () => {

                    createHeart();

                },
                i * 25
            );

        }

    }
);