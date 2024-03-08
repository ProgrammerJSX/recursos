const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'tu_secreto',
  resave: false,
  saveUninitialized: true
}));

app.get('/demostracion', (req, res) => {
  if (!req.session.loggedin) {
    // Si no está autenticado, redirige al cliente al login
    res.status(401).send('No autorizado: Inicie sesión primero');
  } else {
    // El usuario está autenticado, proceder con la ruta
    res.send('Bienvenido a la página de demostración');
  }
});

// ... configuraciones adicionales de Express ...

app.listen(3000, () => {
  console.log('Servidor ejecutándose en el puerto 3000');
});
