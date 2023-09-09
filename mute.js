// JavaScript for muting/unmuting the audio
let audio = document.getElementById('background-music');
let muteButton = document.getElementById('mute-button');

function toggleMute() {
    if (audio.muted) {
        audio.muted = false;
        muteButton.innerHTML = '<i class="fas fa-volume-high">';
    } else {
        audio.muted = true;
        muteButton.innerHTML = '<i class="fas fa-volume-xmark">'; // Change icon for muted sound
    }
}
