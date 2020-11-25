var orm = require("../config/orm.js");

var burger = {

    insertOne: function(callback){
        orm.insertOne("burgers", function(data){
            callback(data);
        });
    },
    updateOne: function(callback){
        orm.updateOne("burgers", function(data){
            callback(data);
        });
    },
    selectAll: (callback) => {
        orm.selectAll("burgers", (data) => {
            callback(data)
        })

    }

};

module.exports = burger;