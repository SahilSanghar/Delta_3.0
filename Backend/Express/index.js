const express = require("express");

const app =express();

let port = 8080;

app.listen(port, () => {
    console.log(`App is listening through port ${port}`)
})

// app.use((req, res) => {
//     // console.log(req)
//     console.log("Request recieve")
//     let code = "<h1>Standar Response</h1><ul><li>Apple</li><li>Kiwi</li></u>"
//     res.send(code)
// })

app.get("/", (req,res) => {
    res.send("Hello i am root")
})
app.get("/:username/:id", (req,res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>Welcome to the @${username} and your id is ${id}`
    res.send(htmlStr)
})
app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("<h1>No queries found</h1>")
    }
    res.send(`<h1>Seach query: ${q}</h1>`)
})
