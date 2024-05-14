import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
    // Configuración de tu pool de conexiones
    allowExitOnIdle: true
});

const conectarBaseDatos = async () => {
    try {
        const time = await pool.query('SELECT NOW()');
        console.log('¡Conexión exitosa a la base de datos! ' + time.rows[0].now);
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1); // Sale de la aplicación si hay un error de conexión
    }
};

// Llamar a la función para conectar a la base de datos
conectarBaseDatos();
