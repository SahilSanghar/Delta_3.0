const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const { runInNewContext } = require("vm");
const ExpressError = require("./ExpressError.js")

mongoose.set('strictQuery', false);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"));

main()
.then(() => {
    console.log("Connection successfull")
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
};

app.get("/", (req, res) => {
    res.send("root is working")
});

//Index route
app.get("/chats",asyncWrap(async (req, res) => {
    
    let Chats = await Chat.find();
    // console.log(Chats);
    res.render("index.ejs", { Chats }) 
    
}));

//New route
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "Page not found")
    res.render("new.ejs")
});

//Create route
app.post("/chats",asyncWrap(async (req, res, next) => {
    
    let { from, msg, to } = req.body;
    let newChat = new Chat ({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date(),
    });
    await newChat.save()
    res.redirect("/chats")
}));

function asyncWrap(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch(err => next(err))
    }
}

//New- Show route
app.get("/chats/:id",asyncWrap(async (req, res, next) => {
    
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if(!chat) {
        next(new ExpressError(404, "Chat not found"))
    }
    res.render("edit.ejs", { chat })
}));

//Edit route
app.get("/chats/:id/edit",asyncWrap( async (req, res) => {
    
    let { id } = req.params;
    let chat = await Chat.findById(id)
    res.render("edit.ejs", { chat })
    
}));

//Update route
app.put("/chats/:id",asyncWrap( async (req, res) => {
    
    let {id}= req.params;
    let {msg :newMsg}= req.body;
    let updatedChat= await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true , new: true});
    console.log(updatedChat);
    res.redirect("/chats");
}));

//Delete route
app.delete("/chats/:id",asyncWrap(async (req, res) => {
    
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats")
    
}));

const handleValidationError = (err) => {
    console.log("Error in validation try again ")
    console.dir(err.message)
    return err
}

app.use((err, req, res, next)=> {
    console.log(err.name)
    if(err.name === "ValidationError") {
        err = handleValidationError(err)
}
    next(err)
})
//Error handling middleware
app.use((err, req, res, next) => {
    let { status= 500, message= "some error occured"} = err;
    res.status(status).send(message)
})

app.listen(8080, () => {
    console.log("Server is listening to port 8080")
});

