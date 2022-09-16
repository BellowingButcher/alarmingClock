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

const hrs = document.querySelector('#alarmHour');
const mins = document.querySelector('#alarmMinute');
const secs = document.querySelector('#alarmSecond');


function setAlarm() {
console.log(hrs)
// alarmTime needs to be the values of the inputed options from the drop down menus on the page
    let alarmTime = hrs + mins + secs;
    let currentTime = Date.now;

    if ((alarmTime - currentTime) === (0)) {
        alert("Alarming, isn't it?");
    }

}

setAlarmBtn.addEventListener('click', setAlarm);
hrs.addEventListener('change', () => {
    
})
