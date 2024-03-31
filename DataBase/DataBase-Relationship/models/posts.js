const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
.then(()=> console.log("Connection successfull"))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    cotent: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User", userSchema)
const Post = mongoose.model("Post", postSchema)

const getData = async() => {
    let result = await Post.find({}).populate("user", "username")
    console.log(result)
}

getData()