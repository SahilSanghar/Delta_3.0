const mongoose = require('mongoose');

main()
.then(() => {
    console.log("Connection successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
};

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.findOneAndDelete( {name: "Peter"})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})

// User.deleteMany({ name: "adam" })
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.findByIdAndUpdate({ _id: '65c1c4546b82ebaa170d091a' }, { age: 25 }, { new: true })
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.updateMany( {age: {$gt: 47}}, {age: 55})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// }) 

// User.find({_id: '65c1c4546b82ebaa170d091a'}).then((res) => {
//     console.log(res[0].name);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.insertMany([
//     { name: "Tony", email: "tony@gamil.com", age: 52 },
//     { name: "Bruce", email: "bruce@gamil.com", age: 48 },
//     { name: "Peter", email: "peter@gamil.com", age: 30 },
// ]).then((res) => {
//     console.log(res);
// });

// const user1 = new User ({
//     name: "adam",
//     email: "adam@gmail.com",
//     age: 48,
// })

// user1
// .save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });
