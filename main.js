function displayTime(){
    const dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

}
setInterval(displayTime, 10);

const setAlarmBtn = document.getElementById('setAlarmBtn');
const hrs = document.getElementById('alarmHour').innerHTML;
const mins = document.getElementById('alarmMinute').innerHTML;
const secs = document.getElementById('alarmSecond').innerHTML;



function setAlarm() {
    console.log(hrs);
    console.log(mins);
    console.log(secs);
// alarmTime needs to be the values of the inputed options from the drop down menus on the page
    let alarmTime = hrs + mins + secs;
    console.log(alarmTime);
    let currentTime = Date.now;

    if ((alarmTime - currentTime) === (0)) {
        alert("Alarming, isn't it?");
    }

}

setAlarmBtn.addEventListener('click', setAlarm);
