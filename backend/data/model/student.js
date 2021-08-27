import mongoose, { Schema } from "mongoose";

const schema = new Schema(
    {
        id: Number,
        name: String,
        lastName: String,
    },
    {
        collection: "Student",
    }
);