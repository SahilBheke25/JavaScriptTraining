// 2. Go to youtube. Open any video. Add a button to the page using JS. On click of the button, the video playback speed should change to 10x.

const newButton = document.createElement('button')
newButton.textContent = 'Click me!';
const container = document.getElementById("actions");

container.insertBefore(newButton, container.children[0]);

const increaseSpeed = (n) => { 
    document.querySelector('video').playbackRate = n;
}

newButton.addEventListener('click', function(){increaseSpeed(10)});