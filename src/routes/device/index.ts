import express from "express";
import PostRouter from "./post.router";
import UserRouter from "./user.router";
import CommentRouter from "./comment.router";

const router = express.Router();

router.use("/users", UserRouter);
router.use("/posts", PostRouter);
router.use("/comments", CommentRouter);

export default router;