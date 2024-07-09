document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const sources = audio.getElementsByTagName('source');
    let currentSongIndex = 0;

    function loadSong(index) {
        if (index >= 0 && index < sources.length) {
            audio.src = sources[index].src;
            audio.load();
            audio.play();
        }
    }

    playButton.addEventListener('click', () => {
        audio.play();
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
    });

    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + sources.length) % sources.length;
        loadSong(currentSongIndex);
    });

    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % sources.length;
        loadSong(currentSongIndex);
    });

    audio.addEventListener('play', () => {
        playButton.disabled = true;
        pauseButton.disabled = false;
    });

    audio.addEventListener('pause', () => {
        playButton.disabled = false;
        pauseButton.disabled = true;
    });

    // Initialize the button states and load the first song
    playButton.disabled = false;
    pauseButton.disabled = true;
    loadSong(currentSongIndex);
});
