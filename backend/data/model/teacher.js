const mongoose, { Schema } = require("mongoose");

const schema = new Schema(
    {
        id: Number,
        name: String,
        lastName: String,
        adress: String,
        phone: Number,
        email: String,
        password: String,
        subject: String
    },
    {
        collection: "Teacher",
    }
);