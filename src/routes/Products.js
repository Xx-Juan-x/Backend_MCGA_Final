const router = require('express').Router();
require('../controllers/products');

router.get('/', (req, res) => listProducts(req, res));

router.get('/:name', (req, res) => searchProduct(req, res));

router.post("/add", (req, res) => addProduct(req, res));

router.delete("/delete/:id", (req, res) => deleteProduct(req, res));

router.put("/update/:id", (req, res) => updateProduct(req, res));

module.exports = router;