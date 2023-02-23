const Product = require('../models/product');



async function getProducts(req, res) {
    try {
        const products = await Product.find();
        res.status(201).json(products);
    } catch (error) {
        return res.json({message: error.message});
    }
}

async function createProduct(req, res) {

    try {
        const productId = req.params.id;
        await Product.create(
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price
            }
        );   
        res.status(201).json({message: `product with id: ${productId} has been created`});
    } catch (error) {
        return res.json({message: error.message});
    }
}

async function deleteProduct(req, res) {
    try {
        const deleteProductId = req.params.id;
        await Product.findByIdAndDelete(deleteProductId);        
        res.status(201).json({message: `product with id: ${deleteProductId} has been deleted`})
    } catch (error) {
        return res.json({message: error.message});
    }
}

async function updateProduct(req, res) {
    try {
        const updateProductId = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate(updateProductId, req.body, { new: true });
        res.status(201).json({
            updatedProduct,
            message:  `product with id: ${updateProductId} has been updated`
        });
    } catch (error) {
        return res.json({message: error.message});
    }
}

module.exports = { 
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
}