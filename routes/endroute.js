const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');
const validarHora = require('../middlewares/validarHora');

router.get('/', horaMiddleware, validarHora, (req, res) => {
  res.send(`
    <h1>¡Bienvenido a la ruta /endroute!</h1>
    <p>Has accedido correctamente.</p>
  `);
});

module.exports = router;