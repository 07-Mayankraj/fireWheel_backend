const CartModel = require('../models/cart.model');

exports.getall = async(req,res) =>{
    try {
        const products = await CartModel.find({userID : req.body.userID})
        res.json(products)
    } catch (error) {
        res.json({msg : error.message})
    }
}

// add to cart 
exports.addtocart = async(req,res) =>{
    const productdata = req.body;
    try {
        const product =  await CartModel.find({product_id: productdata.product_id})
        if(product.length > 0) return res.status(400).json({msg: "product already exists"})
        const newproduct = new CartModel(productdata)
        await newproduct.save()
        res.json({msg :" product added to cart" })
        
    } catch (error) {
        res.json({msg : error.message })
    }
}


// product delete from cart
exports.delete = async(req,res) =>{
    
    const _id = req.params.id;
    const userID = req.body.userID;
    
    const product = await CartModel.find({_id})
    
    console.log(userID ,product);
    try {
        if(userID !== product[0].userID){
            res.json({msg : "usernote authorised"})
        }
        else{
             await CartModel.findByIdAndDelete({_id})
            res.json({msg : "product deleted"})
        }
        
    } catch (error) {
        
        res.json({msg : error.message})
    }
}

