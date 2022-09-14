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
    - Alarm
        - Alarm time
            - 
        - Alarm Action

