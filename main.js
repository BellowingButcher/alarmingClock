function displayTime(){
    const dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    const amPM = document.getElementById('session');

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

}
setInterval(displayTime, 1000);

const setAlarmBtn = document.getElementById('setAlarmBtn');
const hrs = document.getElementById('alarmHour');
const mins = document.getElementById('alarmMinute');
const secs = document.getElementById('alarmSecond');


function setAlarm() {

    let alarmTime = hrs + mins + secs;
console.log(alarmTime)
}

setAlarmBtn.addEventListener('click', setAlarm);
