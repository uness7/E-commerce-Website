const express = require('express');
const router = express.Router();
const { getUsers, createUser, deleteUser, updateUser, getUser } = require('../controllers/userCtl')




router.get('/', getUsers);

router.get('/user/:id', getUser);

router.post('/user/:id', createUser);

router.delete('/user/:id', deleteUser);

router.put('/user/:id', updateUser);


module.exports = router;