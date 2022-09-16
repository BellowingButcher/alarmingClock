function timeNow(){
    const displayTime = new Date();
    let displayHr = displayTime.getHours();
    let displayMin = displayTime.getMinutes();
    let displaySec = displayTime.getSeconds();

document.getElementById('displayHour').innerHTML = displayHr;
document.getElementById('displayMinute').innerHTML = displayMin;
document.getElementById('displaySecond').innerHTML = displaySec;

}
setInterval (timeNow, 10);

function setAlarm() {
    let alarmHourTest = false;
    let alarmMinuteTest = false;
    let alarmSecondTest = false;

    document.getElementById('alarmHour').addEventListener('click', () => {
        //I need this to return true when alarmHourTest is called
    } );

    document.getElementById('alarmMinute').addEventListener('click', () => {
        //I need this to return true when alarmMinuteTest is called
    } );

    document.getElementById('alarmHour').addEventListener('click', () => {
        //I need this to return true when alarmSecondTest is called
    } );

        if ((alarmHourTest OR alarmMinuteTest OR alarmSecondTest) = false) {
        alert('You must choose an Hour, Minute, and Second for the alarm to work!');
    }

        if ((alarmHourTest AND alarmMinuteTest AND alarmSecondTest) = true) {
        const alarmSetTime = (
                                (document.querySelector('#alarmHour'))
                                + (document.querySelector('#alarmMinute'))
                                + (document.querySelector('#alarmSecond'))
                             );
    }

    const displayTimeTest = new Date();
    let displayTimeTestHr = displayTimeTest.getHours();
    let displayTimeTestMin = displayTimeTest.getMinutes();
    let displayTimeTestSec = displayTimeTest.getSeconds();

    const currentTime = displayTimeTestHr + displayTimeTestMin + displayTimeTestSec;

    If (alarmSetTime - currentTime === 0) {
        alert('It"s alarming, isn"t it?');
    }

return
}