const Order = require('../models/order');

// In this order file we are using exec() method to avoid like-promise error

async function getOrder(req, res) {
    try {
        const orderId = req.params.id;
        const order = await Order.findById(orderId);
        res.status(201).json(order);
    } catch (error) {
        res.json({message: error.message});
    }
}


async function getOrders(req, res) {
    try {
        const orders = await Order.find(); // .exec() doesn't work properly in here!!
        res.status(201).json(orders);
    } catch (error) {
        res.json({message: error.message});
    }
}

async function createOrder(req, res) {
    try {
        const orderCreateId = req.params.id;
        const orderCreated = await Order.create({
            user: req.body.user,
            items: req.body.items,
            shippingAddress: req.body.shippingAddress,
            billingAddress: req.body.billingAddress,
            total: req.body.total,
            status: req.body.status,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt
        });
        res.status(201).json(
            {   
                orderCreated,
                message: `One order of id ${orderCreateId} has been created successfully. Go to your cart to modify your orders`
            }
        );
    } catch (error) {
        res.json({message: error.message});
    }
}


function deleteOrder(req,res) {
    try {
        const deleteOrderId = req.params.id;
        Order.findByIdAndDelete(deleteOrderId).exec();
        res.status(201)
        .json({message: `Order has been deleted successfully`});
    } catch (error) {
        res.json({message: error.message});        
    }
}







module.exports = {
    getOrders, 
    createOrder, 
    deleteOrder,  
    getOrder 
};