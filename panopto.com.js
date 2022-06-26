
// video el
el = document.getElementById("primaryVideo");

// solves occasional rounding errors, where 11 - 1 is 9.99999993 for ex.
function less_than_10 (num) {
  if (num > 10) return false;
  else if (Math.abs(num - 10) < 0.001) return false; // is close to 10
  return true;
}

function less_than_or_equal_10 (num) {
  if (num > 10) return false;
  else if (Math.abs(num - 10) < 0.001) return true; // is close to 10
  return true;
}

function greater_than_or_equal_10 (num) {
  if (num > 10) return true;
  else if (Math.abs(num - 10) < 0.001) return true; // is close to 10
  return false;
}

function display_speed (num) {
  return `${greater_than_or_equal_10(num) ? 
    num.toFixed(0) : 
    num.toFixed(1)}x`;
}

document.onkeydown = function (e) {
  e = e || window.event;
  // console.log(e.keyCode);

  // create dom object to display keypress
  let div = document.createElement("div");
  div.id = 'keypress_tracker';
  div.style.position='absolute';
  div.style.top = '10px';
  div.style.right = '10px';
  div.style.backgroundColor = '#2b2b2b';
  div.style.width = '50px';
  div.style.padding = '2px';
  div.style.borderRadius = '10px';
  div.style.zIndex = '999999';
  div.style.textAlign = 'center';
  div.style.lineHeight = '20px';
  div.style.fontSize = '20px';
  div.style.color = 'white';
  div.style.opacity = 1;
  div.style.transition = 'opacity 1s';
  div.style.transitionDelay = '0s';
  div.innerHTML = '[Error]';
  
  // numbers and letters except i: ± 0.5 
  // '~': 0.5x, '0': 10x, '-': 20x, '=': 30x.
  // j- k+
  // (shift+num : ± 0.5)
  let old_speed = el.playbackRate;
  let new_speed;
  let small = 0.001;
  let useful_key = true;
  switch (e.keyCode) {
    // j- k+
    case 74: new_speed = old_speed - (less_than_or_equal_10(old_speed) ? 0.1 : 1); break; // j
    case 75: new_speed = old_speed + (less_than_10(old_speed) ? 0.1 : 1); break; // k
    
    // numbers
    case 192: new_speed = 0.5; break; // ~
    case 49: new_speed = 1; break; // 1
    case 50: new_speed = 2; break; // 2
    case 51: new_speed = 3; break; // 3
    case 52: new_speed = 4; break; // 4
    case 53: new_speed = 5; break; // 5
    case 54: new_speed = 6; break; // 6
    case 55: new_speed = 7; break; // 7
    case 56: new_speed = 8; break; // 8
    case 57: new_speed = 9; break; // 9
    case 48: new_speed = 10; break; // 0
    case 189: new_speed = 20; break; // -
    case 187: new_speed = 30; break; // =
    // letters between nums -or- shift -> +0.5 speed    // reserve i for inspect element command
    case 33: case 81: new_speed = 1.5; break; // ! or q
    case 64: case 87: new_speed = 2.5; break; // @ or w
    case 35: case 69: new_speed = 3.5; break; // # or e
    case 36: case 82: new_speed = 4.5; break; // $ or r
    case 37: case 84: new_speed = 5.5; break; // % or t
    case 94: case 89: new_speed = 6.5; break; // ^ or y
    case 38: case 85: new_speed = 7.5; break; // & or u
    case 42: /*case 73:*/ new_speed = 8.5; break; // *
    case 40: case 79: new_speed = 9.5; break; // ( or o
    case 41: case 80: new_speed = 10.5; break; // ) or p
    default: useful_key = false;
  }
  if (useful_key) {
    console.log(`\t\t--- NEW PLAYBACK RATE: ${display_speed(new_speed)} ---`); 
    el.playbackRate = new_speed;
    div.innerHTML = display_speed(new_speed);

    // show keypress tracker, then fade
    document.body.appendChild(div);
    setTimeout(function() {
      div.style.opacity = 0;
    }, 1000);
  } else console.log(`\t\t--- KEYPRESS IGNORED ---`);

};