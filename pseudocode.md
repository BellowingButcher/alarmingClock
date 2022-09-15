# I want to make an alarming clock!

- I need this clock to
    - Display current time in a [digital format](https://raw.githubusercontent.com/bootcamp-students/Resources/master/images/wireframes/digital-clock.png).
        - It should count up, **incrementing** the seconds.
    - It should have a time for an alarm to go off (can use a variable if wanted)
        - The alarm should **start**(display an alert window) when the difference between the current time and the time on the alarm is 0
    - The clock should update every second without refreshing the page

- Parts of the clock
    - Display
        - Hours
            - 12 unit hours
                - Starts at 1 and goes to 12
                - **incriments** every time the minute resets to 0

            - 24 unit hours
                - starts at 00 and goes until 24
                - **incriments** every time minute resets to 0
        - Minutes
            - 60 Units
                - Starts at 00 and **Incriments** every time the Seconds timer restarts at 00.
                - When minutes gets to 59, it resets back to 00 after seconds **restarts** to 00 again.
        - Seconds
            -60 units
                - Starts at 00 and **Incriments** each time until it reaches 59.
                - resets back to 00.
        - A.M or P.M
            - Displays only when 12 hour format is chosen
            - A.M. is the first half of the day
            - P.M. is the second half of the day
    - Alarm
        - Alarm time
            - Ive got one of two ideas for this
                - One being
                    - User input number Hours
                    - User input number Minutes
                    - User input number Seconds
                    - User input number A.m. or P.m.
                - Two being
                    - User select button button for every hour
                    - User select button button for every minute
                    - User select button button for every second
                    - User select button button for AM or PM

        - Alarm Action
         - Takes set alarm time and compares it to the real time.
         - When the set alram time is equal to the real time, activate the alarm

- Funtionality
    - Start(Plug in the device)
    - The display checks a database for current time
    - Displays current time in a *hour*, *minute*, *second*, and *AM or PM* 
    - Checks to see if there is an alarm set
        - If there is an alarm
            - get alarm time
            - When the difference between the alarm time and the current time is equal to zero
                - Give an alert signal that the alarm time has arrived
        - If there is no alarm
            - wait for a click from the save alarm button
        


