let channel = 0;
const channels=[[],[],[],[]];

document.addEventListener('keydown' , onkeydown);

const KeySounds = {
    'q': document.querySelector('#crash'),
    'w': document.querySelector('#hihat'),
    'e': document.querySelector('#kick'),
    'r': document.querySelector('#tom'),
    't': document.querySelector('#snare'),
};

function onkeydown(event) {
    const sound = KeySounds[event.key]
    playSound(sound)
    insertSoundToChannel(sound.id)
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function insertSoundToChannel(soundId) {
    const currentChannel = channels[channel];
    if (currentChannel.length === 0) {
        currentChannel.push({ sound: soundId, sleep: 0, timestamp: Date.now() });
    } else {
        const lastSoundTimestamp = currentChannel[currentChannel.length - 1].timestamp;
        const sleep = Math.max(Date.now() - lastSoundTimestamp, 0);
        currentChannel.push({ sound: soundId, sleep, timestamp: Date.now() });
    }
}

function play() {
    const chanelsToPlay = document.querySelectorAll('input[name=isChannelChecked]:checked');
    chanelsToPlay.forEach(checkbox => {
        channels[parseInt(checkbox.id)].forEach(y => {
            setTimeout(() => {
                const sound = document.getElementById(y.sound);
                playSound(sound);
            }, y.sleep);
        });
    });
}