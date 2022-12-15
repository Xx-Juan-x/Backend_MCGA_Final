const router = require('express').Router();
const {
        listProducts,
        searchProduct,
        addProduct,
        deleteProduct,
        updateProduct
    } = require('../controllers/Products');

const authMiddleware = require('../Middlewares/Auth.js');

router.get('/', listProducts);

router.get('/:name', searchProduct);

router.post("/add", addProduct);

router.delete("/delete/:id", deleteProduct);

router.put("/update/:id", updateProduct);

module.exports = router;