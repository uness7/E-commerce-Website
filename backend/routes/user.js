const express = require('express');
const router = express.Router();
const { getMe, getUsers, registerUser, deleteUser, updateUser, getUser, loginUser, getUserOrders } = require('../controllers/userCtl')
const { protect } = require('../middlewares/userAuth');
const { checkRole } = require('../middlewares/permission');
const { createOrder, deleteOrder, addCart, deleteCart } = require('../controllers/orderCtl');



// A user can add a product to his cart:
router.post('/user/add-product-cart', protect, addCart);

// A user can delete a product from his cart
router.post('/user/delete-this-product', protect, deleteCart); 

// A user can add an order
router.post('/user/ordering', protect, createOrder);




// // access: protected
// for: users
router.get('/user/myOrders', protect, getUserOrders);



// access: protected
// for: users
router.post('/user/login', loginUser);


// access: proteced
// for: users
router.get('/user/me', protect, getMe);

// access: protected
// for: users
router.post('/user/register', registerUser);


// access: protected
// for: admin
// status: working
router.get('/', protect, checkRole, getUsers);


// access: protected
// for: user: he can delete only his account!
// status: private (done)
router.delete('/user/deleteMyAccount', protect, deleteUser);

// access: protected
// for: users
router.put('/user/accountUpdate', protect, updateUser);


module.exports = router;







//////////////////////////////////////////////////////////////////





/*
    In case I want it to look cleaner
router.route('/user/:id',)
    .delete(protect, deleteUser)
    .put(protect, updateUser)
    .get(protect, checkRole, getUser)
    .get( protect, checkRole, getUsers);

*/
