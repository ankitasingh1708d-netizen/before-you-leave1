/* ==========================================================
   BEFORE YOU LEAVE ❤️
   confetti.js
========================================================== */

"use strict";

/* ----------------------------------------------------------
   Configuration
---------------------------------------------------------- */

const confettiConfig = {

    count: 140,

    duration: 4500,

    colors: [
        "#ff4d8d",
        "#ff80ab",
        "#ffb3c6",
        "#ffd6e2",
        "#ffffff",
        "#f9a8d4"
    ]

};


/* ----------------------------------------------------------
   Confetti Container
---------------------------------------------------------- */

let confettiContainer = null;


/* ----------------------------------------------------------
   Create Container
---------------------------------------------------------- */

function createConfettiContainer() {

    if (confettiContainer) {
        return;
    }


    confettiContainer =
        document.createElement("div");


    confettiContainer.id =
        "confetti-container";


    confettiContainer.style.position =
        "fixed";

    confettiContainer.style.inset =
        "0";

    confettiContainer.style.pointerEvents =
        "none";

    confettiContainer.style.overflow =
        "hidden";

    confettiContainer.style.zIndex =
        "10000";


    document.body.appendChild(
        confettiContainer
    );

}


/* ----------------------------------------------------------
   Random Helper
---------------------------------------------------------- */

function randomConfetti(min, max) {

    return Math.random() *
        (max - min) +
        min;

}


/* ----------------------------------------------------------
   Create Single Confetti
---------------------------------------------------------- */

function createConfettiPiece() {

    const piece =
        document.createElement("span");


    piece.className =
        "confetti-piece";


    const size =
        randomConfetti(6, 12);


    const color =
        confettiConfig.colors[
            Math.floor(
                Math.random() *
                confettiConfig.colors.length
            )
        ];


    piece.style.position =
        "absolute";

    piece.style.left =
        randomConfetti(0, 100) + "vw";

    piece.style.top =
        "-30px";

    piece.style.width =
        size + "px";

    piece.style.height =
        randomConfetti(8, 18) + "px";

    piece.style.background =
        color;

    piece.style.borderRadius =
        randomConfetti(1, 4) + "px";

    piece.style.opacity =
        randomConfetti(.7, 1);

    piece.style.transform =
        `rotate(${randomConfetti(0, 360)}deg)`;


    confettiContainer.appendChild(
        piece
    );


    const fallDistance =
        window.innerHeight + 100;

    const drift =
        randomConfetti(-180, 180);

    const rotation =
        randomConfetti(360, 1200);

    const duration =
        randomConfetti(2500, 5000);


    requestAnimationFrame(() => {

        piece.style.transition =
            `transform ${duration}ms cubic-bezier(.2,.8,.3,1),
             opacity ${duration}ms ease-out`;


        piece.style.transform =
            `translate(${drift}px, ${fallDistance}px)
             rotate(${rotation}deg)`;


        piece.style.opacity =
            "0";

    });


    setTimeout(() => {

        piece.remove();

    }, duration + 100);

}


/* ----------------------------------------------------------
   Launch Confetti
---------------------------------------------------------- */

function launchConfetti(
    amount = confettiConfig.count
) {

    createConfettiContainer();


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            () => {

                createConfettiPiece();

            },
            i * 10
        );

    }

}


/* ----------------------------------------------------------
   Heart Confetti
---------------------------------------------------------- */

function launchHeartConfetti(
    amount = 80
) {

    createConfettiContainer();


    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💓"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(() => {

            const heart =
                document.createElement("span");


            heart.textContent =
                hearts[
                    Math.floor(
                        Math.random() *
                        hearts.length
                    )
                ];


            heart.style.position =
                "absolute";

            heart.style.left =
                randomConfetti(0, 100) +
                "vw";

            heart.style.top =
                "-40px";

            heart.style.fontSize =
                randomConfetti(18, 35) +
                "px";

            heart.style.filter =
                "drop-shadow(0 0 8px rgba(255,77,141,.6))";


            confettiContainer.appendChild(
                heart
            );


            const duration =
                randomConfetti(2500, 4500);

            const drift =
                randomConfetti(-160, 160);


            requestAnimationFrame(() => {

                heart.style.transition =
                    `transform ${duration}ms ease-out,
                     opacity ${duration}ms ease-out`;


                heart.style.transform =
                    `translate(${drift}px,
                    ${window.innerHeight + 100}px)
                    rotate(${randomConfetti(-360,360)}deg)`;


                heart.style.opacity =
                    "0";

            });


            setTimeout(() => {

                heart.remove();

            }, duration + 100);

        }, i * 30);

    }

}


/* ----------------------------------------------------------
   Firework Burst
---------------------------------------------------------- */

function launchFireworks(
    x = window.innerWidth / 2,
    y = window.innerHeight / 2
) {

    createConfettiContainer();


    const pieces = 45;


    for (
        let i = 0;
        i < pieces;
        i++
    ) {

        const particle =
            document.createElement("span");


        const angle =
            (360 / pieces) * i;

        const radians =
            angle * Math.PI / 180;

        const distance =
            randomConfetti(100, 260);

        const moveX =
            Math.cos(radians) *
            distance;

        const moveY =
            Math.sin(radians) *
            distance;


        particle.style.position =
            "fixed";

        particle.style.left =
            x + "px";

        particle.style.top =
            y + "px";

        particle.style.width =
            randomConfetti(4, 8) +
            "px";

        particle.style.height =
            randomConfetti(4, 8) +
            "px";

        particle.style.borderRadius =
            "50%";

        particle.style.background =
            confettiConfig.colors[
                Math.floor(
                    Math.random() *
                    confettiConfig.colors.length
                )
            ];

        particle.style.boxShadow =
            "0 0 12px currentColor";

        particle.style.pointerEvents =
            "none";


        confettiContainer.appendChild(
            particle
        );


        requestAnimationFrame(() => {

            particle.style.transition =
                "transform 1.2s ease-out, opacity 1.2s ease-out";


            particle.style.transform =
                `translate(${moveX}px, ${moveY}px)
                 scale(.2)`;


            particle.style.opacity =
                "0";

        });


        setTimeout(() => {

            particle.remove();

        }, 1300);

    }

}


/* ----------------------------------------------------------
   Grand Celebration
---------------------------------------------------------- */

function celebrateLove() {

    launchConfetti(180);

    setTimeout(() => {

        launchHeartConfetti(100);

    }, 500);


    setTimeout(() => {

        launchFireworks();

    }, 1200);

}


/* ----------------------------------------------------------
   Secret Keyboard Shortcut
   Press C
---------------------------------------------------------- */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key.toLowerCase() === "c"
        ) {

            celebrateLove();

        }

    }
);


/* ----------------------------------------------------------
   Initialization
---------------------------------------------------------- */

window.addEventListener(
    "load",
    () => {

        createConfettiContainer();

    }
);