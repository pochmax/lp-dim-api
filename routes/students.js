var express = require("express");
var router = express.Router();

/* GET users listing. */
var student_controller = require("../controllers/student");

router.get("/", student_controller.getAll);

router.get("/:id", student_controller.getById);

router.put("/:id", student_controller.update);

router.post("/", student_controller.create);

router.delete("/:id", student_controller.delete);

module.exports = router;
