const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameEnded = false;

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (gameEnded || cell.textContent !== '') {
            return;
        }

        cell.textContent = currentPlayer;

        if (checkWin()) {
            alert(`${currentPlayer} wins!`);
            gameEnded = true;
            return;
        }

        if (checkTie()) {
            alert(`It's a tie!`);
            gameEnded = true;
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    });
});

function checkWin() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            return true;
        }
    }

    return false;
}

function checkTie() {
    return Array.from(cells).every(cell => cell.textContent !== '');
}