const Order = require('../models/order');
const User = require('../models/user');


/*

    User can add a product to his cart, and delete a product from his cart

*/


// working
const addCart = async (req, res) => {
    try {
        const user = req.user;
        const userId = req.user.id;
        const product = req.body.product;
        const quantity = req.body.quantity;
        const { name, cart } = await User.findById(userId);
        user.cart.push( 
            { 
                product: product, 
                quantity:  quantity
            } 
        );
        user.save();
        res.status(201).json({ message: `${name} product has been added to your cart.`});

    } catch (error) {
        res.json({message: error.message});
    }
}

// working
const deleteCart = async (req, res) => {
    try {
        const user = req.user;
        const userId = req.user.id;
        const productId = req.body.product; // it's a string
        

        const { cart } = await User.findById(userId);


        // Getting the index of the product to be deleted
        const index = cart.findIndex(obj => { 
            return obj.product === productId }
        );        

        if (index !== -1) {
            user.cart.splice(index, 1);
        }

        user.save();
        res.status(201).json(productId);
    } catch (error) {
        res.json({message: error.message});
    }
}


// status: working
const createOrder = async (req, res) => {
    try {
        const user = req.user;
        const userId = req.user.id;

        const product = req.body.product;
        const quantity = req.body.quantity;

        const { name, orders } = await User.findById(userId);

        const order = await Order.create({
            user: req.user.id,
            items: req.body.items
        });


        user.orders.push(
            {
                "product": product,
                "quantity": quantity
            }
        );

        user.save();
        
        res.json({
            message: `${name} your product have been added to your order list`,
            order
        });
    } catch (error) {
        res.json({message: error.message});
    }
}




module.exports = {
    addCart,
    deleteCart,
    createOrder
};