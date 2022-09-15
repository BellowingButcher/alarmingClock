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
const hrs = document.getElementById('alarmHour');
const mins = document.getElementById('alarmMinute');
const secs = document.getElementById('alarmSecond');


function setAlarm() {

    let alarmTime = hrs + mins + secs;
    let currentTime = document.getElementById('hours') + document.getElementById('minutes') + document.getElementById('seconds');

    if ((alarmTime - currentTime) === 0) {
        alert("Alarming, isn't it?");
    }

}

setAlarmBtn.addEventListener('click', setAlarm);
