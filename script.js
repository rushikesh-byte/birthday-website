// ===============================
// Birthday Intro Script
// ===============================

// Get Elements
const message = document.getElementById("message");
const buttons = document.getElementById("buttons");

// ===============================
// Floating Bubbles
// ===============================

for (let i = 0; i < 28; i++) {

    const bubble = document.createElement("div");

    bubble.className = "bubble";

    const size = Math.random() * 50 + 10;

    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    bubble.style.left = Math.random() * 100 + "vw";

    bubble.style.animationDuration = (10 + Math.random() * 18) + "s";
    bubble.style.animationDelay = (-Math.random() * 20) + "s";

    document.body.appendChild(bubble);
}

// ===============================
// Text Animation
// ===============================

// After 3 seconds
setTimeout(() => {

    message.style.opacity = "0";

    setTimeout(() => {

        message.textContent = "I made a little surprise just for you.";
        message.style.opacity = "1";

    }, 500);

}, 3000);


// After another 3 seconds
setTimeout(() => {

    message.style.opacity = "0";

    setTimeout(() => {

        message.textContent = "Ready to open it?";
        message.style.opacity = "1";

        buttons.classList.add("show");

    }, 500);

}, 6000);


// ===============================
// Open Next Page
// ===============================

function openSurprise() {

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "surprise.html";

    }, 500);

}

