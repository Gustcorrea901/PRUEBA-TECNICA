//librerias----------------------------------------------------------------------------
import pg from "pg";

//Variables de entorno----------------------------------------------------------------
const DB_HOST = "localhost";
const DB_USER = "postgres";
const DB_PASSWORD = "Gus1016*";
const DB_NAME = "microservicio_db";
const DB_PORT = 5432;

// Configuracion PostgreSQL -----------------------------------------------------------
export const pool = new pg.Pool({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD
});