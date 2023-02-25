const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema(
    {
        "user": {
          "type": mongoose.Schema.Types.ObjectId,
          "required": true,
          "ref": "User"
        },
        "items": [
          {
            "product": {
              "type": String,
              "required": true,
              "ref": "Product"
            },
            "quantity": Number,
            "price": Number
          }
        ],
          "shippingAddress": {
            "street": String,
            "city": String,
            "state": String,
            "zip": String,
            "country": String
          },
          "billingAddress": {
            "street": String,
            "city": String,
            "state": String,
            "zip": String,
            "country": String
          },
        "total": Number,
        "status": String,
        "createdAt": Date,
        "updatedAt": Date
    }
);

module.exports = mongoose.model('Order', orderSchema);




//////////////////////////////////////


/*
    In case of Update:
    {
  "_id": ObjectId,
  "user": {
    "type": ObjectId,
    "ref": "User"
  },
  "items": [
    {
      "product": {
        "type": ObjectId,
        "ref": "Product"
      },
      "quantity": Number,
      "price": Number
    }
  ],
  "shippingAddress": {
    "street": String,
    "city": String,
    "state": String,
    "zip": String,
    "country": String
  },
  "billingAddress": {
    "street": String,
    "city": String,
    "state": String,
    "zip": String,
    "country": String
  },
  "total": Number,
  "status": String,
  "createdAt": Date,
  "updatedAt": Date
}
*/