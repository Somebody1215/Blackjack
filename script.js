let gameMode = '';

function startGame(mode) {
    gameMode = mode;
    document.querySelector('.menu').classList.remove('active');
    document.querySelector('.game').classList.add('active');
    // Initialize game...
}

function showCheatSheet() {
    document.querySelector('.cheat-sheet').classList.add('active');
}

function hideCheatSheet() {
    document.querySelector('.cheat-sheet').classList.remove('active');
}

function hit() {
    alert('Hit button clicked');
    // Add card to player's hand...
}

function stand() {
    alert('Stand button clicked');
    // End player's turn...
}

function doubleDown() {
    alert('Double Down button clicked');
    // Double the bet and add one card...
}

function split() {
    alert('Split button clicked');
    // Split the hand into two...
}

// Additional game logic...
