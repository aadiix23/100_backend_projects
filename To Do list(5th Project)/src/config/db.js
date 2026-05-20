const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

async function ensureTodosTable() {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS todos (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            completed BOOLEAN DEFAULT FALSE
        );
    `;
    await pool.query(createTableQuery);
}

pool.connect()
    .then(async () => {
        console.log("PostgreSQL Connected Successfully");
        await ensureTodosTable();
        console.log("Verified todos table exists");
    })
    .catch((err) => {
        console.log("Database Connection Failed");
        console.log(err.message);
    });

module.exports = pool;
