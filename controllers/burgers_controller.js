var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.put("/api/burgers/:id", (req,res) => {
    burger.updateOne(burgerID, result => {
        if(result.changedRows == 0){
            return res.status(404).end();
        } else { res.status(200).end();
        }
    });
});

router.get("/", function(req, res){
    burger.selectAll(function(data) {
        var object ={
            burger: data
        };
        res.render("index", object);
    })
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(data) {
        res.json({ id: data.insertId});
    });
});


module.exports = router;