var forward = 0;

function abc() {
    console.log (event.keyCode)
    var character = document.getElementById ('character');
    if (event.keyCode === 68) {
        forward = forward + 10;
        character.style.left = forward + 'px'
    }
}