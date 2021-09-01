const { Router } = require('express');
const models = require('../data/model/student');

const Student = Router();

Student.get("/", (req, res) => {
    models.student(function (err, student) {
        res.send(err ? [] : student);
    });
})