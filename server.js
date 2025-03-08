// Modulos y librerias----------------------------------------------------------------------------
const express = require('express');
const cors = require('cors');
const { pool } = require("./Conexion_PostgreSQL/conexion_PostgreSQL.js");

//Configurar Servidor-----------------------------------------------------------------
const app = express();
const port = process.env.PORT || 3000;

 //Configuracion para que angular pueda realizar peticiones ---------------------------
app.use(cors());
app.use(express.json());

const getUsuarios = async (req, res) => {
    try {
        const resultadoConsulta = await pool.query('SELECT * FROM usuarios');
        res.json(resultadoConsulta.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
};

app.get("/api/data", getUsuarios);

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:${port}"+"/api/data");
});