


// async function main(){
//     let songs = await getSongs()
//     console.log(songs)

//     //Play the first song
//     var audio = new Audio(songs[0]);
//     audio.play();
// }

// main()

// Get the audio element


// Play the audio
// function playAudio() {
//     audioPlayer.play();
    
// }

// Pause the audio
// function pauseAudio() {
//     audioPlayer.pause();
// }

// Stop the audio
// function stopAudio() {
//     audioPlayer.pause();
//     audioPlayer.currentTime = 0;
// }




// function playAudio() {
//     if (audioPlayer.paused) {
//         audioPlayer.play();
//     } else {
//         audioPlayer.pause();
//     }
// }


// var audioPlayer = document.getElementById('audioPlayer');
// function playAudio(id) {
//     var audioPlayer = document.getElementById(id);
//     if (audioPlayer.paused) {
//         audioPlayer.play();
//     } else {
//         audioPlayer.pause();
//     }
// }


// function togglePlay(playerId, iconId) {
//     var audioPlayer = document.getElementById(playerId);
//     var playPauseIcon = document.getElementById(iconId);

//     if (audioPlayer.paused) {
//         audioPlayer.play();
//         playPauseIcon.src = "pause.svg"; // Change to pause icon
//     } else {
//         audioPlayer.pause();
//         playPauseIcon.src = "resume.svg"; // Change to resume icon
//     }
// }

// var currentAudio = null;

// function togglePlay(playerId, iconId) {
//     var audioPlayer = document.getElementById(playerId);
//     var playPauseIcon = document.getElementById(iconId);

//     if (currentAudio && currentAudio !== audioPlayer) {
//         // Pause the currently playing audio
//         var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
//         var currentPlayPauseIcon = document.getElementById(currentIconId);
//         currentAudio.pause();
//         currentPlayPauseIcon.src = "resume.svg"; // Change to resume icon
//     }

//     if (audioPlayer.paused) {
//         // Play the selected audio
//         audioPlayer.play();
//         playPauseIcon.src = "pause.svg"; // Change to pause icon
//         currentAudio = audioPlayer;
//     } else {
//         // Pause the selected audio
//         audioPlayer.pause();
//         playPauseIcon.src = "resume.svg"; // Change to resume icon
//         currentAudio = null;
//     }
// }



//Perfectly working:-

// var currentAudio = null;
// var currentInterval = null;

// function togglePlay(playerId, iconId, songName) {
//     var audioPlayer = document.getElementById(playerId);
//     var playPauseIcon = document.getElementById(iconId);
//     var songInfo = document.querySelector('.songinfo');
//     var songTime = document.querySelector('.songtime');

//     if (currentAudio && currentAudio !== audioPlayer) {
//         // Pause the currently playing audio
//         var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
//         var currentPlayPauseIcon = document.getElementById(currentIconId);
//         currentAudio.pause();
//         currentPlayPauseIcon.src = "resume.svg"; // Change to resume icon
//         clearInterval(currentInterval);
//     }

//     if (audioPlayer.paused) {
//         // Play the selected audio
//         audioPlayer.play();
//         playPauseIcon.src = "pause.svg"; // Change to pause icon
//         currentAudio = audioPlayer;
//         songInfo.textContent = songName;

//         // Update the song time every second
//         currentInterval = setInterval(function() {
//             var minutes = Math.floor(audioPlayer.currentTime / 60);
//             var seconds = Math.floor(audioPlayer.currentTime % 60);
//             if (seconds < 10) {
//                 seconds = '0' + seconds;
//             }
//             songTime.textContent = minutes + ':' + seconds;
//         }, 1000);
//     } else {
//         // Pause the selected audio
//         audioPlayer.pause();
//         playPauseIcon.src = "resume.svg"; // Change to resume icon
//         currentAudio = null;
//         clearInterval(currentInterval);
//     }
// }



