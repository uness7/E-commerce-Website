const mongoose = require('mongoose');
// const { ObjectId } = require('bson');

const productSchema = new mongoose.Schema(
    
    {
        "name": String,
        "description": String,
        "price": Number,
        "created": {
            type: Date,
            default: Date.now
        },
        "updated": {
            type: Date,
            default: Date.now
        },
    }

);

module.exports = mongoose.model('Product', productSchema);



////////////////////////////////////////////////////


/*

    In case of an update: 
        {
        "_id": ObjectId,
        "name": String,
        "description": String,
        "price": Number,
        "category": String,
        "tags": [String],
        "reviews": [
            {
                "userId": ObjectId,
                "username": String,
                "rating": Number,
                "comment": String,
                "created": Date
            }
        ],
        "created": Date,
        "updated": Date
    }

*/