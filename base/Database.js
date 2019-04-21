'use strict';
var mysql = require('mysql');
var config = require('../config/config');

module.exports = {
    execute: (sql, callback) => {
        //const db_results = [];
        const connection = mysql.createConnection({
            host: config.server,
            user: config.serverUser,
            password: config.serverPassword,
            database: config.serverDatabase
        });

        connection.connect();

        connection.query(sql.toString(), (err, result, fields) => {
            if (err) callback(err, null);
            else callback(null, result);
        });
    }
}