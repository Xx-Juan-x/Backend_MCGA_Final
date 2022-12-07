const express = require('express');
const productsRouters = require('./Products');
const usersRouters = require('./Users');

const router = express.Router();

router.use("/Products", productsRouters);
router.use("/Users", usersRouters);

module.exports = router;