// declare connection here to be define later

var connection;

// requirements
var mysql = require("mysql");

// defer to Heroku db first  using if else
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);}
    else{
        connection = mysql.createConnection(
            {
                host:'localhost',
                port: 3306,
                user: "root",
                password: "hwkshdwm",
                database: "burgers_db"
            });}
connection.connect(function(err){
    if (err) {
        console.error("connection error: " + err.stack);
        return;
    }
console.log(connection.threadId + " is now active id");});

var notConnected = ["not connected"];
var nowRunning = ["now running"];

//export the connection
module.exports = connection;