// var currentAudio = null;
// var currentInterval = null;
// var isDragging = false;

// function togglePlay(playerId, iconId, songName) {
//     var audioPlayer = document.getElementById(playerId);
//     var playPauseIcon = document.getElementById(iconId);
//     var songInfo = document.querySelector('.songinfo');
//     var songTime = document.querySelector('.songtime');

//     if (currentAudio && currentAudio !== audioPlayer) {
//         // Pause the currently playing audio
//         var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
//         var currentPlayPauseIcon = document.getElementById(currentIconId);
//         currentAudio.pause();
//         currentPlayPauseIcon.src = "resume.svg"; // Change to resume icon
//         clearInterval(currentInterval);
//     }

//     if (audioPlayer.paused) {
//         // Play the selected audio
//         audioPlayer.play();
//         playPauseIcon.src = "pause.svg"; // Change to pause icon
//         currentAudio = audioPlayer;
//         songInfo.textContent = songName;

//         // Update the song time every second
//         currentInterval = setInterval(function() {
//             if (!isDragging) {
//                 updateTimeDisplay(audioPlayer);
//             }
//         }, 1000);
//     } else {
//         // Pause the selected audio
//         audioPlayer.pause();
//         playPauseIcon.src = "resume.svg"; // Change to resume icon
//         currentAudio = null;
//         clearInterval(currentInterval);
//     }
// }

// function updateTimeDisplay(audioPlayer) {
//     var songTime = document.querySelector('.songtime');
//     var minutes = Math.floor(audioPlayer.currentTime / 60);
//     var seconds = Math.floor(audioPlayer.currentTime % 60);
//     if (seconds < 10) {
//         seconds = '0' + seconds;
//     }
//     songTime.textContent = minutes + ':' + seconds;

//     // Update seekbar
//     var seekbar = document.querySelector('.seekbar');
//     var circle = document.querySelector('.circle');
//     var percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
//     circle.style.left = percentage + '%';
// }

// function startDrag(event) {
//     isDragging = true;
//     document.addEventListener('mousemove', drag);
//     document.addEventListener('mouseup', endDrag);
//     updatePosition(event);
// }

// function drag(event) {
//     updatePosition(event);
// }

// function endDrag(event) {
//     isDragging = false;
//     document.removeEventListener('mousemove', drag);
//     document.removeEventListener('mouseup', endDrag);
//     if (currentAudio) {
//         var seekbar = document.querySelector('.seekbar');
//         var rect = seekbar.getBoundingClientRect();
//         var percentage = (event.clientX - rect.left) / seekbar.offsetWidth;
//         currentAudio.currentTime = percentage * currentAudio.duration;
//         updateTimeDisplay(currentAudio);
//     }
// }

// function updatePosition(event) {
//     var seekbar = document.querySelector('.seekbar');
//     var circle = document.querySelector('.circle');
//     var rect = seekbar.getBoundingClientRect();
//     var percentage = (event.clientX - rect.left) / seekbar.offsetWidth;
//     if (percentage < 0) percentage = 0;
//     if (percentage > 100) percentage = 100;
//     circle.style.left = percentage * 100 + '%';
// }


//Last One Working at 13:46
// var currentAudio = null;
// var currentInterval = null;
// var isDragging = false;

// function togglePlay(playerId, iconId, songName) {
//     var audioPlayer = document.getElementById(playerId);
//     var playPauseIcon = document.getElementById(iconId);
//     var songInfo = document.querySelector('.songinfo');
//     var songTime = document.querySelector('.songtime');

//     if (currentAudio && currentAudio !== audioPlayer) {
//         // Pause the currently playing audio
//         var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
//         var currentPlayPauseIcon = document.getElementById(currentIconId);
//         currentAudio.pause();
//         currentPlayPauseIcon.src = "resume.svg"; // Change to resume icon
//         clearInterval(currentInterval);
//     }

