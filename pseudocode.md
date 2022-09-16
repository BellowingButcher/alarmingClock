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
        - let alarmSetTime be equal to
            - the numerical values of *alarmHour*, *alarmMinute*, and *alarmSecond* all added together.
        
        - let displayTime be equal to
            - the numerical values of *displayHour*, *displayMinute*, and *displaySecond* all added together.

        - let timeDifference be equal to
            - alarmSetTime - displayTime

        - if timeDifference is equal to 0
            - Alert! It's alarming isn't it?
        
    


- CSS page