import { pool } from "../database/estudiante.connection.js";


// 1. Crear una función asíncrona para registrar un nuevo estudiante en la base de datos.

const create = async ({ id, nombre, curso, nivel }) => {

    const query = {
        text: `
            INSERT INTO ESTUDIANTES (ID, NOMBRE, CURSO, NIVEL)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `,
        values: [id, nombre, curso, nivel]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

// 2. Crear una función asíncrona para obtener por consola el registro de un estudiante por medio de su id.
const findOneById = async (id) => {
    const query = {
        text: `
            SELECT * FROM ESTUDIANTES WHERE id = $1
        `,
        values: [id]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

// 3. Crear una función asíncrona para obtener por consola todos los estudiantes registrados.
const findAll = async () => {
    const query = {
        text: 'SELECT * FROM ESTUDIANTES',

    }
    const { rows } = await pool.query(query)
    return rows
}

// 4. Crear una función asíncrona para actualizar los datos de un estudiante en la base de datos.
const update = async ({ id, nombre, curso, nivel }) => {
    const query = {
        text: `
            UPDATE ESTUDIANTES
            SET NOMBRE = $1,
            CURSO = $2,
            NIVEL = $3
            WHERE ID = $4
            RETURNING *
        `,
        values: [nombre, curso, nivel, id]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}


// 5. Crear una función asíncrona para eliminar el registro de un estudiante de la base de datos. 
const remove = async (id) => {
    const query = {
        text: `
            DELETE FROM ESTUDIANTES WHERE id = $1
            RETURNING *
        `,
        values: [id]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}



export const Estudiante = {
    create,
    findOneById,
    findAll,
    update,
    remove
}