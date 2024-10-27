const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");

router.get("/cursos", courseController.getCourses);
router.post("/cursos", courseController.postCourse);
router.put("/cursos/:id", courseController.putCourse);
router.delete("/cursos/:id", courseController.deleteCourse);

module.exports = router;
