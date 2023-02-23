const User = require('../models/user');

async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.status(201).json(users);
    } catch (error) {
        res.json({message: error.message});
    }
    
}
async function createUser(req, res) {
    try {
        const userCreateId = req.params.id;
        const userCreated = await User.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        );
        res.status(201).json({
            userCreated,
            message: `A new user of id ${userCreateId} has been created`
        });
    } catch (error) {
        res.json({message: error.message});
    }
}

async function deleteUser(req,res) { 
    try {
        const userDeleteId = req.params.id;
        await User.findByIdAndDelete(req.params.id);
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


module.exports = { 
    getUsers,
    createUser, 
    deleteUser, 
    updateUser 
};