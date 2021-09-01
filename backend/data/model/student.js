const mongoose, { Schema } = require("mongoose");

const schema = new Schema(
    {
        id: Number,
        index: Number,
        name: String,
        lastName: String,
        phone: Number,
        email: String,
        adress: String,
        password: String,
        year: Number,
        subject: [String || null],
    },
    {
        collection: "Student",
    }
);