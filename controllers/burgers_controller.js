var burger = require("../models/burger.js");
var express = require("express");
const burgerfunction = require("../models/burger.js");
var router = express.Router();

router.put("/api/burgers/:id", (req,res) => {
    burgerfunction.updateOne(burgerID, result => {
        if(result.changedRows == 0){
            return res.status(404).end();
        } else { res.status(200).end();
        }
    });
});

router.get("/", function(req, res){
    burgerfunction.selectAll(function(data) {
        var object ={
            burgers: data
        };
        res.render("index", object);
    })
})

router.post("/api/burgers", function(req, res){
    burgerfunction.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(data) {
        res.json({ id: data.insertId});
    });
});


module.exports = router;