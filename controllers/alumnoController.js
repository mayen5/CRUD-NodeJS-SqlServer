'use strict';

const alumnoData = require('../data/alumnos');

const getAllAlumnos = async (req, res, next) => {
    try {

        const alumnosList = await alumnoData.getAlumnos();
        res.send(alumnosList);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAlumnoById = async (req, res, next) => {
    try {
        const alumnoId = req.params.id;
        const alumno = await alumnoData.getAlumnoById(alumnoId);
        res.send(alumno);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addAlumno = async (req, res, next) => {
    try {
        const data = req.body;
        const alumnoCreated = await alumnoData.createAlumno(data);
        res.send(alumnoCreated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateAlumno = async (req, res, next) => {
    try {

        const alumnoId = req.params.id;
        const data = req.body;
        const alumnoUpdated = await alumnoData.updateAlumno(alumnoId, data);
        res.send(alumnoUpdated);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteAlumno = async (req, res, next) => {
    try {

        const alumnoId = req.params.id;
        const alumnoDeleted = await alumnoData.deleteAlumno(alumnoId);
        res.send(alumnoDeleted);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllAlumnos,
    getAlumnoById,
    addAlumno,
    updateAlumno,
    deleteAlumno
}