const express = require('express');
const productsRouters = require('./products');

const router = express.Router();

router.use("/products", productsRouters);

module.exports = router;