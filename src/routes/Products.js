const router = require('express').Router();
const {
        listProducts,
        searchProduct,
        addProduct,
        deleteProduct,
        updateProduct
    } = require('../controllers/Products');

const authMiddleware = require('../middlewares/Auth');

router.get('/', listProducts);

router.get('/:name', searchProduct);

router.post("/add", authMiddleware, addProduct);

router.delete("/delete/:id", authMiddleware, deleteProduct);

router.put("/update/:id", authMiddleware, updateProduct);

module.exports = router;