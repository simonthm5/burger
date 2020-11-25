var orm = requie("../config/orm.js");

var burgerfunction = {
    selectAll: function(callback){
        orm.selectAll("burgers", function(data){
            callback(data);
        });
    },
    insertOne: function(callback){
        orm.insertOne("burgers", function(data){
            callback(data);
        });
    },
    updateOne: function(callback){
        orm.updateOne("burgers", function(data){
            callback(data);
        });
    }
};

module.exports = burgerfunction;