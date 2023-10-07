'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

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

module.exports = {
    getAlumnos
}