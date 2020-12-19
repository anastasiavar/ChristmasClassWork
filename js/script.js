'use strict';

const colors = [
  'yellow',
  'yellowgreen',
  'red',
  'blue',
  'cyan',
  'orange',
  'pink',
];

const randomInteger = (n) => Math.floor(Math.random() * n); // Random number in [0, n)

/*
 * User input
 * -------------------------------------------------- */

let height;

while (true) {
  height = prompt('How tall do you want the tree to be?', 10) * 1;

  if (height) {
    break;
  }
}

/*
 * Tree construction
 * -------------------------------------------------- */

const tree = document.getElementById('tree');

let count = 0;

for (let i = 0; i < height - 1; i++) {
  const row = document.createElement('div');
  
  for (let j = 0; j < 2 * i + 1; j++) {
    const light = document.createElement("span");
    light.id = `light-${j}`;
    light.classList.add("light");
    light.innerText = "*";
    
    /*
		challenge 1.0 - display the tree - set it to the DOM
    */

   /*
   challenge 1.1 - set a star at the top of the tree tip: you need also to put an id that is included on css the name of the id is  'star'
   */
  
  /* let star = document.createElement("★"); */
  
  row.appendChild(light);
  
  if ( i == 0 ){
    light.id = `star`;
    light.innerText = "★";
    
  }
}
tree.appendChild(row);
}

const stub = document.createElement('div');
stub.id = 'stub';
stub.innerText = '🟫';
tree.appendChild(stub);

/*
* Events
* -------------------------------------------------- */


/*
challenge 2.0 - set a light with DOM event listener when the mouse is on the specific element with the helper function "randomInteger" 
you will use the array colors to get a random one => * colors[randomInteger(colors.length)] *
*/

tree.addEventListener("mouseover", (event) => {
  const el = event.target;
  el.style.color = colors[randomInteger(colors.length-1)];
});

/*
challenge 2.1 - reset the lights with DOM event listener when the mouse is away
*/

tree.addEventListener("mouseout", (event) => {
  const el = event.target;
  el.style.color = "green";
});

/*
 * Timers
 * -------------------------------------------------- */

setInterval(() => {
  const star = document.getElementById('star');
  star.classList.toggle('on');
}, 2 * 1000);

setInterval(() => {
  const light = document.getElementById(`light-${randomInteger(count + 1)}`);
  if (light) {
    light.style.color = colors[randomInteger(colors.length)];
  }
}, 1 * 1000);