const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    address: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
    },
    phone: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Guest", guestSchema);