//     if (audioPlayer.paused) {
//         // Play the selected audio
//         audioPlayer.play();
//         playPauseIcon.src = "pause.svg"; // Change to pause icon
//         currentAudio = audioPlayer;
//         songInfo.textContent = songName;

//         // Update the song time every second
//         currentInterval = setInterval(function() {
//             if (!isDragging) {
//                 updateTimeDisplay(audioPlayer);
//             }
//         }, 1000);
//     } else {
//         // Pause the selected audio
//         audioPlayer.pause();
//         playPauseIcon.src = "resume.svg"; // Change to resume icon
//         currentAudio = null;
//         clearInterval(currentInterval);
//     }
// }

// function updateTimeDisplay(audioPlayer) {
//     var songTime = document.querySelector('.songtime');
//     var minutes = Math.floor(audioPlayer.currentTime / 60);
//     var seconds = Math.floor(audioPlayer.currentTime % 60);
//     if (seconds < 10) {
//         seconds = '0' + seconds;
//     }
//     songTime.textContent = minutes + ':' + seconds;

//     // Update seekbar
//     var seekbar = document.querySelector('.seekbar');
//     var circle = document.querySelector('.circle');
//     var percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
//     circle.style.left = percentage + '%';
// }

// function startDrag(event) {
//     isDragging = true;
//     document.addEventListener('mousemove', drag);
//     document.addEventListener('mouseup', endDrag);
//     updatePosition(event);
// }

// function drag(event) {
//     updatePosition(event);
// }

// function endDrag(event) {
//     isDragging = false;
//     document.removeEventListener('mousemove', drag);
//     document.removeEventListener('mouseup', endDrag);
//     if (currentAudio) {
//         var seekbar = document.querySelector('.seekbar');
//         var rect = seekbar.getBoundingClientRect();
//         var percentage = (event.clientX - rect.left) / seekbar.offsetWidth;
//         percentage = Math.min(Math.max(percentage, 0), 1); // Clamp percentage between 0 and 1
//         currentAudio.currentTime = percentage * currentAudio.duration;
//         updateTimeDisplay(currentAudio);
//     }
// }

// function updatePosition(event) {
//     var seekbar = document.querySelector('.seekbar');
//     var circle = document.querySelector('.circle');
//     var rect = seekbar.getBoundingClientRect();
//     var percentage = (event.clientX - rect.left) / seekbar.offsetWidth;
//     percentage = Math.min(Math.max(percentage, 0), 1); // Clamp percentage between 0 and 1
//     circle.style.left = (percentage * 100) + '%';
// }


//Working code at 13:51
// var currentAudio = null;
// var currentInterval = null;
// var isDragging = false;
// var currentIndex = 0; // To track the current song index

// var songs = [
//     { id: 'audioPlayer1', iconId: 'playPauseIcon1', name: 'Smoke-Lish' },
//     { id: 'audioPlayer2', iconId: 'playPauseIcon2', name: 'Huevo-Luna' },
//     { id: 'audioPlayer3', iconId: 'playPauseIcon3', name: 'Cosmic-Lish' },
//     { id: 'audioPlayer4', iconId: 'playPauseIcon4', name: 'Owls-Ambient' },
//     { id: 'audioPlayer5', iconId: 'playPauseIcon5', name: 'Moonlight-HJ' },
//     { id: 'audioPlayer6', iconId: 'playPauseIcon6', name: 'Waves-Happy' }
// ];

// function togglePlay(playerId, iconId, songName) {
//     var audioPlayer = document.getElementById(playerId);
//     var playPauseIcon = document.getElementById(iconId);
//     var songInfo = document.querySelector('.songinfo');
//     var songTime = document.querySelector('.songtime');

//     if (currentAudio && currentAudio !== audioPlayer) {
//         var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
//         var currentPlayPauseIcon = document.getElementById(currentIconId);
//         currentAudio.pause();
//         currentPlayPauseIcon.src = "resume.svg";
//         clearInterval(currentInterval);
//     }

