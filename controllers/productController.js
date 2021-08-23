const Product = require('../models/product'); 


module.exports={
    async store(req,res){

        const {user_logged} = req.headers;  
        const {product_name,qtd,product_img,price,category}= req.body;

        const newProduct = await Product.create({
            product_name,
            product_img,           
            category,
            price,
            qtd
            
        })
        return res.json({newProduct})
    }
}

