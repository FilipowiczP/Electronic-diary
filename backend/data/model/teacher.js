const mongoose, { Schema } = require("mongoose");

const schema = new Schema(
    {
        id: Number,
        name: String,
        lastName: String,
        password: String
    },
    {
        collection: "Teacher",
    }
);