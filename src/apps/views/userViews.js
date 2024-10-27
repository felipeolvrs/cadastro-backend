const { Router } = require("express");
const router = new Router();
const userController = require("../controller/userController");

router.get("/usuarios", userController.getUser);
router.post("/usuarios", userController.postUser);
router.put("/usuarios/:id", userController.putUser);
router.delete("/usuarios/:id", userController.deleteUser);

module.exports = router;
