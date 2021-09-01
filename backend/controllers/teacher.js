const { Router } = require('express');
const models = require('../data/model/teacher');

const Teacher = Router();

Teacher.get("/", (req, res) => {
    models.teacher(function (err, teacher) {
        res.send(err ? [] : teacher);
    });
})