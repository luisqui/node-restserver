require('./config/config')
const express = require('express');

const mongoose = require('mongoose');

const app = express();

// paquete que permite procesar la peticion y la serializa en un paquete json el cual es bodyparser
const bodyparser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended:false}))
//parse application/json
app.use(bodyparser.json())

//Configuracion global de rutas
app.use(require('./routes/index'));



mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        throw err;

    }
    console.log('Base de Datos online' );

});

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto ', process.env.PORT )
})