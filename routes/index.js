const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');


router.get('/', horaMiddleware, (req, res)=>{
    const hora = req.horaExacta;
    res.send(`<h1>Bienvenido al inicio son las ${hora}</h1>
        <button><a href="/endroute">Enviar</a></button>
    `)
})


module.exports = router;