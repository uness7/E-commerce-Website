const express = require('express');
const router = express.Router();
const { getProducts, createProduct, deleteProduct, updateProduct } = require('../controllers/productCtl');


router.get('/', getProducts);

router.post('/:id', createProduct);

router.delete('/:id', deleteProduct);

router.put('/:id', updateProduct);

module.exports = router;