//     if (audioPlayer.paused) {
//         audioPlayer.play();
//         playPauseIcon.src = "pause.svg";
//         currentAudio = audioPlayer;
//         songInfo.textContent = songName;

//         currentInterval = setInterval(function() {
//             if (!isDragging) {
//                 updateTimeDisplay(audioPlayer);
//             }
//         }, 1000);
//     } else {
//         audioPlayer.pause();
//         playPauseIcon.src = "resume.svg";
//         currentAudio = null;
//         clearInterval(currentInterval);
//     }
// }

// function updateTimeDisplay(audioPlayer) {
//     var songTime = document.querySelector('.songtime');
//     var minutes = Math.floor(audioPlayer.currentTime / 60);
//     var seconds = Math.floor(audioPlayer.currentTime % 60);
//     if (seconds < 10) {
//         seconds = '0' + seconds;
//     }
//     songTime.textContent = minutes + ':' + seconds;

//     var seekbar = document.querySelector('.seekbar');
//     var circle = document.querySelector('.circle');
//     var percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
//     circle.style.left = percentage + '%';
// }

// function startDrag(event) {
//     isDragging = true;
//     document.addEventListener('mousemove', drag);
//     document.addEventListener('mouseup', endDrag);
//     updatePosition(event);
// }

// function drag(event) {
//     updatePosition(event);
// }

// function endDrag(event) {
//     isDragging = false;
//     document.removeEventListener('mousemove', drag);
//     document.removeEventListener('mouseup', endDrag);
//     if (currentAudio) {
//         var seekbar = document.querySelector('.seekbar');
//         var rect = seekbar.getBoundingClientRect();
//         var percentage = (event.clientX - rect.left) / seekbar.offsetWidth;
//         percentage = Math.min(Math.max(percentage, 0), 1);
//         currentAudio.currentTime = percentage * currentAudio.duration;
//         updateTimeDisplay(currentAudio);
//     }
// }

// function updatePosition(event) {
//     var seekbar = document.querySelector('.seekbar');
//     var circle = document.querySelector('.circle');
//     var rect = seekbar.getBoundingClientRect();
//     var percentage = (event.clientX - rect.left) / seekbar.offsetWidth;
//     percentage = Math.min(Math.max(percentage, 0), 1);
//     circle.style.left = (percentage * 100) + '%';
// }

// document.querySelector('.playbar img[src="resume.svg"]').onclick = function() {
//     if (currentAudio) {
//         var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
//         var songName = songs[currentIndex].name;
//         togglePlay(currentAudio.id, currentIconId, songName);
//     }
// };

// document.querySelector('.playbar img[src="next.svg"]').onclick = function() {
//     if (currentIndex < songs.length - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0; // Loop back to the first song
//     }
//     playSongAtCurrentIndex();
// };

// document.querySelector('.playbar img[src="previous.svg"]').onclick = function() {
//     if (currentIndex > 0) {
//         currentIndex--;
//     } else {
//         currentIndex = songs.length - 1; // Loop back to the last song
//     }
//     playSongAtCurrentIndex();
// };

// function playSongAtCurrentIndex() {
//     var song = songs[currentIndex];
//     togglePlay(song.id, song.iconId, song.name);
// }


//Working at 13:54
// var currentAudio = null;
// var currentInterval = null;
// var isDragging = false;
// var currentIndex = 0;

// var songs = [
//     { id: 'audioPlayer1', iconId: 'playPauseIcon1', name: 'Smoke-Lish' },
//     { id: 'audioPlayer2', iconId: 'playPauseIcon2', name: 'Huevo-Luna' },
//     { id: 'audioPlayer3', iconId: 'playPauseIcon3', name: 'Cosmic-Lish' },
//     { id: 'audioPlayer4', iconId: 'playPauseIcon4', name: 'Owls-Ambient' },
//     { id: 'audioPlayer5', iconId: 'playPauseIcon5', name: 'Moonlight-HJ' },
//     { id: 'audioPlayer6', iconId: 'playPauseIcon6', name: 'Waves-Happy' }
// ];

