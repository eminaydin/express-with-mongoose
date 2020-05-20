const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required }, // String is shorthand for {type: String}
    name: String,
    lastName: String,
    age: { type: Number, min: 18 },
    adress: {
        street: String,
        city: String,
        number: Number,
        zip: Number
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
