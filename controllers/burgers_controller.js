var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.post("/", function(req, res) {
  burger.insertOne([
    req.body.name
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("TESTING NEW", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
      console.log("Testing UPDATE");
    }
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.deleteOne(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
      console.log("Testing DELETE");
    }
  });
});

module.exports = router;
