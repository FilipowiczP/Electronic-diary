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

const Teacher = mongoose.model("Teacher", schema);

function listOfTeachers(callBack) {
    Teacher.find({}).exec(function (err, teacher) {
        if (err) {
            callBack(err);
        } else {
            callBack(null, teacher);
        }
    });
}

module.exports = {
    teacher: listOfTeachers,
};