// function togglePlay(playerId, iconId, songName) {
//     var audioPlayer = document.getElementById(playerId);
//     var playPauseIcon = document.getElementById(iconId);
//     var playbarIcon = document.querySelector('.playbar img[src="resume.svg"]');
//     var songInfo = document.querySelector('.songinfo');
//     var songTime = document.querySelector('.songtime');

//     if (currentAudio && currentAudio !== audioPlayer) {
//         var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
//         var currentPlayPauseIcon = document.getElementById(currentIconId);
//         currentAudio.pause();
//         currentPlayPauseIcon.src = "resume.svg";
//         playbarIcon.src = "resume.svg";
//         clearInterval(currentInterval);
//     }

//     if (audioPlayer.paused) {
//         audioPlayer.play();
//         playPauseIcon.src = "pause.svg";
//         playbarIcon.src = "pause.svg";
//         currentAudio = audioPlayer;
//         songInfo.textContent = songName;

//         currentInterval = setInterval(function() {
//             if (!isDragging) {
//                 updateTimeDisplay(audioPlayer);
//             }
//         }, 1000);
//     } else {
//         audioPlayer.pause();
//         playPauseIcon.src = "resume.svg";
//         playbarIcon.src = "resume.svg";
//         currentAudio = null;
//         clearInterval(currentInterval);
//     }
// }

// function updateTimeDisplay(audioPlayer) {
//     var songTime = document.querySelector('.songtime');
//     var minutes = Math.floor(audioPlayer.currentTime / 60);
//     var seconds = Math.floor(audioPlayer.currentTime % 60);
//     if (seconds < 10) {
//         seconds = '0' + seconds;
//     }
//     songTime.textContent = minutes + ':' + seconds;

//     var seekbar = document.querySelector('.seekbar');
//     var circle = document.querySelector('.circle');
//     var percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
//     circle.style.left = percentage + '%';
// }

// function startDrag(event) {
//     isDragging = true;
//     document.addEventListener('mousemove', drag);
//     document.addEventListener('mouseup', endDrag);
//     updatePosition(event);
// }

// function drag(event) {
//     updatePosition(event);
// }

// function endDrag(event) {
//     isDragging = false;
//     document.removeEventListener('mousemove', drag);
//     document.removeEventListener('mouseup', endDrag);
//     if (currentAudio) {
//         var seekbar = document.querySelector('.seekbar');
//         var rect = seekbar.getBoundingClientRect();
//         var percentage = (event.clientX - rect.left) / seekbar.offsetWidth;
//         percentage = Math.min(Math.max(percentage, 0), 1);
//         currentAudio.currentTime = percentage * currentAudio.duration;
//         updateTimeDisplay(currentAudio);
//     }
// }

// function updatePosition(event) {
//     var seekbar = document.querySelector('.seekbar');
//     var circle = document.querySelector('.circle');
//     var rect = seekbar.getBoundingClientRect();
//     var percentage = (event.clientX - rect.left) / seekbar.offsetWidth;
//     percentage = Math.min(Math.max(percentage, 0), 1);
//     circle.style.left = (percentage * 100) + '%';
// }

// document.querySelector('.playbar img[src="resume.svg"]').onclick = function() {
//     if (currentAudio) {
//         var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
//         var songName = songs[currentIndex].name;
//         togglePlay(currentAudio.id, currentIconId, songName);
//     } else {
//         playSongAtCurrentIndex();
//     }
// };

// document.querySelector('.playbar img[src="next.svg"]').onclick = function() {
//     if (currentIndex < songs.length - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     playSongAtCurrentIndex();
// };

