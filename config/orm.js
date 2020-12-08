const connection = require("./connection.js");

const orm = {

    // selectAll method
    selectAll: (tableInput, callback) => {

        // SQL query string - Return all records
        const queryString = "SELECT * FROM ??";

        // Query String
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    // insertOne method
    insertOne: (tableInput, colOneInput, colTwoInput, colOneValue, colTwoValue, callback) => {

        // SQL query string - Insert record
        const queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";

        // Query String
        connection.query(queryString, [tableInput, colOneInput, colTwoInput, colOneValue, colTwoValue], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    // UpdateOne method
    updateOne: (tableInput, setCol, setColVal, whereCol, whereColVal, callback) => {

        // SQL query string - Update record
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

        // Query String
        connection.query(queryString, [tableInput, setCol, setColVal, whereCol, whereColVal], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

};

// Export orm for burger.js model to use.
module.exports = orm;
