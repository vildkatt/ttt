

// result table
var result;

// changing player
var player = "O";
var run = 0;

function start() {
//nought starts
    document.getElementById('move').innerHTML = player;
    document.getElementById('O').innerHTML = '0';
    document.getElementById('X').innerHTML = '0';
    document.getElementById('draw').innerHTML = '0';
    result = new Array(new Array(3), new Array(3), new Array(3));

    var buttons = document.getElementById('right').getElementsByTagName("button");
    reset_board(buttons);

    if(run == 0) {
        // iterate
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function (e) {
                // gets position attributes
                var position = this.getAttribute("id");
                var x = position[1];
                var y = position[0];

                // fill the field and check if won
                if (!result[x][y]) {
                    result[x][y] = player;
                    this.innerText = player;

                    if (win(player)) {
                        alert("Winner:" + player);
                        var score = parseInt(document.getElementById(player).innerHTML) + 1;
                        document.getElementById(player).innerHTML = score;
                        result = new Array(new Array(3), new Array(3), new Array(3));
                        player = change_player(player, document);
                        reset_board(buttons);
                        return;
                    } else if (draw()) {
                        alert("Draw!");
                        var score = parseInt(document.getElementById('draw').innerHTML) + 1;
                        document.getElementById("draw").innerHTML = score;
                        result = new Array(new Array(3), new Array(3), new Array(3));
                        player = change_player(player, document);
                        reset_board(buttons);
                        return;
                    }
                    player = change_player(player, document);
                } else {
                    alert("Invalid move");
                }
            }, false);
        }
    }

    run = 1;
}

function change_player(player, document) {
    // change player
    var p = "O";
    if (player === "O") {
        p = "X";
    }
    document.getElementById('move').innerHTML = p;
    return p
}

function reset_board(buttons) {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = '&nbsp;';
    }
 }
