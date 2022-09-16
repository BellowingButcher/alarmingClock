function timeNow() {
let displayTime = new Date();
let displayHour = displayTime.getHours;
let displayMinute = displayTime.getMinutes;
let displaySecond = displayTime.getSeconds;

displayHour = document.getElementById('displayHour').innerHTML;
displayMinute = document.getElementById('displayMinute').innerHTML;
displaySecond = document.getElementById('displaySecond').innerHTML;

}
setInterval (timeNow, 100);