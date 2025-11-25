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
    const activeButton = $("." + key);

    if (!activeButton.length) return;

    activeButton.addClass("pressed");
    setTimeout(() => activeButton.removeClass("pressed"), 100);
}

// Detect button press
$(".drum").each(function() {
    const drum = $(this);

    const key = drum.text().toLowerCase();

    drum.on("click", () => {
        if (soundMap[key]) {
            playSound(key);
            buttonAnimation(key);
        }
    });
});

// Detect keyboard press
$(document).on("keydown", (keyboard) => {
    const key = keyboard.key.toLowerCase();

    if (soundMap[key]) {
        playSound(key);
        buttonAnimation(key);
    }
});