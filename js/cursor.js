/* ==========================================================
   BEFORE YOU LEAVE ❤️
   cursor.js
========================================================== */

"use strict";

/* ----------------------------------------------------------
   Elements
---------------------------------------------------------- */

const cursorContainer = document.getElementById("cursor-container");

/* ----------------------------------------------------------
   Config
---------------------------------------------------------- */

const HEARTS = [
    "❤",
    "💖",
    "💕",
    "💗",
    "💓",
    "💘"
];

const COLORS = [
    "#ff4d8d",
    "#ff80ab",
    "#ff99c8",
    "#ffd1dc",
    "#ffffff"
];

/* ----------------------------------------------------------
   Mouse Move
---------------------------------------------------------- */

document.addEventListener("mousemove", (e) => {

    createTrailHeart(
        e.clientX,
        e.clientY
    );

});

/* ----------------------------------------------------------
   Mouse Click
---------------------------------------------------------- */

document.addEventListener("click", (e) => {

    createBurst(
        e.clientX,
        e.clientY
    );

});

/* ----------------------------------------------------------
   Floating Heart
---------------------------------------------------------- */

function createTrailHeart(x, y){

    const heart = document.createElement("span");

    heart.className = "trail-heart";

    heart.innerHTML =
        HEARTS[Math.floor(Math.random()*HEARTS.length)];

    heart.style.left = x + "px";

    heart.style.top = y + "px";

    heart.style.color =
        COLORS[Math.floor(Math.random()*COLORS.length)];

    heart.style.fontSize =
        (12 + Math.random()*12) + "px";

    heart.style.position = "fixed";

    heart.style.pointerEvents = "none";

    heart.style.userSelect = "none";

    heart.style.zIndex = "9999";

    heart.style.transition =
        "all 1.2s ease-out";

    cursorContainer.appendChild(heart);

    requestAnimationFrame(()=>{

        const dx =
            (Math.random()*60)-30;

        const dy =
            -70 - Math.random()*60;

        heart.style.transform =
            `translate(${dx}px,${dy}px)
             scale(${1.2+Math.random()})`;

        heart.style.opacity = "0";

    });

    setTimeout(()=>{

        heart.remove();

    },1200);

}

/* ----------------------------------------------------------
   Click Burst
---------------------------------------------------------- */

function createBurst(x,y){

    for(let i=0;i<18;i++){

        const heart =
            document.createElement("span");

        heart.className = "burst-heart";

        heart.innerHTML =
            HEARTS[Math.floor(Math.random()*HEARTS.length)];

        heart.style.position="fixed";

        heart.style.left=x+"px";

        heart.style.top=y+"px";

        heart.style.pointerEvents="none";

        heart.style.userSelect="none";

        heart.style.fontSize=
            (16+Math.random()*14)+"px";

        heart.style.color=
            COLORS[Math.floor(Math.random()*COLORS.length)];

        heart.style.zIndex="9999";

        cursorContainer.appendChild(heart);

        const angle =
            (360/18)*i;

        const distance =
            60 + Math.random()*90;

        const rad =
            angle*Math.PI/180;

        const moveX =
            Math.cos(rad)*distance;

        const moveY =
            Math.sin(rad)*distance;

        requestAnimationFrame(()=>{

            heart.style.transition =
                "all 1s ease-out";

            heart.style.transform =
                `translate(${moveX}px,${moveY}px)
                 scale(1.6)
                 rotate(${angle}deg)`;

            heart.style.opacity="0";

        });

        setTimeout(()=>{

            heart.remove();

        },1000);

    }

}

/* ----------------------------------------------------------
   Secret Keyboard ❤️
---------------------------------------------------------- */

document.addEventListener("keydown",(e)=>{

    if(e.key.toLowerCase()==="h"){

        rainHearts();

    }

});

/* ----------------------------------------------------------
   Heart Rain
---------------------------------------------------------- */

function rainHearts(){

    for(let i=0;i<50;i++){

        setTimeout(()=>{

            const heart =
                document.createElement("span");

            heart.innerHTML="💖";

            heart.style.position="fixed";

            heart.style.left=
                Math.random()*window.innerWidth+"px";

            heart.style.top="-30px";

            heart.style.fontSize=
                (18+Math.random()*18)+"px";

            heart.style.pointerEvents="none";

            heart.style.zIndex="9999";

            heart.style.transition=
                "transform 4s linear, opacity 4s linear";

            cursorContainer.appendChild(heart);

            requestAnimationFrame(()=>{

                heart.style.transform=
                    `translateY(${window.innerHeight+100}px)
                     rotate(${720*Math.random()}deg)`;

                heart.style.opacity="0";

            });

            setTimeout(()=>{

                heart.remove();

            },4000);

        },i*80);

    }

}

/* ----------------------------------------------------------
   Window Resize
---------------------------------------------------------- */

window.addEventListener("resize",()=>{

    cursorContainer.innerHTML="";

});