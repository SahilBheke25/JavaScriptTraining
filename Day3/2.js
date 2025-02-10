const newButton = document.createElement('button')
newButton.textContent = 'Click me!';
const container = document.getElementById("actions");

container.insertBefore(newButton, container.children[0]);

const increaseSpeed = (n) => { 
    document.querySelector('video').playbackRate = n;
}

newButton.addEventListener('click', function(){increaseSpeed(10)});