var catalystDate = new Date("April 13, 2019 09:00:00 GMT-0400")
var days = document.getElementById('days')
var hours = document.getElementById('hours')
var minutes = document.getElementById('minutes')
var seconds = document.getElementById('seconds')

function updateTime() {
    var now = new Date().getTime();

    var delta = catalystDate - now;

    // Time calculations for days, hours, minutes and seconds
    days.innerHTML = Math.floor(delta / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.innerHTML = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    seconds.innerHTML = Math.floor((delta % (1000 * 60)) / 1000);
}

updateTime()
setInterval(updateTime, 1000)