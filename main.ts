led.enable(true)
basic.showString("BEREIT!")
let Wert = 10
while (Wert >= 1) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(Wert)
        basic.pause(100)
        Wert += -1
    }
}
while (Wert == 0) {
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("\"START\"")
        music.setVolume(255)
        music.play(music.createSoundExpression(WaveShape.Sine, 144, 1506, 146, 221, 4292, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.LoopingInBackground)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            `)
        basic.pause(250)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(250)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . # . # .
            `)
        basic.pause(250)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # . # .
            . # # # .
            . # # # .
            `)
        basic.pause(250)
        basic.showLeds(`
            . # . # .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . # # # .
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Wert += -1
    }
}
basic.forever(function () {
	
})
