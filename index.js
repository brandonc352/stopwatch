let speed = document.getElementById('speed')
let tenthsBox = document.getElementById('tenthsBox')
let startBtn = document.getElementById('start-btn');

// let tenths = 0;
// let seconds = 0;
// let minutes = 0;
let secHolder = 0;

let clock = {
    tenths: 0,
    seconds: 0,
    minutes: 0,
};

let { tenths, seconds, minutes } = clock;

speed = 100;

startBtn.addEventListener('click', () => {
    startTimer();
});

 
const startTimer = () => {
    speed = speed.value
    timer = setInterval(setAlert, speed);
}
const setAlert = () => {
    
    tenths++;
    
        if (tenths > 9) {
            seconds++
            if (seconds < 10) {
                secHolder = '0';
            }
            else secHolder = '';
            document.getElementById('secondsBox').innerHTML =  secHolder + seconds;
            tenths = 0;

        }
    document.getElementById('tenthsBox').innerHTML =  tenths ;
   
        if (seconds > 59) {
            minutes++
            document.getElementById('minutesBox').innerHTML = minutes;
            seconds =0;

        }   


}

const pauseTimer = () => {
    clearTimeout(timer)
}

const resetTimer = () => {
    tenths = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById('secondsBox').innerHTML = '00';
    document.getElementById('tenthsBox').innerHTML = '00';
    document.getElementById('minutesBox').innerHTML = '00';

}