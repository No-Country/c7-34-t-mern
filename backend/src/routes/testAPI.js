var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    //res.send("COIN BOOK API is working properly");
    res.redirect("/register")
});

module.exports = router;
