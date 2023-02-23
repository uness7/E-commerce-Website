const express = require('express');
const router = express.Router();
const { getUsers, createUser, deleteUser, updateUser } = require('../controllers/userCtl')

router.get('/', getUsers);

router.post('/:id', createUser);

router.delete('/:id', deleteUser);

router.put('/:id', updateUser);


module.exports = router;