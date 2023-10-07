'use strict';

const express = require('express');
const alumnoController = require('../controllers/alumnoController');
const router = express.Router();

const {getAllAlumnos, getAlumnoById, addAlumno, updateAlumno, deleteAlumno} = alumnoController;

router.get('/alumnos', getAllAlumnos);
router.get('/alumno/:id', getAlumnoById);
router.post('/alumno/', addAlumno);
router.put('/alumno/:id', updateAlumno);
router.delete('/alumno/:id', deleteAlumno);


module.exports={
    routes: router
}