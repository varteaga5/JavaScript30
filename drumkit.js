window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

    if(!audio) return; // stops function
    audio.currentTime = 0; // allows the key to be spammed
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip over if not transform value
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));