const express = require("express");
const app = express();
const ExpressError = require("./ExpressError")

//* Authentication
let checktoken = (req,res,next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next(); 
    } throw new ExpressError(401, "ACCESS DENIED!")
}

app.get("/api", checktoken, (req, res) => {
    res.send("data")
})
// app.use((req, res, next) => {
//     console.log("Hi, i am middleware")
//     res.send("middleware finished")
//     next()
// })

app.get("/", (req, res) => {
    res.send("Hi i am root")
})

app.get("/random", (req, res) => {
    res.send("This is a random page")
})

//* Error

// app.use((req, res) => {
//     res.status(404).send("Page not found")
// })

app.get("/err", (req, res) => {
    abcd = abcd
})

app.use((err, req, res, next) => {
    let { status=500, message= "some error occured" } = err;
    res.status(status).send(message)
})

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access is forbidden to admin")
})

//* Logger
app.use((req, res, next) => {
    req.time = Date.now();
    console.log(req.method, req.hostname, req.time, req.path)
})

app.listen(8080, () => {
    console.log("Server is listening to port 8080")
})