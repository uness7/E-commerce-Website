const User = require('../models/user');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Needs checking
async function getMe(req, res) {
    try {
        const { name, email, password} = req.body;
        const me = User.find({email});
        res.status(201).json(me);
    } catch (error) {
        res.json({message: error.message});
    }
}



async function getUser(req, res) {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        res.status(201).json({user, message: `Found one user with id ${user.id}`});
    } catch (error) {
        res.json({message: error.message});
    }
}



async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.status(201).json(users);
    } catch (error) {
        res.json({message: error.message});
    }
    
}
async function registerUser(req, res) {
    const { name, email, password } = req.body;


    // needs an arrow function to use asyncHandler 
    // if (!name || !email || !password) {
    //     res.status(400);
    //     throw new Error("Please add all the fields");
    // }

    const userExists = await User.findOne({email});
    if(userExists) {
        return res.status(400).json({message: 'User already exists'});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const userCreated = await User.create(
            {
                name: name,
                email: email,
                password: hashedPassword,
                address: req.body.address,
                payment_info: req.body.payment_info,
                cart: req.body.cart,
                orders: req.body.orders,
                created_at: req.body.created_at,
                updated_at: req.body.updated_at
            }
        );
        res.status(201).json({
            userCreated,
            message: `A new user has been created`
        });
    } catch (error) {
        res.json({message: error.message});
    }
}



async function deleteUser(req,res) { 
    try {
        const userDeleteId = req.params.id;
        await User.findByIdAndDelete(userDeleteId);
        res.status(201).json(`User with id of ${userDeleteId} has been deleted`);
    } catch (error) {
        res.json({message: error.message});
    }
    
}




async function updateUser(req, res) {
    try {
        const updateUserId = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(updateUserId, req.body, { new: true });
        res.status(201).json({
            updatedUser,
            message:  `product with id: ${updateUserId} has been updated`
        });
    } catch (error) {
        return res.json({message: error.message});
    }
}


async function loginUser(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email});
        if (user && ( bcrypt.compare(password, user.password) ) ) {
            res.status(201).json({ message: `Welcome back ${user.name}`});
        }
    } catch (error) {
         res.status(400).json({ message: error.message });
    }
}

module.exports = { 
    getUsers,
    registerUser, 
    deleteUser, 
    updateUser,
    getUser,
    getMe,
    loginUser
};