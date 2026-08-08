/* ==========================================================
   BEFORE YOU LEAVE ❤️
   scenes.js
   Cinematic Story Scene Manager
========================================================== */

"use strict";


/* ==========================================================
   STORY DATA
========================================================== */

const storyScenes = [

    /* ======================================================
       01 — MEMORIES
    ====================================================== */

    {
        id: "scene-memories",

        className: "memories-scene",

        content: `

            <div class="story-card glass-card">

                <span class="scene-number">
                    01
                </span>

                <p class="small-text">
                    Before anything else...
                </p>

                <h2 class="scene-title">
                    I want you to remember us.
                </h2>

                <p class="scene-description">
                    Not the argument.<br>
                    Not the misunderstanding.<br>
                    Not yesterday.
                </p>


                <div class="memory-grid">

                    <div class="memory-card">
                        <span>❤️</span>
                        <p>Your smile</p>
                    </div>

                    <div class="memory-card">
                        <span>💫</span>
                        <p>Your laugh</p>
                    </div>

                    <div class="memory-card">
                        <span>🫶</span>
                        <p>Your care</p>
                    </div>

                    <div class="memory-card">
                        <span>🌙</span>
                        <p>Our conversations</p>
                    </div>

                    <div class="memory-card">
                        <span>🥹</span>
                        <p>Our silly moments</p>
                    </div>

                    <div class="memory-card">
                        <span>💖</span>
                        <p>Everything in between</p>
                    </div>

                </div>


                <button
                    class="story-button next-scene"
                    data-next="2"
                    type="button">

                    Remember us ❤️

                </button>

            </div>

        `
    },


    /* ======================================================
       02 — TIMELINE
    ====================================================== */

    {
        id: "scene-timeline",

        className: "timeline-scene",

        content: `

            <div class="story-card glass-card">

                <span class="scene-number">
                    02
                </span>

                <p class="small-text">
                    Somewhere along the way...
                </p>

                <h2 class="scene-title">
                    We became "us".
                </h2>


                <div class="timeline">


                    <div class="timeline-item">

                        <span class="timeline-dot">
                            🌸
                        </span>

                        <div>

                            <h3>
                                The first hello
                            </h3>

                            <p>
                                A simple beginning that
                                became something special.
                            </p>

                        </div>

                    </div>


                    <div class="timeline-line"></div>


                    <div class="timeline-item">

                        <span class="timeline-dot">
                            💬
                        </span>

                        <div>

                            <h3>
                                The endless conversations
                            </h3>

                            <p>
                                Somehow, we always found
                                one more thing to talk about.
                            </p>

                        </div>

                    </div>


                    <div class="timeline-line"></div>


                    <div class="timeline-item">

                        <span class="timeline-dot">
                            ❤️
                        </span>

                        <div>

                            <h3>
                                The little moments
                            </h3>

                            <p>
                                The moments that looked small
                                but meant everything.
                            </p>

                        </div>

                    </div>


                    <div class="timeline-line"></div>


                    <div class="timeline-item">

                        <span class="timeline-dot">
                            ✨
                        </span>

                        <div>

                            <h3>
                                Us
                            </h3>

                            <p>
                                And somehow you became
                                one of my favourite parts of life.
                            </p>

                        </div>

                    </div>

                </div>


                <button
                    class="story-button next-scene"
                    data-next="3"
                    type="button">

                    Keep reading 💌

                </button>

            </div>

        `
    },


    /* ======================================================
       03 — APOLOGY
    ====================================================== */

    {
        id: "scene-apology",

        className: "apology-scene",

        content: `

            <div class="story-card glass-card apology-card">

                <span class="scene-number">
                    03
                </span>

                <div class="broken-heart">
                    💔
                </div>

                <p class="small-text">
                    Now the part I really need to say...
                </p>

                <h2 class="scene-title">
                    I'm sorry.
                </h2>

                <p class="scene-description">
                    I'm not here to defend myself.
                </p>

                <p class="scene-description">
                    I'm not here to prove that I was right.
                </p>

                <p class="scene-description">
                    I'm here because I know
                    <strong>you're hurt.</strong>
                </p>


                <div class="highlight-message">

                    You trusted me,
                    and I understand why
                    you're questioning that trust now.

                </div>


                <button
                    class="story-button next-scene"
                    data-next="4"
                    type="button">

                    I understand ❤️

                </button>

            </div>

        `
    },


    /* ======================================================
       04 — TRUST
    ====================================================== */

    {
        id: "scene-trust",

        className: "trust-scene",

        content: `

            <div class="story-card glass-card">

                <span class="scene-number">
                    04
                </span>

                <div class="trust-icon">
                    🤝
                </div>

                <p class="small-text">
                    About trust...
                </p>

                <h2 class="scene-title">
                    I know sorry isn't enough.
                </h2>

                <p class="scene-description">
                    Trust isn't repaired by saying
                    "sorry" once.
                </p>


                <div class="trust-points">


                    <div class="trust-point">

                        <span>01</span>

                        <p>
                            It's rebuilt through honesty.
                        </p>

                    </div>


                    <div class="trust-point">

                        <span>02</span>

                        <p>
                            It's rebuilt through consistency.
                        </p>

                    </div>


                    <div class="trust-point">

                        <span>03</span>

                        <p>
                            It's rebuilt through actions.
                        </p>

                    </div>


                    <div class="trust-point">

                        <span>04</span>

                        <p>
                            And most importantly,
                            through time.
                        </p>

                    </div>

                </div>


                <p class="soft-message">

                    I don't expect one website
                    to magically fix everything.

                </p>


                <button
                    class="story-button next-scene"
                    data-next="5"
                    type="button">

                    One more thing... ❤️

                </button>

            </div>

        `
    },


    /* ======================================================
       05 — PROMISE
    ====================================================== */

    {
        id: "scene-promise",

        className: "promise-scene",

        content: `

            <div class="story-card glass-card">

                <span class="scene-number">
                    05
                </span>

                <div class="promise-heart">
                    ❤️
                </div>

                <p class="small-text">
                    My promise to you...
                </p>

                <h2 class="scene-title">
                    I don't promise perfection.
                </h2>


                <div class="promise-box">

                    <p>
                        I promise to communicate
                        instead of assuming.
                    </p>

                    <p>
                        I promise to respect
                        the boundaries we set together.
                    </p>

                    <p>
                        I promise to be honest,
                        even when honesty is difficult.
                    </p>

                    <p>
                        And I promise that if
                        trust ever feels shaky again,
                        I'll talk to you instead of
                        letting things become worse.
                    </p>

                </div>


                <button
                    class="story-button next-scene"
                    data-next="6"
                    type="button">

                    Open my heart 💌

                </button>

            </div>

        `
    },


  /* ======================================================
   06 — LETTER
====================================================== */

{
    id: "scene-letter",

    className: "letter-scene",

    content: `

        <div class="story-card glass-card letter-card">

            <span class="scene-number">
                06
            </span>

            <p class="small-text">
                A little letter...
            </p>


            <!-- ==============================
                 OPEN ENVELOPE
            =============================== -->

            <div
                class="envelope"
                id="love-envelope">


                <div class="envelope-back">
                </div>


                <!-- ==========================
                     LETTER PAPER
                =========================== -->

                <div class="letter-paper">

                    <span class="letter-decoration">
                        ♡
                    </span>


                    <p class="letter-title">
                        To my Kartik,
                    </p>


                    <p>
                        I'm sorry that I hurt you and gave you
                        trust issues just to make you realise
                        how I felt. I know that wasn't the right
                        way to handle things, and I'm genuinely
                        sorry for that.
                    </p>


                    <p>
                        I know one apology can't make everything
                        okay in a moment. Trust doesn't work that
                        way. But I want you to know that I'll be
                        more careful from now on — about you,
                        about us, and about the limits we should
                        both remember.
                    </p>


                    <p>
                        Because I know you're with me, and honestly,
                        doing these little things for you never feels
                        like a burden to me. I love taking care of
                        you. I love being there for you.
                    </p>


                    <p>
                        And you are my
                        <strong>Vitamin K</strong>
                        for sure. ❤️
                    </p>


                    <p>
                        Kartik, this is just the beginning of our
                        story. If we really want to go all the way
                        together — and I know we both do — then
                        maybe we need to understand each other a
                        little better, value each other's feelings,
                        and learn from the things that hurt us.
                    </p>


                    <p>
                        The rest... I'm here.
                        And you are here too.
                        That's what matters to me the most.
                    </p>


                    <p>
                        And please, try to control your anger a
                        little too. I'm sensitive, yaar... and I know
                        you are sensitive too.
                    </p>


                    <p>
                        Your harsh behaviour hurts me sometimes
                        more than any punishment ever could.
                        So please understand me too.
                        I don't want us to hurt each other just
                        because we're angry.
                    </p>


                    <p>
                        And don't worry...
                        your cutie can be forgiven too, right? 🥺
                        I've forgiven you so many times,
                        and I know you've forgiven me too.
                        That's what we do for each other.
                    </p>


                    <p>
                        I don't want this little fight to become
                        something bigger than what we have.
                        I just want us to learn from it,
                        understand each other a little more,
                        and love each other a little better.
                    </p>


                    <p>
                        So yes...
                        I'm sorry.
                        I'll be more careful.
                        I'll remember my limits.
                        And I'll always try to protect
                        what we have.
                    </p>


                    <p>
                        And Kartik...
                        <strong>I love you.</strong>
                        More than this little website could
                        ever explain. ❤️
                    </p>


                    


                    <p class="letter-ending">
    Always your cutie,<br>
    ❤️
</p>


<!-- ==============================
     CONTINUE — INSIDE LETTER
============================== -->

<button
    class="story-button next-scene"
    data-next="7"
    id="letter-next"
    type="button">

    Continue ❤️

</button>

</div>


                <!-- Old flap intentionally hidden by CSS -->

                <div class="envelope-flap">
                </div>
                


            </div>


            


        </div>

    `
},

    /* ======================================================
       07 — FUTURE
    ====================================================== */

    {
        id: "scene-future",

        className: "future-scene",

        content: `

            <div class="story-card glass-card">

                <span class="scene-number">
                    07
                </span>

                <div class="sunrise-icon">
                    🌅
                </div>

                <p class="small-text">
                    If we choose to move forward...
                </p>

                <h2 class="scene-title">
                    I want better days with you.
                </h2>


                <div class="future-grid">

                    <div class="future-card">
                        <span>🌻</span>
                        <p>More laughter</p>
                    </div>

                    <div class="future-card">
                        <span>🌙</span>
                        <p>More late-night talks</p>
                    </div>

                    <div class="future-card">
                        <span>✈️</span>
                        <p>More memories</p>
                    </div>

                    <div class="future-card">
                        <span>☕</span>
                        <p>More ordinary days together</p>
                    </div>

                </div>


                <p class="soft-message">

                    Not a perfect future.
                    Just a more honest one.

                </p>


                <button
                    class="story-button next-scene"
                    data-next="8"
                    type="button">

                    One last question...

                </button>

            </div>

        `
    },


    /* ======================================================
       08 — FINAL
    ====================================================== */

    {
        id: "scene-final",

        className: "final-scene",

        content: `

            <div class="story-card glass-card final-card">

                <span class="scene-number">
                    08
                </span>

                <div class="final-heart">
                    ❤️
                </div>

                <p class="small-text">
                    After everything...
                </p>

                <h2 class="final-title">
                    Can we start again?
                </h2>

                <p class="scene-description">

                    No pressure.<br>
                    No forcing you to forgive me.<br>
                    Just an honest question.

                </p>


                <div class="final-actions">

                    <button
                        class="choice-button yes-button"
                        id="yes-button"
                        type="button">

                        ❤️ Yes

                    </button>


                    <button
                        class="choice-button time-button"
                        id="time-button"
                        type="button">

                        🥺 I need time

                    </button>

                </div>


                <div
                    id="final-response"
                    class="final-response">

                </div>

            </div>

        `
    }

];


