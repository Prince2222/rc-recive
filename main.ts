radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    } else if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    } else if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    } else if (receivedNumber == 5) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
})
radio.setGroup(2)
