const fills = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');
let counter = 0;
let num;
// Fill listeners
for (const fill of fills) {
  fill.setAttribute('data', counter);
  fill.addEventListener('dragstart', () => {
    fill.className += ' hold';
    // console.log(fill);
    num = fill.getAttribute('data')
    setTimeout(() => (fill.className = 'invisible'), 0);
  });
  fill.addEventListener('dragend', () => {
    fill.className = 'fill';
  });
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
  empty.addEventListener('drop', () => {
    empty.className = 'empty';
    empty.append(fills[num]);
    // console.log(fills.indexOf(fills[0]));
  });
}
