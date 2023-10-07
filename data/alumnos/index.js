'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');
const alumnoRoutes = require('../../routes/alumnoRoutes');

const getAlumnos = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('alumnos');
        const alumnosList = await pool.request().query(sqlQueries.alumnosList);
        return alumnosList.recordset;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

const getAlumnoById = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('alumnos');
        const alumno = await pool.request()
            .input('alumnoId', sql.Int, id)
            .query(sqlQueries.alumnoById);
        return alumno.recordset;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

const createAlumno = async (alumnoData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('alumnos');
        const insertAlumno = await pool.request()
            .input('nombre', sql.NVarChar(255), alumnoData.nombre)
            .input('apellidos', sql.NVarChar(255), alumnoData.apellidos)
            .input('genero', sql.NVarChar(255), alumnoData.genero)
            .input('fechaNacimiento', sql.Date, alumnoData.fechaNacimiento)
            .query(sqlQueries.createAlumno);
        return insertAlumno.recordset;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

const updateAlumno = async (id, alumnoData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('alumnos');
        const updateAlumno = await pool.request()
            .input('id', sql.Int, id)
            .input('nombre', sql.NVarChar(255), alumnoData.nombre)
            .input('apellidos', sql.NVarChar(255), alumnoData.apellidos)
            .input('genero', sql.NVarChar(255), alumnoData.genero)
            .input('fechaNacimiento', sql.Date, alumnoData.fechaNacimiento)
            .query(sqlQueries.updateAlumno);
        return updateAlumno.recordset;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

const deleteAlumno = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('alumnos');
        const deleteAlumno = await pool.request()
            .input('id', sql.Int, id)
            .query(sqlQueries.deleteAlumno);
        return deleteAlumno.recordset;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

module.exports = {
    getAlumnos,
    getAlumnoById,
    createAlumno,
    updateAlumno,
    deleteAlumno
}