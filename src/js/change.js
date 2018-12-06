const btnrestart = document.getElementById('restart');
const puzzlecontainer = document.getElementById('containerStart');

const divWrapperContainer1 = document.createElement('div');
divWrapperContainer1.setAttribute("class", 'empty');
const divContainer1 = document.createElement('div');
divContainer1.setAttribute("class", 'fill');
divContainer1.setAttribute("draggable", 'true');
const img1 = document.createElement('img');

const divContainer2 = document.createElement('div');
const divWrapperContainer2 = document.createElement('div');
divWrapperContainer2.setAttribute("class", 'empty');
divContainer2.setAttribute("class", 'fill');
divContainer2.setAttribute("draggable", 'true');
const img2 = document.createElement('img');

const divContainer3 = document.createElement('div');
const divWrapperContainer3 = document.createElement('div');
divWrapperContainer3.setAttribute("class", 'empty');
divContainer3.setAttribute("class", 'fill');
divContainer3.setAttribute("draggable", 'true');
const img3 = document.createElement('img');

const divContainer4 = document.createElement('div');
const divWrapperContainer4 = document.createElement('div');
divWrapperContainer4.setAttribute("class", 'empty');
divContainer4.setAttribute("class", 'fill');
divContainer4.setAttribute("draggable", 'true');
const img4 = document.createElement('img');

const divContainer5 = document.createElement('div');
const divWrapperContainer5 = document.createElement('div');
divWrapperContainer5.setAttribute("class", 'empty');
divContainer5.setAttribute("class", 'fill');
divContainer5.setAttribute("draggable", 'true');
const img5 = document.createElement('img');

const divContainer6 = document.createElement('div');
const divWrapperContainer6 = document.createElement('div');
divWrapperContainer6.setAttribute("class", 'empty');
divContainer6.setAttribute("class", 'fill');
divContainer6.setAttribute("draggable", 'true');
const img6 = document.createElement('img');

const divContainer7 = document.createElement('div');
const divWrapperContainer7 = document.createElement('div');
divWrapperContainer7.setAttribute("class", 'empty');
divContainer7.setAttribute("class", 'fill');
divContainer7.setAttribute("draggable", 'true');
const img7 = document.createElement('img');

const divContainer8 = document.createElement('div');
const divWrapperContainer8 = document.createElement('div');
divWrapperContainer8.setAttribute("class", 'empty');
divContainer8.setAttribute("class", 'fill');
divContainer8.setAttribute("draggable", 'true');
const img8 = document.createElement('img');

const divContainer9 = document.createElement('div');
const divWrapperContainer9 = document.createElement('div');
divWrapperContainer9.setAttribute("class", 'empty');
divContainer9.setAttribute("class", 'fill');
divContainer9.setAttribute("draggable", 'true');
const img9 = document.createElement('img');

