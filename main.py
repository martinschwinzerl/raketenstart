led.enable(True)
basic.show_string("BEREIT!")
Wert = 10
while Wert >= 1:
    if input.button_is_pressed(Button.A):
        basic.show_number(Wert)
        basic.pause(100)
        Wert += -1
while Wert == 0:
    if input.button_is_pressed(Button.B):
        basic.show_string("\"START\"")
        basic.pause(200)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.pause(500)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            """)
        basic.pause(500)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            """)
        basic.pause(500)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            """)
        basic.pause(250)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            """)
        basic.pause(250)
        basic.show_leds("""
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . # . # .
            """)
        basic.pause(250)
        basic.show_leds("""
            . # # # .
            . # # # .
            . # . # .
            . # # # .
            . # # # .
            """)
        basic.pause(250)
        basic.show_leds("""
            . # . # .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            """)
        basic.pause(100)
        basic.show_leds("""
            . # # # .
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            """)
        basic.pause(100)
        basic.show_leds("""
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            """)
        basic.pause(100)
        basic.show_leds("""
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        Wert += -1

def on_forever():
    pass
basic.forever(on_forever)
