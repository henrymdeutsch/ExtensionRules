function get_day_id() {
  const d = new Date();
  return `${d.getMonth()}/${d.getDate()}`; // d/m
}

function format_time(seconds, minutes, hours) {
  hours = parseInt(hours); minutes = parseInt(minutes);
  if (seconds < 10) seconds = '0' + seconds;
  if (hours && minutes < 10) minutes = '0' + minutes;
  return hours ? 
    hours + ':' + minutes + ':' + seconds :
    minutes + ':' + seconds;
}

function save_curr_time() {
  localStorage['seconds'] = seconds;
  localStorage['minutes'] = minutes;
  localStorage['hours'] = hours;
}

function quit_after_minutes(max_mins) {
  if (minutes != 0 && minutes % max_mins == 0 && seconds < 3) {
    window.location.href = 'www.google.com/';
  }
}

function pause_play() {
  on_off = !on_off;
  localStorage['on_off'] = on_off;
  console.log('option and space pressed');
}

// get the stopwatch time of today, or restart it to 0 (if it's a new day, or no stopwatch exists)
if (!localStorage['last_check-in'] || !localStorage['seconds'] || localStorage['last_check-in'] != get_day_id()) {
  if (!localStorage['last_check-in'] || !localStorage['on_off']) {
    console.log('reset session storage because missing vars. last_check-in: ' + localStorage['last_check-in'] + ', seconds: ' + localStorage['seconds']);
  } else {
    console.log('reset session storage because new day. last_check-in: ' + localStorage['last_check-in'] + ', get_day_id(): ' + get_day_id());
  }
  localStorage['last_check-in'] = get_day_id();
  localStorage['seconds'] = 0;
  localStorage['minutes'] = 0;
  localStorage['hours'] = 0;
  localStorage['on_off'] = true;
}
last_checkin = localStorage['last_check-in'];
let seconds = localStorage['seconds'];
let minutes = localStorage['minutes'];
let hours = localStorage['hours'];
let on_off = localStorage['on_off'];
localStorage['last_check-in'] = get_day_id();

// create <div class='henry_time'> to display time
const timeDisplay = document.createElement('div');
timeDisplay.classList.add('henry_time');
timeDisplay.innerHTML = format_time(seconds, minutes, hours);
document.body.appendChild(timeDisplay);
let stopwatch = setInterval(function() {
  if (on_off) {
    seconds++;
    if (seconds >= 60) { seconds %= 60; minutes++; }
    if (minutes >= 60) { minutes %= 60; hours++; }
    timeDisplay.innerHTML = format_time(seconds, minutes, hours);
    save_curr_time();
    quit_after_minutes(20);
  }
}, 1000);

// track whether or not option key is pressed
let option_pressed = 0;
window.onkeyup = function(e) {if (e.keyCode === 18) option_pressed = 0;}
window.onkeydown = function(e) {if (e.keyCode === 18) option_pressed = 1;}

// pause timer on spacebar
document.onkeydown = function (e) {
  if (option_pressed) {
    // console.log('option pressed');
    e = e || window.event;

    switch (e.keyCode) {
      case 18: break; // option
      case 32: pause_play(); break; // space
    }
  }
}