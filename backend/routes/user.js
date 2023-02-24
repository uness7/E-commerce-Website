const express = require('express');
const router = express.Router();
const { getMe, getUsers, registerUser, deleteUser, updateUser, getUser, loginUser } = require('../controllers/userCtl')
const { protect } = require('../middlewares/userAuth');


// access: protected
// for: admin
router.get('/', getUsers);

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
router.get('/user/:id', getUser);

// access: protected
// for: admin
router.delete('/user/:id', deleteUser);

// access: protected
// for: admin
router.put('/user/:id', updateUser);


module.exports = router;