// countdown

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

// nav state toggle
var nav = document.getElementsByTagName('nav')[0]
var navLinks = nav.getElementsByTagName('a')
var states = []
for (var i = 0; i < navLinks.length; i++) {
    states.push(navLinks[i].getAttribute('href'))
}

function highlightLink(linkIndex) {
    for (let j = 0; j < navLinks.length; j++) {
        if (j == linkIndex) {
            navLinks[j].classList.add('active')
        } else {
            navLinks[j].classList.remove('active')
        }
    }
}


for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = function() {
        highlightLink(i)
    }
}

window.onload = function() {
    var index = states.indexOf(window.location.hash)
    if (index != -1) {
        for (var i = 0; i < navLinks.length; i++) {
            highlightLink(index)
        }
    } else {
        highlightLink(0)
    }
}