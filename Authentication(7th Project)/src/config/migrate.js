const logger = require("../utils/logger");
const { pool } = require("./db");

const sql = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
  );
  CREATE INDEX IF NOT EXISTS idx_users_email ON users (email);
`;

async function migrate() {
  try {
    await pool.query(sql);
    logger.info("Migration completed successfully.");
  } catch (error) {
    logger.error("Migration failed.", error);
    process.exitCode = 1;
  }
}

migrate();
