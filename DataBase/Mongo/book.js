const mongoose = require('mongoose');

main()
.then(() => {
    console.log("Connection successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Amazon")
};

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: [ "fiction", "non-fiction"]
    },
    genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Marvel comics v2",
    author: "Stan lee",
    price: 1800,
    genre: ["Comics", "Superhero"],
});

Book.findByIdAndUpdate(_id="65c22e53aa8ea0181625df7a", { price: -800 }, { runValidators: true })
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err.errors.price.properties.message);
});


// book1
// .save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });