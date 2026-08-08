/* ==========================================================
   BEFORE YOU LEAVE ❤️
   music.js
========================================================== */

"use strict";


const music =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("music-btn");


let isPlaying = false;

let fadeTimer = null;

const STORAGE_KEY =
    "our_story_music";


/* ==========================================================
   MUSIC AVAILABLE CHECK
========================================================== */

if (music) {

    music.addEventListener(
        "error",
        () => {

            console.warn(
                "Music file could not be loaded. " +
                "Make sure assets/songs/theme.mp3 exists."
            );

            if (musicButton) {

                musicButton.innerHTML =
                    "🎵";

                musicButton.title =
                    "Add assets/songs/theme.mp3";

            }

        }
    );

}


/* ==========================================================
   FADE IN
========================================================== */

function fadeInMusic() {

    if (!music) {
        return;
    }


    clearInterval(fadeTimer);


    music.volume = 0;


    fadeTimer =
        setInterval(() => {

            if (music.volume >= 0.95) {

                music.volume = 1;

                clearInterval(fadeTimer);

                return;

            }


            music.volume =
                Math.min(
                    music.volume + 0.05,
                    1
                );

        }, 100);

}


/* ==========================================================
   FADE OUT
========================================================== */

function fadeOutMusic() {

    if (!music) {
        return;
    }


    clearInterval(fadeTimer);


    fadeTimer =
        setInterval(() => {

            if (music.volume <= 0.05) {

                music.volume = 0;

                music.pause();

                clearInterval(fadeTimer);

                isPlaying = false;

                localStorage.setItem(
                    STORAGE_KEY,
                    "paused"
                );

                updateMusicButton();

                return;

            }


            music.volume -= 0.05;

        }, 100);

}


/* ==========================================================
   UPDATE BUTTON
========================================================== */

function updateMusicButton() {

    if (!musicButton) {
        return;
    }


    if (isPlaying) {

        musicButton.innerHTML =
            "🎵";

        musicButton.classList.add(
            "music-playing"
        );

    } else {

        musicButton.innerHTML =
            "🔇";

        musicButton.classList.remove(
            "music-playing"
        );

    }

}


/* ==========================================================
   PLAY MUSIC
========================================================== */

async function playMusic() {

    if (!music) {
        return false;
    }


    try {

        await music.play();

        isPlaying = true;

        localStorage.setItem(
            STORAGE_KEY,
            "playing"
        );

        fadeInMusic();

        updateMusicButton();

        return true;

    } catch (error) {

        console.warn(
            "Music playback was blocked:",
            error
        );

        isPlaying = false;

        updateMusicButton();

        return false;

    }

}


/* ==========================================================
   PAUSE MUSIC
========================================================== */

function pauseMusic() {

    if (!music) {
        return;
    }


    fadeOutMusic();

}


/* ==========================================================
   TOGGLE
========================================================== */

function toggleMusic() {

    if (isPlaying) {

        pauseMusic();

    } else {

        playMusic();

    }

}


/* ==========================================================
   BUTTON
========================================================== */

if (musicButton) {

    musicButton.addEventListener(
        "click",
        toggleMusic
    );

}


/* ==========================================================
   START MUSIC AFTER ENTER
========================================================== */

window.addEventListener(
    "load",
    () => {

        updateMusicButton();

    }
);


/* ==========================================================
   KEYBOARD
   M = Music
========================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key.toLowerCase() === "m"
        ) {

            toggleMusic();

        }

    }
);


/* ==========================================================
   VISIBILITY
========================================================== */

document.addEventListener(
    "visibilitychange",
    () => {

        if (!music) {
            return;
        }


        if (document.hidden) {

            if (isPlaying) {

                music.volume = 0.15;

            }

        } else {

            if (isPlaying) {

                music.volume = 1;

            }

        }

    }
);


/* ==========================================================
   END → RESTART
========================================================== */

if (music) {

    music.addEventListener(
        "ended",
        () => {

            music.currentTime = 0;

            playMusic();

        }
    );

}