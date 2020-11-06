input.onButtonPressed(Button.A, function () {
    score = score + 1
    basic.showNumber(score)
})
/**
 * Schaar
 */
/**
 * Blad
 */
/**
 * Papier
 */
/**
 * Steen
 */
input.onGesture(Gesture.Shake, function () {
    blad_steen_schaar_papier = randint(0, 3)
    if (blad_steen_schaar_papier == 0) {
        basic.showLeds(`
            # # . . .
            # # # . #
            . . . # .
            # # # . #
            # # . . .
            `)
    } else if (blad_steen_schaar_papier == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . . # . .
            `)
    } else if (blad_steen_schaar_papier == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            `)
    }
})
let blad_steen_schaar_papier = 0
let score = 0
score = 0
