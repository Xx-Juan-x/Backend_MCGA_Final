require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/routes');
const cors = require('cors')

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());
app.use(router);
app.use(cors());

//GET: para hacer ping al servidor y que devuelva 'OK' en caso que el server y la BD estén levantadas
app.get('/',(req, res)=>{
    res.send(200, "OK");
})

mongoose.set('strictQuery', true);

app.listen(process.env.PORT, () => console.log("🟢 Server OK"))

mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log("🟢 DB Connected"))
    .catch(err => console.log("🔴 Server error: " + err.message));