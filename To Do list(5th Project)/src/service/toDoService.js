const todomodel = require("../models/todoModel")

async function getAllTodos() {
    return await todomodel.getTodo();
}
async function createTodos(title) {
    if(!title){
        throw new Error("Title is Required")
    }
    return await todomodel.createTodo(title);
}
async function updateExistingTodo(id,completed) {
    return await todomodel.updateTodo(id,completed)
}
async function  removeTodo(id) {
    return await todomodel.deleteTodo(id);
}

module.exports= {
    getAllTodos,createTodos,updateExistingTodo,removeTodo
}