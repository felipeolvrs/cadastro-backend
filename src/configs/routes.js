const { Router } = require("express");
const router = new Router();

const userRoutes = require("../apps/views/userViews");
const courseRoutes = require("../apps/views/courseViews");

router.use(userRoutes);
router.use(courseRoutes);

router.get("/", (req, res) => {
  return res.send("Api está de pé");
});

module.exports = router;
