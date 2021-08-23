const {Schema,model}= require('mongoose')

const productSchema= new Schema({
    product_name:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    qtd:{type:Number,default:1},
    product_img:{type:String,required:true}
})


module.exports= model('Product',productSchema)