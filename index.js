const express = require('express');
require('dotenv').config();

/* Importar rutas y conexión a la DB*/
const connectDB = require('./src/config/database');
const routes = require('./src/routes/routes');

const app = express();
app.use('/api/v1', routes);

/* Conexión a la base de datos */
connectDB();

/* Config del servidor */
if (process.env.NODE_ENV !== 'test') {
  app.set("port", process.env.PORT_CONNECTION || 3005);
  app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
  });
}

/* Habilitar el middleware 
 Un middleware es una función que tiene acceso al objeto de solicitud (req), 
 al objeto de respuesta (res), y a la función next para pasar el control 
 al siguiente middleware en el ciclo de solicitud/respuesta.*/
app.use(express.json());

module.exports = app




