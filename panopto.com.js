// video el
el = document.getElementById("primaryVideo");

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
  div.style.height = '20px';
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
  
  // letters in between numbers -or- shift+num -> +0.5. 
  // '0': 10x, '-': 20x, '=': 30x.
  // w or d: +0.5, s or a: -0.5
  let new_speed;
  switch (e.keyCode) {
    // w-s-a-d: up, down, left, right
    case 87: case 68: new_speed = el.playbackRate + 0.5; break; // up
    case 83: case 65: new_speed = el.playbackRate - 0.5; break; // down
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
    // shift -> +0.5 speed
    case 33: case 81: new_speed = 1.5; break; // ! or q
    case 64: case 87: new_speed = 2.5; break; // @ or w
    case 35: case 69: new_speed = 3.5; break; // # or e
    case 36: case 82: new_speed = 4.5; break; // $ or r
    case 37: case 84: new_speed = 5.5; break; // % or t
    case 94: case 89: new_speed = 6.5; break; // ^ or y
    case 38: case 85: new_speed = 7.5; break; // & or u
    case 42: case 73: new_speed = 8.5; break; // * or i
    case 40: case 79: new_speed = 9.5; break; // ( or o
    case 41: case 80: new_speed = 10.5; break; // ) or p
  }
  console.log(`\t\t--- NEW PLAYBACK RATE: ${new_speed} ---`); 
  el.playbackRate = new_speed;
  div.innerHTML = `{new_speed}`; // can this be an int? idk

  // show keypress tracker, then fade
  document.body.appendChild(div);
  setTimeout(function() {
    div.style.opacity = 0;
  }, 1000);

};