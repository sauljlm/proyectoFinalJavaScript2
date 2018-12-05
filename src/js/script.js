// ///////////
// variables//
// ///////////
const loarding = document.getElementById('loarding');
const container = document.getElementById('container');
const fills = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');
const order = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let orderIncomplete = [];
let counter = 0;
let num;
let complete = 0;
let right = 0;
let finished;

// /////////////////////
// function rungame/////
// /////////////////////
function runGame() {
  // Fill listeners
  for (const fill of fills) {
    fill.setAttribute('data', counter);
    fill.addEventListener('dragstart', () => { // eslint-disable-line
      fill.className += ' hold';
      // console.log(fill);
      num = fill.getAttribute('data');
      setTimeout(() => (fill.className = 'invisible'), 0); // eslint-disable-line
    });
    fill.addEventListener('dragend', () => {
      fill.className = 'fill';
    });
    orderIncomplete.push(counter);
    counter++;
  }
  // Loop through empty boxes and add listeners
  for (const empty of empties) {
    empty.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    empty.addEventListener('dragenter', (e) => {
      e.preventDefault();
      empty.className += ' hovered';
    });
    empty.addEventListener('dragleave', () => {
      empty.className = 'empty';
    });
    empty.addEventListener('drop', () => { // eslint-disable-line
      empty.className = 'empty';
      empty.append(fills[num]);
      // console.log(fills.indexOf(fills[0]));

      // puzzle review
      check();
      // console.log('num');
    });
  }
  // /////////////
  // SHOW RESULT//
  // /////////////
  function showResult(finished) {
    if (finished === true) {
      // console.log('ganaste');
    }
    else {
      // console.log('perdiste');
    }
  }
  // ///////////////////////
  // verification function//
  // ///////////////////////
  function check() {
    if (complete < 9) {
    // orderIncomplete.push(counter);
      complete += 1;
    }
    if (complete >= 9) {
      for (let i = 0; i < 9; i++) {
        if (orderIncomplete[i] === order[i]) {
          right += 1;
          console.log("right");
        }
      }
      console.log(order);
      console.log(orderIncomplete);
      if (right === 9) {
        finished === true;
        console.log('ganaste');
      } else {
        finished === false;
        console.log('perdiste');
      }
      showResult(finished);
    }
  }
}
// ////////////////
// function loard//
// ////////////////
function loard() {
  loarding.style.display = 'none';
  container.style.display = 'block';
  runGame();
}
// /////////////////////
// function setTimeout//
// /////////////////////
window.setTimeout(loard, 2000);
