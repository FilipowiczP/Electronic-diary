const { Router } = require('express');
// const models = require('../data/model/student');
const { authenticateMiddleware } = require("./auth/authenticationAdmin");

const Student = Router();

Student.get("/student", authenticateMiddleware, (req, res) => {
    models.student(function (err, student) {
        res.send(err ? [] : student);
    });
})

module.exports = {
    Student: Student
}