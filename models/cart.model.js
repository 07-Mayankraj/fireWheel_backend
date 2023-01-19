const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({

    product_id:  Number,
    product_img:  String,
    brand_img:  String,
    product_name: String,
    average_rating:  String,
    review_count:  String,
    product_specs: String,
    stability:  String,
    traction:  String,
    dry_traction: String,
    ride_comfort:  String,
    tire_wear:  String,
    wet_traction:  String,
    noise_level:  String,
    userID : String
})

const CartModel = mongoose.model('cart', cartSchema)

module.exports = CartModel;