const express = require('express');
const router = express.Router();
const { 
    getOrder, 
    createOrder, 
    deleteOrder,  
    getOrders
} = require('../controllers/orderCtl');



router.get('/', getOrders);

router.get('/order/:id', getOrder);

router.post('/order/:id', createOrder);

router.delete('/order/:id', deleteOrder);



module.exports = router;

