const express = require("express"),
	  exphbs  = require("express-handlebars"),
	  router  = express.Router();

//root route
router.get("/", function(req, res){
    res.render("index", {layout: false});
});

module.exports = router;