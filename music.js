const music = document.getElementById("bgMusic");

// Restore music position
const savedTime = localStorage.getItem("musicTime");

if (savedTime) {
    music.currentTime = parseFloat(savedTime);
}

// Play music
music.play().catch(() => {});

// Save position every second
setInterval(() => {
    localStorage.setItem("musicTime", music.currentTime);
}, 1000);