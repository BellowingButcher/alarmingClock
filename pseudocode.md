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
            - 12 hour

            - 24 hour
        - Minutes
            - 60 Units
                - Starts at 0 and **Incriments** every time the Seconds timer restarts at 0.
                - When minutes gets to 59, it resets back to 0 after seconds **restarts** to zero again.
        - Seconds
            -60 units
                - Starts at 0 and **Incriments** 1 each time until it reaches 59. Then starts back at 0.
    - Alarm
        - Alarm time
            - 
        - Display an alert when Alarm time is met