// document.querySelector('.playbar img[src="previous.svg"]').onclick = function() {
//     if (currentIndex > 0) {
//         currentIndex--;
//     } else {
//         currentIndex = songs.length - 1;
//     }
//     playSongAtCurrentIndex();
// };

// function playSongAtCurrentIndex() {
//     var song = songs[currentIndex];
//     togglePlay(song.id, song.iconId, song.name);
// }


//Working at 14:01
// var currentAudio = null;
// var currentInterval = null;
// var isDragging = false;
// var currentIndex = 0; // To track the current song index

// var songs = [
//     { id: 'audioPlayer1', iconId: 'playPauseIcon1', name: 'Smoke-Lish' },
//     { id: 'audioPlayer2', iconId: 'playPauseIcon2', name: 'Huevo-Luna' },
//     { id: 'audioPlayer3', iconId: 'playPauseIcon3', name: 'Cosmic-Lish' },
//     { id: 'audioPlayer4', iconId: 'playPauseIcon4', name: 'Owls-Ambient' },
//     { id: 'audioPlayer5', iconId: 'playPauseIcon5', name: 'Moonlight-HJ' },
//     { id: 'audioPlayer6', iconId: 'playPauseIcon6', name: 'Waves-Happy' }
// ];

// function togglePlay(playerId, iconId, songName) {
//     var audioPlayer = document.getElementById(playerId);
//     var playPauseIcon = document.getElementById(iconId);
//     var songInfo = document.querySelector('.songinfo');
//     var songTime = document.querySelector('.songtime');
//     var playbarIcon = document.querySelector('.playbar img[src="resume.svg"], .playbar img[src="pause.svg"]');

//     if (currentAudio && currentAudio !== audioPlayer) {
//         var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
//         var currentPlayPauseIcon = document.getElementById(currentIconId);
//         currentAudio.pause();
//         currentPlayPauseIcon.src = "resume.svg";
//         playbarIcon.src = "resume.svg";
//         clearInterval(currentInterval);
//     }

//     if (audioPlayer.paused) {
//         audioPlayer.play();
//         playPauseIcon.src = "pause.svg";
//         playbarIcon.src = "pause.svg";
//         currentAudio = audioPlayer;
//         songInfo.textContent = songName;

//         currentInterval = setInterval(function() {
//             if (!isDragging) {
//                 updateTimeDisplay(audioPlayer);
//             }
//         }, 1000);
//     } else {
//         audioPlayer.pause();
//         playPauseIcon.src = "resume.svg";
//         playbarIcon.src = "resume.svg";
//         currentAudio = null;
//         clearInterval(currentInterval);
//     }
// }

// function updateTimeDisplay(audioPlayer) {
//     var songTime = document.querySelector('.songtime');
//     var minutes = Math.floor(audioPlayer.currentTime / 60);
//     var seconds = Math.floor(audioPlayer.currentTime % 60);
//     if (seconds < 10) {
//         seconds = '0' + seconds;
//     }
//     songTime.textContent = minutes + ':' + seconds;

//     var seekbar = document.querySelector('.seekbar');
//     var circle = document.querySelector('.circle');
//     var percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
//     circle.style.left = percentage + '%';
// }

// function startDrag(event) {
//     isDragging = true;
//     document.addEventListener('mousemove', drag);
//     document.addEventListener('mouseup', endDrag);
//     updatePosition(event);
// }

// function drag(event) {
//     updatePosition(event);
// }

// function endDrag(event) {
//     isDragging = false;
//     document.removeEventListener('mousemove', drag);
//     document.removeEventListener('mouseup', endDrag);
//     if (currentAudio) {
//         var seekbar = document.querySelector('.seekbar');
//         var rect = seekbar.getBoundingClientRect();
//         var percentage = (event.clientX - rect.left) / seekbar.offsetWidth;
//         percentage = Math.min(Math.max(percentage, 0), 1);
//         currentAudio.currentTime = percentage * currentAudio.duration;
//         updateTimeDisplay(currentAudio);
//     }
// }

