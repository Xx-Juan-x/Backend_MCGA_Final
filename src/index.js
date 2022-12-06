require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(router);

//GET: para hacer ping al servidor y que devuelva 'OK' en caso que el server y la BD estén levantadas
app.get('/',(req, res)=>{
    res.send(200, "OK");
})

mongoose.connect(process.env.DB_CONNECT)
.then(
    app.listen(()=>{
        console.log('DB OK');
        app.listen(process.env.PORT, () => console.log('Server OK'))
    })
)
.catch((error)=> console.log("DB Failed" + error))