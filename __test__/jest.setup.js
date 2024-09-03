const mongoose = require('mongoose');
const connectDB = require('../src/config/database');

// Conectar a la base de datos antes de todas las pruebas
beforeAll(async () => {
  await connectDB();
});

// Cerrar la conexión a la base de datos después de todas las pruebas
afterAll(async () => {
  await mongoose.connection.close();
});