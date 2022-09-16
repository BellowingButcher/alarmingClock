function timeNow(){
    const displayTime = new Date();
    let displayHr = displayTime.getHours();
    let displayMin = displayTime.getMinutes();
    let displaySec = displayTime.getSeconds();

displayHr = document.getElementById('displayHour').innerHTML;
displayMin = document.getElementById('displayMinute').innerHTML;
displaySec = document.getElementById('displaySecond').innerHTML;

}
setInterval (timeNow, 100);