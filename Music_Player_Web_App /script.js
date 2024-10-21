// script.js
const audio = document.getElementById("audio");
const trackTitle = document.getElementById("track-title");
const trackImage = document.getElementById("track-image");

const tracks = [
    {
        title: "Track 1",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        image: "https://via.placeholder.com/300x300?text=Track+1",
    },
    {
        title: "Track 2",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        image: "https://via.placeholder.com/300x300?text=Track+2",
    },
    {
        title: "Track 3",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        image: "https://via.placeholder.com/300x300?text=Track+3",
    },
    {
        title: "Track 4",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        image: "https://via.placeholder.com/300x300?text=Track+4",
    },
    {
        title: "Track 5",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        image: "https://via.placeholder.com/300x300?text=Track+5",
    },
    {
        title: "Track 6",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        image: "https://via.placeholder.com/300x300?text=Track+6",
    },
    {
        title: "Track 7",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        image: "https://via.placeholder.com/300x300?text=Track+7",
    },
    {
        title: "Track 8",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        image: "https://via.placeholder.com/300x300?text=Track+8",
    },
    {
        title: "Track 9",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        image: "https://via.placeholder.com/300x300?text=Track+9",
    },
    {
        title: "Track 10",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        image: "https://via.placeholder.com/300x300?text=Track+10",
    },
];

let currentTrackIndex = 0;

// Load the first track
loadTrack(currentTrackIndex);

// Functions to load and play tracks
function loadTrack(index) {
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
    trackImage.src = tracks[index].image;  // Set the track image
}

document.getElementById("play").addEventListener("click", () => {
    audio.play();
});

document.getElementById("pause").addEventListener("click", () => {
    audio.pause();
});

document.getElementById("prev").addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
});

document.getElementById("next").addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
});

// Volume control
const volumeControl = document.getElementById("volume");
volumeControl.addEventListener("input", (e) => {
    audio.volume = e.target.value;
});
