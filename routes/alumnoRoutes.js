'use strict';

const express = require('express');
const alumnoController = require('../controllers/alumnoController');
const router = express.Router();

const {getAllAlumnos} = alumnoController;

router.get('/alumnos', getAllAlumnos);

module.exports={
    routes: router
}