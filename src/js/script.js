// ///////////
// variables//
// ///////////
const loarding = document.getElementById('loarding');
const container = document.getElementById('container');
const fills = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');
const order = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const orderIncomplete = [];
let counter = 0;
let num;
let moves = 0;
let right = 0;
let finished;
let resoult;
// variables pop up
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const btnCerrarPopup = document.getElementById('btn-cerrar-popup');
const btnreload = document.getElementById('reload');

// /////////////////////
// function rungame/////
// /////////////////////
function dragAndDrop() {
  // Fill listeners
  for (const fill of fills) {
    fill.setAttribute('data', counter);
    fill.addEventListener('dragstart', () => { // eslint-disable-line
      fill.className += ' hold';
      num = fill.getAttribute('data');
      // console.log(orderIncomplete);
      setTimeout(() => (fill.className = 'invisible'), 0); // eslint-disable-line
    });
    fill.addEventListener('dragend', () => {
      fill.className = 'fill';
    });
    counter += 1;
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
      // ///////////////
      // puzzle review//
      // ///////////////
      moves += 1;
      check(); // eslint-disable-line
    });
  }

  // /////////////
  // SHOW RESULT//
  // /////////////
  function showResoult() {
    if (finished === true) {
      resoult = 'ganaste';
    } else {
      resoult = 'perdiste';
    }
    const p = document.createElement('p');
    p.innerHTML = resoult;

    const a = document.getElementsByTagName('a')[1];
    popup.insertBefore(p, a);
  }
  // ////////////
  // open popUp//
  // ////////////
  function openPopUp() {
    // show pop up
    overlay.classList.add('active');
    popup.classList.add('active');
    // clouse pop up
    btnCerrarPopup.addEventListener('click', function (e) {
      e.preventDefault();
      overlay.classList.remove('active');
      popup.classList.remove('active');
    });
    showResoult();
  }

  // ///////////////////////
  // verification function//
  // ///////////////////////
  function check() {
    if (moves >= 9) {
      const completes = document.querySelectorAll('.complete');
      for (const complete of completes) {
        let id = complete.getAttribute('id');
        id = parseInt(id);  // eslint-disable-line
        orderIncomplete.push(id);
        // console.log(orderIncomplete);
        // console.log(order);
        // console.log(id);
      }
      // console.log(completes);
      // console.log(order);
      // console.log(orderIncomplete);
      for (let i = 1; i <= 9; i += 1) {
        if (orderIncomplete[i] === order[i]) {
          right += 1;
          // console.log(right);
        }
      }
      if (right === 9) {
        finished = true;
      } else {
        finished = false;
      }
      openPopUp();
    }
  }
}
// ////////////////
// function loard//
// ////////////////
function loard() {
  loarding.style.display = 'none';
  container.style.display = 'block';
  dragAndDrop();
}
// /////////////////////
// function setTimeout//
// /////////////////////
window.setTimeout(loard, 2000);
// /////////////////
// function reload//
// /////////////////
btnreload.addEventListener('click', () => {
  location.reload(true); // eslint-disable-line
});
