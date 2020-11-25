///object relationship mapper

var connection = require("../config/connection.js");

var orm = {

    selectAll: (input,cb) => {
        var queryString = "SELECT * FROM " + input + ";"
        connection.query(queryString, [input], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },  
    insertOne: (input, oneI, twoI, oneV, twoV, cb) => {
        var queryString = "INSERT INTO ?? (??,??) VALUES (?,?)";
        connection.query(queryString, [input, oneI, twoI, oneV, twoV], 
            (err, data) => {
                if (err) throw err;
                cb(data);
            });
    },
    updateOne: (input, set, val, where, whereval, cb) => {
        var queryString = "UPDATE ?? SET ?? = ?";
        connection.query(queryString, [input, set, val, where, whereval], (err, data) => {
            if(err) throw err;
            cb(data)
        })
    }
}

module.exports = orm;