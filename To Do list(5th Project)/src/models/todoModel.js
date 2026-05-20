const pool = require("../config/db");

async function getTodo(){
    const result = await pool.query(
        "SELECT * FROM todos ORDER BY id ASC"
    );
    return result.rows;
}
async function createTodo(title){
    const result = await pool.query(
        "insert into todos(title) VALUES($1) RETURNING *",
        [title]
    );
    return result.rows[0];
}
async function updateTodo(id,completed) {
    const result = await pool.query(
        "UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *",
        [completed,id]
    );
    return result.rows[0];
}

async function deleteTodo(id) {
    await pool.query(
         "DELETE FROM todos WHERE id = $1",
         [id]
    )
}

module.exports = {
     getTodo,createTodo,updateTodo,deleteTodo
}