const express = require('express');
const router = express.Router();
const { 
    getProducts, 
    createProduct, 
    deleteProduct, 
    updateProduct, 
    getProduct 
} = require('../controllers/productCtl');


// access: public
router.get('/', getProducts);
// access: public
router.get('/product/:id', getProduct);


// access: private
router.post('/product/:id', createProduct);
// access: private
router.delete('/product/:id', deleteProduct);
// access: private
router.put('/product/:id', updateProduct);




module.exports = router;