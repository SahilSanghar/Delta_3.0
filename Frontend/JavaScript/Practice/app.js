const student = {
    name: "sahil",
    age: 22,
    username: "thats.__.sahil",
    password: "abcd",
    city: "Ahmedabad",
};

let {username: user, password, city:place= "mumbai"} = student;