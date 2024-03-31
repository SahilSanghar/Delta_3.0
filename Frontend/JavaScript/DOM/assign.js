let body = document.querySelector('body');

let input = document.createElement("input");
input.setAttribute('placeholder', 'username');
body.append(input);

let button = document.createElement("button");
button.innerText = "Click me";
button.setAttribute('id', 'btn');
body.append(button);

let btn = document.querySelector('#btn');
btn.classList.add("btnStyle")

let h1 = document.createElement('h1');
h1.innerText = "DOM Practice";
h1.classList.add("h1Style");
body.prepend(h1);

let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(p);