// function updatePosition(event) {
//     var seekbar = document.querySelector('.seekbar');
//     var circle = document.querySelector('.circle');
//     var rect = seekbar.getBoundingClientRect();
//     var percentage = (event.clientX - rect.left) / seekbar.offsetWidth;
//     percentage = Math.min(Math.max(percentage, 0), 1);
//     circle.style.left = (percentage * 100) + '%';
// }

// document.querySelector('.playbar img[src="resume.svg"]').onclick = function() {
//     if (currentAudio) {
//         var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
//         var songName = songs[currentIndex].name;
//         togglePlay(currentAudio.id, currentIconId, songName);
//     }
// };

// document.querySelector('.playbar img[src="next.svg"]').onclick = function() {
//     if (currentIndex < songs.length - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0; // Loop back to the first song
//     }
//     playSongAtCurrentIndex();
// };

// document.querySelector('.playbar img[src="previous.svg"]').onclick = function() {
//     if (currentIndex > 0) {
//         currentIndex--;
//     } else {
//         currentIndex = songs.length - 1; // Loop back to the last song
//     }
//     playSongAtCurrentIndex();
// };

// function playSongAtCurrentIndex() {
//     var song = songs[currentIndex];
//     togglePlay(song.id, song.iconId, song.name);
// }








//Working at 10:21
// var currentAudio = null;
// var currentInterval = null;
// var isDragging = false;
// var currentIndex = 0; // To track the current song index

// var songs = [
//     { id: 'audioPlayer1', iconId: 'playPauseIcon1', name: 'Smoke-Lish' },
//     { id: 'audioPlayer2', iconId: 'playPauseIcon2', name: 'Huevo-Luna' },
//     { id: 'audioPlayer3', iconId: 'playPauseIcon3', name: 'Cosmic-Lish' },
//     { id: 'audioPlayer4', iconId: 'playPauseIcon4', name: 'Owls-Ambient' },
//     { id: 'audioPlayer5', iconId: 'playPauseIcon5', name: 'Moonlight-HJ' },
//     { id: 'audioPlayer6', iconId: 'playPauseIcon6', name: 'Waves-Happy' }
// ];

// function togglePlay(playerId, iconId, songName) {
//     var audioPlayer = document.getElementById(playerId);
//     var playPauseIcon = document.getElementById(iconId);
//     var songInfo = document.querySelector('.songinfo');
//     var songTime = document.querySelector('.songtime');
//     var playbarIcon = document.getElementById('playPauseButton');

//     if (currentAudio && currentAudio !== audioPlayer) {
//         var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
//         var currentPlayPauseIcon = document.getElementById(currentIconId);
//         currentAudio.pause();
//         currentPlayPauseIcon.src = "resume.svg";
//         playbarIcon.src = "resume.svg";
//         clearInterval(currentInterval);
//     }

//     if (audioPlayer.paused) {
//         audioPlayer.play();
//         playPauseIcon.src = "pause.svg";
//         playbarIcon.src = "pause.svg";
//         currentAudio = audioPlayer;
//         songInfo.textContent = songName;

//         currentInterval = setInterval(function() {
//             if (!isDragging) {
//                 updateTimeDisplay(audioPlayer);
//             }
//         }, 1000);
//     } else {
//         audioPlayer.pause();
//         playPauseIcon.src = "resume.svg";
//         playbarIcon.src = "resume.svg";
//         clearInterval(currentInterval);
//     }
// }

// function updateTimeDisplay(audioPlayer) {
//     var songTime = document.querySelector('.songtime');
//     var minutes = Math.floor(audioPlayer.currentTime / 60);
//     var seconds = Math.floor(audioPlayer.currentTime % 60);
//     if (seconds < 10) {
//         seconds = '0' + seconds;
//     }
//     songTime.textContent = minutes + ':' + seconds;

