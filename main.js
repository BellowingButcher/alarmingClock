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