/* ==========================================================
   BEFORE YOU LEAVE ❤️
   typing.js
========================================================== */

"use strict";

/* ----------------------------------------------------------
   Typewriter Configuration
---------------------------------------------------------- */

const typingConfig = {

    speed: 45,

    deleteSpeed: 25,

    pauseAfterText: 1200,

    pauseBeforeNext: 400

};


/* ----------------------------------------------------------
   Typewriter State
---------------------------------------------------------- */

let typingTimer = null;

let typingActive = false;


/* ----------------------------------------------------------
   Type Text
---------------------------------------------------------- */

function typeText(
    element,
    text,
    speed = typingConfig.speed
) {

    if (!element) {
        return Promise.resolve();
    }


    return new Promise((resolve) => {

        let index = 0;

        element.textContent = "";

        typingActive = true;


        function typeCharacter() {

            if (index >= text.length) {

                typingActive = false;

                resolve();

                return;

            }


            element.textContent +=
                text.charAt(index);

            index++;


            typingTimer =
                setTimeout(
                    typeCharacter,
                    speed
                );

        }


        typeCharacter();

    });

}


/* ----------------------------------------------------------
   Delete Text
---------------------------------------------------------- */

function deleteText(
    element,
    speed = typingConfig.deleteSpeed
) {

    if (!element) {
        return Promise.resolve();
    }


    return new Promise((resolve) => {

        function deleteCharacter() {

            const currentText =
                element.textContent;


            if (currentText.length === 0) {

                resolve();

                return;

            }


            element.textContent =
                currentText.slice(
                    0,
                    -1
                );


            typingTimer =
                setTimeout(
                    deleteCharacter,
                    speed
                );

        }


        deleteCharacter();

    });

}


/* ----------------------------------------------------------
   Type Multiple Lines
---------------------------------------------------------- */

async function typeLines(
    element,
    lines,
    options = {}
) {

    if (!element || !Array.isArray(lines)) {
        return;
    }


    const speed =
        options.speed ??
        typingConfig.speed;


    const pause =
        options.pause ??
        typingConfig.pauseAfterText;


    for (const line of lines) {

        await typeText(
            element,
            line,
            speed
        );


        await wait(pause);


        await deleteText(
            element,
            typingConfig.deleteSpeed
        );


        await wait(
            typingConfig.pauseBeforeNext
        );

    }

}


/* ----------------------------------------------------------
   Wait Helper
---------------------------------------------------------- */

function wait(milliseconds) {

    return new Promise(
        (resolve) => {

            setTimeout(
                resolve,
                milliseconds
            );

        }
    );

}


/* ----------------------------------------------------------
   Stop Typing
---------------------------------------------------------- */

function stopTyping() {

    if (typingTimer) {

        clearTimeout(
            typingTimer
        );

        typingTimer = null;

    }

    typingActive = false;

}


/* ----------------------------------------------------------
   Check Typing State
---------------------------------------------------------- */

function isTyping() {

    return typingActive;

}


/* ----------------------------------------------------------
   Automatic Intro Typing
---------------------------------------------------------- */

window.addEventListener(
    "load",
    async () => {

        const introElement =
            document.querySelector(
                ".typing-text"
            );


        if (!introElement) {
            return;
        }


        await wait(800);


        await typeLines(
            introElement,
            [
                "Every love story...",
                "has moments...",
                "where words fail.",
                "Mine did too.",
                "So... I made this."
            ],
            {
                speed: 50,
                pause: 1000
            }
        );

    }
);