'use strict';

var db = require('./Database');

module.exports = {
    findall: (table, callback) => {
        db.execute("SELECT * FROM " + table, (err, data) => {
            if (err) {
                console.log(err);
                return;
            } else {
                if (err) callback(err, null);
                else callback(null, data);
            };
        });
    },
    findbyid: (table, id, callback) => {
        db.execute("SELECT * FROM " + table + " WHERE id = " + parseInt(id), (err, data) => {
            if (err) {
                console.log(err);
                return;
            } else {
                if (err) callback(err, null);
                else callback(null, data);
            };
        });
    },
    describe: (table, callback) => {
        db.execute("DESC " + table, (err, data) => {
            if (err) {
                console.log(err);
                return;
            } else {
                if (err) callback(err, null);
                else callback(null, data);
            };
        });
    },
    /* create: (table, params, callback) => {
        var keys = Object.keys(params);
        var values = Object.values(params);
        var sql = "INSERT INTO " + table + " (";
        sql += keys.join(',');
        sql += ") VALUES ('";
        sql += values.join("','");
        sql += "')";
        db.execute(sql, (err, data) => {
            if (err) {
                console.log(err);
                return;
            } else {
                if (err) callback(err, null);
                else callback(null, data);
            };
        });
    },
    update: (table, params, callback) => {
        var id = params.id;
        delete params.id;
        var _not_isset = (id === null || id === undefined) || (typeof id !== 'number');
        if (_not_isset) {
            console.log("Invalid id passed");
            return;
        }
        var attribute_pairs = [];
        for (const [index, element] of Object.entries(params)) {
            attribute_pairs.push(`${index} = '${element}`);
        }
        console.log(attribute_pairs);
        var sql = "UPDATE " + table + " SET (";
        sql += attribute_pairs.join("','");
        sql += "') WHERE id=" + id;
        console.log(sql);

        db.execute(sql, (err, data) => {
            if (err) {
                console.log(err.sqlMessage);
                return;
            } else {
                if (err) callback(err, null);
                else callback(null, data);
            };
        });
    }, */
}