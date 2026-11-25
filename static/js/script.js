
// =====================================
// BIRTHDAY WEBSITE - KHANIN
// =====================================


// FLOATING HEARTS

const heartsContainer = document.getElementById("hearts");

const heartSymbols = ["♡", "♥", "💕", "💗"];

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 12000);

}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

    setInterval(createHeart, 500);

}


// SURPRISE BUTTON

const surpriseButton = document.getElementById("surpriseButton");

const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", function() {

    surpriseMessage.classList.toggle("active");

    surpriseButton.textContent =
        surpriseMessage.classList.contains("active")
        ? "Close Surprise ♡"
        : "Open Your Surprise 💌";

});


// LIGHTBOX FOTO

function openLightbox(imageSource) {

    const lightbox = document.getElementById("lightbox");

    document.getElementById("lightbox-image").src = imageSource;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeLightbox() {

    document.getElementById("lightbox").classList.remove("active");

    document.body.style.overflow = "";

}


// ESCAPE KEY

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeLightbox();

    }

});

/* ==================================================
   19. DIGITAL LETTER INTERACTION
================================================== */

const envelopeWrapper = document.getElementById("envelopeWrapper");

const letterButton = document.getElementById("letterButton");

let letterIsOpen = false;

letterButton.addEventListener("click", function() {

    letterIsOpen = !letterIsOpen;

    if (letterIsOpen) {

        envelopeWrapper.classList.add("open");

        letterButton.textContent = "Close Your Letter ♡";

    } else {

        envelopeWrapper.classList.remove("open");

        letterButton.textContent = "Open Your Letter 💌";

    }

});

/* ==================================================
   20. BACKGROUND MUSIC
================================================== */

const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async function () {

    if (backgroundMusic.paused) {

        try {
            await backgroundMusic.play();
            musicButton.textContent = "♫ Pause Music";
        } catch (error) {
            musicButton.textContent = "Music unavailable";
            console.error("Musik gagal diputar:", error);
        }

    } else {

        backgroundMusic.pause();
        musicButton.textContent = "♫ Play Music";

    }

});

backgroundMusic.addEventListener("ended", function () {
    musicButton.textContent = "♫ Play Music";
});
