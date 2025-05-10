

var currentAudio = null;
var currentInterval = null;
var isDragging = false;
var currentIndex = 0; // To track the current song index

var songs = [
    { id: 'audioPlayer1', iconId: 'playPauseIcon1', name: 'Smoke-Lish' },
    { id: 'audioPlayer2', iconId: 'playPauseIcon2', name: 'Huevo-Luna' },
    { id: 'audioPlayer3', iconId: 'playPauseIcon3', name: 'Cosmic-Lish' },
    { id: 'audioPlayer4', iconId: 'playPauseIcon4', name: 'Owls-Ambient' },
    { id: 'audioPlayer5', iconId: 'playPauseIcon5', name: 'Moonlight-HJ' },
    { id: 'audioPlayer6', iconId: 'playPauseIcon6', name: 'Waves-Happy' }
];

function togglePlay(playerId, iconId, songName) {
    var audioPlayer = document.getElementById(playerId);
    var playPauseIcon = document.getElementById(iconId);
    var songInfo = document.querySelector('.songinfo');
    var playbarIcon = document.getElementById('playPauseButton');

    if (currentAudio && currentAudio !== audioPlayer) {
        var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
        var currentPlayPauseIcon = document.getElementById(currentIconId);
        currentAudio.pause();
        currentPlayPauseIcon.src = "resume.svg";
        playbarIcon.src = "resume.svg";
        clearInterval(currentInterval);
    }

    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseIcon.src = "pause.svg";
        playbarIcon.src = "pause.svg";
        currentAudio = audioPlayer;
        songInfo.textContent = songName;

        // Update currentIndex based on the playerId
        currentIndex = songs.findIndex(song => song.id === playerId);

        // Check if the audio is muted and update volume icon
        if (audioPlayer.muted) {
            volumeIcon.src = 'mute.svg';
        } else {
            volumeIcon.src = 'volume.svg';
        }

        currentInterval = setInterval(function() {
            if (!isDragging) {
                updateTimeDisplay(audioPlayer);
            }
        }, 1000);
    } else {
        audioPlayer.pause();
        playPauseIcon.src = "resume.svg";
        playbarIcon.src = "resume.svg";
        clearInterval(currentInterval);
    }
}





function updateTimeDisplay(audioPlayer) {
    var songTime = document.querySelector('.songtime');
    var minutes = Math.floor(audioPlayer.currentTime / 60);
    var seconds = Math.floor(audioPlayer.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    songTime.textContent = minutes + ':' + seconds;

    var seekbar = document.querySelector('.seekbar');
    var circle = document.querySelector('.circle');
    var percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    circle.style.left = percentage + '%';
}

function startDrag(event) {
    isDragging = true;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
    updatePosition(event);
}

function drag(event) {
    updatePosition(event);
}

function endDrag(event) {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', endDrag);
    if (currentAudio) {
        var seekbar = document.querySelector('.seekbar');
        var rect = seekbar.getBoundingClientRect();
        var percentage = (event.clientX - rect.left) / seekbar.offsetWidth;
        percentage = Math.min(Math.max(percentage, 0), 1);
        currentAudio.currentTime = percentage * currentAudio.duration;
        updateTimeDisplay(currentAudio);
    }
}

function updatePosition(event) {
    var seekbar = document.querySelector('.seekbar');
    var circle = document.querySelector('.circle');
    var rect = seekbar.getBoundingClientRect();
    var percentage = (event.clientX - rect.left) / seekbar.offsetWidth;
    percentage = Math.min(Math.max(percentage, 0), 1);
    circle.style.left = (percentage * 100) + '%';
}

document.getElementById('playPauseButton').onclick = function() {
    if (currentAudio) {
        var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
        var songName = songs[currentIndex].name;
        togglePlay(currentAudio.id, currentIconId, songName);
    } else {
        playSongAtCurrentIndex();
    }
};

document.getElementById('nextButton').onclick = function() {
    if (currentIndex < songs.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first song
    }
    playSongAtCurrentIndex();
};

document.getElementById('previousButton').onclick = function() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = songs.length - 1; // Loop back to the last song
    }
    playSongAtCurrentIndex();
};



function playSongAtCurrentIndex() {
    var song = songs[currentIndex];
    togglePlay(song.id, song.iconId, song.name);

    // Check if the new song is muted and update volume icon
    if (currentAudio && currentAudio.muted) {
        volumeIcon.src = 'mute.svg';
    } else {
        volumeIcon.src = 'volume.svg';
    }
}



//Add an event listener for hamburger

document.querySelector(".hamburger").addEventListener("click", ()=>{
    document.querySelector(".left").style.left="0"
})

//Add an event listener for close button

document.querySelector(".close").addEventListener("click", ()=>{
    document.querySelector(".left").style.left="-100%"
})


// Mute Unmute 
// document.addEventListener('DOMContentLoaded', (event) => {
//     const volumeIcon = document.getElementById('volumeIcon');

//     // Function to toggle the mute icon
//     window.toggleMute = () => {
//         if (volumeIcon.src.includes('volume.svg')) {
//             volumeIcon.src = 'mute.svg';
//         } else {
//             volumeIcon.src = 'volume.svg';
//         }
//     };
// });



window.toggleMute = () => {
    if (currentAudio) {
        if (currentAudio.muted) {
            currentAudio.muted = false; // Unmute
            volumeIcon.src = 'volume.svg'; // Change icon to volume
        } else {
            currentAudio.muted = true; // Mute
            volumeIcon.src = 'mute.svg'; // Change icon to mute
        }
    }
};