function addImage() {

  const puzzle1 = "puzzle1";
  const puzzle2 = "puzzle2";
  const puzzle3 = "puzzle3";
  const puzzle4 = "puzzle4";
  const puzzle5 = "puzzle5";


  let numero = Math.floor(Math.random() * 5) + 1;
  let srcImage1;
  let srcImage2;
  let srcImage3;
  let srcImage4;
  let srcImage5;
  let srcImage6;
  let srcImage7;
  let srcImage8;
  let srcImage9;
  switch (numero){
    case 1:
      srcImage1 = 'img/'+ puzzle1 +'/600x600a1.jpg';
      srcImage2 = 'img/'+ puzzle1 +'/600x600a2.jpg';
      srcImage3 = 'img/'+ puzzle1 +'/600x600a3.jpg';
      srcImage4 = 'img/'+ puzzle1 +'/600x600a4.jpg';
      srcImage5 = 'img/'+ puzzle1 +'/600x600a5.jpg';
      srcImage6 = 'img/'+ puzzle1 +'/600x600a6.jpg';
      srcImage7 = 'img/'+ puzzle1 +'/600x600a7.jpg';
      srcImage8 = 'img/'+ puzzle1 +'/600x600a8.jpg';
      srcImage9 = 'img/'+ puzzle1 +'/600x600a9.jpg';
      break;
    case 2:
      srcImage1 = 'img/'+ puzzle2 +'/600x600a1.jpg';
      srcImage2 = 'img/'+ puzzle2 +'/600x600a2.jpg';
      srcImage3 = 'img/'+ puzzle2 +'/600x600a3.jpg';
      srcImage4 = 'img/'+ puzzle2 +'/600x600a4.jpg';
      srcImage5 = 'img/'+ puzzle2 +'/600x600a5.jpg';
      srcImage6 = 'img/'+ puzzle2 +'/600x600a6.jpg';
      srcImage7 = 'img/'+ puzzle2 +'/600x600a7.jpg';
      srcImage8 = 'img/'+ puzzle2 +'/600x600a8.jpg';
      srcImage9 = 'img/'+ puzzle2 +'/600x600a9.jpg';
      break;
    case 3:
      srcImage1 = 'img/'+ puzzle3 +'/600x600a1.jpg';
      srcImage2 = 'img/'+ puzzle3 +'/600x600a2.jpg';
      srcImage3 = 'img/'+ puzzle3 +'/600x600a3.jpg';
      srcImage4 = 'img/'+ puzzle3 +'/600x600a4.jpg';
      srcImage5 = 'img/'+ puzzle3 +'/600x600a5.jpg';
      srcImage6 = 'img/'+ puzzle3 +'/600x600a6.jpg';
      srcImage7 = 'img/'+ puzzle3 +'/600x600a7.jpg';
      srcImage8 = 'img/'+ puzzle3 +'/600x600a8.jpg';
      srcImage9 = 'img/'+ puzzle3 +'/600x600a9.jpg';
      break;
    case 4:
      srcImage1 = 'img/'+ puzzle4 +'/600x600a1.jpg';
      srcImage2 = 'img/'+ puzzle4 +'/600x600a2.jpg';
      srcImage3 = 'img/'+ puzzle4 +'/600x600a3.jpg';
      srcImage4 = 'img/'+ puzzle4 +'/600x600a4.jpg';
      srcImage5 = 'img/'+ puzzle4 +'/600x600a5.jpg';
      srcImage6 = 'img/'+ puzzle4 +'/600x600a6.jpg';
      srcImage7 = 'img/'+ puzzle4 +'/600x600a7.jpg';
      srcImage8 = 'img/'+ puzzle4 +'/600x600a8.jpg';
      srcImage9 = 'img/'+ puzzle4 +'/600x600a9.jpg';
      break;
    case 5:
      srcImage1 = 'img/'+ puzzle5 +'/600x600a1.jpg';
      srcImage2 = 'img/'+ puzzle5 +'/600x600a2.jpg';
      srcImage3 = 'img/'+ puzzle5 +'/600x600a3.jpg';
      srcImage4 = 'img/'+ puzzle5 +'/600x600a4.jpg';
      srcImage5 = 'img/'+ puzzle5 +'/600x600a5.jpg';
      srcImage6 = 'img/'+ puzzle5 +'/600x600a6.jpg';
      srcImage7 = 'img/'+ puzzle5 +'/600x600a7.jpg';
      srcImage8 = 'img/'+ puzzle5 +'/600x600a8.jpg';
      srcImage9 = 'img/'+ puzzle5 +'/600x600a9.jpg';
      break;
    default:
      srcImage1 = 'img/'+ puzzle1 +'/600x600a1.jpg';
      srcImage2 = 'img/'+ puzzle1 +'/600x600a2.jpg';
      srcImage3 = 'img/'+ puzzle1 +'/600x600a3.jpg';
      srcImage4 = 'img/'+ puzzle1 +'/600x600a4.jpg';
      srcImage5 = 'img/'+ puzzle1 +'/600x600a5.jpg';
      srcImage6 = 'img/'+ puzzle1 +'/600x600a6.jpg';
      srcImage7 = 'img/'+ puzzle1 +'/600x600a7.jpg';
      srcImage8 = 'img/'+ puzzle1 +'/600x600a8.jpg';
      srcImage9 = 'img/'+ puzzle1 +'/600x600a9.jpg';
  }
  //1
  //img1.removeAttibute("src");
  img1.setAttribute("src", srcImage1);
  img1.setAttribute("alt", 'puzzle1');
  divContainer1.appendChild(img1);
  divWrapperContainer1.appendChild(divContainer1);
  puzzlecontainer.appendChild(divWrapperContainer1);

  //2
  //img2.removeAttibute("src");
  img2.setAttribute("src", srcImage2);
  img2.setAttribute("alt", 'puzzle2');
  divContainer2.appendChild(img2);
  divWrapperContainer2.appendChild(divContainer2);
  puzzlecontainer.appendChild(divWrapperContainer2);


  //3
  //img3.removeAttibute("src");
  img3.setAttribute("src", srcImage3);
  img3.setAttribute("alt", 'puzzle3');
  divContainer3.appendChild(img3);
  divWrapperContainer3.appendChild(divContainer3);
  puzzlecontainer.appendChild(divWrapperContainer3);
  
  //4
  //img4.removeAttibute("src");
  img4.setAttribute("src", srcImage4);
  img4.setAttribute("alt", 'puzzle4');
  divContainer4.appendChild(img4);
  divWrapperContainer4.appendChild(divContainer4);
  puzzlecontainer.appendChild(divWrapperContainer4);


  //5
  //img5.removeAttibute("src");
  img5.setAttribute("src", srcImage5);
  img5.setAttribute("alt", 'puzzle5');
  divContainer5.appendChild(img5);
  divWrapperContainer5.appendChild(divContainer5);
  puzzlecontainer.appendChild(divWrapperContainer5);

  //6
  //img6.removeAttibute("src");
  img6.setAttribute("src", srcImage6);
  img6.setAttribute("alt", 'puzzle6');
  divContainer6.appendChild(img6);
  divWrapperContainer6.appendChild(divContainer6);
  puzzlecontainer.appendChild(divWrapperContainer6);


  //7
  //img7.removeAttibute("src");
  img7.setAttribute("src", srcImage7);
  img7.setAttribute("alt", 'puzzle7');
  divContainer7.appendChild(img7);
  divWrapperContainer7.appendChild(divContainer7);
  puzzlecontainer.appendChild(divWrapperContainer7);

  //8
  //img8.removeAttibute("src");
  img8.setAttribute("src", srcImage8);
  img8.setAttribute("alt", 'puzzle8');
  divContainer8.appendChild(img8);
  divWrapperContainer8.appendChild(divContainer8);
  puzzlecontainer.appendChild(divWrapperContainer8);

  //9
  //img9.removeAttibute("src");
  img9.setAttribute("src", srcImage9);
  img9.setAttribute("alt", 'puzzle9');
  divContainer9.appendChild(img9);
  divWrapperContainer9.appendChild(divContainer9);
  puzzlecontainer.appendChild(divWrapperContainer9);

}

window.addEventListener('load', addImage);
//btnrestart.addEventListener('onclick', changeImage);
