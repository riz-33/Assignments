var forward = 0;

function abc() {
    var character = document.getElementById('character');
    if (event.keyCode === 68) {
        forward = forward + 10;
        character.style.left = forward + 'px'
        character.src = 'Images/Player1-2.gif'
    }
    if (event.keyCode === 65) {
        forward = forward - 10;
        character.style.left = forward + 'px'
        character.src = 'Images/Player1-2.gif'
    }

    if (event.keyCode === 32) {
        character.src = 'Images/Player1-3.gif'
        character.style.width = '250px'
        setTimeout(function () {
            character.src = 'Images/Player1-1.gif';
            character.style.width = '200px'

        }, 2000)
    }
}

window.onkeydown = abc;