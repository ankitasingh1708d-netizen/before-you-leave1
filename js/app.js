/* ==========================================================
   BEFORE YOU LEAVE ❤️
   app.js
   Main Application Controller
========================================================== */

"use strict";


/* ==========================================================
   DOM ELEMENTS
========================================================== */

const loadingScreen =
    document.getElementById("loading-screen");

const app =
    document.getElementById("app");

const enterButton =
    document.getElementById("enter-btn");

const transitionOverlay =
    document.getElementById("transition-overlay");


/* ==========================================================
   APPLICATION STATE
========================================================== */

let currentSceneIndex = 0;

let loadingFinished = false;

let isTransitioning = false;


/* ==========================================================
   GET CURRENT SCENES
   Always query dynamically because scenes.js
   creates story scenes after page load.
========================================================== */

function getScenes() {

    return document.querySelectorAll(
        "#app .scene"
    );

}


/* ==========================================================
   LOADING SCREEN
========================================================== */

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            if (!loadingScreen) {
                loadingFinished = true;
                return;
            }


            loadingScreen.style.transition =
                "opacity .8s ease";

            loadingScreen.style.opacity =
                "0";


            setTimeout(() => {

                loadingScreen.style.display =
                    "none";

                loadingFinished = true;

                animateCurrentScene();

            }, 800);

        }, 3000);

    }
);


/* ==========================================================
   SCENE ANIMATION
========================================================== */

function animateCurrentScene() {

    const scenes =
        getScenes();

    const scene =
        scenes[currentSceneIndex];


    if (!scene) {
        return;
    }


    scene.style.opacity = "0";

    scene.style.transform =
        "translateY(35px) scale(.98)";

    scene.style.filter =
        "blur(8px)";


    requestAnimationFrame(() => {

        scene.style.transition =
            "opacity .8s ease, " +
            "transform .8s ease, " +
            "filter .8s ease";


        scene.style.opacity = "1";

        scene.style.transform =
            "translateY(0) scale(1)";

        scene.style.filter =
            "blur(0)";

    });

}


/* ==========================================================
   SHOW TRANSITION OVERLAY
========================================================== */

function showTransition() {

    if (!transitionOverlay) {
        return;
    }


    transitionOverlay.style.pointerEvents =
        "auto";

    transitionOverlay.style.transition =
        "opacity .45s ease";

    transitionOverlay.style.opacity =
        "1";

}


/* ==========================================================
   HIDE TRANSITION OVERLAY
========================================================== */

function hideTransition() {

    if (!transitionOverlay) {
        return;
    }


    transitionOverlay.style.opacity =
        "0";


    setTimeout(() => {

        transitionOverlay.style.pointerEvents =
            "none";

    }, 450);

}


/* ==========================================================
   GO TO SCENE
========================================================== */

function goToScene(index) {

    const scenes =
        getScenes();


    if (
        index < 0 ||
        index >= scenes.length
    ) {
        return;
    }


    if (isTransitioning) {
        return;
    }


    if (index === currentSceneIndex) {
        return;
    }


    isTransitioning = true;


    showTransition();


    setTimeout(() => {

        scenes.forEach((scene) => {

            scene.classList.remove(
                "active"
            );

        });


        currentSceneIndex =
            index;


        const targetScene =
            scenes[currentSceneIndex];


        if (targetScene) {

            targetScene.classList.add(
                "active"
            );

        }


        setTimeout(() => {

            animateCurrentScene();

            hideTransition();

            isTransitioning = false;

        }, 80);


    }, 450);

}


/* ==========================================================
   ENTER WEBSITE
========================================================== */

if (enterButton) {

    enterButton.addEventListener(
        "click",
        async () => {

            if (!loadingFinished) {
                return;
            }


            /* ------------------------------------------
               Move from Landing → Memories
            ------------------------------------------ */

            goToScene(1);


            /* ------------------------------------------
               Start Background Music

               music.js handles:
               - play
               - fade in
               - button state
               - localStorage
            ------------------------------------------ */

            if (
                typeof playMusic ===
                "function"
            ) {

                await playMusic();

            }

        }
    );

}


/* ==========================================================
   KEYBOARD NAVIGATION
========================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (!loadingFinished) {
            return;
        }


        const scenes =
            getScenes();


        if (!scenes.length) {
            return;
        }


        /* ------------------------------
           Right Arrow
        ------------------------------ */

        if (
            event.key === "ArrowRight"
        ) {

            if (
                currentSceneIndex <
                scenes.length - 1
            ) {

                goToScene(
                    currentSceneIndex + 1
                );

            }

        }


        /* ------------------------------
           Left Arrow
        ------------------------------ */

        if (
            event.key === "ArrowLeft"
        ) {

            if (
                currentSceneIndex > 0
            ) {

                goToScene(
                    currentSceneIndex - 1
                );

            }

        }

    }
);


/* ==========================================================
   PREVENT ACCIDENTAL DRAGGING
========================================================== */

document.addEventListener(
    "dragstart",
    (event) => {

        if (
            event.target.tagName === "IMG"
        ) {

            event.preventDefault();

        }

    }
);


/* ==========================================================
   APP INITIALIZATION
========================================================== */

function initializeApp() {

    currentSceneIndex = 0;

}


/* ==========================================================
   START APPLICATION
========================================================== */

initializeApp();