/* ==========================================================
   BUILD STORY SCENES
========================================================== */

function buildStoryScenes() {

    if (!app) {
        return;
    }


    storyScenes.forEach(
        (sceneData) => {

            const section =
                document.createElement(
                    "section"
                );


            section.id =
                sceneData.id;


            section.className =
                `scene story-scene ${sceneData.className}`;


            section.innerHTML =
                sceneData.content;


            app.appendChild(
                section
            );

        }
    );

}


/* ==========================================================
   INITIALIZE SCENES
========================================================== */

window.addEventListener(
    "load",
    () => {

        buildStoryScenes();

    }
);


/* ==========================================================
   STORY BUTTON NAVIGATION
========================================================== */

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                ".next-scene"
            );


        if (!button) {
            return;
        }


        const targetIndex =
            Number(
                button.dataset.next
            );


        if (
            typeof goToScene ===
            "function"
        ) {

            goToScene(
                targetIndex
            );

        }

    }
);


/* ==========================================================
   LETTER OPENING
========================================================== */

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                "#open-letter-btn"
            );


        if (!button) {
            return;
        }


        const envelope =
            document.getElementById(
                "love-envelope"
            );

        const nextButton =
            document.getElementById(
                "letter-next"
            );


        if (!envelope) {
            return;
        }


        envelope.classList.add(
            "opened"
        );


        button.disabled = true;

        button.style.opacity = ".5";

        button.textContent =
            "Opened with love ❤️";


        setTimeout(
            () => {

                if (nextButton) {

                    nextButton.classList.add(
                        "show-button"
                    );

                }

            },
            1100
        );

    }
);


