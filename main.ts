basic.showString("hallo")
basic.forever(function () {
    music.setVolume(255)
    music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.LoopingInBackground)
    JoyCar.turn(
    FRDirection.Reverse,
    LRDirection.Left,
    100,
    5
    )
    basic.pause(3000)
    JoyCar.stop(StopIntensity.Intense)
    basic.showString("wie geht es dir               mir geht es gut        wie heißt du             schön dich kennenzulernen                   auf wiedersehen ")
})
