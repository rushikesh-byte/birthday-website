// ===============================
// Create Stars
// ===============================

const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 2 + "s";

    stars.appendChild(star);
}


// ===============================
// Turn On Lights
// ===============================

function turnOnLights() {

    const lightBtn = document.getElementById("lightBtn");
    const moodBtn = document.getElementById("moodBtn");
    const lightString = document.getElementById("lightString");
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");

    // Disable button
    lightBtn.disabled = true;

    // Background changes
    document.body.classList.add("lights-on");

    // Show hanging lights
    lightString.classList.add("on");

    // Hide first button
    lightBtn.style.display = "none";

    // Change text
    title.textContent = "✨ Beautiful! ✨";
    subtitle.textContent = "Everything is shining now.";

    // Show next button
    setTimeout(() => {

        moodBtn.classList.add("show");

    }, 1000);

}


// ===============================
// Go To Mood Page
// ===============================

function startMusic(){

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="music.html";

    },600);

}