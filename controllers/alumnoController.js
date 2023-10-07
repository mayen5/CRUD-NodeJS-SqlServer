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
module.exports = {
    getAllAlumnos
}