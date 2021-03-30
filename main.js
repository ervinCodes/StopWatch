const timer = document.getElementById('stopwatch');

let hr = 0;
let min = 0;
let sec = 0;

// Variable to see if stopwatch is running or not
let stoptime = true;

// If the stopwatch is not running, turn it on and go to the timerCycle
function startTimer() {
    if (stoptime == true ) {
        stoptime = false;
        timerCycle();
    }
}

// if the stopwatch is running, turn it off
function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0 ) {
            hr = '0' + hr;
        }

        timer.innerHTML = hr + ':' + min + ':' + sec;

        setTimeout("timerCycle()", 1000);

    }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
}