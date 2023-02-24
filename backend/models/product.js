const mongoose = require('mongoose');
// const { ObjectId } = require('bson');

const productSchema = new mongoose.Schema(
    
    {
        "name": {
            type: String,
            required: true
        },
        "description": {
            type: String,
            required: true
        },
        "price": {
            type: Number,
            required: true
        },
        "createdAt": {
            type: Date,
            default: Date.now
        },
        "users": [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        "updatedAt": {
            type: Date,
            default: Date.now
        }
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