let versuche = 0
let Random = 0
let Guess = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        versuche = 0
        Random = randint(1, 9)
        basic.showIcon(IconNames.Yes)
    } else {
        if (input.buttonIsPressed(Button.A)) {
            if (Guess < 1) {
                basic.showString("" + (Guess))
            } else {
                Guess += -1
                basic.showString("" + (Guess))
            }
        } else if (input.buttonIsPressed(Button.B)) {
            if (Guess > 8) {
                basic.showString("" + (Guess))
            } else {
                Guess += 1
                basic.showString("" + (Guess))
            }
        } else if (input.pinIsPressed(TouchPin.P0)) {
            if (Guess > Random) {
                versuche += 1
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    # . # . #
                    . # # # .
                    . . # . .
                    `)
            } else if (Guess < Random) {
                versuche += 1
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # . # . #
                    . . # . .
                    . . # . .
                    `)
            } else {
                basic.showString("Versuche:")
                basic.showNumber(versuche)
                basic.pause(1000)
                basic.showIcon(IconNames.Heart)
            }
        }
    }
})
