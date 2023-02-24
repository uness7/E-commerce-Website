const express = require('express');
const router = express.Router();
const { getMe, getUsers, registerUser, deleteUser, updateUser, getUser, loginUser } = require('../controllers/userCtl')



// For admin
router.get('/', getUsers);

router.get('/user/:id', getUser);


// For public use: registering
router.post('/user/login', loginUser);
router.get('/user/me', getMe);
router.post('/user/register', registerUser);

router.delete('/user/:id', deleteUser);
router.put('/user/:id', updateUser);


module.exports = router;