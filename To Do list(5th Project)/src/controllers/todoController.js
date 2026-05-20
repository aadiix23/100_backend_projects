const toDoService = require("../service/toDoService")

async function getTodos(req,res) {
   try {
       const todos = await toDoService.getAllTodos();
       res.status(200).json(todos);
   } catch (error) {
       res.status(500).json({
           message: error.message
       });
   }
}

async function createTodo(req,res) {
   try {
       const { title } = req.body;
       const todo = await toDoService.createTodos(title);
       res.status(201).json(todo);
   } catch (error) {
       res.status(500).json({
           message: error.message
       });
   }
}

async function updateTodo(req,res) {
   try {
       const { id } = req.params;
       const { completed } = req.body;
       const updatedTodo = await toDoService.updateExistingTodo(id, completed);
       res.status(200).json(updatedTodo);
   } catch (error) {
       res.status(500).json({
           message: error.message
       });
   }
}

async function deleteToDo(req,res) {
   try {
       const { id } = req.params;
       const deletedTodo = await toDoService.removeTodo(id);
       res.status(200).json(deletedTodo);
   } catch (error) {
       res.status(500).json({
           message: error.message
       });
   }
}

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteToDo
}
