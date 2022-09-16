#PseudoCode

What my code should look like in human words

- HTML page
    - (clockDisplay)The Alarming Clock 
        - (displayHour)Hours
        - (displayMinute)Minutes
        - (displaySecond)Seconds
    - (alarmField)Set your alarm here 
        - (alarmHour) Drop down box for choosing an hour of day
            - 00
            - 01
            - 02
            - ...
            - 23

        - (alarmMinute) Drop down box for choosing a minute of that hour
            - 00
            - 01
            - 02
            - ...
            - 59
        - (alarmSecond) Drop down box for choosing a second of that minute
            - 00
            - 01
            - 02
            - ...
            - 59
        - (alarmBtn) Button for setting your alarm

- Javascript page
        - Function timeNow
            - displayTime is a snapshot of the time right now 
                - get the hour of displayTime
                    - let this equal displayHour

                - get the minute of displayTime
                    - let this equal displayMinute

                - get the second of displayTime 
                    - let this equal displaySecond

    - timeNow needs to run at an interval of every 10 microseconds

        - Function setAlarm

            - let alarmHourTest = false
            - let alarmMinuteTest = false
            - let alarmSecondTest = false

            - alarmHour.addEventListener ('click', () => set alarmHourTest to true)
            - alarmMinute.addEventListener ('click', () => set alarmMinuteTest to true)
            - alarmSecond.addEventListener ('click', () => set alarmSecondTest to true)

                - If (alarmHour or alarmMinute or alarmSecond) are false
                    - Alert! Choose every part of the time to set your alarm!

                - If (alarmHour and alarmMinute and alarmSecond) are true
                    - add them together
                    - let alarmSetTime be equal to  this
                - end If

                - let displayTime equal
                    - the numerical values of *displayHour*, *displayMinute*, and *displaySecond* all added together.

                - let timeDifference equal
                    - alarmSetTime - displayTime

                - if timeDifference is equal to 0
                    - Alert! It's alarming isn't it?
                - end of if
    - click button to start setAlarm function
        
    


- CSS page