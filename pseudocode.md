#PseudoCode

What my code should look like in human words

- HTML page

    - Container for element id clockDisplay

        - Size 3 Header "The Alarming Clock" 
            - Span element
                - (displayHour)Hours
            - :
            
            - Span element
                - (displayMinute)Minutes

            - :

            - Span element
                - (displaySecond)Seconds

    - Container for element id alarmField

        - Size 3 Header "Set your alarm here"

            - selector element, id alarmHour (drop down box for "hours" of day)
                -options
                    - 00
                    - 01
                    - 02
                    - ...
                    - 23

            - selector element, id alarmMinute (drop down box for "minutes" of the hour)
                - options
                    - 00
                    - 01
                    - 02
                    - ...
                    - 59
            - selector element, id alarmSecond (drop down box for "seconds" of the minute)
                - options
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

                - If (alarmHour or alarmMinute or alarmSecond) equal false
                    - Alert! Choose every part of the time to set your alarm!

                - If (alarmHour and alarmMinute and alarmSecond) equal true
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
        - alarmBtn.addEventListener('click', setAlarm)
        
    


- CSS page