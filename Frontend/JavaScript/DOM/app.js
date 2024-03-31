let body = document.querySelector('body');

let p = document.createElement('p');
p.innerText = "Hey i'm red";
p.style.color = 'red';
body.append(p);

let h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.innerText = "i'm a blue h3";
body.append(h3);

let div = document.createElement('div');
div.style.backgroundColor = "pink";
div.style.border = "1px solid black";
body.insertAdjacentElement("afterend", div);

let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
let divP = document.createElement('p');
divP.innerText = "Me too";

div.appendChild(h1);
div.appendChild(divP);
