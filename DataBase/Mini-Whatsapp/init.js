const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("Connection successfull")
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
};

let allChats = [{
        from: "Sahil",
        to: "Shreya",
        msg: "Velapanti na kro",
        created_at: new Date(),
    },
    {
        from: "Mihir",
        to: "Devshrut",
        msg: "No comments",
        created_at: new Date(),
    },
    {
        from: "Manav",
        to: "Mihir",
        msg: "Random failed jokes",
        created_at: new Date(),
    },
    {
        from: "Shahil",
        to: "Parth",
        msg: "Pochine msg krje",
        created_at: new Date(),
    },
    {
        from: "Ronit",
        to: "Chirag",
        msg: "Maja nai avai",
        created_at: new Date(),
    }
];

Chat.insertMany(allChats);