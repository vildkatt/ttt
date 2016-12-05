// Sprawdzenie czy gra została zakończona zwycieństwem zadanego gracza (wywoływane po ruchu gracza)
// True oznacza że zadany gracz wygrał, false że gra jeszcze jest nie rozstrzygnietą lub jest remis
function win(player) {
    // sprawdzenie "skosów"
    if ((result[0][0] === player) && (result[1][1] === player) && (result[2][2] === player)) return true;
    if ((result[0][2] === player) && (result[1][1] === player) && (result[2][0] === player)) return true;

    for (var i = 0; i < 3; i++) {
        // Sprawdzenie wierszy
        if ((result[i][0] === player) && (result[i][1] === player) && (result[i][2] === player)) return true;

        // Sprawdzenie kolumn
        if ((result[0][i] === player) && (result[1][i] === player) && (result[2][i] === player)) return true;
    }
    return false;
}

// Sprawdzenie czy wszystkie pola są już zajęte, jeżeli tak to remin.
// Wcześniej sprawdzaliśmy czy ktoś wygrał, więc nie potrzeba nam dodatkowego sprawdzenia
// True oznacza, że wszystkie pola są zajęte (więc remis), false że są jeszcze wolne pola
function draw() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (!result[i][j])
                return false;
        }
    }
    return true;
}