/* ==========================================================
   FINAL YES BUTTON
========================================================== */

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                "#yes-button"
            );


        if (!button) {
            return;
        }


        const response =
            document.getElementById(
                "final-response"
            );


        if (!response) {
            return;
        }


        response.innerHTML = `

            <div class="response-heart">
                ❤️
            </div>

            <h3>
                Thank you.
            </h3>

            <p>
                I'll spend every day
                proving that your trust
                is safe with me.
            </p>

        `;


        response.classList.add(
            "visible"
        );


        button.disabled = true;


        if (
            typeof celebrateLove ===
            "function"
        ) {

            celebrateLove();

        }

    }
);


/* ==========================================================
   FINAL "I NEED TIME" BUTTON
========================================================== */

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                "#time-button"
            );


        if (!button) {
            return;
        }


        const response =
            document.getElementById(
                "final-response"
            );


        if (!response) {
            return;
        }


        response.innerHTML = `

            <div class="response-heart">
                🥺
            </div>

            <h3>
                That's okay.
            </h3>

            <p>
                Take all the time you need.
                I don't want to pressure you.
                I just wanted you to know
                how much you mean to me.
            </p>

        `;


        response.classList.add(
            "visible"
        );


        button.disabled = true;

    }
);


/* ==========================================================
   ESCAPE KEY
========================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            const envelope =
                document.getElementById(
                    "love-envelope"
                );


            if (envelope) {

                envelope.classList.remove(
                    "opened"
                );

            }

        }

    }
);
