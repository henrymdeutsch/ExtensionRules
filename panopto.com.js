

// using default.js is less buggy becuase keys seem to have existing commands within panopto.

// // video el
// vids = document.getElementsByTagName("video");
// // for (vid of vids) vid.playbackRate = 1000; // max speed default

// // solves occasional rounding errors, where 11 - 1 is 9.99999993 for ex.
// function less_than_10 (num) {
//   if (num > 10) return false;
//   else if (Math.abs(num - 10) < 0.001) return false; // is close to 10
//   return true;
// }

// function less_than_or_equal_10 (num) {
//   if (num > 10) return false;
//   else if (Math.abs(num - 10) < 0.001) return true; // is close to 10
//   return true;
// }

// function greater_than_or_equal_10 (num) {
//   if (num > 10) return true;
//   else if (Math.abs(num - 10) < 0.001) return true; // is close to 10
//   return false;
// }

// function display_speed (num) {
//   return `${greater_than_or_equal_10(num) ? 
//     num.toFixed(0) : 
//     num.toFixed(1)}x`;
// }

// // track whether or not option key is pressed
// let option_pressed = 0;
// window.onkeyup = function(e) {if (e.keyCode === 18) option_pressed = 0;}
// window.onkeydown = function(e) {if (e.keyCode === 18) option_pressed = 1;}

// let old_speed = vids ? 1 : vids[0].playbackRate; // TODO: ignore if no videos
// let new_speed; // TODO: later set old speed to new speed
// let valid_command = true;
// document.onkeydown = function (e) {
//   if (option_pressed || true) { // this is Panopto - don't use option key
//     console.log('option pressed');
//     e = e || window.event;

//     // create dom object to display keypress
//     let div = document.createElement("div");
//     div.classList.add('keypress_tracker');
//     div.innerHTML = '[Error]';
    
//     // numbers and letters except i: ± 0.5 
//     // '~': 0.5x, '0': 10x, '-': 20x, '=': 30x.
//     // j- k+
//     // (shift+num : ± 0.5)
//     switch (e.keyCode) {
//       case 18: break; // option
//       // j- k+
//       case 74: new_speed = old_speed - (less_than_or_equal_10(old_speed) ? 0.1 : 1); break; // j
//       case 75: new_speed = old_speed + (less_than_10(old_speed) ? 0.1 : 1); break; // k
//       // numbers
//       case 192: new_speed = 0.5; break; // ~
//       case 49: new_speed = 1; break; // 1
//       case 50: new_speed = 2; break; // 2
//       case 51: new_speed = 3; break; // 3
//       case 52: new_speed = 4; break; // 4
//       case 53: new_speed = 5; break; // 5
//       case 54: new_speed = 6; break; // 6
//       case 55: new_speed = 7; break; // 7
//       case 56: new_speed = 8; break; // 8
//       case 57: new_speed = 9; break; // 9
//       case 48: new_speed = 10; break; // 0
//       case 189: new_speed = 20; break; // -
//       case 187: new_speed = 1000; break; // =
//       // letters between nums -or- shift -> +0.5 speed    // reserve i for inspect element command
//       case 81: new_speed = 1.5; break; // q
//       case 87: new_speed = 2.5; break; // w
//       case 69: new_speed = 3.5; break; // e
//       case 82: new_speed = 4.5; break; // r
//       case 84: new_speed = 5.5; break; // t
//       case 89: new_speed = 6.5; break; // y
//       case 85: new_speed = 7.5; break; // u
//       /* case 73: new_speed = 8.5; break; // i */
//       case 79: new_speed = 9.5; break; // o
//       case 80: new_speed = 10.5; break; // p
//       default: valid_command = false;
//     }
//     if (new_speed != old_speed) {
//       console.log(`old speed was ${old_speed} and new speed is ${new_speed}`);
//       valid_command = true;
//     }
//     if (valid_command) {
//       console.log(`\t\t--- NEW PLAYBACK RATE: ${display_speed(new_speed)} ---`); 
//       for (vid of vids) vid.playbackRate = new_speed;
//       div.innerHTML = display_speed(new_speed);
//       old_speed = new_speed;

//       // show keypress tracker, then fade
//       document.body.appendChild(div);
//       setTimeout(function() {
//         div.style.opacity = 0;
//       }, 1000_000);
//       setTimeout(function() {
//         document.body.removeChild(div);
//       }, 2000_000);
//     } else console.log(`\t\t--- KEYPRESS IGNORED ---`);

//   }
//   else {
//     console.log('option not pressed');
//   }
// };