const express = require('express');
const router = express.Router();
const { 
    getProducts, 
    createProduct, 
    deleteProduct, 
    updateProduct, 
    getProduct 
} = require('../controllers/productCtl');



router.get('/', getProducts);

router.get('/product/:id', getProduct);

router.post('/product/:id', createProduct);

router.delete('/product/:id', deleteProduct);

router.put('/product/:id', updateProduct);

module.exports = router;