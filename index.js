const soundMap = {
    w: "tom-1",
    a: "tom-2",
    s: "tom-3",
    d: "tom-4",
    j: "snare",
    k: "crash",
    l: "kick-bass"
};

// Pre-load all audio files
const sounds = {};
for (const [key, file] of Object.entries(soundMap)) {
    sounds[key] = new Audio("./sounds/" + file + ".mp3");
}

// Play pre-loaded sound effect
function playSound(key) {
    const audio = sounds[key];

    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

// Add button animation when pressed on
function buttonAnimation(key) {
    const activeButton = document.querySelector("." + key);

    if (!activeButton) {
        return;
    }

    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 100);
}

// Detect button press
document.querySelectorAll(".drum").forEach(drum => {
    const key = drum.innerText.toLowerCase();

    drum.addEventListener("click", () => {
        if (soundMap[key]) {
            playSound(key);
            buttonAnimation(key);
        }
    });
});

// Detect keyboard press
document.addEventListener("keydown", (keyboard) => {
    const key = keyboard.key.toLowerCase();

    if (soundMap[key]) {
        playSound(key);
        buttonAnimation(key);
    }
});