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

const Student = mongoose.model("Student", schema);

function listOfStudents(callBack) {
    Student.find({}).exec(function (err, students) {
        if (err) {
            callBack(err);
        } else {
            callBack(null, students);
        }
    });
}

module.exports = {
    students: listOfStudents,
};
