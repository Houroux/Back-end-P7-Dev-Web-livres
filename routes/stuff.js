const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

stuffCtrl = require("../controllers/stuff");

router.get("/"), stuffCtrl.getAllBooks;

router.get("/:id"), stuffCtrl.getOneBook;

router.post("/", auth, stuffCtrl.createBook);

router.put("/:id", auth, stuffCtrl.modifyBook);

router.delete("/:id", auth, stuffCtrl.deleteBook);

module.exports = router;
