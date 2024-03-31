let inp = document.querySelector('input');
let ul = document.querySelector('ul');
let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    ul.appendChild(item);
    item.appendChild(delBtn);
    inp.value = "";
});

ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        // console.log(listItem);
        listItem.remove();
        console.log("delete");
    }
})

