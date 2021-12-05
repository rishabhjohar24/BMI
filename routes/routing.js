const router = require("express").Router();
const controller = require("../controller/logic");

router.get("/entities", controller.show_Table);
router.get("/add", controller.add_entity);
router.post("/add", controller.post_entity);

module.exports = router;
