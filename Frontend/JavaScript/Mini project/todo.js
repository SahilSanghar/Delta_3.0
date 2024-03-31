let todo = [];

let req = prompt("Enter your request")

while (true) {
    if(req =="quit") {
        console.log("quiting app");
        break;
    }

    if (req == "list") {
        console.log("---------------");
        for(let i=0; i<todo.length; i++){
        console.log(i, todo[i]);}
        console.log("---------------");
    }

    else if (req == "add") {
        let task = prompt("Enter task to add");
        todo.push(task)
        console.log("task added");
    }

    else if (req == "delete") {
        let idx = prompt("Enter task index");
        todo.splice(idx, 1);
        console.log("Task deleted");
    }
    else {
        console.log("wrong request");
    }
    req = prompt("Enter your request");
}