const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");




router.post("/createComment/:id",  commentsController.createComment);
router.put("/likeComment/:postid/:commentid", commentsController.likeComment);
router.delete("/deleteComment/:postid/:commentid", commentsController.deleteComment);

module.exports = router;
