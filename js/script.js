// play sound corresponding to the key press that called this function
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;  // rewind to the start so sound can play before previous one ends
    audio.play();
    key.classList.add('playing');
}

// remove the yellow styling from an activated button
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if not a transform
    this.classList.remove('playing');
}

// listen for end of transition on each key
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// listen for key down
window.addEventListener('keydown', playSound);