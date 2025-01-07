const express = require ('express');
const app = express();
const indexRoute = require ('./routes/index');
const endRoute = require ('./routes/endroute');

app.use('/', indexRoute);
app.use('/endroute', endRoute);

app.listen(3000, ()=>{
    console.log('El servidor está escuchando por el puerto 3000')
})