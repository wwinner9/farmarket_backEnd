const Cart = require('../models/cart')
const { store } = require('./productController')

module.exports={
    
    async store(req,res){

        const {user_logged}= req.headers;
        const {products}= req.body;


        const newCart= await Cart.create({
            customer:user_logged,
            products
        })

        return res.json({newCart})

    }
}

