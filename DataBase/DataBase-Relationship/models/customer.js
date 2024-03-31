const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.set('strictQuery', true);

main()
.then(()=> console.log("Connection successfull"))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        }
    ]
}) 

// customerSchema.pre("findOneAndDelete", async() => {
//     console.log("PRE middleware")
// })

customerSchema.post("findOneAndDelete", async(customer) => {
    if(customer.orders.legth) {
        let res = await Order.deleteMany({ _id: { $in: customer.orders }})
        console.log(res)
    }
})

const Order = mongoose.model("Order", orderSchema)
const Customer = mongoose.model("Customer", customerSchema)

const findCustomer = async() => {
    // let cust1 = new Customer({
    //     name: "Rahul Kumar",
    // })

    // let order1 = await Order.findOne({item: "Chips"})
    // let order2 = await Order.findOne({item: "Chocolate"})

    // cust1.orders.push(order1)
    // cust1.orders.push(order2)

    let result = await Customer.find({}).populate("orders")
    console.log(result[0])
}

// findCustomer()
// const addOrders = async () => {
//     let result = await Order.insertMany(
//         [{item: "Samosa", price: 10},
//         {item: "Chips", price: 12},
//         {item: "Chocolate", price: 40}]
//     )
//     console.log(result)
// }

// addOrders()

const addCust = async () => {
    let newCust = new Customer({
        name: "Karan Arjun"
    })

    let newOrder = new Order({
        item: "Burger",
        price: 250,
    })

    newCust.orders.push(newOrder);

    await newOrder.save()
    await newCust.save()

    console.log("Added new customer")
}

addCust()



const delCust = async() => {
    let data = await Customer.findByIdAndDelete("65d8ac39d695ac52da416708")
    console.log(data)
}

// delCust()


