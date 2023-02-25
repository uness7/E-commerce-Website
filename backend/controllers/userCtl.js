const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



// access: users
// status: working 
// user can access his orders
async function getUserOrders(req, res) {
    try {
        const userId = req.user.id;
        const { name, orders } = await User.findById(userId);
        if(orders.length === 0) {
            return res.json({message: `${name} you have no orders yet! Go to dashboard and choose your products`});
        }
    } catch (error) {
        res.json({message: error.message});
    }
}




// access: users
// status: working 
// user can access his account
async function getMe(req, res) {
    try {
        const { 
            name, 
            email, 
            password
        } = await User.findById(req.user.id);
        res.status(200).json({name, email, password});
    } catch (error) {
        res.json({message: error.message});
    }
}



// access for: admin
// status: working 
async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.status(201).json(users);
    } catch (error) {
        res.json({message: error.message});
    }
}

// access: user
// status: working
async function registerUser(req, res) {
    const { name, email, password } = req.body;
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
                user_role: req.body.user_role,
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


// access for: users
// status: working
async function deleteUser(req,res) { 
    try {
        const userDeleteId = req.user.id;
        await User.findByIdAndDelete(userDeleteId);
        res.status(201).json(`User with id of ${userDeleteId} has been deleted`);
    } catch (error) {
        res.json({message: error.message});
    }
}



// access for: users
// status: working
// user can update his credentials
async function updateUser(req, res) {
    try {
        const updateUserId = req.user.id;
        const updatedUser = await User.findByIdAndUpdate(updateUserId, req.body, { new: true });
        res.status(201).json({
            updatedUser,
            message:  `product with id: ${updateUserId} has been updated`
        });
    } catch (error) {
        return res.json({message: error.message});
    }
}

// access for: users 
// status: working
async function loginUser(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email});
        if (user && ( bcrypt.compare(password, user.password) ) ) {
            res.status(201).json(
                {
                    message: `Welcome back`,
                    token: generateToken(user._id)
                }
            );
        }else{
            res.json("NO Account with these credentials. Please Register First");
        }
    } catch (error) {
         res.status(400).json({ message: error.message });
    }
}

// Generete jwt
function generateToken(id) {  
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}

module.exports = { 
    getUsers,
    registerUser, 
    deleteUser, 
    updateUser,
    getMe,
    loginUser,
    getUserOrders
};