//     var seekbar = document.querySelector('.seekbar');
//     var circle = document.querySelector('.circle');
//     var percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
//     circle.style.left = percentage + '%';
// }

// function startDrag(event) {
//     isDragging = true;
//     document.addEventListener('mousemove', drag);
//     document.addEventListener('mouseup', endDrag);
//     updatePosition(event);
// }

// function drag(event) {
//     updatePosition(event);
// }

// function endDrag(event) {
//     isDragging = false;
//     document.removeEventListener('mousemove', drag);
//     document.removeEventListener('mouseup', endDrag);
//     if (currentAudio) {
//         var seekbar = document.querySelector('.seekbar');
//         var rect = seekbar.getBoundingClientRect();
//         var percentage = (event.clientX - rect.left) / seekbar.offsetWidth;
//         percentage = Math.min(Math.max(percentage, 0), 1);
//         currentAudio.currentTime = percentage * currentAudio.duration;
//         updateTimeDisplay(currentAudio);
//     }
// }

// function updatePosition(event) {
//     var seekbar = document.querySelector('.seekbar');
//     var circle = document.querySelector('.circle');
//     var rect = seekbar.getBoundingClientRect();
//     var percentage = (event.clientX - rect.left) / seekbar.offsetWidth;
//     percentage = Math.min(Math.max(percentage, 0), 1);
//     circle.style.left = (percentage * 100) + '%';
// }

// document.getElementById('playPauseButton').onclick = function() {
//     if (currentAudio) {
//         var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
//         var songName = songs[currentIndex].name;
//         togglePlay(currentAudio.id, currentIconId, songName);
//     } else {
//         playSongAtCurrentIndex();
//     }
// };

// document.getElementById('nextButton').onclick = function() {
//     if (currentIndex < songs.length - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0; // Loop back to the first song
//     }
//     playSongAtCurrentIndex();
// };

// document.getElementById('previousButton').onclick = function() {
//     if (currentIndex > 0) {
//         currentIndex--;
//     } else {
//         currentIndex = songs.length - 1; // Loop back to the last song
//     }
//     playSongAtCurrentIndex();
// };

// function playSongAtCurrentIndex() {
//     var song = songs[currentIndex];
//     togglePlay(song.id, song.iconId, song.name);
// }
//End


// function togglePlay(playerId, iconId, songName) {
//     var audioPlayer = document.getElementById(playerId);
//     var playPauseIcon = document.getElementById(iconId);
//     var songInfo = document.querySelector('.songinfo');
//     var playbarIcon = document.getElementById('playPauseButton');

//     if (currentAudio && currentAudio !== audioPlayer) {
//         var currentIconId = currentAudio.id.replace('audioPlayer', 'playPauseIcon');
//         var currentPlayPauseIcon = document.getElementById(currentIconId);
//         currentAudio.pause();
//         currentPlayPauseIcon.src = "resume.svg";
//         playbarIcon.src = "resume.svg";
//         clearInterval(currentInterval);
//     }

//     if (audioPlayer.paused) {
//         audioPlayer.play();
//         playPauseIcon.src = "pause.svg";
//         playbarIcon.src = "pause.svg";
//         currentAudio = audioPlayer;
//         songInfo.textContent = songName;

//         // Update currentIndex based on the playerId
//         currentIndex = songs.findIndex(song => song.id === playerId);

//         currentInterval = setInterval(function() {
//             if (!isDragging) {
//                 updateTimeDisplay(audioPlayer);
//             }
//         }, 1000);
//     } else {
//         audioPlayer.pause();
//         playPauseIcon.src = "resume.svg";
//         playbarIcon.src = "resume.svg";
//         clearInterval(currentInterval);
//     }
// }


// function playSongAtCurrentIndex() {
//     var song = songs[currentIndex];
//     togglePlay(song.id, song.iconId, song.name);
// }