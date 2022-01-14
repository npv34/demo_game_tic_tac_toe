/*
  Tic tac toe

*/
let arr = [];
let player = 1;
let gameOver = false;
let postionCurrent = [];

function drawGame() {
    let html = '';
    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        html += "<tr>";
        for (let j = 0; j < 3; j++) {
            arr[i][j] = "*";
            html += '<td id="cell-' + i + '-' + j + '"  onclick="play(' + i + ',' + j + ')">'
            html += "</td>";
        }
        html += "</tr>";
    }
    document.getElementById('game-board').innerHTML = html;
}


drawGame();

function play(i, j) {
    postionCurrent = [i, j]
    if (!gameOver) {
        if (arr[i][j] == "*") {
            if (player == 1) {
                document.getElementById('cell-' + i + '-' + j).innerHTML = "O";
                arr[i][j] = "0";
                checkWin();
                player = 2;
            } else {
                document.getElementById('cell-' + i + '-' + j).innerHTML = "X";
                arr[i][j] = "X";
                checkWin();
                player = 1;
            }
        } else {
            alert("Vui long danh o khac")
        }

    } else {
        alert('Game over')
    }


}

function checkWin() {
    if (arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2] && arr[0][2] != "*") {
        alert(player + 'Win');
        gameOver = true;
    } else if (arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2] && arr[1][2] != "*") {
        alert(player + 'Win')
        gameOver = true;

    } else if (arr[2][0] == arr[2][1] && arr[2][1] == arr[2][2] && arr[2][2] != "*") {
        alert(player + 'Win')
        gameOver = true;

    } else if (arr[0][0] == arr[1][0] && arr[2][0] == arr[0][0] && arr[0][0] != "*") {
        alert(player + 'Win')
        gameOver = true;

    } else if (arr[0][1] == arr[1][1] && arr[2][1] == arr[0][1] && arr[0][1] != "*") {
        alert(player + 'Win')
        gameOver = true;

    } else if ((arr[0][2] == arr[1][2] && arr[2][2] == arr[0][2] && arr[0][2] != "*")) {
        alert(player + 'Win')
        gameOver = true;

    } else if ((arr[0][0] == arr[1][1] && arr[2][2] == arr[0][0]) && arr[0][0] != "*") {
        alert(player + 'Win')
        gameOver = true;

    } else if ((arr[0][2] == arr[1][1] && arr[2][0] == arr[0][2] && arr[0][2] != "*")) {
        alert(player + 'Win')
        gameOver = true;
    }
}

function resetGame() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arr[i][j] = "*";
            document.getElementById('cell-' + i + '-' + j).innerHTML = "";
        }
    }
    gameOver = false;
    player = 2;
}

function undoPlay() {

    let x = postionCurrent[0];
    let y = postionCurrent[1];
    document.getElementById('cell-' + x + '-' + y).innerHTML = "";
    arr[x][y] = "*";
    if (player == 2) {
        player = 1;
    } else {
        player = 2;
    }
}