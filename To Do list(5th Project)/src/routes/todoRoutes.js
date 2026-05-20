const express = require("express");
const router = express.Router();
const {getTodos,createTodo,deleteToDo,updateTodo}= require("../controllers/todoController");

router.get("/",getTodos);
router.post("/",createTodo);
router.post("/:id",updateTodo);
router.delete("/:id",deleteToDo);

module.exports = router;